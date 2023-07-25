import Link from "next/link";

export default function Button({ name, page }) {
  return (
    <Link href={page}>
      <button className="hover:text-white hover:bg-main-color rounded-full border border-main-color shadow-sm text-main-color text-md py-3 px-10">
        {name}
      </button>
    </Link>
  );
}
