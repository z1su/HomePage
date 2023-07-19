export default function BannerWithCTA() {
  return (
    <div class="bg-slate-800 flex items-center w-screen justify-center max-h-full  bg-footer">
      <div class="">
        <div class="flex flex-col p-10  px-16 space-y-6 items-center text-center">
          <p class="font-light md:text-4xl text-6xl text-white tracking-wide">
            We will be your success partner,
          </p>
          <p class="font-light md:text-4xl text-6xl text-white tracking-wide">
            not a development agency.
          </p>
          <button class="rounded-full bg-stone-900 shadow-lg text-white text-lg py-4 px-6">
            Contact Us →
          </button>
        </div>
      </div>
    </div>
  );
}
