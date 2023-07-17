import Title from "@/app/components/header/title";
import AboutBanner from "@/app/components/about/banner";
import History from "@/app/components/about/history";
import Promotion from "@/app/components/about/promotion";
import BannerWithCTA from "@/app/components/basic/cta-banner";

export default function About() {
  return (
    <section>
      <Title name="About us" subname="We’re oldrookie"></Title>
      <div className="flex flex-col items-center justify-center max-w-90 h-screen">
        
      </div>
      <Promotion />
      <AboutBanner />
      <History />
      <BannerWithCTA />
    </section>
  );
}
