import { itemsMain } from "../data/itemsMain";
import MenuMain from "./MenuMain";

export default function MenuMainList() {
  return (
    <>
      <ul className="img flex j-content-between align-items-center">
        {itemsMain.map((item) => (
          <MenuMain key={item.id} img={item.img} title={item.title} />
        ))}
      </ul>
    </>
  );
}
