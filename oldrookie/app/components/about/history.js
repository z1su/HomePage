export default function History() {
  return (
    <div className="w-full max-w-screen-lg mx-auto p-4 md:py-8">
      <p className="text-center">the way we walked</p>
      <h1 className="main_text mt-5 mb-20">Oldrookie’s History</h1>
      <div className="flex justify-center items-center">
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.0 mr-1.0 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-lg font-semibold leading-none text-gray-900">
              2022
            </time>
            <p class="text-base font-normal text-gray-900">
              서울창업허브 창동지점 입주기업 선정
            </p>
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-lg font-semibold leading-none text-gray-900">
              2021
            </time>
            <p class="text-base font-normal text-gray-900">
              삼육대학교 창업지원단 창업교육프로그램_주최·주관 기업 선정{" "}
              <br></br> 삼육대학교 일자리본부 메타버스 제작 <br></br>{" "}
              노원그린캠퍼스타운사업단
            </p>
          </li>

          <li class="ml-4 mb-10">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-lg font-semibold leading-none text-gray-900">
              2020
            </time>
            <p class="text-base font-normal text-gray-900">
              2020 삼육대학교 교육혁신단 수상한 해커톤_주최·주관 기업 선정{" "}
              <br></br> 2020 스타트업기업 대일(칸사이, 오사카)투자진출 교육
              캠프_온라인 IR 진행
            </p>
          </li>

          <li class="ml-4 ">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-lg font-semibold leading-none text-gray-900">
              2019
            </time>
            <p class="text-base font-normal text-gray-900">
              2019 KDB스타트업 프로그램_본선진출 <br></br>
              2019 군산 예술-콘텐츠 스테이션 창업 아이디어 공모전_장려상{" "}
              <br></br>
              2019 강남 창업 해커톤 본선진출 (20팀) <br></br>
              2019 강남 창업 해커톤 코엑스 IR피칭 <br></br>
              2019-1 SU-StartUp 창업오디션_최우수상 <br></br>
              2019-2 SU-StartUp 부스트캠프_대상 <br></br>
              2019 금천구 IR대회 본선 피칭 <br></br>
              2019 창업300_본선 진출 <br></br>
              2019 제 5회 부산 국제창업 아이디어 경진대회_우수상 <br></br>
              2019 VR/AR 전문가 양성 교육프로그램 선정_우수상 <br></br>
              2019 예술경영지원센터 문화예술 법률지원 일반/심화 컨설팅 선정{" "}
              <br></br>
              2019 노원 캠퍼스타운 창업아이디어 경진대회_우수상 <br></br>
              2019 CBC KOREA 창업경진대회_본선 12기업 선정 <br></br>
              2019 KOREA-OSAKA Innovation Day_최종 10개 기업 선정_오사카 현지 IR
              진행 <br></br>
              2019 가천대 글로벌 IR컨퍼런스_최종 5개 기업 선정_영국 현지
              엑셀러레이팅/IR 진행 <br></br>
              2019 법인 설립
            </p>
          </li>
        </ol>

        {/* <div className="text-left">
          <div className="mb-12">
            <h2 className="font-bold text-xl mb-5">2022</h2>
            <p>서울창업허브 창동지점 입주기업 선정</p>
          </div>
          <div className="mb-12">
            <h2 className="font-bold text-xl mb-5">2021</h2>
            <p>삼육대학교 창업지원단 창업교육프로그램_주최·주관 기업 선정</p>
            <p>삼육대학교 일자리본부 메타버스 제작</p>
            <p>노원그린캠퍼스타운사업단 추추마켓 메타버스 제작</p>
          </div>

          <div className="mb-12">
            <h2 className="font-bold text-xl mb-5">2020</h2>
            <p>2020 삼육대학교 교육혁신단 수상한 해커톤_주최·주관 기업 선정</p>
            <p>
              2020 스타트업기업 대일(칸사이, 오사카)투자진출 교육 캠프_온라인 IR
              진행
            </p>
          </div>

          <div className="mb-12">
            <h2 className="font-bold text-xl mb-5">2019</h2>
            <p>2019 KDB스타트업 프로그램_본선진출</p>
            <p>2019 군산 예술-콘텐츠 스테이션 창업 아이디어 공모전_장려상</p>
            <p>2019 강남 창업 해커톤 본선진출 (20팀)</p>
            <p>2019 강남 창업 해커톤 코엑스 IR피칭</p>
            <p>2019-1 SU-StartUp 창업오디션_최우수상</p>
            <p>2019-2 SU-StartUp 부스트캠프_대상</p>
            <p>2019 금천구 IR대회 본선 피칭</p>
            <p>2019 창업300_본선 진출</p>
            <p>2019 제 5회 부산 국제창업 아이디어 경진대회_우수상</p>
            <p>2019 VR/AR 전문가 양성 교육프로그램 선정_우수상</p>
            <p>2019 예술경영지원센터 문화예술 법률지원 일반/심화 컨설팅 선정</p>
            <p>2019 노원 캠퍼스타운 창업아이디어 경진대회_우수상</p>
            <p>2019 CBC KOREA 창업경진대회_본선 12기업 선정</p>
            <p>
              2019 KOREA-OSAKA Innovation Day_최종 10개 기업 선정_오사카 현지 IR
              진행
            </p>
            <p>
              2019 가천대 글로벌 IR컨퍼런스_최종 5개 기업 선정_영국 현지
              엑셀러레이팅/IR 진행
            </p>
            <p>2019 법인 설립</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
