import VrArItem from "./vrar-item";

export default function VrArList(props) {
  const { events } = props;
  return (
    <div className="">
      {events.map((event) => (
        <div key={event.id} className="">
          <VrArItem
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
  );
}
