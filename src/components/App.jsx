import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";

import Reviews from "./Reviews/Reviews";
import Review from "./Review/Review";

import AboutMe from "./AboutMe/AboutMe";
import MyStory from "./AboutMe/MyStory";
import Hobbies from "./AboutMe/Hobbies";
import Contact from "./AboutMe/Contact";

import AboutUs from "./AboutUs/AboutUs";
// Se quiser adicionar SiteHistory/SiteMission depois, importe aqui.

import PageNotFound from "./PageNotFound/PageNotFound";

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Buscando os dados da API de avaliações
    fetch("https://emoji-critic.pt-br.tripleten-services.com/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => console.error("Erro ao buscar avaliações:", err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route
          path="/reviews/:reviewId"
          element={<Review reviews={reviews} />}
        />

        <Route path="/about-me" element={<AboutMe />}>
          <Route path="my-story" element={<MyStory />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/about-us" element={<AboutUs />} />

        {/* Rota curinga 404 - sempre por último */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
