import BestSellers from "@/components/home/BestSellers";
import Category from "@/components/home/Category";
import Featured from "@/components/home/Featured";
import FlashSale from "@/components/home/FlashSale";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <Featured />
      <FlashSale />
      <BestSellers />
    </>
  );
}
