import dcLogo from "../assets/img/dc-logo.png";

/*1. Define the compotenent*/
export default function Header() {
  const linkHeader = [
    {
      title: "CHARACTERS",
      path: "/characters",
      active: false,
    },
    {
      title: "COMICS",
      path: "/comics",
      active: true,
    },
    {
      title: "TV",
      path: "/tv",
      active: false,
    },
    {
      title: "COLLECTIBLES",
      path: "/collectibles",
      active: false,
    },
    {
      title: "VIDEOS",
      path: "/videos",
      active: false,
    },
    {
      title: "FANS",
      path: "/fans",
      active: false,
    },
    {
      title: "NEWS",
      path: "/news",
      active: false,
    },
    {
      title: "SHOP",
      path: "/shop",
      active: false,
    },
  ];
  return (
    <header>
      <nav className="container flex j-content-between align-items-center">
        <a>
          <img className="logoHeader" src={dcLogo} alt="DC Comics Logo" />
        </a>
        <ul className="flex g-10">
          {linkHeader.map((curLink, index) => (
            <li key={index}>
              <a href="">{curLink.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
