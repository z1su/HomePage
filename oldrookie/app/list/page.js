import ProjectList from "@/components/project/project-list";
import { getAllEvents } from "../dummy-data";
import Title from "@/components/header/title";
import Footer from "@/components/footer/footer";
import Banner from "@/components/project/banner";

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
    </section>
  );
}
