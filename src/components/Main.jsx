import jumbotron from "../assets/img/jumbotron.jpg";
import { comics } from "../data/comics";
import { itemsMain } from "../data/itemsMain";
import ComicCardList from "./ComicCardList";
import MenuMainList from "./MenuMainList";

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
        <MenuMainList />
      </div>
    </main>
  );
}
