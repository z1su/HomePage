import Name from "./name";
import SubName from "./subname";

export default function Title({ name, subname }) {
  return (
    <div className="pt-[10.25rem] bg-title w-screen min-h-[28rem]">
      <SubName subname={subname} />
      <Name name={name} />
    </div>
  );
}
