/* =========================================================
   SHARED SIDEBAR + MOBILE NAV
   INVENTORI & POS / SPAREPART MOTOSIKAL
========================================================= */

(function () {

    'use strict';


    /* =====================================================
       PAGE SEMASA
    ===================================================== */

    const currentPage =
        (
            window.location.pathname
                .split('/')
                .pop() || 'dashboard.html'
        )
        .split('?')[0]
        .split('#')[0]
        .toLowerCase();


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
                    text: 'POS / Cashier'
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
       MOBILE MENU
    ===================================================== */

    const menuMobile = [

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


    /* =====================================================
       ESCAPE HTML
    ===================================================== */

  function escapeHtml(value) {

    if (value === null || value === undefined) {
        return '';
    }

    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}


    function escapeAttribute(value) {

        return escapeHtml(value);

    }


    /* =====================================================
       SEMAK MENU AKTIF
    ===================================================== */

    function isActivePage(href) {

        const target =
            String(href || '')
                .split('?')[0]
                .split('#')[0]
                .toLowerCase();


        return currentPage === target;

    }


    /* =====================================================
       CSS SIDEBAR
    ===================================================== */

    function tambahStyleSidebar() {

        if (
            document.getElementById(
                'shared-navigation-style'
            )
        ) {
            return;
        }


        const style =
            document.createElement('style');


        style.id =
            'shared-navigation-style';


        style.textContent = `

/* =========================================================
   SHARED SIDEBAR
========================================================= */

#sharedSidebar {
    position: relative;
    z-index: 100;
}


/* =========================================================
   SIDEBAR DESKTOP
========================================================= */

#sharedSidebar .sidebar {
    position: fixed;

    top: 0;
    left: 0;
    bottom: 0;

    width: 288px;
    height: 100vh;

    z-index: 100;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    background:
        linear-gradient(
            180deg,
            rgba(15,23,42,.99) 0%,
            rgba(11,18,32,.99) 100%
        );

    border-right:
        1px solid rgba(148,163,184,.12);

    box-shadow:
        12px 0 40px rgba(0,0,0,.14);

    font-family:
        Inter,
        Arial,
        sans-serif;
}


/* =========================================================
   LOGO
========================================================= */

#sharedSidebar .sidebar-logo {
    flex-shrink: 0;

    padding: 22px 18px 18px;

    border-bottom:
        1px solid rgba(148,163,184,.08);
}


#sharedSidebar .logo-box {
    display: flex;

    align-items: center;

    gap: 13px;
}


#sharedSidebar .logo-icon {
    width: 46px;
    height: 46px;

    flex-shrink: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 14px;

    color: #5eead4;

    font-size: 20px;

    background:
        linear-gradient(
            135deg,
            rgba(20,184,166,.20),
            rgba(13,148,136,.08)
        );

    border:
        1px solid rgba(45,212,191,.18);

    box-shadow:
        0 8px 25px
        rgba(13,148,136,.10);
}


#sharedSidebar .logo-title {
    color: #ffffff;

    font-size: 16px;

    font-weight: 700;

    line-height: 1.2;
}


#sharedSidebar .logo-subtitle {
    margin-top: 4px;

    color: #64748b;

    font-size: 10px;

    font-weight: 600;

    text-transform: uppercase;

    letter-spacing: .08em;
}


/* =========================================================
   SIDEBAR MENU
========================================================= */

#sharedSidebar .sidebar-menu {
    flex: 1;

    overflow-y: auto;

    overflow-x: hidden;

    padding: 14px 0 28px;

    scrollbar-width: thin;

    scrollbar-color:
        rgba(100,116,139,.30)
        transparent;
}


#sharedSidebar .sidebar-menu::-webkit-scrollbar {
    width: 5px;
}


#sharedSidebar .sidebar-menu::-webkit-scrollbar-track {
    background: transparent;
}


#sharedSidebar .sidebar-menu::-webkit-scrollbar-thumb {
    background:
        rgba(100,116,139,.30);

    border-radius: 999px;
}


/* =========================================================
   MENU SECTION
========================================================= */

#sharedSidebar .sidebar-menu-title {
    padding:
        16px 28px 7px;

    color: #475569;

    font-size: 10px;

    font-weight: 800;

    text-transform: uppercase;

    letter-spacing: .12em;
}


/* =========================================================
   MENU ITEM
========================================================= */

#sharedSidebar .sidebar-nav-item {
    position: relative;

    display: flex;

    align-items: center;

    gap: 13px;

    width: auto;

    min-height: 45px;

    margin: 3px 12px;

    padding: 11px 16px;

    border:
        1px solid transparent;

    border-radius: 12px;

    color: #94a3b8;

    background: transparent;

    text-decoration: none;

    font-size: 13px;

    font-weight: 500;

    line-height: 1.25;

    transition:
        color .18s ease,
        background .18s ease,
        border-color .18s ease,
        transform .18s ease;
}


#sharedSidebar .sidebar-nav-item i {
    width: 21px;

    flex: 0 0 21px;

    text-align: center;

    color: #64748b;

    font-size: 15px;

    transition:
        color .18s ease;
}


#sharedSidebar .sidebar-nav-item span {
    min-width: 0;

    display: block;

    white-space: normal;
}


#sharedSidebar .sidebar-nav-item:hover {
    color: #ffffff;

    background:
        rgba(45,212,191,.07);

    transform:
        translateX(2px);
}


#sharedSidebar .sidebar-nav-item:hover i {
    color: #5eead4;
}


/* =========================================================
   ACTIVE MENU
========================================================= */

#sharedSidebar .sidebar-nav-item.active {
    color: #ffffff;

    font-weight: 600;

    background:
        linear-gradient(
            135deg,
            rgba(20,184,166,.20),
            rgba(13,148,136,.08)
        );

    border-color:
        rgba(45,212,191,.16);

    box-shadow:
        inset 0 0 20px
        rgba(45,212,191,.025);
}


#sharedSidebar .sidebar-nav-item.active::before {
    content: '';

    position: absolute;

    left: -1px;
    top: 9px;
    bottom: 9px;

    width: 3px;

    border-radius:
        0 5px 5px 0;

    background: #2dd4bf;

    box-shadow:
        0 0 12px
        rgba(45,212,191,.65);
}


#sharedSidebar .sidebar-nav-item.active i {
    color: #5eead4;
}


/* =========================================================
   MOBILE NAV DEFAULT
========================================================= */

#sharedMobileNav {
    display: none;
}


/* =========================================================
   TABLET / MOBILE
========================================================= */

@media (max-width: 1023px) {

    #sharedSidebar {
        display: none !important;
    }


    #sharedSidebar .sidebar {
        display: none !important;
    }


    .main {
        margin-left: 0 !important;

        padding-bottom: 82px !important;
    }


    #sharedMobileNav {
        position: fixed;

        left: 0;
        right: 0;
        bottom: 0;

        z-index: 99999;

        display: block;

        min-height: 70px;

        background:
            rgba(15,23,42,.97);

        border-top:
            1px solid rgba(148,163,184,.14);

        box-shadow:
            0 -10px 35px
            rgba(0,0,0,.18);

        backdrop-filter:
            blur(18px);

        -webkit-backdrop-filter:
            blur(18px);
    }


    #sharedMobileNav .shared-mobile-nav {
        width: 100%;

        max-width: 750px;

        height: 70px;

        margin: 0 auto;

        display: grid;

        grid-template-columns:
            repeat(5, minmax(0, 1fr));
    }


    #sharedMobileNav .mobile-nav-item {
        position: relative;

        min-width: 0;

        display: flex;

        flex-direction: column;

        align-items: center;

        justify-content: center;

        gap: 5px;

        padding: 5px 2px;

        color: #64748b;

        background: transparent;

        text-decoration: none;

        font-size: 9px;

        font-weight: 600;

        line-height: 1.1;

        transition:
            color .18s ease,
            background .18s ease;
    }


    #sharedMobileNav .mobile-nav-item i {
        font-size: 18px;

        color: inherit;

        transition:
            transform .18s ease;
    }


    #sharedMobileNav .mobile-nav-item span {
        display: block;

        width: 100%;

        padding: 0 2px;

        overflow: hidden;

        text-align: center;

        text-overflow: ellipsis;

        white-space: nowrap;
    }


    #sharedMobileNav .mobile-nav-item:hover {
        color: #cbd5e1;

        background:
            rgba(45,212,191,.035);
    }


    #sharedMobileNav .mobile-nav-item.active {
        color: #5eead4;
    }


    #sharedMobileNav .mobile-nav-item.active i {
        transform:
            translateY(-1px);
    }


    #sharedMobileNav .mobile-nav-item.active::before {
        content: '';

        position: absolute;

        top: 0;
        left: 28%;
        right: 28%;

        height: 2px;

        border-radius:
            0 0 5px 5px;

        background: #2dd4bf;

        box-shadow:
            0 0 10px
            rgba(45,212,191,.70);
    }

}


/* =========================================================
   DESKTOP
========================================================= */

@media (min-width: 1024px) {

    #sharedSidebar {
        display: block;
    }


    #sharedSidebar .sidebar {
        display: flex;
    }


    #sharedMobileNav {
        display: none !important;
    }

}


/* =========================================================
   MOBILE KECIL
========================================================= */

@media (max-width: 420px) {

    #sharedMobileNav .mobile-nav-item {
        font-size: 8px;
    }


    #sharedMobileNav .mobile-nav-item i {
        font-size: 17px;
    }

}

        `;


        document.head.appendChild(style);

    }


    /* =====================================================
       BINA SIDEBAR DESKTOP
    ===================================================== */

    function binaSidebar() {

        const container =
            document.getElementById(
                'sharedSidebar'
            );


        if (!container) {

            console.warn(
                '[sidebar.js] Elemen #sharedSidebar tidak dijumpai.'
            );

            return;

        }


        let html = `

            <aside class="sidebar">

                <div class="sidebar-logo">

                    <div class="logo-box">

                        <div class="logo-icon">

                            <i class="fa-solid fa-motorcycle"></i>

                        </div>


                        <div>

                            <div class="logo-title">
                                Inventori &amp; POS
                            </div>

                            <div class="logo-subtitle">
                                Sparepart Motosikal
                            </div>

                        </div>

                    </div>

                </div>


                <nav
                    class="sidebar-menu"
                    aria-label="Navigasi utama"
                >

        `;


        menu.forEach(section => {

            html += `

                <div class="sidebar-menu-title">
                    ${escapeHtml(section.title)}
                </div>

            `;


section.items.forEach(item => {

    const active =
        isActivePage(item.href);

    html += `

        "
            class="sidebar-nav-item${active ? ' active' : ''}"
            ${active ? 'aria-current="page"' : ''}
        >

            <i
                class="fa-solid ${escapeAttribute(item.icon)}"
                aria-hidden="true"
            ></i>

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


        container.innerHTML = html;

    }


    /* =====================================================
       BINA MOBILE NAV
    ===================================================== */

    function binaMobileNav() {

        const container =
            document.getElementById(
                'sharedMobileNav'
            );


        if (!container) {

            console.warn(
                '[sidebar.js] Elemen #sharedMobileNav tidak dijumpai.'
            );

            return;

        }


        let html = `

            <nav
                class="shared-mobile-nav"
                aria-label="Navigasi mudah alih"
            >

        `;


        menuMobile.forEach(item => {

            const active =
                isActivePage(item.href);


            html += `

                "
                    class="mobile-nav-item${active ? ' active' : ''}"
                    ${active ? 'aria-current="page"' : ''}
                >

                    <i
                        class="fa-solid ${escapeAttribute(item.icon)}"
                        aria-hidden="true"
                    ></i>

                    <span>
                        ${escapeHtml(item.text)}
                    </span>

                </a>

            `;

        });


        html += `

            </nav>

        `;


        container.innerHTML = html;

    }


    /* =====================================================
       BETULKAN MAIN LAYOUT
    ===================================================== */

    function kemaskiniLayout() {

        const main =
            document.querySelector('.main');


        if (!main) {
            return;
        }


        /*
         * Desktop:
         * ruang 288px untuk sidebar.
         *
         * Tablet/mobile:
         * CSS media query akan ubah kepada 0.
         */

        if (
            window.matchMedia(
                '(min-width: 1024px)'
            ).matches
        ) {

            main.style.marginLeft =
                '288px';

        } else {

            main.style.marginLeft =
                '0';

        }

    }


    /* =====================================================
       INIT
    ===================================================== */

    function initSharedNavigation() {

        try {

            tambahStyleSidebar();

            binaSidebar();

            binaMobileNav();

            kemaskiniLayout();


            console.log(
                '[sidebar.js] Sidebar berjaya dimuatkan:',
                currentPage
            );


        } catch (error) {

            console.error(
                '[sidebar.js] Ralat:',
                error
            );

        }

    }


    /* =====================================================
       WINDOW RESIZE
    ===================================================== */

    let resizeTimer = null;


    window.addEventListener(
        'resize',
        function () {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    kemaskiniLayout,
                    100
                );

        }
    );


    /* =====================================================
       RUN
    ===================================================== */

    if (
        document.readyState ===
        'loading'
    ) {

        document.addEventListener(
            'DOMContentLoaded',
            initSharedNavigation,
            {
                once: true
            }
        );

    } else {

        initSharedNavigation();

    }

})();
