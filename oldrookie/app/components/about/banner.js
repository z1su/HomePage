export default function AboutBanner() {
  return (
    <div
      className="w-full pt-4 main_container sm:sm_container pb-6  mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
    max-w-7xl"
    >
      <div className="flex flex-row justify-between sm:flex sm:flex-col sm:items-center sm:px-5">
        <div className="sm:mb-3">
          <a
            href="#"
            className="group flex flex-col max-w-custom-size h-80 p-6 border rounded-lg hover:bg-main-color"
          >
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white">
              01
            </h4>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white">
              상생 <br></br> Win-win
            </h5>
            <p className="font-normal dark:text-gray-400 group-hover:text-white">
              올드루키는 조직과 이해관계자들의 상호 이익을 고려하며, 상호 협력을
              통해 모두에게 이로운 결과를 창출할 수 있도록 노력합니다.
            </p>
          </a>
        </div>

        <div className="sm:mb-3">
          <a
            href="#"
            className="group flex flex-col max-w-custom-size h-80 p-6 border rounded-lg hover:bg-main-color"
          >
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white">
              02
            </h4>

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white">
              신뢰 <br></br> Flexibility
            </h5>
            <p className="font-normal dark:text-gray-400 group-hover:text-white">
              올드루키는 변화하는 시장 조건과 비즈니스 환경에 빠르게 대응하고
              조정할 수 있도록 개방적이고 유연한 조직 문화를 운영합니다.
            </p>
          </a>
        </div>

        <div className="sm:mb-3">
          <a
            href="#"
            className="group flex flex-col max-w-custom-size h-80 p-6 border rounded-lg hover:bg-main-color"
          >
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white">
              03
            </h4>

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white">
              유연성 <br></br> Flexibility
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 group-hover:text-white">
              올드루키는 변화하는 시장 조건과 비즈니스 환경에 빠르게 대응하고
              조정할 수 있도록 개방적이고 유연한 조직 문화를 운영합니다.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
