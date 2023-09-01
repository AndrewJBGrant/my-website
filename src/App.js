import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

function App() {


  return (
    <div className="App">
       <main id='home'>
      <Navbar />
      <Home />
      <About />
      <Projects />

<footer>
  {/* <h2>Contact andrewgrant2009@hotmail.com github linkdenw</h2> */}
</footer>

    </main>

    </div>
  );
}

export default App;
