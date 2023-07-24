import ProjectItem from "./project-item";

export default function ModelingFashionList(props) {
  const { events } = props;
  return (
    <div className="flex justify-center mb-[5rem] mt-[3rem]">
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="flex items-center justify-center">
            <ProjectItem
              id={event.id}
              category={event.category}
              title={event.title}
              image={event.image}
              subtitle={event.subtitle}
              content={event.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
