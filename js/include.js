// Vue Components.
{
  // header.
  var componentHeader = {
    template: `
      <header class="header">
        <h1 class="header__title"><a href="index.html">TECH</a></h1>
        <nav class="header__nav" id="header__nav">
          <ul>
            <li class="header__nav__listitem"><a href="index.html">ホーム</a></li>
            <li class="header__nav__listitem"><a href="service.html">事業内容</a></li>
            <li class="header__nav__listitem"><a href="blog.html">社員ブログ</a></li>
            <li class="header__nav__listitem"><a href="company.html">会社概要</a></li>
          </ul>
        </nav>
        <div class="header__menu" id="header__menu">
          <span class="header__menu__line--top"></span>
          <span class="header__menu__line--middle"></span>
          <span class="header__menu__line--bottom"></span>
        </div>
      </header>
    `,
  };

  // sctoll button.
  var commponentScrollBtn = {
    template: `
    <button class="scroll-top" id="scroll-top">↑</button>
  `,
  };

  // inquery.
  var componentInquery = {
    template: `
      <div class="common__section inquery">
        <h1 class="common__topic">お問い合わせ</h1>
        <p class="common__text">
          お仕事のご依頼や採用に関してはお問い合わせにて承っております．
        </p>
        <a class="common__button" id="modal__openBtn">お問い合わせ</a>

        <!-- modal -->
        <div class="inquery__modal" id="modal__window">
          <div class="inquery__modal__content">
            <div class="inquery__modal__content-inner">
              <div class="modal__exit">
                <button class="modal__exit__button" id="modal__closeBtn">
                  &Cross;
                </button>
              </div>

              <h1 class="modal__topic">お問い合わせ</h1>
              <form action="index.html" method="post" class="modal__form">
                <div>
                  <label class="modal__form__topic">会社名</label>
                  <input type="text" name="company" class="modal__form__input" />
                </div>

                <div>
                  <label class="modal__form__topic modal__form-required" >お名前</label >
                  <input type="text" name="name" class="modal__form__input" required />
                </div>

                <div>
                  <label class="modal__form__topic modal__form-required" >メールアドレス</label >
                  <input type="email" name="email" class="modal__form__input" required />
                </div>

                <div>
                  <label class="modal__form__topic modal__form-required" >お問い合わせ内容</label >
                  <textarea class="modal__form__textarea" name="content" rows="8" required ></textarea>
                </div>

                <button class="common__button modal__form__button" type="submit"> お申し込み </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `,
  };

  // footer.
  var componentFooter = {
    template: `
    <footer class="footer">
      <small>&copy; 2020 TECH inc.</small>
      <ul class="footer__link">
        <li class="footer__link__listitem"><a href="index.html">ホーム</a></li>
        <li class="footer__link__listitem"><a href="service.html">事業内容</a></li>
        <li class="footer__link__listitem"><a href="blog.html">社員ブログ</a></li>
        <li class="footer__link__listitem"><a href="company.html">会社概要</a></li>
      </ul>
    </footer>
  `,
  };

  new Vue({
    el: "#app",
    components: {
      "header-template": componentHeader,
      "scrollbtn-template": commponentScrollBtn,
      "inquery-template": componentInquery,
      "footer-template": componentFooter,
    },
  });
}

// add click event.
// - header menu.
{
  const target = document.getElementById("header__menu");
  target.addEventListener("click", () => {
    target.classList.toggle("open");
    const nav = document.getElementById("header__nav");
    nav.classList.toggle("in");
    const btnScroll = document.getElementById("scroll-top");
    btnScroll.classList.toggle("off");
  });
}

// - scroll to top.
{
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  let target = document.getElementById("scroll-top");
  target.addEventListener("click", scrollTop);

  function swicthOpacityByPosition() {
    const windowHeight = window.innerHeight;
    const offsetHeight = document.getElementById("app").offsetHeight;

    if (offsetHeight < windowHeight) {
      target.style.display = "none";
    } else {
      target.style.display = "block";
    }
  }

  window.addEventListener("load", swicthOpacityByPosition);
  window.addEventListener("resize", swicthOpacityByPosition);
}

// - modal window.
{
  const opneBtn = document.getElementById("modal__openBtn");
  const closeBtn = document.getElementById("modal__closeBtn");
  const modal = document.getElementById("modal__window");

  opneBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (
      !e.target.closest(".inquery__modal__content-inner") &&
      e.target.id !== "modal__openBtn"
    ) {
      modal.style.display = "none";
    }
  });
}
