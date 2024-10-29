import "./App.css";
import CourseCard from "./components/CoureCard/CourseCard";
import CoursesList from "./components/main-title/CoursesList/CoursesList";

function App() {
  const movie = {
    image: "https://example.com/image.jpg", // URL для изображения
    title: "Example Movie Title", // Название фильма
    description: "This is a description of the movie.", // Описание фильма
    rating: 4.5, // Оценка фильма, например, по 5-балльной шкале
    duration: "2h 15m", // Длительность фильма в часах и минутах
  };
  return <CourseCard {...movie} />;
}

export default App;
