import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 bg-white">
            <div className="sale-badge py-2 text-center text-sm bg-black">
                <span>Free Shipping on Orders Over $50 | Summer Sale - Up to 70% Off</span>
            </div>

            <div className="container mx-auto py-4 flex items-center justify-between">
                <span className="text-black text-2xl font-bold uppercase">Shop</span>

                <nav>
                    <ul className="flex gap-6 text-black">
                        <li><Link href="" className="hover:text-gray-600 transition-colors">New Arrivals</Link></li>
                        <li><Link href="" className="hover:text-gray-600 transition-colors">Men</Link></li>
                        <li><Link href="" className="hover:text-gray-600 transition-colors">Women</Link></li>
                        <li><Link href="" className="hover:text-gray-600 transition-colors">Kids</Link></li>
                        <li><Link href="" className="hover:text-gray-600 transition-colors">Sale</Link></li>
                    </ul>
                </nav>

                <div className="relative max-w-md w-full flex">
                    <Search className="absolute h-4 w-4 left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                        id="header-search"
                        type="text"
                        placeholder="Search for products..."
                        className="
                            pl-9 pr-3 py-1.5 min-w-0 w-full
                            placeholder:text-gray-400 placeholder:text-sm
                            transition-all
                            bg-[#F3F3F5] rounded-md
                        "
                    />
                </div>

                <div className="flex gap-2">
                    <button className="size-9 flex justify-center items-center transition-colors hover:bg-[#e9ebef] rounded-md cursor-pointer">
                        <Heart className="w-4 h-4 text-black" />
                    </button>

                    <button className="size-9 flex justify-center items-center transition-colors hover:bg-[#e9ebef] rounded-md cursor-pointer">
                        <UserRound className="w-4 h-4 text-black" />
                    </button>

                    <button className="size-9 flex justify-center items-center transition-colors hover:bg-[#e9ebef] rounded-md cursor-pointer">
                        <ShoppingCart className="w-4 h-4 text-black" />
                    </button>
                </div>
            </div>
        </header>
    );
}