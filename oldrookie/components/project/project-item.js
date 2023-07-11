import Image from "next/image";
import 이미지 from "@/public/images/coding.jpg";
export default function ProjectItem(props) {
  const { title, subtitle, id, image } = props;

  //fix error please

  return (
    <div className="pr-[15px]">
      <Image src={이미지} alt={title} className="project_img" />
      <div className="pt-[13px] pb-[30px]">
        <h1 className="font-bold title">{title}</h1>
        <h2 className="subtitle pt-[3px]">{subtitle}</h2>
      </div>
    </div>
  );
}
