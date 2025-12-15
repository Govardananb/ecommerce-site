import Link from "next/link";
import { Button } from "@/components/Button";

export default function SuccessPage() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
            <div className="rounded-full bg-green-100 p-3 mb-6">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Thank you for your order!
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
                We&apos;ve received your order and one of our team members will be in touch shortly.
            </p>

            <div className="flex gap-4">
                <Button href="/">
                    Continue Shopping
                </Button>
            </div>
        </div>
    );
}
