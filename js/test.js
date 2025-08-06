// Portfolio cards data
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

// Constants
const theme = "theme";
const dataTheme = "data-theme";
const themeTab = ".theme-tab";
const switcherBtn = ".switcher-btn";
const dark = "dark";
const light = "light";
const open = "open";
const active = "active";
const dataFilter = "[data-filter]";
const portfolioData = "[data-item]";
const isVisible = "is-visible";
const modalOpen = "[data-open]";
const modalClose = "[data-close]";

const root = document.documentElement;

// Full Site Modal "open buttons"
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

for (const elm of openModal) {
  elm.addEventListener("click", function () {
    const modalId = this.dataset.open;
    console.log(modalId);
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const elm of closeModal) {
  elm.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

// Theme
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

// Utility functions
const setActive = (elm, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  }
  elm.classList.add(active);
};

const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};

// Theme initialization
if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  });
  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  }
}

toggleTheme.addEventListener("click", function () {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
});

for (const elm of switcher) {
  elm.addEventListener("click", function () {
    const toggle = this.dataset.toggle;
    setActive(elm, switcherBtn);
    setTheme(toggle);
  });
}

// Create portfolio cards
const portfolioGrid = document.querySelector(".portfolio-grid");
if (!portfolioGrid) {
  console.error('Element with class "portfolio-grid" not found');
} else {
  const fragment = document.createDocumentFragment();
  for (const cardData of portfolioCards) {
    const portfolioCard = document.createElement("div");
    portfolioCard.className = "portfolio-card";
    portfolioCard.setAttribute("data-item", cardData.dataItem);
    portfolioCard.setAttribute("data-open", cardData.dataOpen);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const img = document.createElement("img");
    img.src = cardData.imgSrc;
    img.alt = "portfolio-icon";

    const cardPopupBox = document.createElement("div");
    cardPopupBox.className = "card-popup-box";

    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = cardData.div;

    const title = document.createElement("h3");
    title.innerHTML = cardData.h3;

    cardPopupBox.appendChild(categoryDiv);
    cardPopupBox.appendChild(title);
    cardBody.appendChild(img);
    cardBody.appendChild(cardPopupBox);
    portfolioCard.appendChild(cardBody);
    fragment.appendChild(portfolioCard);
  }
  portfolioGrid.appendChild(fragment);
}

// Portfolio
const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector("#search");

// Portfolio filtering
searchBox.addEventListener("keyup", (e) => {
  const searchInput = e.target.value.toLowerCase().trim();
  portfolioItems.forEach((card) => {
    if (card.dataset.item.includes(searchInput)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

for (const link of filterLink) {
  link.addEventListener("click", function () {
    setActive(link, ".filter-link");
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
      } else if (card.dataset.item === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
    console.log(portfolioItems);
  });
}

// Modal handling
const popupModalsDiv = document.querySelector(".all-popup-modals");
if (!popupModalsDiv) {
  console.error('Element with class "all-popup-modals" not found');
}

portfolioGrid.addEventListener("click", (event) => {
  console.log("Click event target:", event.target);
  const clickedElement = event.target.closest("div[data-open]");
  console.log("Clicked element with data-open:", clickedElement);
  if (!clickedElement) return;

  const dataOpenValue = clickedElement.dataset.open;
  console.log("data-open value:", dataOpenValue);
  const matchingPopup = portfolioCards.find(
    (popup) => popup.dataOpen === dataOpenValue
  );
  console.log("Matching popup:", matchingPopup);
  if (!matchingPopup) return;

  // Check for existing modal
  let modal = popupModalsDiv.querySelector(`#${matchingPopup.dataOpen}`);
  if (modal) {
    console.log(`Modal with id ${matchingPopup.dataOpen} already exists`);
    modal.classList.add("is-visible");
    return;
  }

  // Create new modal
  modal = document.createElement("div");
  modal.id = matchingPopup.dataOpen;
  modal.className = "modal"; // Start without is-visible
  modal.setAttribute("data-animation", "slideInOutTop");

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

  console.log("Appending modal:", modal);
  popupModalsDiv.appendChild(modal);

  // Trigger animation by adding is-visible after a delay
  setTimeout(() => {
    modal.classList.add("is-visible");
  }, 0);

  event.stopPropagation();
});

// Close modal
popupModalsDiv.addEventListener("click", (event) => {
  if (
    event.target.matches("[data-close]") ||
    event.target.matches(".modal.is-visible")
  ) {
    const modal = event.target.closest(".modal");
    if (modal) {
      console.log("Closing modal:", modal);
      modal.classList.remove("is-visible");
    }
  }
});

// Close modal with Escape key
document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    const modal = document.querySelector(".modal.is-visible");
    if (modal) {
      console.log("Closing modal via Escape:", modal);
      modal.classList.remove("is-visible");
    }
  }
});
