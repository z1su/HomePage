import Promotion from "@/app/components/about/promotion";
import AboutBanner from "@/app/components/about/banner";
import Project from "@/app/components/home/Project";
import BannerWithCTA from "./components/basic/cta-banner";

export default function Home() {
  return (
    <section className="">
      <Promotion />
      <AboutBanner />
      <Project />
      <BannerWithCTA />
    </section>
  );
}
