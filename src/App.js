import React from "react";
import { Welcome, Experience, Projects, Skills, Contact } from "./pages";
import { Header} from "./layout";
import "./App.css";



function App() {
  return (
    <main>
      <Header />
      <Welcome />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
