const portfolioCards = [
  {
    dataItem: "web",
    dataOpen: "web-1",
    imgSrc: "./assets/images/portfolio-1.jpg",
    div: "Web Development",
    h3: "Museum Website",
  },
  {
    dataItem: "ui",
    dataOpen: "ui-1",
    imgSrc: "./assets/images/portfolio-2.jpg",
    div: "UI Design",
    h3: "Social Media",
  },
  {
    dataItem: "web",
    dataOpen: "web-2",
    imgSrc: "./assets/images/portfolio-3.jpg",
    div: "Web Development",
    h3: "Dropship Website",
  },
  {
    dataItem: "web",
    dataOpen: "web-3",
    imgSrc: "./assets/images/portfolio-4.jpg",
    div: "Web Development",
    h3: "Food Website",
  },
  {
    dataItem: "app",
    dataOpen: "app-1",
    imgSrc: "./assets/images/portfolio-5.jpg",
    div: "App Development",
    h3: "Game App",
  },
  {
    dataItem: "app",
    dataOpen: "app-2",
    imgSrc: "../assets/images/portfolio-6.jpg",
    div: "App Development",
    h3: "Betting App",
  },
  {
    dataItem: "app",
    dataOpen: "app-3",
    imgSrc: "../assets/images/portfolio-7.jpg",
    div: "App Development",
    h3: "Financing App",
  },
  {
    dataItem: "ui",
    dataOpen: "ui-2",
    imgSrc: "./assets/images/portfolio-8.jpg",
    div: "UI Design",
    h3: "Fantastic Design",
  },
];

const portfolioGrid = document.querySelector(".portfolio-grid");

const fragment = document.createDocumentFragment();

for (const cardData of portfolioCards) {
  const portfolioCard = document.createElement("div");
  //create portfolio-card div
  portfolioCard.className = "portfolio-card";
  portfolioCard.setAttribute("data-item", cardData.dataItem);
  portfolioCard.setAttribute("data-open", cardData.dataOpen);

  //create card body div
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  //create img element
  const img = document.createElement("img");
  img.src = cardData.imgSrc;
  img.alt = "portfolio-icon";

  //create card-popup-box div
  const cardPopupBox = document.createElement("div");
  cardPopupBox.className = "card-popup-box";

  //create category div
  const categoryDiv = document.createElement("div");
  categoryDiv.innerHTML = cardData.div;

  //create title h3
  const title = document.createElement("div");
  title.innerHTML = cardData.h3;

  //build nested structure
  cardPopupBox.appendChild(categoryDiv);
  cardPopupBox.appendChild(title);
  cardBody.appendChild(img);
  cardBody.appendChild(cardPopupBox);
  portfolioCard.appendChild(cardBody);
  fragment.appendChild(portfolioCard);
}

portfolioGrid.appendChild(fragment);
