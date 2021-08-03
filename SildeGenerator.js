const slide = (item) => {
  let bestSeller = "";
  if (item.isBestSeller === true) {
    bestSeller = `<div class="tag">
      <span class="badge badge-warning">Bestseller</span>
      </div>`;
  } else {
    bestSeller = "";
  }

  let stars = "";
  const rate = item.rate;
  for (let i = 0; i < Math.floor(rate); i++) {
    stars += '<i class="fas fa-star"></i>';
  }

  const firstDecimal = Math.round((rate - Math.floor(rate)) * 10);
  if (firstDecimal >= 3) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }
  console.log(item.img);
  return `<div class="slide">
<div class="overlay-holder">
  <img
    width="100%"
    src=${item.img}
    alt=""
  />
  <div class="dark-overlay"></div>
</div>
<div class="heading">
${item.header}
</div>
<p class="author text-secondary my-1">${item.author}</p>
<p class="star my-1">
${item.rate}&nbsp;
  ${stars}&nbsp;
  <span class="text-secondary"> (${item.enrollerNum})</span>
</p>
<p class="price my-1">
${item.price} &nbsp;<span class="text-secondary">${item.originalPrice}</span>
</p>
${bestSeller}
</div>`;
};
const carousel = document.querySelector(".carousel");
slideData.forEach((item) => {
  carousel.innerHTML += slide(item);
});
