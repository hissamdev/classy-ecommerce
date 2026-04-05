import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white">
            <div className="sale-badge py-2 text-center text-sm bg-black">
                <span>Free Shipping on Orders Over $50 | Summer Sale - Up to 70% Off</span>
            </div>

            <div className="mx-auto py-4 w-fit flex items-center gap-4">
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
            </div>
        </header>
    );
}