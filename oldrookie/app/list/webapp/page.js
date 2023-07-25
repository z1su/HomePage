import Title from "@/app/components/header/title";
import ProjectList from "@/app/components/project/project-list";
import { getAllEvents, getFilteredCategory } from "@/app/dummy-data";
import BannerWithCTA from "@/app/components/basic/cta-banner";

export default function webapp() {
  const filteredevents = getFilteredCategory({ category: "web/App" });
  return (
    <section>
      <Title name="Web/App" subname="올드루키의 프로젝트를 소개합니다."></Title>
      <div className="pt-12 pr-0 pb-14 pl-0 bg-white">
        <div
          className="pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl"
        >
          <div
            className="sm:sm_container flex flex-col justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
          >
            <div className="text-center sm:text-sm">
              <span>
                반응형 웹 또는 네이티브 앱, 하이브리드 앱을 개발해 드립니다.{" "}
                <br></br>
                귀사의 다양한 비즈니스에 올드루키의 기술을 결합하여 성공적인
                기술 전문 파트너가 되어드립니다.<br></br> 올드루키는 단순히
                요구사항에 맞춰 개발하는 것에 그치지 않고, <br></br>제안사의
                니즈를 파악하여 브랜드 아이덴티티에 적합한 전략을 수립합니다.
              </span>
            </div>

            <div>
              <h1 className="main_text text-center sm:sm_main_text">
                Web/App 프로젝트 보기
              </h1>
            </div>
          </div>
        </div>
        <ProjectList events={filteredevents} />
      </div>
      <BannerWithCTA />
    </section>
  );
}
