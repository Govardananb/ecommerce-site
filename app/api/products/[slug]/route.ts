import { getProductBySlug } from "@/lib/notion";
import { NextResponse } from "next/server";

interface RouteProps {
    params: Promise<{ slug: string }>;
}

export async function GET(
    request: Request,
    { params }: RouteProps
) {
    try {
        const { slug } = await params;
        const decodedSlug = decodeURIComponent(slug);
        const product = await getProductBySlug(decodedSlug);

        if (!product) {
            return NextResponse.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        return NextResponse.json(
            { error: "Failed to fetch product" },
            { status: 500 }
        );
    }
}
