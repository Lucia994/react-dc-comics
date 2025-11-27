export default function Footer() {
  const linkMenuDC = [
    {
      title: "Terms Of Use",
      path: "/terms-of-use",
    },
    {
      title: "Privacy policy(News)",
      path: "/privacy-policy",
    },
    {
      title: "Ad Choices",
      path: "/ad-choices",
    },
    {
      title: "Advertising",
      path: "/advertising",
    },
    {
      title: "Jobs",
      path: "/jobs",
    },
    {
      title: "Subsriptions",
      path: "/subsriptions",
    },
    {
      title: "Talent Worshops",
      path: "/talent-worshops",
    },
    {
      title: "CPSC Certificates",
      path: "/cpsc-certificates",
    },
    {
      title: "Ratings",
      path: "/ratings",
    },
    {
      title: "Shop Help",
      path: "/shop-help",
    },
    {
      title: "Contact Us",
      path: "/contact-us",
    },
  ];

  const linkMenuDcComics = [
    {
      title: "Characters",
      path: "/characters",
    },
    {
      title: "Comics",
      path: "/comics",
    },
    {
      title: "Movies",
      path: "/movies",
    },
    {
      title: "Tv",
      path: "/tv",
    },
    {
      title: "Games",
      path: "/games",
    },
    {
      title: "Videos",
      path: "/videos",
    },
    {
      title: "News",
      path: "/news",
    },
  ];

  const linkMenuSites = [
    {
      title: "DC",
      path: "/dc",
    },
    {
      title: "MAD Magazine",
      path: "/mad-magazine",
    },
    {
      title: "DC Kids",
      path: "/dc-kids",
    },
    {
      title: "DC Universe",
      path: "dc-universe",
    },
    {
      title: "DC Power Visa",
      path: "dc-power-visa",
    },
  ];

  const linkMenuShop = [
    {
      title: "Shop DC",
      path: "/shop-dc",
    },
    {
      title: "Shop DC Collectibles",
      path: "/shop-dc-collectibles",
    },
  ];
  const menuSocial = [
    {
      name: "facebook",
      path: "/facebook",
      src: "../assets/img/footer-facebook.png",
    },
    {
      name: "twitter",
      path: "/twitter",
      src: "../assets/img/footer-twitter.png",
    },
    {
      name: "youtube",
      path: "/youtube",
      src: "../assets/img/footer-youtube.png",
    },
    {
      name: "pintarest",
      path: "/pintarest",
      src: "../assets/img/footer-pintarest.png",
    },
    {
      name: "periscope",
      path: "/periscope",
      src: "../assets/img/footer-periscope.png",
    },
  ];

  return (
    <footer>
      <section className="footer-top">
        <nav className="flex container">
          <div className="col">
            <h3>DC COMICS</h3>
            <ul>
              <li>
                {linkMenuDcComics.map((curLinkDComic, index) => (
                  <li key={index}>
                    <a href="">{curLinkDComic.title}</a>
                  </li>
                ))}
              </li>
            </ul>
            <h3>SHOP</h3>
            <ul>
              <li>
                {linkMenuShop.map((curLinkShop, index) => (
                  <li key={index}>
                    <a href="">{curLinkShop.title}</a>
                  </li>
                ))}
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>DC </h3>
            <ul>
              <li>
                {linkMenuDC.map((curLinkDC, index) => (
                  <li key={index}>
                    <a href="">{curLinkDC.title}</a>
                  </li>
                ))}
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>SITES</h3>
            <ul>
              <li>
                {linkMenuSites.map((curLinkSite, index) => (
                  <li key={index}>
                    <a href="">{curLinkSite.title}</a>
                  </li>
                ))}
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <section className="footer-bottom flex container">
        <button>
          <h3>SIGN-UP NOW!</h3>
        </button>
        <nav className="menu-social flex">
          <h2>FOLLOW US</h2>
          <ul className="flex j-content-between align-items-center">
            {menuSocial.map((curLinkSocial, index) => (
              <li key={index}>
                <img src={curLinkSocial.src} />
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </footer>
  );
}
