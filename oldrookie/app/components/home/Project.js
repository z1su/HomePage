import Button from "@/app/components/basic/button";
export default function Project() {
  return (
    <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
      <div
        className="w-full main_container sm:sm_container pt-4 pb-6 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
  max-w-7xl"
      >
        <div
          className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5 sm:px-5"
        >
          <p className="inline text-lg font-medium text-main-color">
            our project
          </p>
          <div className="w-full flex flex-row sm:flex-col justify-between">
            <a className="sm:text-2xl text-4xl font-bold leading-none sm:mb-6">
              Our Projects
            </a>
            <Button name="More projects" page="/list" />
          </div>
        </div>
        <div className="flex sm:flex-col items-center sm:px-5 flex-row">
          <div className="w-full md:w-1/2 pr-1 sm:mb-4">
            <div className="block">
              <img
                src="/img/home/project_1.png"
                className="object-cover max-h-96 sm:max-h-96 btn- w-full h-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 pr-1">
            <div className="block">
              <img
                src="/img/home/project_2.png"
                className="object-cover max-h-96 sm:max-h-96 btn- w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
