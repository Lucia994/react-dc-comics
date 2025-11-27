import { comics } from "../data/comics";

export default function ComicCard({ thumb, title }) {
  return (
    <>
      <ul className="card flex j-content-between align-items-center">
        <li>
          <img src={thumb} />
          <h5>{title}</h5>
        </li>
      </ul>
    </>
  );
}
