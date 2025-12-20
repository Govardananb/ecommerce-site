export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Leather Backpack",
    price: 129.99,
    description: "A durable and stylish leather backpack perfect for daily commute or weekend getaways. Features multiple compartments and premium hardware.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
    category: "Accessories"
  },
  {
    id: "2",
    name: "Minimalist Watch",
    price: 199.50,
    description: "Elegant minimalist watch with a genuine leather strap and scratch-resistant sapphire crystal. Water-resistant up to 50 meters.",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800",
    category: "Timepieces"
  },
  {
    id: "3",
    name: "Wireless Noise-Canceling Headphones",
    price: 249.00,
    description: "Immerse yourself in music with these high-fidelity wireless headphones. Active noise cancellation and 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    category: "Electronics"
  },
  {
    id: "4",
    name: "Premium Cotton T-Shirt",
    price: 35.00,
    description: "Soft, breathable, and sustainably sourced cotton t-shirt. Available in various earthy tones. perfect for layering.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    category: "Apparel"
  },
  {
    id: "5",
    name: "Ceramic Coffee Mug",
    price: 24.00,
    description: "Hand-crafted ceramic mug with a unique glaze. Large handle for a comfortable grip. Microwave and dishwasher safe.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=800",
    category: "Home"
  },
  {
    id: "6",
    name: "Desk Lamp",
    price: 89.99,
    description: "Modern LED desk lamp with adjustable brightness and color temperature. Sleek design that fits any workspace.",
    image: "https://images.unsplash.com/photo-1507473888900-52e1adad8dbf?auto=format&fit=crop&q=80&w=800",
    category: "Lighting"
  },
];
