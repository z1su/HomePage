export default function VrArItem(props) {
  const { title, subtitle, id, image, category, content } = props;

  return (
    <div className="flex">
      <div className="pt-[13px] pb-[30px] flex sm:flex-col">
        <div className="">
          <img
            className="project_img mr-7 sm:mr-0"
            src={`/img/list/${id}.png`}
            alt={title}
          ></img>
        </div>
        <div className="">
          <h1 className="font-bold title mt-[13px]">{title}</h1>
          <h2 className="pt-[3px]">{subtitle}</h2>
          <p className="sm:text-xs">{content}</p>
        </div>
      </div>
    </div>
  );
}
