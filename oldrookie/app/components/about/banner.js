export default function AboutBanner() {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:px-5 justify-between">
        <div>
          <a
            href="#"
            className="block w-80 h-80 p-6 border rounded-lg hover:bg-gray-100"
          >
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              01
            </h4>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              상생 <br></br> Win-win
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              올드루키는 조직과 이해관계자들의 상호 이익을 고려하며, 상호 협력을
              통해 모두에게 이로운 결과를 창출할 수 있도록 노력합니다.
            </p>
          </a>
        </div>
        <div className="px-8">
          <a
            href="#"
            className="block w-80 h-80 p-6 border rounded-lg hover:bg-gray-100"
          >
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              02
            </h4>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              신뢰 <br></br> Confidence
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              올드루키는 투명한 커뮤니케이션과 일관된 행동을 통해 직원 간,
              직원과 경영진 간,회사와 고객 간에 신뢰를 형성하고 유지하기 위해
              노력합니다.
            </p>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="block w-80 h-80 p-6 border rounded-lg hover:bg-gray-100"
          >
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              03
            </h4>

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              유연성 <br></br> Flexibility
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              올드루키는 변화하는 시장 조건과 비즈니스 환경에 빠르게 대응하고
              조정할 수 있도록 개방적이고 유연한 조직 문화를 운영합니다.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
