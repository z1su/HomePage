import ProjectItem from "./project-item";
export default function ProjectList(props) {
  const { events } = props;
  return (
    <div className="flex justify-center mb-[5rem] mt-[3rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="flex items-center justify-center">
            <ProjectItem
              title={event.title}
              img={event.img}
              subtitle={event.subtitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
