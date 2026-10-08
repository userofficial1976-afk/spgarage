/* =========================================================
   SHARED SIDEBAR + MOBILE NAV
   FUTURISTIC DEEP CYAN V5 - V4 DESIGN KEKAL + LOGOUT
========================================================= */
(function () {
    'use strict';

    const currentPage = ((window.location.pathname.split('/').pop() || 'dashboard.html'))
        .split('?')[0].split('#')[0].toLowerCase();

    const menu = [
        { title: 'Utama', items: [
            { href: 'dashboard.html', icon: 'fa-gauge-high', text: 'Dashboard' },
            { href: 'produk.html', icon: 'fa-boxes-stacked', text: 'Produk / Sparepart' },
            { href: 'kategori.html', icon: 'fa-layer-group', text: 'Kategori' },
            { href: 'jenama.html', icon: 'fa-tags', text: 'Jenama' },
            { href: 'model-motosikal.html', icon: 'fa-motorcycle', text: 'Model Motosikal' }
        ]},
        { title: 'Transaksi', items: [
            { href: 'pos.html', icon: 'fa-cash-register', text: 'POS / Cashier' },
            { href: 'jualan.html', icon: 'fa-receipt', text: 'Senarai Jualan' }
        ]},
        { title: 'Laporan', items: [
            { href: 'laporan-stok.html', icon: 'fa-chart-column', text: 'Laporan Stok' },
            { href: 'laporan-jualan.html', icon: 'fa-chart-line', text: 'Laporan Jualan' }
        ]}
    ];

    const menuMobile = [
        { href: 'dashboard.html', icon: 'fa-gauge-high', text: 'Dashboard' },
        { href: 'produk.html', icon: 'fa-boxes-stacked', text: 'Produk' },
        { href: 'pos.html', icon: 'fa-cash-register', text: 'POS' },
        { href: 'laporan-stok.html', icon: 'fa-chart-column', text: 'Stok' },
        { href: 'jualan.html', icon: 'fa-receipt', text: 'Jualan' }
    ];

    function escapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function isActivePage(href) {
        return currentPage === String(href || '').split('?')[0].split('#')[0].toLowerCase();
    }

    function dapatkanPengguna() {
        try {
            return JSON.parse(localStorage.getItem('mdp_user') || localStorage.getItem('pengguna') || 'null');
        } catch (error) {
            return null;
        }
    }

    function logoutSistem() {
        if (!window.confirm('Adakah anda pasti mahu log keluar?')) return;
        localStorage.removeItem('mdp_user');
        localStorage.removeItem('pengguna');
        window.location.replace('login.html');
    }
    window.logoutSistem = logoutSistem;

    function tambahStyleSidebar() {
        if (document.getElementById('shared-navigation-style')) return;
        const style = document.createElement('style');
        style.id = 'shared-navigation-style';
        style.textContent = `
        /* V5 mengekalkan tema V4: deep navy/cyan, soft glow dan icon motion */
        #sharedSidebar{display:flex;flex-direction:column;background:linear-gradient(180deg,#07131f 0%,#081827 55%,#06111c 100%);border-right:1px solid rgba(34,211,238,.16);box-shadow:18px 0 48px rgba(0,0,0,.22);}
        #sharedSidebar .shared-nav-scroll{flex:1;overflow-y:auto;padding:18px 14px 12px;scrollbar-width:thin;scrollbar-color:rgba(34,211,238,.25) transparent;}
        #sharedSidebar .shared-nav-title{padding:14px 12px 7px;color:#64748b;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.16em;}
        #sharedSidebar .shared-nav-link{position:relative;display:flex;align-items:center;gap:12px;padding:11px 12px;margin:3px 0;border:1px solid transparent;border-radius:13px;color:#a8b8c8;text-decoration:none;font-size:13px;font-weight:650;transition:.22s ease;overflow:hidden;}
        #sharedSidebar .shared-nav-link:hover{color:#ecfeff;background:rgba(8,145,178,.09);border-color:rgba(34,211,238,.16);transform:translateX(3px);}
        #sharedSidebar .shared-nav-link.active{color:#ecfeff;background:linear-gradient(90deg,rgba(6,182,212,.18),rgba(14,116,144,.07));border-color:rgba(34,211,238,.30);box-shadow:inset 3px 0 #22d3ee,0 0 18px rgba(34,211,238,.08);}
        #sharedSidebar .shared-nav-icon{width:30px;height:30px;display:grid;place-items:center;border-radius:9px;color:#67e8f9;background:rgba(8,145,178,.08);border:1px solid rgba(34,211,238,.12);text-shadow:0 0 12px rgba(34,211,238,.48);transition:.25s ease;}
        #sharedSidebar .shared-nav-link:hover .shared-nav-icon{transform:translateY(-2px) rotate(-3deg) scale(1.06);box-shadow:0 0 16px rgba(34,211,238,.15);}
        #sharedSidebar .shared-nav-link.active .shared-nav-icon{animation:sharedIconFloat 2.6s ease-in-out infinite;}
        @keyframes sharedIconFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
        #sharedSidebar .shared-account{padding:12px 14px 15px;border-top:1px solid rgba(34,211,238,.12);background:rgba(2,10,18,.34);}
        #sharedSidebar .shared-user{display:flex;align-items:center;gap:10px;padding:8px 8px 10px;min-width:0;}
        #sharedSidebar .shared-avatar{width:35px;height:35px;flex:0 0 35px;display:grid;place-items:center;border-radius:11px;color:#67e8f9;background:rgba(8,145,178,.10);border:1px solid rgba(34,211,238,.20);box-shadow:0 0 18px rgba(34,211,238,.07);}
        #sharedSidebar .shared-user-info{min-width:0;line-height:1.25;}
        #sharedSidebar .shared-user-name{color:#e6fbff;font-size:12px;font-weight:750;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
        #sharedSidebar .shared-user-role{margin-top:3px;color:#71879a;font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
        #sharedSidebar .shared-logout{width:100%;display:flex;align-items:center;justify-content:center;gap:9px;padding:10px 12px;border-radius:11px;border:1px solid rgba(248,113,113,.16);background:rgba(127,29,29,.06);color:#fca5a5;font:inherit;font-size:12px;font-weight:750;cursor:pointer;transition:.2s ease;}
        #sharedSidebar .shared-logout:hover{color:#fff;background:rgba(220,38,38,.15);border-color:rgba(248,113,113,.35);box-shadow:0 0 18px rgba(239,68,68,.08);transform:translateY(-1px);}
        #sharedMobileNav .shared-mobile-logout{color:#fda4af;}
        `;
        document.head.appendChild(style);
    }

    function binaSidebar() {
        const sidebar = document.getElementById('sharedSidebar');
        if (!sidebar) return;

        const user = dapatkanPengguna() || {};
        const nama = escapeHtml(user.nama || 'Pengguna');
        const jawatanUnit = escapeHtml([user.jawatan, user.unit].filter(Boolean).join(' • ') || 'Sistem Inventori & POS');

        const menuHtml = menu.map(group => `
            <div class="shared-nav-group">
                <div class="shared-nav-title">${escapeHtml(group.title)}</div>
                ${group.items.map(item => `
                    <a href="${escapeHtml(item.href)}" class="shared-nav-link ${isActivePage(item.href) ? 'active' : ''}">
                        <span class="shared-nav-icon"><i class="fa-solid ${escapeHtml(item.icon)}"></i></span>
                        <span>${escapeHtml(item.text)}</span>
                    </a>
                `).join('')}
            </div>
        `).join('');

        sidebar.innerHTML = `
            <div class="shared-nav-scroll">${menuHtml}</div>
            <div class="shared-account">
                <div class="shared-user">
                    <div class="shared-avatar"><i class="fa-solid fa-user-shield"></i></div>
                    <div class="shared-user-info">
                        <div class="shared-user-name" title="${nama}">${nama}</div>
                        <div class="shared-user-role" title="${jawatanUnit}">${jawatanUnit}</div>
                    </div>
                </div>
                <button type="button" class="shared-logout" id="sharedLogoutBtn">
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <span>Log Keluar</span>
                </button>
            </div>
        `;

        document.getElementById('sharedLogoutBtn')?.addEventListener('click', logoutSistem);
    }

    function binaMobileNav() {
        const nav = document.getElementById('sharedMobileNav');
        if (!nav) {
            console.warn('[sidebar.js] Elemen #sharedMobileNav tidak dijumpai.');
            return;
        }

        nav.innerHTML = menuMobile.map(item => `
            <a href="${escapeHtml(item.href)}" class="mobile-nav-item ${isActivePage(item.href) ? 'active' : ''}">
                <i class="fa-solid ${escapeHtml(item.icon)}"></i>
                <span>${escapeHtml(item.text)}</span>
            </a>
        `).join('') + `
            <button type="button" class="mobile-nav-item shared-mobile-logout" id="sharedMobileLogout" aria-label="Log Keluar">
                <i class="fa-solid fa-right-from-bracket"></i>
                <span>Keluar</span>
            </button>
        `;

        document.getElementById('sharedMobileLogout')?.addEventListener('click', logoutSistem);
    }

    function initSharedNavigation() {
        tambahStyleSidebar();
        binaSidebar();
        binaMobileNav();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSharedNavigation, { once: true });
    } else {
        initSharedNavigation();
    }
})();
