import { MenuType } from "@/interFace/interFace";

const menu_data: MenuType[] = [
    {
        id: 1,
        hasDropdown: true,
        megaMenu: true,
        active: true,
        title: "Ürünler",
        pluseIncon: true,
        link: "#",
        submenus: [
            {
                title: "Demir Çelik",
                link: "#",
                megaMenu: [
                    {
                        title: "İnşaat Demiri - Diğer Uzun Ürünler",
                        link: "#",
                    },
                    {
                        title: "Profiller",
                        link: "#",
                    },
                    {
                        title: "Borular",
                        link: "/urunler/borular",
                    },
                    {
                        title: "Paslanmaz Boru - Kutu Profiller",
                        link: "#",
                    },
                    {
                        title: "Paslanmaz Yassı - Uzun Ürünler",
                        link: "#",
                    },
                    {
                        title: "Yassı Ürünler",
                        link: "#",
                    },
                    {
                        title: "Vasıflı Çelikler",
                        link: "#",
                    },
                    {
                        title: "Hırdavat",
                        link: "#",
                    },
                    {
                        title: "Sandviç Paneller",
                        link: "#",
                    },
                ],
            },
            {
                title: "Isıtma ve Soğutma",
                link: "#",
                megaMenu: [
                    {
                        title: "Kombi ve Radyatörler",
                        link: "/urunler/kombi-ve-radyatorler",
                    },
                    {
                        title: "Isıtma Sistemleri",
                        link: "/urunler/isitma-sistemleri",
                    },
                    {
                        title: "Soğutma Sistemleri",
                        link: "/urunler/sogutma-sistemleri",
                    },
                ],
            },
            {
                title: "Alüminyum",
                link: "#",
                megaMenu: [
                    {
                        title: "Alüminyum Profiller",
                        link: "/urunler/aluminyum-profiller",
                    },
                    {
                        title: "Alüminyum Levhalar",
                        link: "/urunler/aluminyum-levhalar",
                    },
                    {
                        title: "Alüminyum Çubuklar",
                        link: "/urunler/aluminyum-cubuklar",
                    },
                ],
            },
        ],
    },
    // The remaining menu items for Shop, Pages, Blog, and Contact
    {
        id: 2,
        hasDropdown: true,
        megaMenu: true,
        active: true,
        title: "Piyasa Fiyatları",
        pluseIncon: true,
        link: "#",
        submenus: [
            { title: "Demir Fiyatları", link: "/wishlist" },
            { title: "LME Fiyatları", link: "/cart" },
            { title: "Çelik Hasır ve Filmaşin", link: "/compare" },
            { title: "Çin Fiyat Endeksleri", link: "/checkout" },
        ],
    },
    {
        id: 2,
        hasDropdown: true,
        megaMenu: true,
        active: true,
        title: "Shop",
        pluseIncon: true,
        link: "#",
        submenus: [
            {
                title: "Shop",
                link: "#",
                megaMenu: [
                    {
                        title: "Shop Sidebar 5 Column",
                        link: "/shop-sidebar-5-column",
                    },
                    {
                        title: "Shop Sidebar 4 Column",
                        link: "/shop-sidebar-4-column",
                    },
                    {
                        title: "Shop Sidebar 3 Column",
                        link: "/shop-sidebar-3-column",
                    },
                    {
                        title: "Shop Full 6 Column",
                        link: "/shop-full-6-column",
                    },
                    {
                        title: "Shop Full 5 Column",
                        link: "/shop-full-5-column",
                    },
                    {
                        title: "Shop Full 4 Column",
                        link: "/shop-full-4-column",
                    },
                    { title: "Group Product", link: "/group-product" },
                ],
            },
            { title: "Shop Details", link: "/shop-details" },
            { title: "Wishlist", link: "/wishlist" },
            { title: "Cart", link: "/cart" },
            { title: "Compare", link: "/compare" },
            { title: "Checkout", link: "/checkout" },
        ],
    },
    {
        id: 3,
        hasDropdown: true,
        active: true,
        title: "Pages",
        pluseIncon: true,
        link: "#",
        submenus: [
            { title: "About", link: "/about" },
            { title: "Become Vendor", link: "/become-vendor" },
            { title: "Create Vendor Account", link: "/create-vendor-account" },
            { title: "Vendors List", link: "/vendors-list" },
            { title: "Profile", link: "/profile" },
            { title: "Track Order", link: "/track-order" },
            { title: "Privecy Policy", link: "/privecy-policy" },
            { title: "Register", link: "/register" },
            { title: "Login", link: "/login" },
            { title: "FAQ", link: "/faq" },
            { title: "404 page", link: "/404-page" },
        ],
    },
    {
        id: 4,
        hasDropdown: true,
        active: true,
        title: "Blog",
        pluseIncon: true,
        link: "#",
        submenus: [
            { title: "Blog", link: "/blog" },
            { title: "Blog Details", link: "/blog-details" },
        ],
    },
    {
        id: 6,
        hasDropdown: false,
        active: true,
        title: "Contact",
        link: "/contact",
    },
];

export default menu_data;
