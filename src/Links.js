import CV from "./cv.pdf";


function Links() {

return (
  <div className="links">

     <a href="https://www.linkedin.com/in/andrewjbgrant/" target="blank">
          <h2>linkedIn</h2>
        </a>
        <a href="https://github.com/AndrewJBGrant" target="blank">
          <h2>Github</h2>
        </a>

        <a href={CV} download="Andrew Grant CV">
          <h2>Download CV</h2>
        </a>


  </div>
)


}


export default Links;
