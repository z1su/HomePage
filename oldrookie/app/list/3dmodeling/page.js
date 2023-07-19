import Title from "@/app/components/header/title";
import ProjectList from "@/app/components/project/project-list";
import { getAllEvents, getFilteredCategory } from "@/app/dummy-data";
import BannerWithCTA from "@/app/components/basic/cta-banner";
import ModelingSpaceList from "@/app/components/project/modeling-space-list";
import ModelingFashionList from "@/app/components/project/modeling-fashion-list";

export default function modeling() {
  const filteredfashion = getFilteredCategory({
    category: "Fashion 3D Modeling",
  });
  const filteredspace = getFilteredCategory({
    category: "Space 3D Modeling",
  });
  return (
    <section>
      <Title
        name="3D 모델링"
        subname="올드루키의 프로젝트를 소개합니다."
      ></Title>
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
                웹 빌드, 촬영, 가공 및 편집으로 가상공간 제작하여 기업의 브랜드
                아이덴티티를 효과적으로 표현하고
              </span>
              <br></br>
              <span>
                상품 소개 상세페이지를 보다 풍성하게 채울 수 있습니다.
              </span>
              <br></br>
              <span>
                특히 오브젝트 3D 모델링은 포토그래메트리(Photogrammetry) 기술을
                사용하여
              </span>
              <br></br>
              <span>
                상품의 실물 그대로의 생생함을 3D 그래픽으로 구현할 수 있습니다.
              </span>

              <div className="text-center">
                <h1 className="main_text">공간 3D 모델링</h1>
                <span>
                  브랜드의 아이덴티티를 나타내고 상품을 전시할 수 있는
                  쇼윈도우를 VR 공간에 제작하였습니다.
                </span>{" "}
                <br></br>
                <span>
                  브랜드의 스토리와 이미지를 기반으로 공간을 기획하고 브랜드
                  상품을 전시할 수 있도록 공간을 제작하였습니다.
                </span>
              </div>
            </div>
          </div>
        </div>
        <ModelingSpaceList events={filteredspace} />
        <div className="text-center">
          <h1 className="main_text my-5">오브젝트 3D 모델링</h1>
          <span>
            브랜드의 상품을 포토그래메트리(Photogrammetry) 기술을 활용하여 360º
            돌려볼 수 있는 3D 모델을 제작하였습니다.
          </span>
          <br></br>
          <span>
            2D 이미지로만 구성하던 브랜드의 상품소개 페이지를 3D 모델을 통해
            더욱 다채롭고 풍성하게 채워넣을 수 있습니다.
          </span>
        </div>
        <ModelingFashionList className="cards" events={filteredfashion} />
      </div>
      <BannerWithCTA />
    </section>
  );
}
