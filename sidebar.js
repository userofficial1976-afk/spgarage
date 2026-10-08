/* =========================================================
   SHARED SIDEBAR + MOBILE NAV
   FUTURISTIC DEEP CYAN V3 - ANIMATED SOFT GLOW
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

    function escapeAttribute(value) { return escapeHtml(value); }
    function isActivePage(href) {
        return currentPage === String(href || '').split('?')[0].split('#')[0].toLowerCase();
    }

    function tambahStyleSidebar() {
        if (document.getElementById('shared-navigation-style')) return;
        const style = document.createElement('style');
        style.id = 'shared-navigation-style';
        style.textContent = `
#sharedSidebar{position:relative;z-index:100}
#sharedSidebar .sidebar{position:fixed;inset:0 auto 0 0;width:288px;height:100vh;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:radial-gradient(circle at 30% 4%,rgba(34,211,238,.13) 0%,rgba(9,50,63,.14) 22%,transparent 43%),linear-gradient(180deg,#06303d 0%,#041f2a 43%,#031923 70%,#02141c 100%);border-right:1px solid rgba(34,211,238,.22);box-shadow:12px 0 38px rgba(0,0,0,.24),inset -1px 0 22px rgba(34,211,238,.04);font-family:"Century Gothic",CenturyGothic,AppleGothic,sans-serif}
#sharedSidebar .sidebar::before{content:"";position:absolute;top:0;right:0;width:1px;height:220px;background:linear-gradient(180deg,rgba(34,211,238,.8),transparent);opacity:.45;pointer-events:none}
#sharedSidebar .sidebar-logo{flex-shrink:0;padding:21px 17px 17px;border-bottom:1px solid rgba(34,211,238,.10);position:relative}
#sharedSidebar .sidebar-logo::after{content:"";position:absolute;left:18px;right:18px;bottom:-1px;height:1px;background:linear-gradient(90deg,transparent,rgba(34,211,238,.55),transparent)}
#sharedSidebar .logo-box{display:flex;align-items:center;gap:12px}
#sharedSidebar .logo-icon{width:47px;height:47px;flex:0 0 47px;display:flex;align-items:center;justify-content:center;border-radius:10px;color:#a5f3fc;font-size:20px;background:linear-gradient(145deg,rgba(34,211,238,.15),rgba(5,42,54,.78));border:1px solid rgba(34,211,238,.25);box-shadow:inset 0 0 15px rgba(34,211,238,.04),0 0 12px rgba(34,211,238,.09);text-shadow:0 0 8px rgba(34,211,238,.48);transition:transform .25s ease,box-shadow .25s ease,color .25s ease}
#sharedSidebar .logo-box:hover .logo-icon{transform:translateY(-1px) scale(1.035);color:#cffafe;box-shadow:inset 0 0 16px rgba(34,211,238,.07),0 0 16px rgba(34,211,238,.14);text-shadow:0 0 10px rgba(34,211,238,.62)}
#sharedSidebar .logo-title{color:#ecfeff;font-size:15px;font-weight:800;line-height:1.2;text-shadow:0 0 10px rgba(34,211,238,.09)}
#sharedSidebar .logo-subtitle{margin-top:4px;color:#4f8c98;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.1em}
#sharedSidebar .sidebar-menu{flex:1;overflow-y:auto;overflow-x:hidden;padding:13px 0 28px;scrollbar-width:thin;scrollbar-color:rgba(34,211,238,.18) transparent}
#sharedSidebar .sidebar-menu::-webkit-scrollbar{width:4px}#sharedSidebar .sidebar-menu::-webkit-scrollbar-track{background:transparent}#sharedSidebar .sidebar-menu::-webkit-scrollbar-thumb{background:rgba(34,211,238,.18);border-radius:999px}
#sharedSidebar .sidebar-menu-title{padding:15px 25px 6px;color:#3f7884;font-size:9px;font-weight:900;text-transform:uppercase;letter-spacing:.15em}
#sharedSidebar .sidebar-nav-item{position:relative;display:flex;align-items:center;gap:11px;min-height:49px;margin:3px 11px;padding:7px 10px;border:1px solid transparent;border-radius:9px;color:#87aeb6;background:transparent;text-decoration:none;font-size:12px;font-weight:600;line-height:1.25;transition:color .22s ease,background .22s ease,border-color .22s ease,transform .22s ease,box-shadow .22s ease}
#sharedSidebar .sidebar-nav-item i{width:33px;height:33px;flex:0 0 33px;display:flex;align-items:center;justify-content:center;border-radius:8px;color:#67e8f9;font-size:14px;background:linear-gradient(145deg,rgba(34,211,238,.095),rgba(5,50,63,.40));border:1px solid rgba(34,211,238,.15);box-shadow:inset 0 0 10px rgba(34,211,238,.025),0 0 7px rgba(34,211,238,.045);text-shadow:0 0 6px rgba(34,211,238,.30);transition:transform .26s cubic-bezier(.2,.8,.2,1),color .24s ease,background .24s ease,border-color .24s ease,box-shadow .24s ease,text-shadow .24s ease}
#sharedSidebar .sidebar-nav-item span{min-width:0;display:block;white-space:normal;transition:transform .22s ease,color .22s ease}
@keyframes sidebarIconFloat{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-2px) rotate(.7deg)}}
@keyframes sidebarIconGlow{0%,100%{box-shadow:inset 0 0 10px rgba(34,211,238,.025),0 0 6px rgba(34,211,238,.045);text-shadow:0 0 5px rgba(34,211,238,.27)}50%{box-shadow:inset 0 0 12px rgba(34,211,238,.045),0 0 11px rgba(34,211,238,.11);text-shadow:0 0 8px rgba(34,211,238,.43)}}
#sharedSidebar .sidebar-nav-item i{animation:sidebarIconFloat 4.2s ease-in-out infinite,sidebarIconGlow 4.2s ease-in-out infinite}
#sharedSidebar .sidebar-nav-item:nth-of-type(2n) i{animation-delay:-.7s}
#sharedSidebar .sidebar-nav-item:nth-of-type(3n) i{animation-delay:-1.35s}
#sharedSidebar .sidebar-nav-item:nth-of-type(4n) i{animation-delay:-2.05s}
#sharedSidebar .sidebar-nav-item:nth-of-type(5n) i{animation-delay:-2.7s}
#sharedSidebar .sidebar-nav-item:hover{color:#e6fbff;background:linear-gradient(90deg,rgba(34,211,238,.065),rgba(34,211,238,.018));border-color:rgba(34,211,238,.11);transform:translateX(2px);box-shadow:inset 0 0 16px rgba(34,211,238,.018)}
#sharedSidebar .sidebar-nav-item:hover i{animation-play-state:paused;color:#cffafe;border-color:rgba(34,211,238,.34);background:linear-gradient(145deg,rgba(34,211,238,.13),rgba(8,42,56,.45));box-shadow:inset 0 0 12px rgba(34,211,238,.055),0 0 11px rgba(34,211,238,.12);text-shadow:0 0 8px rgba(34,211,238,.52);transform:translateY(-2px) scale(1.055) rotate(-2deg)}
#sharedSidebar .sidebar-nav-item:hover span{transform:translateX(1px)}
#sharedSidebar .sidebar-nav-item.active{color:#f0fdff;font-weight:800;background:linear-gradient(90deg,rgba(34,211,238,.115),rgba(13,148,136,.035));border-color:rgba(34,211,238,.20);box-shadow:inset 0 0 20px rgba(34,211,238,.025),0 0 12px rgba(34,211,238,.035)}
#sharedSidebar .sidebar-nav-item.active::before{content:"";position:absolute;left:-1px;top:8px;bottom:8px;width:2px;border-radius:0 4px 4px 0;background:#22d3ee;box-shadow:0 0 7px rgba(34,211,238,.48)}
#sharedSidebar .sidebar-nav-item.active i{animation-duration:3.6s;color:#cffafe;border-color:rgba(34,211,238,.38);background:linear-gradient(145deg,rgba(34,211,238,.15),rgba(8,42,56,.48));box-shadow:inset 0 0 12px rgba(34,211,238,.065),0 0 12px rgba(34,211,238,.13);text-shadow:0 0 7px rgba(34,211,238,.55),0 0 13px rgba(34,211,238,.22)}
#sharedSidebar .sidebar-nav-item[href="pos.html"] i{color:#5eead4}
#sharedMobileNav{display:none}
@media(max-width:1023px){#sharedSidebar,#sharedSidebar .sidebar{display:none!important}.main{margin-left:0!important;padding-bottom:82px!important}#sharedMobileNav{position:fixed;left:0;right:0;bottom:0;z-index:99999;display:block;min-height:70px;background:radial-gradient(circle at 50% 100%,rgba(34,211,238,.09),transparent 48%),linear-gradient(180deg,rgba(5,38,49,.985),rgba(2,20,28,.985));border-top:1px solid rgba(34,211,238,.22);box-shadow:0 -10px 35px rgba(0,0,0,.24),inset 0 1px 15px rgba(34,211,238,.04);backdrop-filter:blur(18px)}#sharedMobileNav .shared-mobile-nav{width:100%;max-width:750px;height:70px;margin:auto;display:grid;grid-template-columns:repeat(5,minmax(0,1fr))}#sharedMobileNav .mobile-nav-item{position:relative;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:4px 2px;color:#527f89;text-decoration:none;font-size:8px;font-weight:700;transition:color .22s ease,background .22s ease}#sharedMobileNav .mobile-nav-item i{width:31px;height:31px;display:flex;align-items:center;justify-content:center;border-radius:8px;color:#62c8d7;font-size:15px;background:rgba(34,211,238,.045);border:1px solid rgba(34,211,238,.10);text-shadow:0 0 5px rgba(34,211,238,.24);transition:transform .26s cubic-bezier(.2,.8,.2,1),color .22s ease,box-shadow .22s ease,background .22s ease,border-color .22s ease}#sharedMobileNav .mobile-nav-item span{width:100%;padding:0 2px;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap}#sharedMobileNav .mobile-nav-item i{animation:sidebarIconFloat 4.6s ease-in-out infinite,sidebarIconGlow 4.6s ease-in-out infinite}#sharedMobileNav .mobile-nav-item:nth-child(2n) i{animation-delay:-.9s}#sharedMobileNav .mobile-nav-item:nth-child(3n) i{animation-delay:-1.8s}#sharedMobileNav .mobile-nav-item:nth-child(4n) i{animation-delay:-2.6s}#sharedMobileNav .mobile-nav-item:nth-child(5n) i{animation-delay:-3.3s}#sharedMobileNav .mobile-nav-item:hover{color:#b9f6ff;background:rgba(34,211,238,.02)}#sharedMobileNav .mobile-nav-item:hover i{animation-play-state:paused;color:#cffafe;background:rgba(34,211,238,.10);border-color:rgba(34,211,238,.26);box-shadow:0 0 10px rgba(34,211,238,.10);text-shadow:0 0 7px rgba(34,211,238,.42);transform:translateY(-2px) scale(1.06)}#sharedMobileNav .mobile-nav-item.active{color:#67e8f9}#sharedMobileNav .mobile-nav-item.active::before{content:"";position:absolute;top:0;left:31%;right:31%;height:2px;border-radius:0 0 5px 5px;background:#22d3ee;box-shadow:0 0 7px rgba(34,211,238,.42)}#sharedMobileNav .mobile-nav-item.active i{color:#cffafe;background:rgba(34,211,238,.11);border-color:rgba(34,211,238,.30);box-shadow:0 0 10px rgba(34,211,238,.10);text-shadow:0 0 7px rgba(34,211,238,.45);transform:translateY(-1px)}}
@media(min-width:1024px){#sharedSidebar{display:block}#sharedSidebar .sidebar{display:flex}#sharedMobileNav{display:none!important}}
@media(max-width:420px){#sharedMobileNav .mobile-nav-item{font-size:7.5px}#sharedMobileNav .mobile-nav-item i{width:29px;height:29px;font-size:14px}}
@media(prefers-reduced-motion:reduce){#sharedSidebar .sidebar-nav-item,#sharedSidebar .sidebar-nav-item i,#sharedSidebar .sidebar-nav-item span,#sharedSidebar .logo-icon,#sharedMobileNav .mobile-nav-item,#sharedMobileNav .mobile-nav-item i{transition:none!important;transform:none!important;animation:none!important}}
`;
        document.head.appendChild(style);
    }

    function binaSidebar() {
        const container = document.getElementById('sharedSidebar');
        if (!container) { console.warn('[sidebar.js] Elemen #sharedSidebar tidak dijumpai.'); return; }
        let html = '<aside class="sidebar"><div class="sidebar-logo"><div class="logo-box"><div class="logo-icon"><i class="fa-solid fa-motorcycle" aria-hidden="true"></i></div><div><div class="logo-title">Inventori &amp; POS</div><div class="logo-subtitle">Sparepart Motosikal</div></div></div></div><nav class="sidebar-menu" aria-label="Navigasi utama">';
        menu.forEach(section => {
            html += '<div class="sidebar-menu-title">' + escapeHtml(section.title) + '</div>';
            section.items.forEach(item => {
                const active = isActivePage(item.href);
                html += '<a href="' + escapeAttribute(item.href) + '" class="sidebar-nav-item' + (active ? ' active' : '') + '"' + (active ? ' aria-current="page"' : '') + '><i class="fa-solid ' + escapeAttribute(item.icon) + '" aria-hidden="true"></i><span>' + escapeHtml(item.text) + '</span></a>';
            });
        });
        html += '</nav></aside>';
        container.innerHTML = html;
    }

    function binaMobileNav() {
        const container = document.getElementById('sharedMobileNav');
        if (!container) { console.warn('[sidebar.js] Elemen #sharedMobileNav tidak dijumpai.'); return; }
        let html = '<nav class="shared-mobile-nav" aria-label="Navigasi mudah alih">';
        menuMobile.forEach(item => {
            const active = isActivePage(item.href);
            html += '<a href="' + escapeAttribute(item.href) + '" class="mobile-nav-item' + (active ? ' active' : '') + '"' + (active ? ' aria-current="page"' : '') + '><i class="fa-solid ' + escapeAttribute(item.icon) + '" aria-hidden="true"></i><span>' + escapeHtml(item.text) + '</span></a>';
        });
        html += '</nav>';
        container.innerHTML = html;
    }

    function kemaskiniLayout() {
        const main = document.querySelector('.main');
        if (!main) return;
        main.style.marginLeft = window.matchMedia('(min-width: 1024px)').matches ? '288px' : '0';
    }

    function initSharedNavigation() {
        try {
            tambahStyleSidebar();
            binaSidebar();
            binaMobileNav();
            kemaskiniLayout();
            console.log('[sidebar.js] Sidebar futuristik V3 berjaya dimuatkan:', currentPage);
        } catch (error) {
            console.error('[sidebar.js] Ralat:', error);
        }
    }

    let resizeTimer = null;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(kemaskiniLayout, 100);
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSharedNavigation, { once: true });
    } else {
        initSharedNavigation();
    }
})();
