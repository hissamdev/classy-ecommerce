import { ArrowRight, Heart, Star } from "lucide-react";
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
                    <div className="shadow-lg rounded-2xl overflow-hidden group">
                        <div className="relative w-full h-89 overflow-hidden">
                            <Image
                                alt="Leather jacket"
                                src="/assets/leather-jacket.png"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500 "
                            />

                            <div className="relative p-4 flex justify-between">
                                <div className="w-fit flex flex-col gap-2">
                                    <span className="inline w-fit text-center px-2 py-1 text-xs bg-black rounded-lg">Best Seller</span>
                                    <span className="inline w-fit text-center px-2 py-1 text-xs bg-[#d4183d] rounded-lg">-40%</span>
                                </div>

                                <div className="w-9 h-9 flex justify-center items-center transition-all opacity-0 group-hover:opacity-100 bg-white/90 hover:bg-white rounded-lg">
                                    <Heart className="text-black w-4" />
                                </div>
                            </div>
                        </div>

                        <div className="p-4">
                            <h3 className="inline text-xl text-black hover:underline cursor-pointer">Premium Denim Jacket</h3>

                            <div className="mt-7 flex items-center gap-1">
                                <div className="flex gap-0.5">
                                    <Star className="w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="w-3 fill-yellow-400 text-yellow-400" />
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