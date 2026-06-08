import "../main/body.scss";
import profileImg from "../main/profile_Img/miFotoSev11.png";
import iconHtml from "../main/profile_Img/icons8-html.svg";
import iconCss from "../main/profile_Img/icons8-css.svg";
import iconSass from "../main/profile_Img/icons8-sass.svg";
import iconJs from "../main/profile_Img/icons8-js.svg";
import iconTs from "../main/profile_Img/icons8-typescript.svg";
import iconWB from "../main/profile_Img/icons8-webpack.svg";
import iconMD from "../main/profile_Img/Markdown.svg";
import iconGit from "../main/profile_Img/icons8-git.svg";
import imageMee from "../main/profile_Img/miFotoSev1.jpg";
import imageDep1 from "../main/profile_Img/DipHTMLCSS.png";
import imageDep2 from "../main/profile_Img/DipJs.png";
import imageDep3 from "../main/profile_Img/DipRSS.png";
import imgLogo from "../main/profile_Img/sloth_u7rwxudebo7e.svg";
import viteLogo from "../main/profile_Img/vite.png";
import reactLogo from "../main/profile_Img/react2.png";

import iconVk from "../main/profile_Img/vk.svg";
import iconGitHub from "../main/profile_Img/gitHub.svg";
import iconInst from "../main/profile_Img/ins.svg";
import { sliderLeft, sliderRight } from "./buttonSlider";

