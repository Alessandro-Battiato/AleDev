import initScrollReveal from "./scrollReveal";
import initTiltEffect from "./tiltAnimation";
import { targetElements, defaultProps } from "../data/scrollRevealConfig";
import "../scss/styles.scss";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
