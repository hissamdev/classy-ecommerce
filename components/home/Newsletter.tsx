import { Mail } from "lucide-react";

export default function Newsletter() {
    return (
        <section className="py-16 bg-black">
            <div className="container mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center aspect-square bg-white/10 rounded-full">
                        <Mail size={32} className="w-16" />
                    </div>
                    
                    <h2 className="mt-6 text-4xl font-bold text-center">Subscribe to Our Newsletter</h2>
                    <p className="mt-4 text-gray-300 text-center">
                        Get exclusive deals, new arrivals, and style tips delivered directly to your inbox.
                    </p>
                    <form action="submit" className="mt-6 mx-auto max-w-md flex h-9">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="
                                w-full px-2 rounded-md border border-gray-700
                                bg-white/10
                                placeholder:text-sm text-sm
                                focus:ring-2 ring-gray-600/70
                                outline-none
                            "
                        />
                        <button
                            className="
                                ml-4 px-4
                                text-black text-sm
                                transition-colors bg-white hover:bg-white/80
                                cursor-pointer rounded-md
                            "
                        >
                            Subscribe
                        </button>
                    </form>

                    <p className="mt-4 text-xs text-gray-400">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
                </div>
            </div>
        </section>
    )
}