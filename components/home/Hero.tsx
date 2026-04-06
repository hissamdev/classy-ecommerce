import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-150">
        <div className="absolute inset-0 z-10">
            <Image
            className="object-cover opacity-80 z-30"
            alt="Person posing facing right"
            src="/assets/best-ecommerce-landing-page.jpeg"
            fill
            />
            <div className="absolute inset h-full w-full bg-linear-to-r from-black/70 to-transparent z-40"></div>
        </div>

        <div className="container relative mx-auto h-full flex items-center z-60">
            <div className="max-w-2xl">
            <span className="text-sm uppercase tracking-wider">Summer Collection 2026</span>
            <h1 className="mt-4 text-7xl font-bold">New Arrivals Are Here</h1>
            <p className="mt-4 text-xl text-gray-200">Discover the latest trends in fashion. Shop our exclusive summer collection with up to 50% off.</p>
            
            <div className="mt-4 flex gap-4">
                <Link href="/" className="px-4 py-2 w-fit flex items-center gap-2 transition-all hover:gap-4 text-black text-sm bg-white rounded-lg">
                Shop Now
                <ArrowRight className="w-5" />
                </Link>

                <Link href="/" className="px-4 py-2 w-fit flex items-center gap-2 text-black bg-white rounded-lg">
                View Collection
                </Link>
            </div>
            </div>
        </div>
        </section>
    );
}