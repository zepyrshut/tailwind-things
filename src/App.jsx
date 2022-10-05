import "./custom.css";
import { CardWithAsidePhoto } from "./components/cards/CardWithAsidePhoto.jsx";

export const App = () => {
  const menu = [
    {
      name: "Salmorejo cordobés",
      description: "Con jamón ibérico y aceite de oliva virgen extra. ",
      allergens: ["Gluten"],
      price: 5,
      pictureLink:
        "https://lacocinademimadre.net/wp-content/uploads/2020/04/WhatsApp-Image-2020-06-11-at-23.45.51.jpeg",
    },
  ];

  return (
    <>
      <CardWithAsidePhoto menu={menu[0]} />
    </>
  );
};
