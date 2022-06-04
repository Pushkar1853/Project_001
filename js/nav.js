const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible =
      user.title.toLowerCase().includes(value) ||
      user.brand.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});

fetch("./product_dummy_data.json")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      const footer = card.querySelector("[data-footer]");
      const img = card.querySelector("[img-thumbnail]");
      header.textContent = user.title;
      body.textContent = user.brand;
      footer.textContent = user.price;
      img.src = user.thumbnail;
      userCardContainer.append(card);
      return {
        title: user.title,
        brand: user.brand,
        description: user.description,
        thumbnail: user.thumbnail,
        element: card,
      };
    });
  });

const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
        <div class="nav">
        <img src="img/attachment_76170693.png" class="brand-logo" alt="" />
            <div class="nav-items">
                <a href="#"><img src="img/img/person.svg" alt="" /></a>
                <a href="#"><img src="img/img/cart3.svg" alt="" /></a>
            </div>
        </div>
    `;
};

createNav();
