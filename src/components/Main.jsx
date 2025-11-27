import bcDigitalComics from "../assets/img/buy-comics-digital-comics.png";
import bcMerchandise from "../assets/img/buy-comics-merchandise.png";
import bcShopLocator from "../assets/img/buy-comics-shop-locator.png";
import bcSubscriptions from "../assets/img/buy-comics-subscriptions.png";
import dcPowerVisa from "../assets/img/buy-dc-power-visa.svg";
import jumbotron from "../assets/img/jumbotron.jpg";
import { comics } from "../data/comics";

const itemsMenuMain = [
  {
    src: "../assets/img/buy-comics-digital-comics.png",
    title: "DIGITAL COMICS",
  },
  {
    src: "../assets/img/buy-comics-merchandise.png",
    title: "DC MERCHANDISE",
  },
  {
    src: "../assets/img/buy-comics-shop-locator.png",
    title: "SUBSCRIPTION",
  },
  {
    src: "../assets/img/buy-comics-subscriptions.png",
    title: "COMIC SHOP LOCATOR",
  },
  {
    src: "../assets/img/buy-dc-power-visa.png",
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
        <section>
          <ul className="card flex j-content-between align-items-center">
            {comics.map((comic) => (
              <li key={comic.id}>
                <img src={comic.thumb} />
                <h5>{comic.title}</h5>
              </li>
            ))}
          </ul>
        </section>
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
          {/* <div className="img">
            <img src={bcDigitalComics} />
          </div>
          <div className="title">
            <h4>DIGITAL COMICS</h4>
          </div> */}
          {/* </div>
        <div className="item">
          <div className="img">
            <img src={bcMerchandise} />
          </div>
          <div className="title">
            <h4>DC MERCHANDISE</h4>
          </div>
        </div>
        <div className="item">
          <div className="img">
            <img src={bcShopLocator} />
          </div>
          <div className="title">
            <h4>SUBSTRIPTION</h4>
          </div>
        </div>
        <div className="item">
          <div className="img">
            <img src={bcSubscriptions} />
          </div>
          <div className="title">
            <h4>COMIC SHOP LOCATOR</h4>
          </div>
        </div>
        <div className="item">
          <div className="img">
            <img src={dcPowerVisa} />
          </div>
          <div className="title">
            <h4>DC POWER VISA</h4>
          </div>*/}
        </div>
      </div>
    </main>
  );
}
