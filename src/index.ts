import "../src/style.scss";
import { headerContainer } from "./component/header/header";
import MainContainer from "./component/main/body";
import CanvasCreate from "./component/main/canvasCom";

class Init {
  constructor() {
    this.header();
    this.main();
  }
  header() {
    const header = headerContainer();
  }
  main() {
    const main = MainContainer();
    const canvas = CanvasCreate();
  }
}
const init = new Init();
