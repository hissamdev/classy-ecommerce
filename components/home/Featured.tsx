import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function Featured() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-4xl font-bold text-black">Featured Products</h2>
                        <p className="mt-2 text-gray-600">Handpicked favorites for you</p>
                    </div>
                    <div className="flex self-end items-center gap-2 text-sm transition-all cursor-pointer hover:gap-3 text-black">
                        View All
                        <ArrowRight className="w-4.5" />
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-4">
                    <div className="shadow-lg rounded-2xl overflow-hidden">
                        <div className="relative w-full h-89 ">
                            <Image
                                alt="Leather jacket"
                                src="/assets/leather-jacket.png"
                                fill
                                className="object-cover "
                            />
                        </div>

                        <div className="p-4">
                            <h3 className="text-xl text-black">Premium Denim Jacket</h3>

                            <div className="mt-7 flex items-center gap-1">
                                <div className="flex gap-0.5">
                                    <Star className="w-3 text-gray-300 hover:fill-yellow-400 hover:text-yellow-400" />
                                    <Star className="w-3 text-gray-300 hover:fill-yellow-400 hover:text-yellow-400" />
                                    <Star className="w-3 text-gray-300 hover:fill-yellow-400 hover:text-yellow-400" />
                                    <Star className="w-3 text-gray-300 hover:fill-yellow-400 hover:text-yellow-400" />
                                    <Star className="w-3 text-gray-300 hover:fill-yellow-400 hover:text-yellow-400" />
                                </div>

                                <div className="text-gray-500 text-xs">(256)</div>
                            </div>

                            <div className="mt-3 flex items-center gap-2 text-black">
                                <span className="text-black text-xl font-bold">$89.99</span>
                                <span className="text-gray-500 text-sm line-through">$149.99</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}