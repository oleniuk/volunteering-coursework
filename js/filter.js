const filterItemsList = document.querySelectorAll(".filter__heading-item");
const allItems = document.querySelectorAll(".filter__item");
const allFilterElements = document.querySelectorAll(
  ".filter__heading-list-item"
);

function filterList() {
  const locationList = [];
  const categoryList = [];

  const locationActiveList = document.querySelectorAll(
    ".location .filter__heading-list-item.active"
  );

  const categoryActiveList = document.querySelectorAll(
    ".category .filter__heading-list-item.active"
  );

  locationActiveList.forEach((item) => {
    locationList.push(item.getAttribute("data"));
  });

  categoryActiveList.forEach((item) => {
    categoryList.push(item.getAttribute("data"));
  });

  allItems.forEach((item) => {
    const itemLocation = item.querySelectorAll(".filter__item-location span");
    const itemCategory = item.querySelectorAll(".filter__item-category span");

    let locationInclude = false;
    let categoryInclude = false;

    itemLocation.forEach((location) => {
      locationList.forEach((locationItem) => {
        if (
          String(locationItem).toLowerCase() ===
          String(location.getAttribute("location")).toLowerCase()
        ) {
          locationInclude = true;
        }
      });
    });

    itemCategory.forEach((category) => {
      categoryList.forEach((categoryItem) => {
        if (
          String(categoryItem).toLowerCase() ===
          String(category.getAttribute("category")).toLowerCase()
        ) {
          categoryInclude = true;
        }
      });
    });

    const locationMatch = locationInclude || locationList.length === 0;
    const categoryMatch = categoryInclude || categoryList.length === 0;

    if (locationMatch && categoryMatch) {
      item.classList.toggle("disabled", false);
    } else {
      item.classList.toggle("disabled", true);
    }
  });
}

filterItemsList.forEach((item) => {
  const button = item.querySelector(".filter__heading-top");
  const filterListItems = item.querySelector(".filter__heading-list");
  const height = filterListItems.offsetHeight;

  filterListItems.style.height = `${height}px`;

  item.classList.add("disabled");

  button.addEventListener("click", () => {
    item.classList.toggle("disabled");
  });

  const clearButton = item.querySelector(".filter__clear-button");
  const applyButton = item.querySelector(".filter__apply-button");

  const allItemElements = item.querySelectorAll(".filter__heading-list-item");

  clearButton.addEventListener("click", () => {
    allItemElements.forEach((button) => {
      button.classList.toggle("active", false);
    });
  });

  applyButton.addEventListener("click", () => {
    filterList();
    item.classList.toggle("disabled", true);
  });
});

allFilterElements.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
  });
});

const menuButton = document.querySelector(".menu-icon1");
const menu = document.querySelector(".navbar_menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuButton.classList.toggle("active");
});

const propose = document.getElementById("propose");
const request = document.getElementById("request");
const proposeButton = document.getElementById("propose-button");
const requestButton = document.getElementById("request-button");

proposeButton.onclick = () => {
  proposeButton.classList.toggle("active", true);
  propose.classList.toggle("active", true);
  requestButton.classList.toggle("active", false);
  request.classList.toggle("active", false);
};

requestButton.onclick = () => {
  proposeButton.classList.toggle("active", false);
  propose.classList.toggle("active", false);
  requestButton.classList.toggle("active", true);
  request.classList.toggle("active", true);
};
