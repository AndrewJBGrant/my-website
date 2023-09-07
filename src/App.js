import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";



document.addEventListener("DOMContentLoaded", function() {

const navbar = document.querySelector(".navbar");
const header = document.querySelector("header");

const headerOptions = {
  rootMargin: "-100px 0px 0px 0px",
};

const headerObsever = new IntersectionObserver(function(
  entries,
  headerObsever
) {
entries.forEach(entry => {
//  console.log(entry.isIntersecting);
if(!entry.isIntersecting) {
  navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});
},
headerOptions);

headerObsever.observe(header);
});


function App() {
  return (
    <div className="App">
      <main>
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
