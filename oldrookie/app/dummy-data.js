const PROJECT = [
  {
    id: "e1",
    title: "빈센트 반 고흐전",
    subtitle: "WebVR 전시회 (전체 공간 VR 제작)",
    category: "VR/AR",
    image: "/images/coding.jpg",
    isFeatured: false,
  },

  {
    id: "e2",
    title: "조혜원작가 개인전",
    subtitle: "WebVR 전시회 (전체 공간 VR 제작)",
    category: "VR/AR",
    image: "images/tegw.jpg",
    isFeatured: false,
  },

  {
    id: "e3",
    title: "조혜원작가 ‘시작된 노랑씨의 여정’",
    subtitle: "WebVR 전시회 (360º VR 촬영)",
    category: "VR/AR",
    image: "images/coding.jpg",
    isFeatured: false,
  },

  {
    id: "e4",
    title: "DAUSPICE",
    subtitle: "브랜드 show window 3D modeling",
    category: "3D Modeling",
    image: "images/coding.jpg",
    isFeatured: false,
  },

  {
    id: "e5",
    title: "Loom Loom",
    subtitle: "브랜드 show window 3D modeling",
    category: "3D Modeling",
    image: "images/coding.jpg",
    isFeatured: false,
  },

  {
    id: "e6",
    title: "Sukee",
    subtitle: "브랜드 show window 3D modeling",
    category: "3D Modeling",
    image: "images/coding.jpg",
    isFeatured: false,
  },
  {
    id: "e7",
    title: "Loom Loom",
    subtitle: "패션 상품 3D Modeling",
    category: "3D Modeling",
    image: "images/coding.jpg",
    isFeatured: false,
  },

  {
    id: "e8",
    title: "SAY-_YEON",
    subtitle: "패션 상품 3D Modeling",
    category: "3D Modeling",
    image: "images/coding.jpg",
    isFeatured: false,
  },

  {
    id: "e9",
    title: "SAY-_YEON",
    subtitle: "패션 상품 3D Modeling",
    category: "3D Modeling",
    image: "images/coding.jpg",
    isFeatured: false,
  },

  {
    id: "e10",
    title: "SAY-_YEON",
    subtitle: "패션 상품 3D Modeling",
    category: "3D Modeling",
    image: "images/coding.jpg",
    isFeatured: false,
  },

  {
    id: "e11",
    title: "삼육대학교 학술정보원",
    subtitle: "반응형 Web 이벤트 페이지 제작",
    category: "web/App",
    image: "images/coding.jpg",
    isFeatured: false,
  },

  {
    id: "e12",
    title: "멋쟁이 사자처럼 at 삼육대",
    subtitle: "반응형 Web 페이지 제작",
    category: "web/App",
    image: "images/coding.jpg",
    isFeatured: false,
  },

  {
    id: "e13",
    title: "멋쟁이 사자처럼 at 삼육대",
    subtitle: "반응형 Web 페이지 제작",
    category: "web/App",
    image: "images/coding.jpg",
    isFeatured: false,
  },

  {
    id: "e14",
    title: "SYUFESTA",
    subtitle: "반응형 Web 페이지 제작",
    category: "web/App",
    image: "images/coding.jpg",
    isFeatured: false,
  },

  {
    id: "e15",
    title: "두유 Know 잔디?",
    subtitle: "반응형 Web 페이지 제작",
    category: "web/App",
    image: "images/coding.jpg",
    isFeatured: false,
  },

  {
    id: "e16",
    title: "클러버",
    subtitle: "application 제작",
    category: "web/App",
    image: "images/coding.jpg",
    isFeatured: false,
  },

  {
    id: "e17",
    title: "팜클라우드",
    subtitle: "반응형 Web 제작",
    category: "web/App",
    image: "images/coding.jpg",
    isFeatured: false,
  },

  {
    id: "e18",
    title: "항만 자율주행 운반차량 인터페이스",
    subtitle: "반응형 Web 제작",
    category: "web/App",
    image: "images/coding.jpg",
    isFeatured: false,
  },

  {
    id: "e19",
    title: "디젤트럭",
    subtitle: "application 제작",
    category: "web/App",
    image: "images/coding.jpg",
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return PROJECT.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return PROJECT;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = PROJECT.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return PROJECT.find((event) => event.id === id);
}

function Parent() {
  const parentFunction = (x) => {
    console.log(x);
  };

  return <Child parentFunction={parentFunction}></Child>;
}

function Child({ parentFunction }) {
  const [data, setData] = useState(2);
  parentFunction(data);
  return <div>Child</div>;
}
