import socialIcon_Discord from "$lib/assets/discord.png";
import socialIcon_Bluesky from "$lib/assets/bluesky.png";
import socialIcon_Github from "$lib/assets/github.png";
import socialIcon_Twitch from "$lib/assets/twitch.png";
import socialIcon_Email from "$lib/assets/email.png";
import type { SetupEntry, SetupProductMerchant, SetupSoftwareMerchant } from "$lib";

import icon_CPU from "$lib/assets/cpu.png";
import icon_Mobo from "$lib/assets/mobo.png";
import icon_Gpu from "$lib/assets/gpu.png";
import icon_Ram from "$lib/assets/memory.png";
import icon_Ssd from "$lib/assets/ssd.png";
import icon_Psu from "$lib/assets/psu.png";
import icon_Case from "$lib/assets/case.png";
import icon_Nintendo from "$lib/assets/nintendo.png";
import icon_Playstation from "$lib/assets/playstation.png";

import icon_Capture from "$lib/assets/hdmi-port.png";
import icon_Keyboard from "$lib/assets/keyboard.png";
import icon_Mouse from "$lib/assets/mouse.png";
import icon_Monitor from "$lib/assets/monitor.png";
import icon_Controller from "$lib/assets/controller.png";
import icon_Desk from "$lib/assets/desk.png";
import icon_Chair from "$lib/assets/chair.png";

import icon_Arch from "$lib/assets/arch.png";
import icon_Hyprland from "$lib/assets/hyprland.png";
import icon_Cider from "$lib/assets/cider.png";
import icon_Spotify from "$lib/assets/spotify.png";
import icon_Figma from "$lib/assets/figma.png";
import icon_Timeline from "$lib/assets/timeline.png";
import icon_VSC from "$lib/assets/vscode.png";
import icon_Jetbrains from "$lib/assets/jetbrains.png";
import icon_Theme from "$lib/assets/theme.png";



export const productMerchants: {[key: string]: SetupProductMerchant} = {
    amazon: {
        id: "amazon",
        baseUrl: "https://a.co", // /d/<productId>
        priority: 3,
    },
    microcenter: {
        id: "microcenter",
        baseUrl: "https://www.microcenter.com", // /product/<productId>/<long-product-path>
        priority: 0,
    },
    nintendo: {
        id: "nintendo",
        baseUrl: "https://www.nintendo.com", // /products/<slug>
        priority: 0
    },
    sony: {
        id: "sony",
        baseUrl: "https://direct.playstation.com/en-us", // /<category>/<long-product-path>
        priority: 0
    }
}
export const softwareMerchants: {[key: string]: SetupSoftwareMerchant} = {
    github: {
        id: "github",
        baseUrl: "https://github.com",
        priority: 0
    },
    external: {
        id: "external",
        baseUrl: "",
        priority: 3
    }
}

export interface Config {
    username: string;
    role: string | null;
    pronouns: string[];
    socials: {
        name: string;
        label: string;
        img: string;
        withMention: boolean;
        url?: string;
    }[];
    setup_products: {
        pc: SetupEntry<"product">[];
        gaming: SetupEntry<"product">[];
        peripherals: SetupEntry<"product">[];
        software: SetupEntry<"software">[];
    }
}

