import HTML from "../src/LOGOs/HTML.png";
import CSS from "../src/LOGOs/CSS.png";
import JS from "../src/LOGOs/JS.png";
import REACT from "../src/LOGOs/React.png";
import REDUX from "../src/LOGOs/Redux.png";
import TAILWIND from "../src/LOGOs/Tailwind.png";
import Profile from "../src/Assets/Profile22.png";
import SCROLL from "../src/Assets/ScrollDownAnimation.json";
import BLACKSKY from "../src/Assets/BlackSky.jpg";
import MOUNTAIN from "../src/Assets/Mountain.png";
import MOUNTAIN2 from "../src/Assets/Mountain2.png";
import ROAD from "../src/Assets/Road2.png";
import TODO from "../src/Assets/TodoImage.jpg";
import RESUME from "../src/Assets/Resume.jpg";
import RESUMEPDF from "../src/Assets/Resume.pdf";
import PIC from "../src/Assets/PIC22.png";
import SIGN from "../src/Assets/RahulSign1.png";

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
    name: "TAILWIND CSS",
    value: "80%",
    logo: TAILWIND,
    text: "Worked with tailwind css having in depth knowledge about layout techniques and Responssveness accross various devices.",
  },
];
export const professionalskills = [
  {
    name: "Communication",
    value: "90%",
    text: "",
  },
  {
    name: "TeamWork",
    value: "85%",
    text: "",
  },
  {
    name: "Analytical Skills",
    value: "70%",
    text: "",
  },
  {
    name: "Problem Solving",
    value: "70%",
    text: "",
  },
  {
    name: "Time Management",
    value: "70%",
    text: "",
  },
  {
    name: "Fast learning",
    value: "70%",
    text: "",
  },
]

export { HTML, CSS, JS, REACT, REDUX, TAILWIND };
export { Profile };
export { SCROLL };
export { BLACKSKY };
export { MOUNTAIN };
export { MOUNTAIN2 };
export { ROAD };
export { TODO };
export { RESUME };
export { RESUMEPDF };
export { PIC };
export { SIGN };

export const isValidData = (data) => {
  return data !== null && data !== undefined && data !== "";
};
export const publicKey = 'service_x7wpv5i'
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
