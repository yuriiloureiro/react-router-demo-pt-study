import "./App.css";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Reviews from "./Reviews/Reviews";
import AboutMe from "./AboutMe/AboutMe";
import AboutUs from "./AboutUs/AboutUs";
import MyStory from "./AboutMe/MyStory";
import Hobbies from "./AboutMe/Hobbies";
import Contact from "./AboutMe/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />

        <Route path="/about-me" element={<AboutMe />}>
          <Route path="my-story" element={<MyStory />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