export default function MainContainer() {
  const titleInfoMe2 = `SUMMARY
Junior Frontend-разработчик с 2 годами опыта изучения и практики веб-разработки. 
Уверенно владею HTML, CSS, JavaScript. Создаю интерактивные веб-сайты и SPA. 
Быстро обучаюсь, имею опыт управления проектами и работы в команде (10+ лет в 
бизнесе, 3000+ проведённых собеседований). Ищу позицию Junior Frontend Developer 
в продуктовой компании для роста и вклада в проекты.`;

  const titleInfoMe = `


НАВЫКИ
• Языки: JavaScript (ES6+), HTML5, CSS3
• Фреймворки: React (базовый уровень)
• Инструменты: Git, GitHub, VS Code, Chrome DevTools
• Концепции: DOM, асинхронность (Promises, async/await), REST API
• Дополнительно: адаптивная верстка, кроссбраузерность, TDD

ОПЫТ РАБОТЫ

Управляющий (сеть ночных клубов) | Москва, Санкт-Петербург, Казань, 
Нижний Новгород, Еревана
2018 — 2025 (7 лет)

• Открыл 2 новых клубов в разных городах, успешно передавал процессы управления 
  после запуска
• Провёл 3000+ собеседований, подобрал и обучил команду из 200+ человек
• Оптимизировал процессы найма и онбординга, сократив время закрытия вакансий на 30%
• Управлял бюджетом команды и операционными процессами

ОПЫТ В FRONTEND (pet-проекты и обучение)
2024 — настоящее время

• Разработал 5+ веб-приложения на JavaScript
• Изучаю React, TypeScript, тестирование (Jest, React Testing Library)
• Прошел RS School (Frontend-разработка)
• Активно решаю алгоритмические задачи на Codewars, LeetCode

ОБРАЗОВАНИЕ
[ПУМИ] — [ТИПО]
[Не окончиное]

Курсы:
• FructCode (Frontend-разработка) — 2023—2024
• RS School (Frontend-разработка) — 2024—2025

ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ
• Языки: Русский (родной), Английский (A1)
• Личные качества: быстрая обучаемость, работа в команде, управление проектами, 
  решение сложных задач`;

  const main = document.createElement("main");
  main.classList.add("main");
  document.body.appendChild(main);

  const containerMainDiv = document.createElement("div");
  containerMainDiv.classList.add("container-main-div");
  main.append(containerMainDiv);

  const containerMyScilDiv = document.createElement("div");
  containerMyScilDiv.classList.add("container-my-scil-div");
  main.append(containerMyScilDiv);

  // profile image section
  const containerMayImgSection = document.createElement("section");
  containerMayImgSection.classList.add("container-May-Img-section");
  containerMainDiv.append(containerMayImgSection);

  const divImgMay = document.createElement("section");
  divImgMay.classList.add("div-img-may");
  containerMayImgSection.append(divImgMay);

  const mayImg = document.createElement("img");
  mayImg.classList.add("may-img");
  mayImg.setAttribute("src", profileImg);
  divImgMay.append(mayImg);

  const titleCon = document.createElement("article");
  titleCon.classList.add("titleCon");
  containerMayImgSection.append(titleCon);

  const titleConP = document.createElement("p");
  titleConP.classList.add("titleConP");
  titleConP.innerText = titleInfoMe2;
  titleCon.append(titleConP);

  const sectionTitleName = document.createElement("article");
  sectionTitleName.classList.add("sectionTitleName");
  divImgMay.appendChild(sectionTitleName);

  const titleNameH3 = document.createElement("h3");
  titleNameH3.classList.add("titleNameH3");
  titleNameH3.textContent = "Name: Lagaev Sergei";
  sectionTitleName.append(titleNameH3);

  const miLocation = document.createElement("h3");
  miLocation.classList.add("mi-location");
  miLocation.innerText = "Profession: JavaScript Developer";
  sectionTitleName.append(miLocation);

  // profile image section

  // section about my
  const containerAboutMy = document.createElement("section");
  containerAboutMy.classList.add("container-about-my");
  containerMainDiv.append(containerAboutMy);

  const aboutMyProfel = document.createElement("div");
  aboutMyProfel.classList.add("about-my-profele");
  containerAboutMy.append(aboutMyProfel);

  const aboutMyTitle = document.createElement("h3");
  aboutMyTitle.classList.add("aboutMyTitle");
  aboutMyTitle.innerText = "About Me";
  aboutMyProfel.appendChild(aboutMyTitle);

  const infoAboutMeP = document.createElement("p");
  infoAboutMeP.classList.add("infoAboutMeP");
  infoAboutMeP.innerText = titleInfoMe;
  aboutMyProfel.append(infoAboutMeP);

  // section about my

  // section my scil

  const titleLanguages = document.createElement("h3");
  titleLanguages.classList.add("title-languages");
  titleLanguages.textContent = "My Skills";
  containerMyScilDiv.appendChild(titleLanguages);

  const containerMyScil = document.createElement("section");
  containerMyScil.classList.add("container-my-scil");
  containerMyScilDiv.appendChild(containerMyScil);

  const containerLanguages = document.createElement("div");
  containerLanguages.classList.add("container-languages");
  containerMyScil.append(containerLanguages);

  const containerHtml = document.createElement("div");
  containerHtml.classList.add("container-html");
  containerLanguages.append(containerHtml);

  const radiusHTML = document.createElement("div");
  radiusHTML.classList.add("radiusHTML", "radius");
  containerHtml.append(radiusHTML);

  const canvasHTML = document.createElement("canvas");
  canvasHTML.classList.add("canvasHTML");
  canvasHTML.setAttribute("data-percent", "90");
  canvasHTML.id = "myCanvas";
  radiusHTML.appendChild(canvasHTML);

  const pTitleRadiusHtml = document.createElement("p");
  pTitleRadiusHtml.classList.add("pTitleRadius");
  pTitleRadiusHtml.innerText = "90%";
  radiusHTML.appendChild(pTitleRadiusHtml);

  const containerHtmlImg = document.createElement("div");
  containerHtmlImg.classList.add("containerHtmlImg");
  containerHtml.append(containerHtmlImg);

  const imgHtml = document.createElement("img");
  imgHtml.classList.add("img-html");
  imgHtml.setAttribute("src", iconHtml);
  containerHtmlImg.append(imgHtml);

  const imgMD = document.createElement("img");
  imgMD.classList.add("img-MD");
  imgMD.setAttribute("src", iconMD);
  containerHtmlImg.append(imgMD);

  const containerCss = document.createElement("div");
  containerCss.classList.add("container-css");
  containerLanguages.append(containerCss);

  const radiusCSS = document.createElement("div");
  radiusCSS.classList.add("radiusCSS", "radius");
  containerCss.append(radiusCSS);

  const canvasCSS = document.createElement("canvas");
  canvasCSS.classList.add("canvasCSS");
  canvasCSS.setAttribute("data-percent", "90");
  canvasCSS.id = "myCanvas";
  radiusCSS.appendChild(canvasCSS);

  const pTitleRadiusCss = document.createElement("p");
  pTitleRadiusCss.classList.add("pTitleRadius");
  pTitleRadiusCss.innerText = "90%";
  radiusCSS.appendChild(pTitleRadiusCss);

  const containerScss = document.createElement("div");
  containerScss.classList.add("container-scss");
  containerCss.append(containerScss);

  // const radiusSCSS = document.createElement("div");
  // radiusSCSS.classList.add("radiusSCSS");
  // containerScss.append(radiusSCSS);

  const imgCss = document.createElement("img");
  imgCss.classList.add("img-css");
  imgCss.setAttribute("src", iconCss);
  containerScss.append(imgCss);

  const imgSass = document.createElement("img");
  imgSass.classList.add("img-sass");
  imgSass.setAttribute("src", iconSass);
  containerScss.append(imgSass);

  const containerJs = document.createElement("div");
  containerJs.classList.add("container-js");
  containerLanguages.append(containerJs);

  const radiusJS = document.createElement("div");
  radiusJS.classList.add("radiusJS", "radius");
  containerJs.append(radiusJS);

  const canvasJS = document.createElement("canvas");
  canvasJS.classList.add("canvasJS");
  canvasJS.setAttribute("data-percent", "85");
  canvasJS.id = "myCanvas";
  radiusJS.appendChild(canvasJS);

  const pTitleRadiusJs = document.createElement("p");
  pTitleRadiusJs.classList.add("pTitleRadius");
  pTitleRadiusJs.innerText = "85%";
  radiusJS.appendChild(pTitleRadiusJs);

  const containerTs = document.createElement("div");
  containerTs.classList.add("container-ts");
  containerJs.append(containerTs);

  const imgJs = document.createElement("img");
  imgJs.classList.add("img-js");
  imgJs.setAttribute("src", iconJs);
  containerTs.append(imgJs);

  const imgTs = document.createElement("img");
  imgTs.classList.add("img-ts");
  imgTs.setAttribute("src", iconTs);
  containerTs.append(imgTs);

  const imgReact = document.createElement("img");
  imgReact.classList.add("img-ts", "imgReact");
  imgReact.setAttribute("src", reactLogo);
  containerTs.append(imgReact);

  const containerWB = document.createElement("div");
  containerWB.classList.add("container-WB");
  containerLanguages.append(containerWB);

  const radiusWB = document.createElement("div");
  radiusWB.classList.add("radiusWB", "radius");
  containerWB.append(radiusWB);

  const canvasWB = document.createElement("canvas");
  canvasWB.classList.add("canvasWB");
  canvasWB.setAttribute("data-percent", "80");
  canvasWB.id = "myCanvas";
  radiusWB.appendChild(canvasWB);

  const pTitleRadiusWB = document.createElement("p");
  pTitleRadiusWB.classList.add("pTitleRadius");
  pTitleRadiusWB.innerText = "80%";
  radiusWB.appendChild(pTitleRadiusWB);

  const radiusTS = document.createElement("div");
  radiusTS.classList.add("radiusTS");
  containerWB.append(radiusTS);

  const imgWB = document.createElement("img");
  imgWB.classList.add("img-WB");
  imgWB.setAttribute("src", iconWB);
  radiusTS.append(imgWB);

  const imgGit = document.createElement("img");
  imgGit.classList.add("imgGit");
  imgGit.setAttribute("src", iconGit);
  radiusTS.append(imgGit);

  const imgVite = document.createElement("img");
  imgVite.classList.add("imgGit");
  imgVite.setAttribute("src", viteLogo);
  radiusTS.append(imgVite);

  // section my scil

  // contact my
  const containerContactMy = document.createElement("div");
  containerContactMy.classList.add("container-Contact-My");
  main.append(containerContactMy);

  const contactMyH3 = document.createElement("h3");
  contactMyH3.classList.add("contact-My-H3");
  contactMyH3.innerText = "Contact My";
  containerContactMy.append(contactMyH3);

  const contactMyDiv = document.createElement("div");
  contactMyDiv.classList.add("contactMyDiv");
  containerContactMy.append(contactMyDiv);

  // image me

  const containerImageMe = document.createElement("div");
  containerImageMe.classList.add("containerImageMe");
  contactMyDiv.append(containerImageMe);

  const imageMe = document.createElement("img");
  imageMe.classList.add("imageMe");
  containerImageMe.append(imageMe);

  // image me

  // me phon
  const containerMePhon = document.createElement("div");
  containerMePhon.classList.add("containerMePhon");
  contactMyDiv.append(containerMePhon);

  const colMeP = document.createElement("h3");
  colMeP.classList.add("colMeP");
  colMeP.innerText = "Call me";
  containerMePhon.append(colMeP);

  const mePhonP = document.createElement("p");
  mePhonP.classList.add("mePhonP");
  mePhonP.innerText = "+ 7 978 049 08 **";
  containerMePhon.append(mePhonP);

  colMeP.addEventListener("click", () => {
    mePhonP.classList.add("colorGold");
    setTimeout(() => {
      mePhonP.classList.remove("colorGold");
    }, 2000);
  });
  // me phon

  // me e-mail
  const containerMeEmail = document.createElement("div");
  containerMeEmail.classList.add("containerMeEmail");
  contactMyDiv.append(containerMeEmail);

  const meEmailP = document.createElement("h3");
  meEmailP.classList.add("meEmailP");
  meEmailP.innerText = "E-Mail";
  containerMeEmail.append(meEmailP);

  const mailA = document.createElement("a");
  mailA.classList.add("mailA");
  mailA.innerText = "Write me best.torez.ss@gmail.com";
  mailA.setAttribute("href", "mailto:best.torez.ss@gmail.com");
  containerMeEmail.append(mailA);

  meEmailP.addEventListener("click", () => {
    mailA.classList.add("colorGold");
    setTimeout(() => {
      mailA.classList.remove("colorGold");
    }, 2000);
  });

  // me e-mail

  // container me Diploma

  const containerMeDiploma = document.createElement("div");
  containerMeDiploma.classList.add("container-Me-Diploma");
  main.append(containerMeDiploma);

  const titleH3Diploma = document.createElement("h3");
  titleH3Diploma.classList.add("title-H3-Diploma");
  titleH3Diploma.innerText = "My Diploma";
  containerMeDiploma.append(titleH3Diploma);

  const sectionMeDiploma = document.createElement("section");
  sectionMeDiploma.classList.add("section-Me-Diploma");
  containerMeDiploma.append(sectionMeDiploma);

  const sectionSlider = document.createElement("section");
  sectionSlider.id = "sectionSlider";
  sectionSlider.classList.add("sectionSlider");
  sectionMeDiploma.appendChild(sectionSlider);

  const dipA1 = document.createElement("a");
  dipA1.classList.add("dipA1");
  dipA1.classList.add("pos1");
  dipA1.href = "../src/component/main/profile_Img/Unknownjs.pdf";
  dipA1.target = "_blank";
  sectionSlider.appendChild(dipA1);
  const firstImgDip = document.createElement("img");
  firstImgDip.src = imageDep1;
  firstImgDip.classList.add("firstDipImg");
  dipA1.appendChild(firstImgDip);

  const dipA2 = document.createElement("a");
  dipA2.classList.add("dipA1");
  dipA2.classList.add("pos2");
  dipA2.href = "../src/component/main/profile_Img/Unknown.pdf";
  dipA2.target = "_blank";
  sectionSlider.appendChild(dipA2);
  const firstImgDip2 = document.createElement("img");
  firstImgDip2.src = imageDep2;
  firstImgDip2.classList.add("firstDipImg");
  dipA2.appendChild(firstImgDip2);

  const dipA3 = document.createElement("a");
  dipA3.classList.add("dipA1");
  dipA3.classList.add("pos3");
  dipA3.href = "../src/component/main/profile_Img/bk2bddt3.pdf";
  dipA3.target = "_blank";
  sectionSlider.appendChild(dipA3);
  const firstImgDip3 = document.createElement("img");
  firstImgDip3.src = imageDep3;
  firstImgDip3.classList.add("firstDipImg");
  dipA3.appendChild(firstImgDip3);

  const buttonLeft = document.createElement("button");
  buttonLeft.id = "buttonLeft";
  buttonLeft.classList.add("buttonLeft", "button");
  sectionMeDiploma.prepend(buttonLeft);
  buttonLeft.addEventListener("click", sliderPrev);
  const spanButtonLeft = document.createElement("span");
  spanButtonLeft.classList.add("spanButtonLeft");
  spanButtonLeft.innerText = "<";
  buttonLeft.append(spanButtonLeft);

  const buttonRight = document.createElement("button");
  buttonRight.id = "buttonRight";
  buttonRight.classList.add("buttonRight", "button");
  sectionMeDiploma.append(buttonRight);
  buttonRight.addEventListener("click", sliderNext);
  const spanButtonRight = document.createElement("span");
  spanButtonRight.classList.add("spanButtonRight");
  spanButtonRight.innerText = ">";
  buttonRight.append(spanButtonRight);

  function setCarouselPosition() {
    if (dipA1.classList.contains("pos1")) {
      dipA1.classList.remove("pos1");
      dipA1.classList.add("pos2");
      dipA2.classList.remove("pos2");
      dipA2.classList.add("pos3");
      dipA3.classList.remove("pos3");
      dipA3.classList.add("pos1");
    } else if (dipA3.classList.contains("pos1")) {
      dipA1.classList.remove("pos2");
      dipA1.classList.add("pos3");
      dipA2.classList.remove("pos3");
      dipA2.classList.add("pos1");
      dipA3.classList.remove("pos1");
      dipA3.classList.add("pos2");
    } else if (dipA2.classList.contains("pos1")) {
      dipA1.classList.remove("pos3");
      dipA1.classList.add("pos1");
      dipA2.classList.remove("pos1");
      dipA2.classList.add("pos2");
      dipA3.classList.remove("pos2");
      dipA3.classList.add("pos3");
    } else {
      return;
    }
  }

  function sliderNext() {
    setCarouselPosition();
  }

  function sliderPrev() {
    setCarouselPosition();
  }
}
