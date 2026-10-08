/* =========================================================
   SHARED SIDEBAR + MOBILE NAV
   INVENTORI & POS / SPAREPART MOTOSIKAL
========================================================= */

(function () {

    'use strict';


    /* =====================================================
       DAPATKAN NAMA PAGE SEMASA
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
       TAMBAH CSS SIDEBAR
    ===================================================== */

    function tambahStyleSidebar() {

        if (document.getElementById('sharedSidebarStyle')) {
            return;
        }


        const style =
            document.createElement('style');


        style.id =
            'sharedSidebarStyle';


        style.textContent = `

            /* =============================================
               DESKTOP SIDEBAR
            ============================================= */

            .sidebar {
                position: fixed;
                top: 0;
                left: 0;
                bottom: 0;

                width: 288px;
                height: 100vh;

                z-index: 100;

                display: flex;
                flex-direction: column;

                background:
                    linear-gradient(
                        180deg,
                        rgba(15,23,42,.98),
                        rgba(11,18,32,.98)
                    );

                border-right:
                    1px solid rgba(148,163,184,.12);

                box-shadow:
                    12px 0 40px rgba(0,0,0,.15);

                overflow: hidden;
            }


            /* =============================================
               LOGO
            ============================================= */

            .sidebar-logo {
                flex-shrink: 0;

                padding:
                    22px 18px 18px;

                border-bottom:
                    1px solid rgba(148,163,184,.08);
            }


            .logo-box {
                display: flex;
                align-items: center;
                gap: 13px;
            }


            .logo-icon {
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
                        rgba(20,184,166,.18),
                        rgba(13,148,136,.08)
                    );

                border:
                    1px solid rgba(45,212,191,.18);

                box-shadow:
                    0 8px 25px rgba(13,148,136,.10);
            }


            .logo-title {
                color: #ffffff;

                font-size: 16px;
                font-weight: 700;

                line-height: 1.2;
            }


            .logo-subtitle {
                margin-top: 4px;

                color: #64748b;

                font-size: 10px;
                font-weight: 500;

                text-transform: uppercase;

                letter-spacing: .08em;
            }


            /* =============================================
               MENU
            ============================================= */

            .sidebar .menu {
                flex: 1;

                overflow-y: auto;

                padding:
                    14px 0 25px;

                scrollbar-width: thin;

                scrollbar-color:
                    rgba(100,116,139,.30)
                    transparent;
            }


            .sidebar .menu::-webkit-scrollbar {
                width: 5px;
            }


            .sidebar .menu::-webkit-scrollbar-track {
                background: transparent;
            }


            .sidebar .menu::-webkit-scrollbar-thumb {
                background:
                    rgba(100,116,139,.30);

                border-radius: 999px;
            }


            .menu-title {
                padding:
                    16px 28px 7px;

                color: #475569;

                font-size: 10px;
                font-weight: 700;

                text-transform: uppercase;

                letter-spacing: .12em;
            }


            .sidebar .menu a {
                position: relative;

                display: flex;
                align-items: center;

                gap: 13px;

                min-height: 45px;

                margin:
                    3px 12px;

                padding:
                    11px 16px;

                border:
                    1px solid transparent;

                border-radius: 12px;

                color: #94a3b8;

                font-size: 13px;
                font-weight: 500;

                text-decoration: none;

                transition:
                    background .2s ease,
                    color .2s ease,
                    border-color .2s ease,
                    transform .2s ease;
            }


            .sidebar .menu a:hover {
                color: #ffffff;

                background:
                    rgba(45,212,191,.07);

                transform:
                    translateX(2px);
            }


            .sidebar .menu a i {
                width: 21px;

                flex-shrink: 0;

                text-align: center;

                color: #64748b;

                font-size: 15px;

                transition:
                    color .2s ease;
            }


            .sidebar .menu a:hover i {
                color: #5eead4;
            }


            /* =============================================
               ACTIVE MENU
            ============================================= */

            .sidebar .menu a.active {
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


            .sidebar .menu a.active::before {
                content: '';

                position: absolute;

                left: 0;
                top: 9px;
                bottom: 9px;

                width: 3px;

                border-radius:
                    0 4px 4px 0;

                background: #2dd4bf;

                box-shadow:
                    0 0 12px
                    rgba(45,212,191,.60);
            }


            .sidebar .menu a.active i {
                color: #5eead4;
            }


            /* =============================================
               MOBILE NAV CONTAINER
            ============================================= */

            #sharedMobileNav {
                display: none;
            }


            /* =============================================
               TABLET / MOBILE
            ============================================= */

            @media (max-width: 1023px) {

                .sidebar {
                    display: none !important;
                }


                .main {
                    margin-left: 0 !important;

                    padding-bottom: 82px;
                }


                #sharedMobileNav {
                    position: fixed;

                    left: 0;
                    right: 0;
                    bottom: 0;

                    z-index: 99999;

                    display: block;

                    background:
                        rgba(15,23,42,.97);

                    border-top:
                        1px solid rgba(148,163,184,.14);

                    box-shadow:
                        0 -10px 35px rgba(0,0,0,.18);

                    backdrop-filter:
                        blur(18px);

                    -webkit-backdrop-filter:
                        blur(18px);
                }


                .shared-mobile-nav {
                    width: 100%;
                    height: 70px;

                    max-width: 750px;

                    margin: 0 auto;

                    display: grid;

                    grid-template-columns:
                        repeat(5,1fr);
                }


                .shared-mobile-nav a {
                    position: relative;

                    min-width: 0;

                    display: flex;
                    flex-direction: column;

                    align-items: center;
                    justify-content: center;

                    gap: 5px;

                    color: #64748b;

                    text-decoration: none;

                    font-size: 9px;
                    font-weight: 600;

                    transition:
                        color .2s ease,
                        background .2s ease;
                }


                .shared-mobile-nav a i {
                    font-size: 18px;

                    transition:
                        transform .2s ease,
                        color .2s ease;
                }


                .shared-mobile-nav a span {
                    max-width: 100%;

                    overflow: hidden;

                    text-overflow: ellipsis;

                    white-space: nowrap;
                }


                .shared-mobile-nav a:hover {
                    color: #94a3b8;

                    background:
                        rgba(45,212,191,.035);
                }


                .shared-mobile-nav a.active {
                    color: #5eead4;
                }


                .shared-mobile-nav a.active i {
                    color: #5eead4;

                    transform:
                        translateY(-1px);
                }


                .shared-mobile-nav a.active::before {
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
                        rgba(45,212,191,.7);
                }

            }


            /* =============================================
               DESKTOP
            ============================================= */

            @media (min-width: 1024px) {

                #sharedMobileNav {
                    display: none !important;
                }

            }

        `;


        document.head.appendChild(style);

    }


    /* =====================================================
       BINA SIDEBAR
    ===================================================== */

    function binaSidebar() {

        const container =
            document.getElementById(
                'sharedSidebar'
            );


        if (!container) {

            console.warn(
                '[sidebar.js] #sharedSidebar tidak dijumpai.'
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

                    ${escapeAttribute(item.href)}

                        <i
                            class="fa-solid ${escapeAttribute(item.icon)}"
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
       MOBILE NAV
    ===================================================== */

    function binaMobileNav() {

        const container =
            document.getElementById(
                'sharedMobileNav'
            );


        if (!container) {

            console.warn(
                '[sidebar.js] #sharedMobileNav tidak dijumpai.'
            );

            return;

        }


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

            <nav
                class="shared-mobile-nav"
                aria-label="Navigasi utama"
            >

        `;


        items.forEach(item => {

            const active =
                currentPage ===
                item.href.toLowerCase()
                    ? 'active'
                    : '';


            html += `

                "
                    class="${active}"
                    ${
                        active
                            ? 'aria-current="page"'
                            : ''
                    }
                >

                    <i
                        class="fa-solid ${escapeAttribute(item.icon)}"
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
       ESCAPE HTML
    ===================================================== */

    function escapeHtml(value) {

        if (
            value === null ||
            value === undefined
        ) {
            return '';
        }


        return String(value)

            .replace(
                /&/g,
                '&amp;'
            )

            .replace(
                /</g,
                '&lt;'
            )

            .replace(
                />/g,
                '&gt;'
            )

            .replace(
                /"/g,
                '&quot;'
            )

            .replace(
                /'/g,
                '&#039;'
            );

    }


    /* =====================================================
       ESCAPE ATTRIBUTE
    ===================================================== */

    function escapeAttribute(value) {

        return escapeHtml(value);

    }


    /* =====================================================
       INIT
    ===================================================== */

    function initSharedNavigation() {

        try {

            tambahStyleSidebar();

            binaSidebar();

            binaMobileNav();


            console.log(
                '[sidebar.js] Shared navigation berjaya dimuatkan.',
                currentPage
            );


        } catch (error) {

            console.error(
                '[sidebar.js] Gagal membina sidebar:',
                error
            );

        }

    }


    /* =====================================================
       RUN
    ===================================================== */

    if (
        document.readyState === 'loading'
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
