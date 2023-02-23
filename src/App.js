import Navbar from "./Navbar";
import "./App.css";

function App() {


  return (
    <div className="App">
       <main id='home'>
      <Navbar />
      <section className='home'>
        <h1>home!!
           my name is Andrew Grant</h1>
      </section>
      <section className='about' id='about'>
        <h1>about me skills and background</h1>
      </section>
      <section className='projects' id='projects'>
        <h1>projects some projects</h1>
      </section>
      <section className='contact' id='contact'>
        <h1>contact</h1>
      </section>
    </main>

    </div>
  );
}

export default App;
