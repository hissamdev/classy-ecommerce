export default function FeaturedBrands() {
    const brands = [ "Nike", "Adidas", "Puma", "Gucci", "Zara", "H&M", "Levi's", "Calvin Klein" ]

    return (
        <section className="py-16 border-t bg-white">
            <div className="container mx-auto">
                <h2 className="text-center text-black text-4xl font-bold">Featured Brands</h2>
                <p className="mt-4 text-center text-gray-600">Shop from your favorite brands</p>

                <div className="mt-8 h-19 grid grid-cols-8 gap-8">
                    {brands.map((brand) => {
                        return (
                            <h3
                                key={brand}
                                className="flex-1 flex justify-center items-center
                                text-xl font-bold text-gray-400 hover:text-gray-900
                                bg-gray-50 hover:bg-gray-100 rounded-xl
                                transition-colors cursor-pointer">
                                {brand}
                            </h3>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}