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
      {/* <section className='contact' id='contact'>
        <h1>contact</h1>
      </section> */}
    </main>

    </div>
  );
}

export default App;
