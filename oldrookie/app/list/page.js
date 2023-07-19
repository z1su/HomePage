import ProjectList from "@/app/components/project/project-list";
import { getAllEvents } from "../dummy-data";
import Title from "@/app/components/header/title";
import Banner from "@/app/components/project/banner";
import BannerWithCTA from "@/app/components/basic/cta-banner";

export default function List() {
  const events = getAllEvents();

  return (
    <section>
      <Title
        name="Projects"
        subname="올드루키의 포트폴리오를 소개합니다."
      ></Title>
      <h1 className="main_text mt-20">What We Do</h1>
      <Banner className="" />
      <h1 className="main_text mt-20">Our Portfolio</h1>
      <ProjectList events={events} />
      <BannerWithCTA />
    </section>
  );
}
