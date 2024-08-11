import { Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import StudentsView from "./components/student/StudentsView";
import Home from "./Home";
import AddStudent from "./components/student/AddStudent";
import EditStudent from "./components/student/EditStudent";

function App() {
  return (
    <main className="container mt-5">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/view-students" element={<StudentsView />}></Route>
        <Route exact path="/add-student" element={<AddStudent />}></Route>
        <Route exact path="/edit-student/:id" element={<EditStudent />}></Route>
      </Routes>
    </main>
  );
}

export default App;
