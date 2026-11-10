import React, { useState } from "react";
import Header from "./components/Header";
import CourseSection from "./components/CourseSection";
import VideoPlayer from "./components/VideoPlayer";
import { categories } from "./data/courses";

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <>
      <Header />
      <main id="home">
        <section className="hero">
          <span className="eyebrow">APRENDA A PROGRAMAR</span>
          <h1>Sua próxima aula começa aqui.</h1>
          <p>Explore cursos gratuitos de programação.</p>
        </section>
        {categories.map((category) => (
          <CourseSection key={category.id} category={category} onSelect={setSelectedCourse} />
        ))}
        <p className="prototype-note">Protótipo ilustrativo da aplicação que vamos desenvolver.</p>
      </main>
      <VideoPlayer course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </>
  );
}
export default App;