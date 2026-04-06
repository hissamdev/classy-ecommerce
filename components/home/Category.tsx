import { ArrowRight } from "lucide-react";
import Image from "next/image";

const categories = [
    { name: "Clothing", items: "2,340", alt: "Person posing in mirror", src: "/assets/person-looking-in-mirror.png" },
    { name: "Watches", items: "2,340", alt: "Monocles in front of dark background", src: "/assets/monocle-on-dark-background.png" },
    { name: "Footwear", items: "2,340", alt: "Person posing in mirror", src: "/assets/sneakers-cyan-orange.png" },
    { name: "Bags", items: "2,340", alt: "Person posing in mirror", src: "/assets/school-bags.png" },
    { name: "Accessories", items: "2,340", alt: "Person posing in mirror", src: "/assets/shaded-sunglasses.png" },
    { name: "Electronics", items: "2,340", alt: "Person posing in mirror", src: "/assets/headphone-and-telescope-lens.png" },
]

export default function Category() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-4xl font-bold text-black">Shop by Category</h2>
                        <p className="mt-2 text-gray-600">Browse our wide selection of products</p>
                    </div>

                    <div className="flex self-end items-center gap-2 text-sm transition-all cursor-pointer hover:gap-3 text-black">
                        View All
                        <ArrowRight className="w-4.5" />
                    </div>
                </div>

                <div className="mt-8 grid lg:grid-cols-6 gap-4">
                {categories.map((category) => {
                    return (
                        <div key={category.name} className="relative h-64 flex rounded-lg overflow-hidden cursor-pointer group">
                            <div className="absolute inset-0">
                                <Image
                                    alt="Category image"
                                    src={category.src}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-110 duration-500"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                            </div>

                            <div className="relative p-4 self-end">
                                <h3 className="text-lg">{category.name}</h3>
                                <span className="text-sm">{category.items} items</span>
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
        </section>
    );
}