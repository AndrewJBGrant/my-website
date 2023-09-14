import {
  // MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";


import JavaScript from './icons/javaScriptyellow.svg';
 import RubyOnRails from './icons/railsonrails.svg';
 import Css from './icons/css2.svg';
 import react from './icons/react.svg';
// import html from './icons/html.svg';
// import figma from './icons/figma.svg'

const Skills = () =>  {


let icons = [
  {
    id: "e34fd5",
    name: "CSS",
    image: Css,
  },
  {
    id: "f43gn2",
    name: "JavaScript",
    image: JavaScript,
  },
];


// console.log(icons)


let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) =>  { mouseX.set(e.pageX);
      console.log(e.pageX)} }
      // onMouseLeave={() => mouseX.set(Infinity)}
      className="skill-container"
    >
      {[...Array(8).keys()].map((i) => (
        <AppIcon mouseX={mouseX}
        image={JavaScript}
          />

      ))}
    </motion.div>
  );



function AppIcon({ mouseX }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });


  return (
    <>
    <motion.div
      ref={ref}
      style={{ width }}
      className="skill-box"
/>

       {/* <motion.div
      ref={ref}
      style={{ width }}
      className="skill-box"
    ><img src={ Css } alt="JS Logo"/>
    </motion.div>


          <motion.div
      ref={ref}
      style={{ width }}
      className="skill-box"
    ><img src={ RubyOnRails } alt="JS Logo"/>
    </motion.div>

          <motion.div
      ref={ref}
      style={{ width }}
      className="skill-box"
    ><img src={ react } alt="JS Logo"/>
    </motion.div> */}

</>
  );



}
}


export default Skills;


// const Badge = ({ children, color, ...props }) => {
//   return <span className={`badge ${color}`} {...props}>{children}</span>
// }


//   return (
//     <>
//      <div className="skill-card"> <Badge>JavaScript<img className="icons" src={ JavaScript } alt="JS Logo"/></Badge>  </div>



//       <Badge color="red">CSS<img className="icons" src={ Css } alt="CSS-logo" /></Badge>
//       <Badge color="green">Ruby on Rails<img className="icons" src={ RubyOnRails } alt="JS Logo" /></Badge>


//       {/* <Badge color="blue" onClick={() => {
//         console.log('clicked!')}}>Figma<img src={ figma } alt="figma-logo" /></Badge>
//      <Badge color="yellow">HTML<img src={ html } alt="HTML-logo" /></Badge> */}

//     </>
//   )








// }
