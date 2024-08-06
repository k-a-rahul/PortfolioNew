import HTML from '../src/LOGOs/HTML.png'
import CSS from '../src/LOGOs/CSS.png'
import JS from '../src/LOGOs/JS.png'
import REACT from '../src/LOGOs/React.png'
import REDUX from '../src/LOGOs/Redux.png'
import TAILWIND from '../src/LOGOs/Tailwind.png'
import Profile from '../src/Assets/Profile1.png'
import Satellite from '../src/Assets/Satellite.jpg'
import MAN from '../src/Assets/Man.jpg'
import HELLOWRITER from '../src/Assets/HelloWriter.json'
import SCROLL from '../src/Assets/ScrollDownAnimation.json'
import CLOUDS  from '../src/Assets/Clouds.png.png'
import SCHOOL  from '../src/Assets/School.jpg'
import BLUESKY  from '../src/Assets/Bluesky.jpg'
import SKY  from '../src/Assets/Sky.jpg'
import MOUNTAIN  from '../src/Assets/Mountain.png'
import STARS  from '../src/Assets/stars.png'
import MYPIC  from '../src/Assets/MyPicAlter2.png'
import MOUNTAIN2  from '../src/Assets/Mountain2.png'
import ROAD  from '../src/Assets/Road2.png'



export const technicalskills = [
  {
    name: "HTML",
    value: "90%",
    logo: HTML,
    text: "Having expertise in Html 5, Semantic tags and know how to use them accurately to get required view on different viewports.",
  },
  {
    name: "CSS",
    value: "85%",
    logo: CSS,
    text: "Strong knowledge of Css, which includes responsibe layouts, Typography, Grid/Flex layouts.",
  },
  {
    name: "JS",
    value: "70%",
    logo: JS,
    text: "Having strong working command and knowledge about Strings, Objects, Arrays, Loops etc. DOM manipulations using JS.",
  },
  {
    name: "REACT",
    value: "70%",
    logo: REACT,
    text: "Worked with react hooks having depth knowledge about JSX, Dynamic Data embedding, State management.",
  },
  {
    name: "REDUX",
    value: "70%",
    logo: REDUX,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    name: "TAILWIND CSS",
    value: "80%",
    logo: TAILWIND,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
];


export {HTML, CSS,JS,REACT,REDUX,TAILWIND};
export {Profile};
export {Satellite};
export {MAN};
export {HELLOWRITER};
export {SCROLL};
export {SCHOOL};
export {BLUESKY};
export {MOUNTAIN};
export {STARS};
export {SKY};
export {CLOUDS};
export {MYPIC};
export {MOUNTAIN2};
export {ROAD};




export const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 25, // max tilt rotation (degrees)
    perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
  };
