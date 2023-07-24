export default function Banner() {
  return (
    <div
      className="w-full pt-4 main_container sm:sm_container pb-6  mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
    max-w-7xl"
    >
      <div className="flex flex-row justify-between sm:flex sm:flex-col sm:items-center sm:px-5">
        <div className="sm:mb-3">
          <a
            href="/list/vrar"
            className="group flex flex-col max-w-custom-size h-80 p-6 border rounded-lg hover:bg-banner01 hover:bg-cover"
          >
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-transparent">
              01
            </h4>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-transparent">
              VR/AR
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 group-hover:text-transparent">
              VR(가상현실)과 AR(증강현실)을 통해 새로운 시각적 체험과 상호작용을
              할 수 있으며 교육, 엔터테인먼트, 훈련 등 다양한 분야에서 활용
              가능합니다.
            </p>
          </a>
        </div>

        <div className="sm:mb-3">
          <a
            href="#"
            className="group flex flex-col max-w-custom-size h-80 p-6 border rounded-lg hover:bg-banner02 hover:bg-cover"
          >
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-transparent">
              02
            </h4>

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-transparent">
              3D 모델링
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 group-hover:text-transparent">
              웹 빌드, 촬영, 가공 및 편집으로 가상공간 제작하여 기업의 브랜드
              아이덴티티를 효과적으로 표현하고 상품 소개 상세페이지를 보다
              풍성하게 채울 수 있습니다.
            </p>
          </a>
        </div>

        <div className="sm:mb-3">
          <a
            href="#"
            className="flex flex-col max-w-custom-size h-80 p-6 border rounded-lg group hover:bg-banner03 hover:bg-cover"
          >
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-transparent">
              03
            </h4>

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-transparent">
              Web/App
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 group-hover:text-transparent">
              반응형 웹 또는 네이티브 앱, 하이브리드 앱을 개발해 드립니다.
              귀사의 다양한 비즈니스에 올드루키의 기술을 결합하여 성공적인 기술
              전문 파트너가 되어드립니다.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
