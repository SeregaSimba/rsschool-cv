import "../src/style.scss";
import { headerContainer } from "./component/header/header";
import MainContainer from "./component/main/body";

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
  }
}
const init = new Init();
