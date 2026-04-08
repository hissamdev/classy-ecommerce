import { ArrowRight, Heart, ShoppingCart, Star, VariableIcon } from "lucide-react";
import Image from "next/image";

const featured = [
    {
        name: "Premium Denim Jacket",
        price: "89.99",
        sale: "149.99",
        reviews: "256",
        image: "/assets/leather-jacket.png",
        imageAlt: "Leather jacket",
        tags: [
            { name: "Best Seller", variant: "black" },
            { name: "-40%", variant: "red" },
        ]
    },

    {
        name: "Wireless Headphones Pro",
        price: "199.99",
        sale: "",
        reviews: "432",
        image: "/assets/headphone-and-telescope-lens.png",
        imageAlt: "Leather jacket",
        tags: [
            { name: "New", variant: "black" },
        ]
    },

    {
        name: "Classic Slim Fit Jeans",
        price: "59.99",
        sale: "89.99",
        reviews: "189",
        image: "/assets/slim-fit-jeans.png",
        imageAlt: "Classic Slim Fit Jeans",
        tags: [
            { name: "-33%", variant: "red" },
        ]
    },

    {
        name: "Urban Backpack",
        price: "79.99",
        sale: "",
        reviews: "298",
        image: "/assets/school-bags.png",
        imageAlt: "Urban Backpack",
        tags: []
    },

    {
        name: "Casual Cotton T-Shirt",
        price: "24.99",
        sale: "39.99",
        reviews: "567",
        image: "/assets/cotton-t-shirt.png",
        imageAlt: "Casual Cotton T-Shirt",
        tags: [
            { name: "-38%", variant: "red" }
        ]
    },

    {
        name: "Leather Wallet",
        price: "49.99",
        sale: "",
        reviews: "123",
        image: "/assets/leather-wallet.png",
        imageAlt: "Leather Wallet",
        tags: [
            { name: "Trending", variant: "black" }
        ]
    },

    {
        name: "Running Shoes Elite",
        price: "129.99",
        sale: "179.99",
        reviews: "412",
        image: "/assets/running-shoes-elite.png",
        imageAlt: "Running Shoes Elite",
        tags: [
            { name: "-28%", variant: "red" }
        ]
    },

    {
        name: "Designer Sunglasses",
        price: "159.99",
        sale: "",
        reviews: "234",
        image: "/assets/shaded-sunglasses.png",
        imageAlt: "Designer Sunglasses",
        tags: [
            { name: "Limited", variant: "black" }
        ]
    }
]

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

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featured.map((product) => {
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
                        );
                    })}
                </div>
            </div>
        </section>
    )
}