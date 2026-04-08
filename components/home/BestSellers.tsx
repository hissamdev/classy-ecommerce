"use client"

import { useState } from "react"
import { productList } from "./Featured"
import clsx from 'clsx'
import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";

export default function BestSellers() {
    const [hover, setHover] = useState("men");
    const baseClasses = "flex-1 text-black text-center transition-colors hover:bg-white rounded-xl cursor-pointer";

    const filteredProducts = productList.filter(p => p.category.includes(hover))

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-center text-black font-bold text-4xl">Best Sellers</h2>
                <p className="pt-2 text-center text-gray-600 ">Most popular products this month</p>

                <div>
                    <div className="mt-8 max-w-md mx-auto p-1 flex gap-1 rounded-xl bg-[#ECECF0] ">
                        <button onClick={() => setHover('men')} className={clsx(baseClasses, { 'bg-white' : hover === "men" })}>Men</button>
                        <button onClick={() => setHover('women')} className={clsx(baseClasses, { 'bg-white' : hover === "women" })}>Women</button>
                        <button onClick={() => setHover('kids')} className={clsx(baseClasses, { 'bg-white' : hover === "kids" })}>Kids</button>
                    </div>

                    <div className="mt-12 grid grid-cols-4 gap-4">
                        {
                            filteredProducts.map((product) => {
                                return (
                            <div key={product.name} className="shadow-lg rounded-2xl overflow-hidden group">
                                <div className="relative w-full h-89 overflow-hidden">
                                    <Image
                                        alt={product.imageAlt}
                                        src={product.image}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500 "
                                    />

                                    <div className="relative p-4 w-full h-full flex flex-col justify-between">
                                        <div className="w-full flex justify-between">
                                            <div className="w-fit flex flex-col gap-2">
                                                {product.tags.map((tag) => {
                                                    return (
                                                        <span
                                                            key={tag.name}
                                                            className={`inline w-fit text-center px-2 py-1 text-xs rounded-lg
                                                                ${tag.variant === "black" ? "bg-black" : "bg-[#d4183d]"}
                                                        `}>
                                                            {tag.name}
                                                        </span>
                                                    );
                                                })}
                                            </div>

                                            <div className="w-9 h-9 flex justify-center items-center transition-all opacity-0 group-hover:opacity-100 bg-white/90 hover:bg-white rounded-lg cursor-pointer">
                                                <Heart className="text-black w-4" />
                                            </div>
                                        </div>

                                        <div className="
                                            py-2 flex justify-center items-center gap-3 text-sm font-bold bg-black 
                                            transition-all translate-y-15 duration-100 group-hover:translate-y-0
                                            hover:bg-[#1E2939] rounded-lg cursor-pointer
                                        ">
                                            <ShoppingCart className="w-4" />
                                            Add to Cart
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h3 className="inline text-xl text-black hover:underline cursor-pointer">{product.name}</h3>

                                    <div className="mt-7 flex items-center gap-1">
                                        <div className="flex gap-0.5">
                                            <Star className="w-3 fill-yellow-400 text-yellow-400" />
                                            <Star className="w-3 fill-yellow-400 text-yellow-400" />
                                            <Star className="w-3 fill-yellow-400 text-yellow-400" />
                                            <Star className="w-3 fill-yellow-400 text-yellow-400" />
                                            <Star className="w-3 text-gray-300 hover:fill-yellow-400 hover:text-yellow-400" />
                                        </div>

                                        <div className="text-gray-500 text-xs">({product.reviews})</div>
                                    </div>

                                    <div className="mt-3 flex items-center gap-2 text-black">
                                        <span className="text-black text-xl font-bold">${product.price}</span>
                                        {product.sale && <span className="text-gray-500 text-sm line-through">${product.sale}</span>}
                                    </div>
                                </div>
                            </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}