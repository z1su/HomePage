import ProjectItem from "./project-item";

//project item의 부모 컴포넌트
//props로 events를 받아서 map을 돌려서 project item을 뿌려줌
//project item은 이미지, 타이틀, 서브타이틀을 받아서 뿌려줌
export default function ProjectList(props) {
  const { events } = props;
  return (
    <div className="flex justify-center mb-[5rem] mt-[3rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="flex items-center justify-center">
            <ProjectItem
              id={event.id}
              title={event.title}
              image={event.image}
              subtitle={event.subtitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
