export default function ProjectItem(props) {
  const { title, subtitle, id, image, category, content } = props;

  return (
    <div className="pr-[15px]">
      <div className="pt-[13px] pb-[30px]">
        <img
          className="project_img"
          src={`/img/list/${id}.png`}
          alt={title}
        ></img>
        <h1 className="font-bold title mt-[13px]">{title}</h1>
        <h2 className="subtitle pt-[3px]">{subtitle}</h2>
      </div>
    </div>
  );
}
