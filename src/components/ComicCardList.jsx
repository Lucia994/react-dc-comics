import { comics } from "../data/comics";
import ComicCard from "./ComicCard";

export default function ComicCardList() {
  console.log(comics);
  return (
    <>
      <ul className="card flex j-content-between align-items-center">
        {comics.map((comic) => (
          <ComicCard key={comic.id} thumb={comic.thumb} title={comic.title} />
        ))}
        ;
      </ul>
    </>
  );
}
