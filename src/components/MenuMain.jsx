import { itemsMain } from "../data/itemsMain";

export default function MenuMain({ img, title }) {
  return (
    <>
      <li>
        <img src={img} />
        <h5>{title}</h5>
      </li>
    </>
  );
}