const config: Config = {
    username: "ducky",
    pronouns: ["she", "her"],
    role: "a worthy opponent, you are",
    socials: [
        {
            withMention: true,
            name: "Discord",
            label: "ducky.lol",
            img: socialIcon_Discord,
        },
        {
            withMention: true,
            name: "GitHub",
            label: "duckyyylol",
            img: socialIcon_Github,
        },
        {
            withMention: true,
            name: "Twitch",
            label: "duckyyylive",
            img: socialIcon_Twitch,
        },
        {
            withMention: true,
            name: "Bluesky",
            label: "duckyyy.lol",
            img: socialIcon_Bluesky,
        },
        {
            withMention: false,
            name: "Email",
            label: "[3 ⓧ 31]@[this domain].wiki",
            img: socialIcon_Email,
            url: "#",
        },
    ],
    setup_products: {
        pc: [
            {
                id: 0,
                type: "product",
                item: {
                    category: "CPU",
                    iconPath: icon_CPU,
                    name: "Intel Core i9-14900K",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: 464
                    },
                    merchants: [productMerchants["amazon"], productMerchants["microcenter"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/0aQ3fTP5"},
                        {merchantId: "microcenter", slug: "/product/670841/intel-core-i9-14900k-raptor-lake-s-refresh-32ghz-twenty-four-core-lga-1700-boxed-processor-heatsink-not-included"},
                    ]
                }
            },
            {
                id: 1,
                type: "product",
                item: {
                    category: "MOBO",
                    iconPath: icon_Mobo,
                    name: "ASRock B760M Steel Legend WiFi",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: 140
                    },
                    merchants: [productMerchants["amazon"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/0fuh5SaJ"},
                    ]
                }
            }
            ,
            {
                id: 2,
                type: "product",
                item: {
                    category: "GPU",
                    iconPath: icon_Gpu,
                    name: "GIGABYTE GeForce RTX 4090",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: 3250
                    },
                    merchants: [productMerchants["amazon"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/08JG90P8"},
                    ]
                }
            },
            {
                id: 3,
                type: "product",
                item: {
                    category: "RAM",
                    iconPath: icon_Ram,
                    name: "Corsair Vengeance 5200MHz DDR5 (2x32GB)",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: 688
                    },
                    merchants: [productMerchants["amazon"], productMerchants["microcenter"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/0cmlnB42"},
                        {merchantId: "microcenter", slug: "/product/661849/corsair-vengeance-64gb-(2-x-32gb)-ddr5-5200-pc5-41600-cl40-dual-channel-desktop-memory-kit-cmk64gx5m2b5200c40-black"}
                    ]
                }
            },
            {
                id: 4,
                type: "product",
                item: {
                    category: "SSD",
                    iconPath: icon_Ssd,
                    name: "Samsung 990 PRO 2TB M.2",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: 635
                    },
                    merchants: [productMerchants["amazon"], productMerchants["microcenter"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/0d0eE9DA"},
                        {merchantId: "microcenter", slug: "/product/660429/samsung-990-pro-2tb-samsung-v-nand-3-bit-mlc-pcie-gen-4-x4-nvme-m2-internal-ssd"}
                    ]
                }
            },
            {
                id: 5,
                type: "product",
                item: {
                    category: "PSU",
                    iconPath: icon_Psu,
                    name: "Thermaltake Toughpower GF A3 1050W",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: 170
                    },
                    merchants: [productMerchants["amazon"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/0aOOkqGY"},
                    ]
                }
            },
            {
                id: 6,
                type: "product",
                item: {
                    category: "CASE",
                    iconPath: icon_Case,
                    name: "MUSETEX Y6 ATX (White)",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: 100
                    },
                    merchants: [productMerchants["amazon"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/053TzXXH"},
                    ]
                }
            }
        ],
        gaming: [
            {
                id: 0,
                type: "product",
                item: {
                    category: "CONSOLE",
                    iconPath: icon_Nintendo,
                    name: "Nintendo Switch 2",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: 450
                    },
                    merchants: [productMerchants["nintendo"], productMerchants["amazon"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/00H7VB25"},
                        {merchantId: "nintendo", slug: "/store/products/nintendo-switch-2-system-123669/"},
                    ]
                }
            },
            {
                id: 1,
                type: "product",
                item: {
                    category: "CONSOLE",
                    iconPath: icon_Playstation,
                    name: "PlayStation 5 Disc Edition",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: 650
                    },
                    merchants: [productMerchants["sony"], productMerchants["amazon"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/08hwL3I7"},
                        {merchantId: "sony", slug: "/buy-consoles/playstation5-console-1-tb"},
                    ]
                }
            },
            {
                id: 2,
                type: "product",
                item: {
                    category: "CONSOLE",
                    iconPath: icon_Nintendo,
                    name: "Wii U",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: 200,
                        approximate: true
                    },
                    merchants: [productMerchants["nintendo"], productMerchants["amazon"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/04O6uBih"},
                        {merchantId: "nintendo", slug: "/en-gb/Wii-U/Wii-U-344102.html"},
                    ]
                }
            },
            {
                id: 3,
                type: "product",
                item: {
                    category: "CONTROLLER",
                    iconPath: icon_Controller,
                    name: "Switch Pro Controller (1)",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: 80
                    },
                    merchants: [productMerchants["nintendo"], productMerchants["amazon"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/0iH2UPFP"},
                        {merchantId: "nintendo", slug: "/store/products/pro-controller/"},
                    ]
                }
            },
            {
                id: 4,
                type: "product",
                item: {
                    category: "CONTROLLER",
                    iconPath: icon_Controller,
                    name: "PlayStation DualSense (White)",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: 75
                    },
                    merchants: [productMerchants["sony"], productMerchants["amazon"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/07if5nEo"},
                        {merchantId: "sony", slug: "/buy-accessories/dualsense-wireless-controller"},
                    ]
                }
            }
        ],
        peripherals: [
            {
                id: 0,
                type: "product",
                item: {
                    category: "CAPTURE",
                    iconPath: icon_Capture,
                    name: "Elgato HD60X",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: 180
                    },
                    merchants: [productMerchants["microcenter"], productMerchants["amazon"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/0eZ7nZuS"},
                        {merchantId: "microcenter", slug: "/product/652881/elgato-hd60-x-1080p60-hdr10-external-capture-card"},
                    ]
                }
            },
            {
                id:1,
                type: "product",
                item: {
                    category: "KEYBOARD",
                    iconPath: icon_Keyboard,
                    name: "Ducky One 3 TKL (Matcha)",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: 110
                    },
                    merchants: [productMerchants["amazon"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/0fGQ9kJt"},
                    ]
                }
            },
            {
                id: 2,
                type: "product",
                item: {
                    category: "MOUSE",
                    iconPath: icon_Mouse,
                    name: "Cooler Master MM712 (White)",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: 50
                    },
                    merchants: [productMerchants["amazon"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/04tLeoUj"},
                    ]
                }
            },
            {
                id: 5,
                type: "product",
                item: {
                    category: "MONITOR",
                    iconPath: icon_Monitor,
                    name: "acer Predator XB273U 27”",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: null
                    },
                    merchants: [],
                    merchantSlugs: []
                }
            },
            {
                id: 6,
                type: "product",
                item: {
                    category: "MONITOR",
                    iconPath: icon_Monitor,
                    name: "Samsung Odyssey G4 27”",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: null
                    },
                    merchants: [],
                    merchantSlugs: []
                }
            },
            {
                id: 7,
                type: "product",
                item: {
                    category: "MONITOR",
                    iconPath: icon_Monitor,
                    name: "AOC 24G2WG3 24”",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: null
                    },
                    merchants: [],
                    merchantSlugs: []
                }
            },
            {
                id: 8,
                type: "product",
                item: {
                    category: "DESK",
                    iconPath: icon_Desk,
                    name: "VIVO Standing Desk",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: 320
                    },
                    merchants: [productMerchants["amazon"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/05GhXihu"}
                    ]
                }
            },
            {
                id: 9,
                type: "product",
                item: {
                    category: "CHAIR",
                    iconPath: icon_Chair,
                    name: "Office Chair w/ Retractable Footrest",
                    price: {
                        asOfMonth: 4,
                        asOfYear: 2026,
                        price: null
                    },
                    merchants: [productMerchants["amazon"]],
                    merchantSlugs: [
                        {merchantId: "amazon", slug: "/d/06MXtoFv"}
                    ]
                }
            }
        ],
        software: [
            {
                id: 0,
                type: "software",
                item: {
                    category: "OS",
                    iconPath: icon_Arch,
                    name: "Arch Linux (btw)",
                    merchants: [softwareMerchants["github"], softwareMerchants["external"]],
                    merchantSlugs: [
                        {merchantId: "external", slug: "https://archlinux.org"},
                        {merchantId: "github", slug: "/archlinux"},
                    ]
                }
            },
            {
                id: 1,
                type: "software",
                item: {
                    category: "WM",
                    iconPath: icon_Hyprland,
                    name: "Hyprland",
                    merchants: [softwareMerchants["github"], softwareMerchants["external"]],
                    merchantSlugs: [
                        {merchantId: "external", slug: "https://hypr.land"},
                        {merchantId: "github", slug: "/hyprwm/Hyprland"},
                    ]
                }
            },
            {
                id: 2,
                type: "software",
                item: {
                    category: "MUSIC",
                    iconPath: icon_Cider,
                    name: "Cider",
                    merchants: [softwareMerchants["github"], softwareMerchants["external"]],
                    merchantSlugs: [
                        {merchantId: "external", slug: "https://cider.sh"},
                        {merchantId: "github", slug: "/ciderapp/Cider-2"},
                    ]
                }
            },
            {
                id: 3,
                type: "software",
                item: {
                    category: "MUSIC",
                    iconPath: icon_Spotify,
                    name: "Spotify (w/ Spicetify)",
                    merchants: [softwareMerchants["github"], softwareMerchants["external"]],
                    merchantSlugs: [
                        {merchantId: "external", slug: "https://open.spotify.com/download"},
                        {merchantId: "github", slug: "/spicetify"},
                    ]
                }
            },
            {
                id: 4,
                type: "software",
                item: {
                    category: "DESIGN",
                    iconPath: icon_Figma,
                    name: "Figma (Figma Linux)",
                    merchants: [softwareMerchants["github"], softwareMerchants["external"]],
                    merchantSlugs: [
                        {merchantId: "external", slug: "https://figma.com"},
                        {merchantId: "github", slug: "/Figma-Linux/figma-linux"},
                    ]
                }
            },
            {
                id: 5,
                type: "software",
                item: {
                    category: "EDITOR",
                    iconPath: icon_Timeline,
                    name: "Kdenlive",
                    merchants: [softwareMerchants["github"], softwareMerchants["external"]],
                    merchantSlugs: [
                        {merchantId: "external", slug: "https://kdenlive.org"},
                        {merchantId: "github", slug: "/KDE/kdenlive"},
                    ]
                }
            },
            {
                id: 6,
                type: "software",
                item: {
                    category: "IDE",
                    iconPath: icon_VSC,
                    name: "Visual Studio Code (OSS)",
                    merchants: [softwareMerchants["github"], softwareMerchants["external"]],
                    merchantSlugs: [
                        {merchantId: "external", slug: "https://code.visualstudio.com"},
                        {merchantId: "github", slug: "/Microsoft/vscode"},
                    ]
                }
            },
            {
                id: 7,
                type: "software",
                item: {
                    category: "IDE",
                    iconPath: icon_Jetbrains,
                    name: "IntelliJ IDEA Community Edition",
                    merchants: [softwareMerchants["github"], softwareMerchants["external"]],
                    merchantSlugs: [
                        {merchantId: "external", slug: "https://www.jetbrains.com/idea"},
                        {merchantId: "github", slug: "/JetBrains/intellij-community"},
                    ]
                }
            },
            {
                id: 8,
                type: "software",
                item: {
                    category: "THEME",
                    iconPath: icon_Theme,
                    name: "Catppuccin Mocha (Peach)",
                    merchants: [softwareMerchants["github"], softwareMerchants["external"]],
                    merchantSlugs: [
                        {merchantId: "external", slug: "https://catppuccin.com"},
                        {merchantId: "github", slug: "/catppuccin/catppuccin"},
                    ]
                }
            }
        ]
    }
}

export default config;