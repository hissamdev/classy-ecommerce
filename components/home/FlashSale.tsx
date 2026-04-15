import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FlashSale() {
    return (
        <section className="py-14 bg-linear-to-r from-purple-600 to-blue-600">
            <div className="container mx-auto flex items-center justify-between">
                <div className="max-w-xl">
                    <div className="inline-flex px-4 py-2 items-center gap-2 text-sm font-bold bg-white/20 rounded-full">
                        <Clock className="w-4" />
                        Limited Time Offer
                    </div>
                    <h2 className="pt-5 text-5xl font-bold">
                        Flash Sale: 50% Off
                    </h2>
                    <p className="pt-5 text-lg text-purple-100">
                        Don't miss out on our biggest sale of the season. Grab
                        your favorites before they're gone!
                    </p>

                    <div className="mt-6 flex gap-7">
                        <Link
                            href="/"
                            className="inline-flex h-fit px-4 py-2 gap-2 text-[#9810fa] bg-white transition-colors hover:bg-white/90 rounded-lg"
                        >
                            Shop Now
                            <ArrowRight className="w-4" />
                        </Link>

                        <div className="flex gap-4 items-center">
                            <div>
                                <div className="text-3xl font-bold">23</div>
                                <div className="text-xs text-purple-200 uppercase">
                                    Hours
                                </div>
                            </div>
                            <div className="text-2xl font-bold">:</div>
                            <div>
                                <div className="text-3xl font-bold">45</div>
                                <div className="text-xs text-purple-200 uppercase">
                                    Mins
                                </div>
                            </div>
                            <div className="text-2xl font-bold">:</div>
                            <div>
                                <div className="text-3xl font-bold">32</div>
                                <div className="text-xs text-purple-200 uppercase">
                                    Secs
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative aspect-square max-w-70 w-full overflow-hidden rounded-xl">
                    <Image
                        alt="Shoe purple"
                        src="/assets/sneakers-cyan-orange.png"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
