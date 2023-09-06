
import JavaScript from './icons/javaScriptyellow.svg';
import RubyOnRails from './icons/railsonrails.svg';
import Css from './icons/css2.svg';
import react from './icons/react.svg';
import html from './icons/html.svg';
import figma from './icons/figma.svg'



const Badge = ({ children, color, ...props }) => {
  return <span className={`badge ${color}`} {...props}>{children}</span>
}

const Skills = () =>  {





  return (
    <>
     <div className="skill-card"> <Badge>JavaScript<img className="icons" src={ JavaScript } alt="JS Logo"/></Badge>  </div>



      <Badge color="red">CSS<img className="icons" src={ Css } alt="CSS-logo" /></Badge>
      <Badge color="green">Ruby on Rails<img className="icons" src={ RubyOnRails } alt="JS Logo" /></Badge>


      {/* <Badge color="blue" onClick={() => {
        console.log('clicked!')}}>Figma<img src={ figma } alt="figma-logo" /></Badge>
     <Badge color="yellow">HTML<img src={ html } alt="HTML-logo" /></Badge> */}

    </>
  )








}

export default Skills;








  // <>
  //   <span> <h4>JavaScript</h4> <img src={ JSIcon } alt="JS Logo" /></span>
  //    <span><h4>Ruby on Rails</h4><img src={ RubyOnRails } alt="ROR Logo" /></span>
  //      <span><h4>CSS</h4><img src={ Css } alt="CSS-logo" /></span>

  //      <span><h4>React</h4><img src={ react } alt="React-logo" /></span>
  //      <span><h4>HTML</h4><img src={ html } alt="HTML-logo" /></span>
  //      <span><h4>Figma</h4><img src={ figma } alt="figma-logo" /></span>
  // </>
