import { Clock } from "lucide-react";

export default function FlashSale() {
    return (
        <section className="py-14 bg-linear-to-r from-purple-600 to-blue-600">
            <div className="container mx-auto">
                <div className="inline-flex px-4 py-2 items-center gap-2 bg-white/20 rounded-full">
                    <Clock className="w-4" />
                    Limited Time Offer
                </div>
                <h2>Flash Sale</h2>
            </div>
        </section>
    )
}