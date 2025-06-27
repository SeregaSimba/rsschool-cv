import "../main/body.scss";
import profileImg from "../main/profile_Img/profile.jpeg";
import iconHtml from "../main/profile_Img/src/icons8-html.svg";

export default function MainContainer() {
  const main = document.createElement("main");
  main.classList.add("main");
  document.body.appendChild(main);

  const containerMainDiv = document.createElement("div");
  containerMainDiv.classList.add("container-main-div");
  main.append(containerMainDiv);

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

  const titleNameH3 = document.createElement("h3");
  titleNameH3.classList.add("titleNameH3");
  titleNameH3.textContent = "Lagaev Sergei";
  containerMayImgSection.append(titleNameH3);

  const containerLanguages = document.createElement("div");
  containerLanguages.classList.add("container-languages");
  containerMayImgSection.append(containerLanguages);

  const imgHtml = document.createElement("img");
  imgHtml.classList.add("img-html");
  imgHtml.setAttribute("src", "");
  containerLanguages.append(imgHtml);

  // profile image section
}
