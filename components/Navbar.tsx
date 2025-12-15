import Link from 'next/link';

export function Navbar() {
    return (
        <nav className="border-b bg-white border-zinc-200 sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center">
                    <div className="flex">
                        <Link href="/" className="flex flex-shrink-0 items-center">
                            <span className="text-2xl font-bold tracking-tight text-indigo-600">Storefront</span>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Link href="/cart" className="p-2 text-gray-400 hover:text-gray-500 relative">
                            <span className="sr-only">View cart</span>
                            {/* Simple Cart Icon SVG */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
