(function () {
    'use strict';

    const LOGIN_PAGE = 'login.html';

    function pergiLogin() {
        localStorage.removeItem('mdp_user');
        localStorage.removeItem('pengguna');

        window.location.replace(LOGIN_PAGE);
    }

    function semakLogin() {
        try {
            const saved = localStorage.getItem('mdp_user');

            if (!saved) {
                pergiLogin();
                return;
            }

            const user = JSON.parse(saved);

            if (
                !user ||
                !user.id ||
                !user.no_pekerja ||
                !user.nama ||
                String(user.status || '').toUpperCase() !== 'AKTIF'
            ) {
                pergiLogin();
                return;
            }

            // Boleh digunakan oleh semua page.
            window.currentUser = user;

        } catch (error) {
            console.error('RALAT AUTH:', error);
            pergiLogin();
        }
    }

    semakLogin();

})();
