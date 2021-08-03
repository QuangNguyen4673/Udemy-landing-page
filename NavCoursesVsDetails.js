const coursesDetailContainer = document.querySelector("#courses-intro");
const coursesNav = document.querySelectorAll("nav.courses-menu a");

const filteredData = (name) => {
  return render(coursesData.filter((item) => item.title === name));
};
const render = (item) => {
  item = item[0];
  coursesDetailContainer.innerHTML = `<div class="headshot-banner ${item.title}">
  <div id="headshot" class="d-none d-md-flex">
    <div class="px-5 py-4">
      <h5 class="mt-4">
        ${item.header}
      </h5>
      <p>
        ${item.text}
      </p>
      <a href="#" class="explore-link"
          >Explore ${item.title} &nbsp;&nbsp;&nbsp;<i
            class="far fa-angle-right"
          ></i
        ></a>
    </div>
    <div class="px-5 py-4">
      <img src=${item.img} alt="" />
    </div>
  </div>
  </div>`;
};

//initial active nav-item and course detail
coursesNav[0].classList.add("active");
filteredData(coursesNav[0].dataset.name);

//When click navItem
coursesNav.forEach((item) => {
  item.addEventListener("click", () => {
    filteredData(item.dataset.name);
    removeAllActiveNav();
    item.classList.add("active");
  });
});

const removeAllActiveNav = () => {
  coursesNav.forEach((item) => {
    item.classList.remove("active");
  });
};
