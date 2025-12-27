export interface MockProduct {
    id: string;
    name: string;
    slug: string;
    price: number;
    description: string;
    images: string[];
    category: string;
    specs: {
        fabric: string;
        fit: string;
        durability: string;
        aging: string;
    };
}

export const mockProducts: MockProduct[] = [
    {
        id: "prod_01",
        name: "The Heavyweight Tee",
        slug: "heavyweight-tee",
        price: 85,
        description: "A tee built for silence. 280 GSM cotton that drapes with intention. No logos, no noise. Just structure and softness that improves with every wash.",
        images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop"], // Placeholder
        category: "Tops",
        specs: {
            fabric: "280 GSM Heavyweight Cotton",
            fit: "Boxy, Relaxed",
            durability: "Reinforced seams",
            aging: "Softens, holds structure"
        }
    },
    {
        id: "prod_02",
        name: "The Artisan Jacket",
        slug: "artisan-jacket",
        price: 240,
        description: "Workwear refined for the studio. Durable canvas that remembers your movements. Unlined for layering, structured for presence.",
        images: ["https://images.unsplash.com/photo-1551028919-38371387353f?q=80&w=2000&auto=format&fit=crop"], // Placeholder
        category: "Outerwear",
        specs: {
            fabric: "12oz Duck Canvas",
            fit: "True to size, room to layer",
            durability: "Triple stitched",
            aging: "Patina develops"
        }
    },
    {
        id: "prod_03",
        name: "The Structured Cap",
        slug: "structured-cap",
        price: 55,
        description: "Low profile, high structure. A cap that doesn't scream. Subtle branding, premium buckle, built to be the only one you need.",
        images: ["https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2000&auto=format&fit=crop"], // Placeholder
        category: "Accessories",
        specs: {
            fabric: "Brushed Cotton Twill",
            fit: "Adjustable, Low Profile",
            durability: "Brass buckle",
            aging: "Fades naturally"
        }
    }
];

export async function getMockProducts(): Promise<MockProduct[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockProducts;
}

export async function getMockProductBySlug(slug: string): Promise<MockProduct | undefined> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockProducts.find(p => p.slug === slug);
}
