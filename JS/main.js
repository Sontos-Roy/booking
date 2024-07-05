const CatagoiresSlider = (clsName, slideShow) => {
  $(document).ready(function () {
    $(`.${clsName}`).slick({
      slidesToShow: slideShow,
      slidesToScroll: 1,
      arrows: true,
      infinite: true,
      autoplay: false,
      loop: true,
      centerMode: false,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],

      nextArrow:
        '<a class="next_arrow"> <i class="fa-solid fa-angle-right"></i></a>',
      prevArrow:
        '<a class="prev_arrow"> <i class="fa-solid fa-angle-left"></i></a>',
    });
  });
};

// Navbar Setting Js

const menuBarButton = document.querySelector(".icon_bar");
const mobileNabar = document.querySelector(".mobiletablate-menu-nav");
menuBarButton.addEventListener("click", (e) => {
  e.preventDefault();
  mobileNabar.classList.toggle("active-navbar");
  menuBarButton.classList.toggle("change");
  document
    .querySelector(".responsive_menu_item .input-here")
    .classList.remove("active-Search-res");
});

const dropdownItems = document.querySelectorAll(".nav-item-list");

dropdownItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const showDropdown = document.querySelector(".active-navList");

    toggleItem(item);
    // Remove the show-dropdown class from other items
    if (showDropdown !== item) {
      toggleItem(showDropdown);
    }
  });
});

const toggleItem = (item) => {
  // 3.1. Select each dropdown content

  if (item.classList.contains("active-navList")) {
    item.classList.remove("active-navList");
  } else {
    item.classList.add("active-navList");
  }
};

// ============  Show Responsive Search

const resSerchBtn = document.querySelector(".Search-bar-show");

resSerchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  document
    .querySelector(".responsive_menu_item .input-here")
    .classList.toggle("active-Search-res");
  mobileNabar.classList.remove("active-navbar");
  menuBarButton.classList.remove("change");
});

// ===============  Count Able From

const countBtn1 = document.querySelector(".count-btn1");
const countBtn2 = document.querySelector(".count-btn2");
const value = document.querySelector(".value");
let num = 1;
value.innerText = num;
countBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  if (num === 1) return;
  value.innerHTML = num--;
});

countBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  value.innerHTML = num++;
});

// =====================   Services Tabs Section

const tabNavItem = document.querySelectorAll(".tab-btn");
const filformElement = document.querySelectorAll(".from-tab");

tabNavItem.forEach((item) => {
  console.log(item);
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const getAttribute = item.getAttribute("data-filter");

    const showDropdown = document.querySelector(".active-tab-btn");
    tabFun(getAttribute);
    toggleItems(item);
    // Remove the show-dropdown class from other items
    if (showDropdown !== item) {
      toggleItems(showDropdown);
    }
  });
});

const toggleItems = (item) => {
  // 3.1. Select each dropdown content

  if (item.classList.contains("active-tab-btn")) {
    item.classList.remove("active-tab-btn");
  } else {
    item.classList.add("active-tab-btn");
  }
};

const tabFun = (itemAttribute) => {
  filformElement.forEach((tabSection) => {
    const tabSectionAttribute = tabSection.getAttribute("data-item");

    if (itemAttribute === tabSectionAttribute) {
      tabSection.classList.add("active-tabs");
    } else if (itemAttribute !== tabSectionAttribute) {
      tabSection.classList.remove("active-tabs");
    }
  });
};

const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");
const SearchElement = document.querySelector(".input-here");

magnifierEl.addEventListener("click", (e) => {
  e.preventDefault();
  SearchElement.classList.toggle("active-serch");
});
CatagoiresSlider("tab-mnu", 6);
// ========================== Show All Catagoires ======================

const ServicesCatagories = document.querySelectorAll(
  ".Services-main-catagories"
);
ServicesCatagories.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const flight = document.querySelector("#Flight");
const cartEle = document.querySelector("#car_emelent");
const flightITem = document.querySelectorAll("#flight-item li");

flightITem.forEach((element) => {
  console.log(element);
  element.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    flight.style.display = "block";
    CatagoiresSlider("tab-mnu", 6);
    cartEle.style.display = "none";
  });
});


