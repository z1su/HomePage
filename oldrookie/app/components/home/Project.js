export default function Project() {
  return (
    <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
      <div
        className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
  max-w-7xl"
      >
        <div
          className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
        >
          <p className="inline text-xs font-medium">our project</p>
          <a className="text-3xl font-bold leading-none lg:text-3xl xl:text-3xl">
            Our Projects
          </a>
        </div>
        <div className="flex flex-col items-center sm:px-5 md:flex-row">
          <div className="w-full md:w-1/2 px-2">
            <div className="block">
              <img
                src="/img/home/project_1.png"
                className="object-cover max-h-64 sm:max-h-96 btn- w-full h-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <div className="block">
              <img
                src="/img/home/project_2.png"
                className="object-cover max-h-64 sm:max-h-96 btn- w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
