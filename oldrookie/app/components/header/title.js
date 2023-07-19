import Name from "./name";
import SubName from "./subname";

export default function Title({ name, subname }) {
  return (
    <div className="bg-title w-screen min-h-[22rem] flex flex-row items-center">
      <div className="">
        <SubName subname={subname} />
        <Name name={name} />
      </div>
    </div>
  );
}
