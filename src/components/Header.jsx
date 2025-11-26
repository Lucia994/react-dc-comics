import dcLogo from "../assets/img/dc-logo.png";

/*1. Define the compotenent*/
export default function Header() {
  return (
    <header>
      <nav className="container flex j-content-between align-items-center">
        <a>
          <img className="logoHeader" src={dcLogo} alt="DC Comics Logo" />
        </a>

        <ul className="flex g-10">
          <li>
            <a href="">CHARACTERS</a>
          </li>
          <li>
            <a href="">COMICS</a>
          </li>
          <li>
            <a href="">TV</a>
          </li>
          <li>
            <a href="">COLLECTIBLES</a>
          </li>
          <li>
            <a href="">VIDEOS</a>
          </li>
          <li>
            <a href="">FANS</a>
          </li>
          <li>
            <a href="">NEWS</a>
          </li>
          <li>
            <a href="">SHOP</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
