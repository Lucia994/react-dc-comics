import bcDigitalComics from "../assets/img/buy-comics-digital-comics.png";
import bcMerchandise from "../assets/img/buy-comics-merchandise.png";
import bcShopLocator from "../assets/img/buy-comics-shop-locator.png";
import bcSubscriptions from "../assets/img/buy-comics-subscriptions.png";
import dcPowerVisa from "../assets/img/buy-dc-power-visa.svg";
import jumbotron from "../assets/img/jumbotron.jpg";

export default function Main() {
  return (
    <main>
      <section className="sectionJumbotron">
        <img src={jumbotron} />
      </section>
      <div className="sectionFirst flex">--&gt;Content goes here&lt;--</div>
      <div className="sectionSecond flex j-content-between align-items-center">
        <div className="item">
          <div className="img">
            <img src={bcDigitalComics} />
          </div>
          <div className="title">
            <h4>DIGITAL COMICS</h4>
          </div>
        </div>
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
          </div>
        </div>
      </div>
    </main>
  );
}
