import "./custom.css";
import { CardWithAsidePhoto } from "./components/cards/CardWithAsidePhoto.jsx";

export const App = () => {
  const menu = [
    {
      category: "Entrantes",
      items: [
        {
          name: "Salmorejo cordobés",
          description: "Con jamón ibérico y aceite de oliva virgen extra. ",
          allergens: ["gluten"],
          price: 5,
          pictureLink:
            "https://static9.depositphotos.com/1038919/1184/i/450/depositphotos_11842968-stock-photo-salmorejo-cordobes.jpg",
        },
        {
          name: "Ensalada César",
          description:
            "Pollo de corral, mézclum, tomate, parmesano, picatostes y salsa casera.",
          allergens: [
            "gluten",
            "huevos",
            "lacteos",
            "sesamo",
            "mostaza",
            "sulfitos",
          ],
          price: 12,
        },
      ],
    },
    {
      category: "Carnes",
      items: [
        {
          name: "Costillar de cerdo",
          description: "Ibérico cocinado lentamente en salsa barbacoa casera.",
          allergens: ["gluten", "mostaza", "sulfitos"],
          price: 16,
          pictureLink:
            "https://lacocinademimadre.net/wp-content/uploads/2020/04/WhatsApp-Image-2020-05-23-at-15.54.52-1.jpeg",
        },
      ],
    },
  ];

  return (
    <>
      {menu.map((category) => (
        <div className={`p-2`}>
          <h1 className={`text-center text-xl font-bold`}>
            {category.category}
          </h1>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2`}
          >
            {category.items.map((item) => (
              <CardWithAsidePhoto menu={item} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
