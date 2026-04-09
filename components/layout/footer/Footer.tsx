import { LocateIcon, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const links = [
        {
            name: "Shop",
            items: [
                "New Arrivals",
                "Best Sellers",
                "Sale",
                "Gift Cards",
            ]
        },
        {
            name: "Company",
            items: [
                "About Us",
                "Careers",
                "Press",
                "Sustainability"
            ]
        },
        {
            name: "Help",
            items: [
                "Customer Service",
                "Shipping & Returns",
                "Size Guide",
                "FAQ"
            ]
        },
        {
            name: "Legal",
            items: [
                "Terms of Service",
                "Privacy Policy",
                "Cookie Policy",
                "Accessibility"
            ]
        }
    ]

    return (
        <footer className="py-16 bg-gray-900">
            <div className="container mx-auto">
                <div className="top pb-6 grid grid-cols-6 gap-8">
                    <div className="col-span-2">
                        {/* Heading */}
                        <h2 className="mb-4 text-xl uppercase font-bold">Shop</h2>

                        <div className="space-y-3">
                            <p className="text-sm text-gray-300">Your destination for quality fashion and lifestyle products. We bring you the latest trends at the best prices.</p>

                            <div className="flex items-center gap-2">
                                <MapPin className="w-4" />
                                <span className="text-sm text-gray-300">123 Fashion Street, NY 10001</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4" />
                                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4" />
                                <span className="text-sm text-gray-300">hissamdev@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    {links.map((section) => {
                        return (
                            <div className="flex-1">
                                <h3 className="mb-4 text-md font-bold">{section.name}</h3>
                                <ul className="space-y-2">
                                    {section.items.map((item) => {
                                        return (
                                            <li>
                                                <Link href="/" className="transition-colors text-sm text-gray-300 hover:text-white">{item}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>

                <div className="pt-6 flex justify-between items-center border-t border-gray-800">
                    <div className="flex items-center gap-4">
                        <span className="text-sm">Follow Us:</span>
                        Icon
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                        <span className="text-gray-300">We Accept:</span>
                        <span className="px-2 py-1 text-black font-semibold bg-white rounded">VISA</span>
                        <span className="px-2 py-1 text-black font-semibold bg-white rounded">MC</span>
                        <span className="px-2 py-1 text-black font-semibold bg-white rounded">AMEX</span>
                        <span className="px-2 py-1 text-black font-semibold bg-white rounded">PayPal</span>
                    </div>
                </div>

                <p className="mt-6 text-sm text-gray-500 text-center">© 2026 SHOP. All rights reserved.</p>
            </div>
        </footer>
    )
}