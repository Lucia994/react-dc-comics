import jumbotron from "../assets/img/jumbotron.jpg";
import { comics } from "../data/comics";
import ComicCardList from "./ComicCardList";

const itemsMenuMain = [
  {
    src: "/images/buy-comics-digital-comics.png",
    title: "DIGITAL COMICS",
  },
  {
    src: "/images/buy-comics-merchandise.png",
    title: "DC MERCHANDISE",
  },
  {
    src: "/images/buy-comics-shop-locator.png",
    title: "SUBSCRIPTION",
  },
  {
    src: "/images/buy-comics-subscriptions.png",
    title: "COMIC SHOP LOCATOR",
  },
  {
    src: "/images/buy-dc-power-visa.svg",
    title: "DC POWER VISA",
  },
];

export default function Main() {
  return (
    <main>
      <section className="sectionJumbotron">
        <img src={jumbotron} />
      </section>
      <section className="sectionFirst flex">
        {/*Insert item cards*/}
        <ComicCardList />
      </section>
      <div className="sectionSecond">
        <div className="item">
          <ul className="img flex j-content-between align-items-center">
            {itemsMenuMain.map((item) => (
              <li key={item.index}>
                <img src={item.src} />
                <h5>{item.title}</h5>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
