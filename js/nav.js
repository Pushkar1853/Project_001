const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
        <div class="nav">
        <img src="img/attachment_76170693.png" class="brand-logo" alt="" />
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search Product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/img/person.svg" alt="" /></a>
                <a href="#"><img src="img/img/cart3.svg" alt="" /></a>
            </div>
        </div>
    `;
};

createNav();
