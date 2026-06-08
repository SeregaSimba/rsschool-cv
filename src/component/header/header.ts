import "../header/header.scss";

export function headerContainer() {
  const header = document.createElement("header");
  header.classList.add("header");
  document.body.appendChild(header);

  const containerHeader = document.createElement("div");
  containerHeader.classList.add("container-header");
  header.appendChild(containerHeader);

  // link rss

  const containerRssHeader = document.createElement("div");
  containerRssHeader.classList.add("container-rss-header");
  containerHeader.appendChild(containerRssHeader);

  // const linkRss = document.createElement("a");
  // linkRss.classList.add("link-rss");
  // linkRss.href = "https://rs.school";
  // linkRss.setAttribute("target", "_blank");
  // containerRssHeader.appendChild(linkRss);

  // const imgRssLink = document.createElement("img");
  // imgRssLink.classList.add("imgRssLink");
  // imgRssLink.setAttribute("src", "../src/img/rs-school-logo.svg");
  // linkRss.appendChild(imgRssLink);

  // link rss

  const containerTitleHeader = document.createElement("div");
  containerTitleHeader.classList.add("container-title-header");
  containerHeader.appendChild(containerTitleHeader);

  const textTitleHeader = document.createElement("p");
  textTitleHeader.classList.add("text-title-header");
  textTitleHeader.textContent = "Business Card Sergei";
  containerTitleHeader.appendChild(textTitleHeader);

  // title
  // burger

  const containerBurger = document.createElement("div");
  containerBurger.classList.add("container-burger");
  containerHeader.appendChild(containerBurger);

  const lane = document.createElement("bottom");
  lane.classList.add("lane");
  containerBurger.appendChild(lane);

  const laneOn = document.createElement("span");
  laneOn.classList.add("line", "laneOn");
  lane.appendChild(laneOn);

  const laneThu = document.createElement("span");
  laneThu.classList.add("line", "laneThu");
  lane.appendChild(laneThu);

  const burgerDivHeader = document.createElement("div");
  burgerDivHeader.classList.add("display-none");
  burgerDivHeader.classList.add("burger-div-header");
  containerBurger.appendChild(burgerDivHeader);

  const titleAboutPage = document.createElement("h3");
  titleAboutPage.textContent = "My works";
  titleAboutPage.classList.add("title-about-page");
  burgerDivHeader.appendChild(titleAboutPage);

  const articleOnPage = document.createElement("article");
  articleOnPage.classList.add("articleOnPage");
  burgerDivHeader.appendChild(articleOnPage);

  const linkPage1 = document.createElement("a");
  linkPage1.setAttribute(
    "href",
    "https://seregasimba.github.io/Christmas-shop-page-rss/",
  );
  linkPage1.setAttribute("target", "_blank");
  linkPage1.innerText = "Link: - My first job";
  linkPage1.classList.add("linkPage1");
  articleOnPage.appendChild(linkPage1);

  const linkPage2 = document.createElement("a");
  linkPage2.textContent = "My Company Gab";
  linkPage2.classList.add("linkPage1");
  linkPage2.setAttribute("target", "_blanc");
  linkPage2.setAttribute("href", "https://bts-rs.netlify.app/main");
  burgerDivHeader.appendChild(linkPage2);

  const linkPage3 = document.createElement("a");
  linkPage3.textContent = "Correctional work is underway ⚠️ ☢️ ";
  linkPage3.setAttribute("target", "_blanc");
  linkPage3.setAttribute(
    "href",
    "https://seregasimba.github.io/async-race-my/",
  );
  linkPage3.classList.add("linkPage3");
  burgerDivHeader.appendChild(linkPage3);

  const linkPage4 = document.createElement("a");
  linkPage4.textContent = "Correctional work is underway ⚠️ ☢️ ";
  linkPage4.classList.add("linkPage4");
  burgerDivHeader.appendChild(linkPage4);

  lane.addEventListener("click", () => {
    lane.classList.toggle("openBurger");
    burgerDivHeader.classList.toggle("burger-div-header");
    document.body.classList.toggle("hidden");
  });
  // burger
}
