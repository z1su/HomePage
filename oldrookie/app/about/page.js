import Title from "@/components/header/title";
import AboutBanner from "@/components/about/banner";
import History from "@/components/about/history";

export default function About() {
  return (
    <section>
      <Title name="About us" subname="We’re oldrookie"></Title>
      <div className="flex flex-col items-center justify-center max-w-90 h-screen"></div>
      <AboutBanner />
      <History />
    </section>
  );
}
