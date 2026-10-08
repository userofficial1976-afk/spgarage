/* =========================================================
   SHARED SIDEBAR + MOBILE NAV
   INVENTORI & POS / SPAREPART MOTOSIKAL
========================================================= */

(function () {

    /* =====================================================
       DAPATKAN NAMA PAGE
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split('/')
            .pop()
            .toLowerCase() || 'dashboard.html';


    /* =====================================================
       MENU SIDEBAR
    ===================================================== */

    const menu = [

        {
            title: 'Utama',
            items: [
                {
                    href: 'dashboard.html',
                    icon: 'fa-gauge-high',
                    text: 'Dashboard'
                },
                {
                    href: 'produk.html',
                    icon: 'fa-boxes-stacked',
                    text: 'Produk / Sparepart'
                },
                {
                    href: 'kategori.html',
                    icon: 'fa-layer-group',
                    text: 'Kategori'
                },
                {
                    href: 'jenama.html',
                    icon: 'fa-tags',
                    text: 'Jenama'
                },
                {
                    href: 'model-motosikal.html',
                    icon: 'fa-motorcycle',
                    text: 'Model Motosikal'
                }
            ]
        },

        {
            title: 'Transaksi',
            items: [
                {
                    href: 'stok-masuk.html',
                    icon: 'fa-arrow-right-to-bracket',
                    text: 'Stok Masuk'
                },
                {
                    href: 'pos.html',
                    icon: 'fa-cash-register',
                    text: 'POS / Cahier'
                },
                {
                    href: 'jualan.html',
                    icon: 'fa-receipt',
                    text: 'Senarai Jualan'
                }
            ]
        },

        {
            title: 'Laporan',
            items: [
                {
                    href: 'laporan-stok.html',
                    icon: 'fa-chart-column',
                    text: 'Laporan Stok'
                },
                {
                    href: 'laporan-jualan.html',
                    icon: 'fa-chart-line',
                    text: 'Laporan Jualan'
                }
            ]
        }

    ];


    /* =====================================================
       LOGO / SIDEBAR
    ===================================================== */

    function binaSidebar() {

        let html = `

            <aside class="sidebar">

                <div class="sidebar-logo">

                    <div class="logo-box">

                        <div class="logo-icon">
                            <i class="fa-solid fa-motorcycle"></i>
                        </div>

                        <div>
                            <div class="logo-title">
                                Inventori & POS
                            </div>

                            <div class="logo-subtitle">
                                Sparepart Motosikal
                            </div>
                        </div>

                    </div>

                </div>

                <nav class="menu">
        `;


        menu.forEach(section => {

            html += `
                <div class="menu-title">
                    ${escapeHtml(section.title)}
                </div>
            `;


            section.items.forEach(item => {

                const active =
                    currentPage ===
                    item.href.toLowerCase()
                        ? 'active'
                        : '';


                html += `

                    <a
                        href="${item.href}"
                        class="${active}"
                    >

                        <i class="fa-solid ${item.icon}"></i>

                        <span>
                            ${escapeHtml(item.text)}
                        </span>

                    </a>

                `;

            });

        });


        html += `

                </nav>

            </aside>

        `;


        const container =
            document.getElementById('sharedSidebar');

        if(container) {

            container.innerHTML = html;

        }

    }


    /* =====================================================
       MOBILE NAV
    ===================================================== */

    function binaMobileNav() {

        const items = [

            {
                href: 'dashboard.html',
                icon: 'fa-gauge-high',
                text: 'Dashboard'
            },

            {
                href: 'produk.html',
                icon: 'fa-boxes-stacked',
                text: 'Produk'
            },

            {
                href: 'pos.html',
                icon: 'fa-cash-register',
                text: 'POS'
            },

            {
                href: 'laporan-stok.html',
                icon: 'fa-chart-column',
                text: 'Stok'
            },

            {
                href: 'jualan.html',
                icon: 'fa-receipt',
                text: 'Jualan'
            }

        ];


        let html = `

            <nav class="mobile-nav">

        `;


        items.forEach(item => {

            const active =
                currentPage ===
                item.href.toLowerCase()
                    ? 'active'
                    : '';


            html += `

                <a
                    href="${item.href}"
                    class="${active}"
                >

                    <i class="fa-solid ${item.icon}"></i>

                    <span>
                        ${escapeHtml(item.text)}
                    </span>

                </a>

            `;

        });


        html += `

            </nav>

        `;


        const container =
            document.getElementById('sharedMobileNav');

        if(container) {

            container.innerHTML = html;

        }

    }


    /* =====================================================
       ESCAPE HTML
    ===================================================== */

    function escapeHtml(value) {

        if(value === null || value === undefined) {
            return '';
        }

        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');

    }


    /* =====================================================
       INIT
    ===================================================== */

    function initSharedNavigation() {

        binaSidebar();

        binaMobileNav();

    }


    if(
        document.readyState === 'loading'
    ) {

        document.addEventListener(
            'DOMContentLoaded',
            initSharedNavigation
        );

    } else {

        initSharedNavigation();

    }

})();
