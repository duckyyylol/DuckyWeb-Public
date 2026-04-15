// place files you want to import through the `$lib` alias in this folder.

export interface SetupProductMerchant {
        priority: 3        | 0
        id:       "amazon" | "microcenter" | "nintendo" | "sony";
        baseUrl: string;
    }

    export interface SetupSoftwareMerchant {
        priority: 3          | 0
        id:       "external" | "github";
        baseUrl: string;
    }

    export interface MerchantSlug<T extends "product" | "software"> {
        merchantId: T extends "product" ? ("amazon" | "microcenter" | "nintendo" | "sony") : ("external" | "github");
        slug: string | "/";
    }

    export interface SetupProductPrice {
        price: number | null;
        asOfMonth: number;
        asOfYear: number;
        approximate?: boolean;
    }

    export interface SetupProduct {
        merchants: SetupProductMerchant[];
        merchantSlugs: MerchantSlug<"product">[];
        iconPath: string;
        category: "CPU" | "MOBO" | "GPU" | "RAM" | "SSD" | "PSU" | "CASE" | "CONSOLE" | "CAPTURE" | "KEYBOARD" | "MOUSE" | "CONTROLLER" | "MONITOR" | "DESK" | "CHAIR";
        name: string;
        price: SetupProductPrice;
    }

    export interface SetupSoftware {
        merchants: SetupSoftwareMerchant[];
        merchantSlugs: MerchantSlug<"software">[];
        iconPath: string;
        category: "OS" | "WM" | "MUSIC" | "DESIGN" | "EDITOR" | "IDE" | "THEME";
        name: string;
    }

    export interface SetupEntry<T extends "product" | "software"> {
        id: number;
        type: T;
        item: T extends "product" ? SetupProduct : SetupSoftware;
    }