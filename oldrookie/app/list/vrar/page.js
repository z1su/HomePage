import Title from "@/app/components/header/title";
import ProjectList from "@/app/components/project/project-list";
import { getAllEvents, getFilteredCategory } from "@/app/dummy-data";
import BannerWithCTA from "@/app/components/basic/cta-banner";
import VrArList from "@/app/components/project/vrar-list";

export default function vrar() {
  const filteredevents = getFilteredCategory({ category: "VR/AR" });
  return (
    <section>
      <Title name="VR/AR" subname="올드루키의 프로젝트를 소개합니다."></Title>
      <div className="pt-12 pr-0 pb-14 pl-0 bg-white">
        <div
          className="pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl"
        >
          <div
            className="flex flex-col justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
          >
            <div className="text-center">
              <span>
                VR(가상현실)과 AR(증강현실)을 통해 새로운 시각적 체험과
                상호작용을 할 수 있으며
              </span>
              <br></br>
              <span>
                교육, 엔터테인먼트, 훈련 등 다양한 분야에서 활용 가능합니다.
              </span>
              <br></br>
              <span>
                또한 올드루키가 제작한 VR/AR 콘텐츠는 Web vR 기반으로, 별도의
                APP 다운로드 없이
              </span>
              <br></br>
              <span>
                URL 링크 단위로 공유 및 열람이 가능하여 귀사의 프로젝트를 외부에
                홍보하거나 배포하기에 용이합니다.
              </span>

              <div>
                <h1 className="main_text text-center mt-20">
                  VR/AR 프로젝트 보기
                </h1>
              </div>
            </div>
          </div>
        </div>
        <VrArList events={filteredevents} />
      </div>
      <BannerWithCTA />
    </section>
  );
}
