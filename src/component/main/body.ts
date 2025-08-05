import "../main/body.scss";
import profileImg from "../main/profile_Img/miFotoSev1.png";
import iconHtml from "../main/profile_Img/icons8-html.svg";
import iconCss from "../main/profile_Img/icons8-css.svg";
import iconSass from "../main/profile_Img/icons8-sass.svg";
import iconJs from "../main/profile_Img/icons8-js.svg";
import iconTs from "../main/profile_Img/icons8-typescript.svg";
import iconWB from "../main/profile_Img/icons8-webpack.svg";
import iconMD from "../main/profile_Img/Markdown.svg";
import iconGit from "../main/profile_Img/icons8-git.svg";
import imageMee from "../main/profile_Img/miFotoSev1.jpg";
import imgLogo from "../main/profile_Img/sloth_u7rwxudebo7e.svg";

import iconVk from "../main/profile_Img/vk.svg";
import iconGitHub from "../main/profile_Img/gitHub.svg";
import iconInst from "../main/profile_Img/ins.svg";

export default function MainContainer() {
  const titleInfoMe =
    "I am 33 years old. I have recently started developing my career in front-end development, as I am inspired by the opportunity to implement my ideas and create modern, interactive websites. I have over 10 years of experience in the public catering industry, working in various positions, and for the past 6 years as a manager in a chain of nightclubs in Moscow, St. Petersburg, Kazan, Nizhny Novgorod, and Yerevan. I have been involved in the opening of new clubs, the recruitment and training of staff, conducted over 3,700 interviews, and effectively transferred management processes after successful project launches. I consider myself a fast learner and constantly strive for new knowledge. I am enthusiastically mastering HTML and CSS, and actively learning JavaScript. In the near future, I plan to delve into other programming languages and develop my career in the IT field.";

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

  const divImgMay = document.createElement("div");
  divImgMay.classList.add("div-img-may");
  containerMayImgSection.append(divImgMay);

  const mayImg = document.createElement("img");
  mayImg.classList.add("may-img");
  mayImg.setAttribute("src", profileImg);
  divImgMay.append(mayImg);

  const containerMiInfo = document.createElement("div");
  containerMiInfo.classList.add("containerMiInfo");
  containerMayImgSection.append(containerMiInfo);

  const titleNameH3 = document.createElement("h3");
  titleNameH3.classList.add("titleNameH3");
  titleNameH3.textContent = "Name: Lagaev Sergei";
  containerMiInfo.append(titleNameH3);

  const miLocation = document.createElement("h3");
  miLocation.classList.add("mi-location");
  miLocation.innerText = "Profession: JavaScript Developer";
  containerMiInfo.append(miLocation);

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
  aboutMyTitle.innerText = "About";
  aboutMyProfel.appendChild(aboutMyTitle);

  const aboutMyTitle2 = document.createElement("h3");
  aboutMyTitle2.classList.add("aboutMyTitle2");
  aboutMyTitle2.innerText = "Me";
  aboutMyProfel.appendChild(aboutMyTitle2);

  const containerInfoAboutMe = document.createElement("div");
  containerInfoAboutMe.classList.add("containerInfoAboutMe");
  containerAboutMy.append(containerInfoAboutMe);

  const infoAboutMeP = document.createElement("p");
  infoAboutMeP.classList.add("infoAboutMeP");
  infoAboutMeP.innerText = titleInfoMe;
  containerInfoAboutMe.append(infoAboutMeP);

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
  canvasCSS.setAttribute("data-percent", "85");
  canvasCSS.id = "myCanvas";
  radiusCSS.appendChild(canvasCSS);

  const pTitleRadiusCss = document.createElement("p");
  pTitleRadiusCss.classList.add("pTitleRadius");
  pTitleRadiusCss.innerText = "85%";
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
  canvasJS.setAttribute("data-percent", "65");
  canvasJS.id = "myCanvas";
  radiusJS.appendChild(canvasJS);

  const pTitleRadiusJs = document.createElement("p");
  pTitleRadiusJs.classList.add("pTitleRadius");
  pTitleRadiusJs.innerText = "65%";
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

  // section my scil

  // contact my
  const containerContactMy = document.createElement("div");
  containerContactMy.classList.add("container-Contact-My");
  main.append(containerContactMy);

  const contactMyH3 = document.createElement("h3");
  contactMyH3.classList.add("contact-My-H3");
  contactMyH3.innerText = "Contact Me";
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
  imageMe.setAttribute("src", imageMee);
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

  const containerLinkMesseger = document.createElement("div");
  containerLinkMesseger.classList.add("containerlinkMesseger");
  containerContactMy.append(containerLinkMesseger);

  const divLinkMassege = document.createElement("div");
  divLinkMassege.classList.add("divLinkMassege");
  containerLinkMesseger.append(divLinkMassege);

  const linkVk = document.createElement("a");
  linkVk.classList.add("linkVk");
  linkVk.setAttribute("href", "https://m.vk.com/best.sa92");
  divLinkMassege.append(linkVk);

  const imageVk = document.createElement("img");
  imageVk.classList.add("imageVk");
  imageVk.setAttribute("src", iconVk);
  linkVk.append(imageVk);

  const linkIns = document.createElement("a");
  linkIns.classList.add("linkIns");
  linkIns.setAttribute("href", "https://www.instagram.com/serega_simba/");
  divLinkMassege.append(linkIns);

  const imageIns = document.createElement("img");
  imageIns.classList.add("imageIns");
  imageIns.setAttribute("src", iconInst);
  linkIns.append(imageIns);

  // contact my
}
