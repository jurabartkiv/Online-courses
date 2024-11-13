import "./index.css";
import CoursesFiltering from "./components/courses/CoursesFiltering";
import Search from "./components/courses/search/Search";
import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div className="filteringBlock">
        <Search />
        <CoursesFiltering />
      </div>
    </>
  );
}

export default App;
