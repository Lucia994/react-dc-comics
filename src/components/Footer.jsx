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

  return (
    <footer>
      <section className="footer-top">
        <nav className="flex container">
          <div className="col">
            <h3>DC COMICS</h3>
            <ul>
              <li>
                {linkMenuDC.map((curLinkDC, index) => (
                  <li key={index}>
                    <a href="">{curLinkDC.title}</a>
                  </li>
                ))}
              </li>
            </ul>
            <h3>SHOP</h3>
            <ul>
              <li>
                <a href="">Characters</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>DC </h3>
            <ul>
              <li>
                <a href="">Characters</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>SITES</h3>
            <ul>
              <li>
                <a href="">Characters</a>
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
          <ul>
            <li></li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
