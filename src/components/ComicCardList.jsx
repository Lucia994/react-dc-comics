import { comics } from "../data/comics";
import ComicCard from "./ComicCard";

export default function ComicCardList() {
  return (
    <ul className="card flex j-content-between align-items-center">
      {comics.map((comic) => (
        <li key={comic.id}>
          <img src={comic.thumb} />
          <h5>{comic.title}</h5>
        </li>
      ))}
    </ul>
  );
}
