const category = (item) => `<div class="category-item col-sm-4 col-md-3 px-0">
<div class="card">
  <img
    class="card-img-top img-fluid"
    width="100%"
    src=${item.img}
    alt=${item.title}
  />
  <div class="card-body">
    <div class="title">${item.title}</div>
  </div>
</div>
</div>`;
categoriesData.forEach((item) => {
  document.querySelector(".category-container").innerHTML += category(item);
});
