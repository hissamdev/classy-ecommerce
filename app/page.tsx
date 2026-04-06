import Image from "next/image";

export default function Home() {
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

      <div className="container relative mx-auto h-full z-60">
        <div>
          <span className="text-sm uppercase tracking-wider ">Summer Collection 2026</span>
        </div>
      </div>
    </section>
  );
}
