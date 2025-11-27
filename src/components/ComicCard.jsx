import { comics } from "../data/comics";

export default function ComicCard({ thumb, title }) {
  return (
    <>
      <li>
        <img src={thumb} />
        <h5>{title}</h5>
      </li>
    </>
  );
}
