export default function Promotion() {
  return (
    <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
      <div
        className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl"
      >
        <div className="flex flex-col items-center sm:px-5 md:flex-row">
          <div className="flex flex-col items-start justify-between w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
            <div
              className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
            >
              <p className="inline text-xs font-medium">About Us</p>
              <a className="text-3xl font-bold leading-none lg:text-3xl xl:text-3xl">
                IT 전문 파트너가 되겠습니다.
              </a>
              <div className="pt-2 pr-0 pb-0 pl-0">
                <p className="text-gray-500 text-sm font-medium inline">
                  고객사의 성공적인 IT 비즈니스를 지원합니다. <br></br>개발
                  대행사가 아닌 진정한 파트너가 되기 위해 노력하겠습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="block">
              <img
                src="/img/about/promotion.png"
                className="object-cover max-h-64 sm:max-h-96 btn- w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
