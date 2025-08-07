// Creating HTML for cards

const portfolioCards = [
  {
    dataItem: "web",
    dataOpen: "web-1",
    imgSrc: "./assets/images/portfolio-1.jpg",
    div: "Web Development",
    h3: "Museum Website",
    popupData: {
      h3: "Web Project 1",
      p1: "My first awesome website",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, totam.",
      p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, recusandae?",
    },
  },
  {
    dataItem: "ui",
    dataOpen: "ui-1",
    imgSrc: "./assets/images/portfolio-2.jpg",
    div: "UI Design",
    h3: "Social Media",
    popupData: {
      h3: "UI Project 1",
      p1: "My first awesome UI project",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, totam.",
      p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, recusandae?",
    },
  },
  {
    dataItem: "web",
    dataOpen: "web-2",
    imgSrc: "./assets/images/portfolio-3.jpg",
    div: "Web Development",
    h3: "Dropship Website",
    popupData: {
      h3: "Web Project 2",
      p1: "My second awesome website",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, totam.",
      p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, recusandae?",
    },
  },
  {
    dataItem: "web",
    dataOpen: "web-3",
    imgSrc: "./assets/images/portfolio-4.jpg",
    div: "Web Development",
    h3: "Food Website",
    popupData: {
      h3: "Web Project 3",
      p1: "My third awesome website",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, totam.",
      p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, recusandae?",
    },
  },
  {
    dataItem: "app",
    dataOpen: "app-1",
    imgSrc: "./assets/images/portfolio-5.jpg",
    div: "App Development",
    h3: "Game App",
    popupData: {
      h3: "App Project 1",
      p1: "My first awesome app",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, totam.",
      p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, recusandae?",
    },
  },
  {
    dataItem: "app",
    dataOpen: "app-2",
    imgSrc: "../assets/images/portfolio-6.jpg",
    div: "App Development",
    h3: "Betting App",
    popupData: {
      h3: "App Project 2",
      p1: "My second awesome app",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, totam.",
      p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, recusandae?",
    },
  },
  {
    dataItem: "app",
    dataOpen: "app-3",
    imgSrc: "../assets/images/portfolio-7.jpg",
    div: "App Development",
    h3: "Financing App",
    popupData: {
      h3: "App Project 3",
      p1: "My third awesome app",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, totam.",
      p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, recusandae?",
    },
  },
  {
    dataItem: "ui",
    dataOpen: "ui-2",
    imgSrc: "./assets/images/portfolio-8.jpg",
    div: "UI Design",
    h3: "Fantastic Design",
    popupData: {
      h3: "UI Project 2",
      p1: "My second awesome UI project",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, totam.",
      p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, recusandae?",
    },
  },
];

const isVisible = "is-visible";

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
  const title = document.createElement("h3");
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

// End of dynamic card HTML with JS

// Modal handling
document.addEventListener("DOMContentLoaded", () => {
  const popupModalsDiv = document.querySelector(".all-popup-modals");
  if (!popupModalsDiv) {
    console.error('Element with class "all-popup-modals" not found');
    return;
  }

  portfolioGrid.addEventListener("click", (event) => {
    console.log("Click event target:", event.target); // Debug: What was clicked?
    const clickedElement = event.target.closest("div[data-open]");
    console.log("Clicked element with data-open:", clickedElement); // Debug: Found portfolio-card?
    if (!clickedElement) return;

    const dataOpenValue = clickedElement.dataset.open;
    console.log("data-open value:", dataOpenValue); // Debug: Correct data-open?
    const matchingPopup = portfolioCards.find(
      (popup) => popup.dataOpen === dataOpenValue
    );
    console.log("Matching popup:", matchingPopup); // Debug: Found matching card?
    if (!matchingPopup) return;

    // Check for existing modal
    let modal = popupModalsDiv.querySelector(`#${matchingPopup.dataOpen}`);
    if (modal) {
      console.log(`Modal with id ${matchingPopup.dataOpen} already exists`);
      modal.classList.add("is-visible"); // Show existing modal
      return;
    }

    // Create new modal
    modal = document.createElement("div");
    modal.id = matchingPopup.dataOpen;
    modal.setAttribute("data-animation", "slideInOutTop");
    modal.className = "modal is-visible"; // Add is-visible immediately

    modal.innerHTML = `
      <div class="modal-dialog">
        <header class="modal-header">
          <h3>${matchingPopup.popupData.h3}</h3>
          <i class="fas fa-times" data-close></i>
        </header>
        <div class="modal-body">
          <div class="img-wrapper">
            <img src="${matchingPopup.imgSrc}" alt="portfolio img" />
          </div>
          <div class="text-wrapper">
            <p><strong>${matchingPopup.popupData.p1}</strong></p>
            <p>${matchingPopup.popupData.p2}</p>
            <p>${matchingPopup.popupData.p3}</p>
          </div>
        </div>
      </div>`;

    console.log("Appending modal:", modal); // Debug: Confirm modal creation
    popupModalsDiv.appendChild(modal);
  });

  // Close modal
  popupModalsDiv.addEventListener("click", (event) => {
    if (event.target.matches("[data-close]")) {
      const modal = event.target.closest(".modal");
      if (modal) {
        console.log("Closing modal:", modal);
        modal.classList.remove("is-visible"); // Hide modal
        // Optionally: modal.remove(); // Remove from DOM
      }
    }
  });
});
