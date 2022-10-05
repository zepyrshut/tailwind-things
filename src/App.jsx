import "./custom.css";
import { CardWithAsidePhoto } from "./components/cards/CardWithAsidePhoto.jsx";
import { Navbar } from "./components/navbar/Navbar";

export const App = () => {
  const menu = [
    {
      category: "Entrantes",
      items: [
        {
          name: "Salmorejo cordobés",
          description: "Con jamón ibérico y aceite de oliva virgen extra. ",
          allergens: ["gluten"],
          price: "4 € / Un.",
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
          priceHalf: 12,
          priceFull: 15,
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
          priceFull: 16,
          pictureLink:
            "https://lacocinademimadre.net/wp-content/uploads/2020/04/WhatsApp-Image-2020-05-23-at-15.54.52-1.jpeg",
        },
        {
          name: "Solomillo de cerdo",
          description: "Con salsa roquefort y patatas fritas.",
          allergens: ["gluten", "huevos", "lacteos", "apio", "soja"],
          priceFull: 12,
          pictureLink:
            "https://lacocinademimadre.net/wp-content/uploads/2020/04/IMG20220604162149-scaled.jpg",
        },
      ],
    },
    {
      category: "Burgers",
      items: [
        {
          name: "Burger de buey",
          description:
            "Carne de vacuno 100%, madurada durante 48 meses. Queso de cabra, cebolla caramelizada y salsa “miel y mostaza”. Acompañada de patatas fritas.",
          allergens: ["gluten", "huevos", "lacteos", "apio", "soja"],
          priceFull: 10,
          pictureLink:
            "https://lacocinademimadre.net/wp-content/uploads/2019/06/68823853_401956950457515_8760789014533828939_n.jpg",
        },
        {
          name: "Burger de pollo",
          description:
            "Con salsa de yogur y curry. Acompañada de patatas fritas.",
          allergens: ["gluten", "huevos", "lacteos", "apio", "soja"],
          priceFull: 8,
          pictureLink:
            "https://lacocinademimadre.net/wp-content/uploads/2020/04/A2F9AF36-83D7-4A0B-8778-01830F712DA1-scaled.jpeg",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      {/*{menu.map((category) => (*/}
      {/*  <div>*/}
      {/*    <h1*/}
      {/*      className={`text-[#000000] text-center text-xl font-bold sticky top-0 px-3 py-4 bg-[#CCAD52]/50 shadow-md backdrop-blur-lg`}*/}
      {/*    >*/}
      {/*      {category.category.toUpperCase()}*/}
      {/*    </h1>*/}
      {/*    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>*/}
      {/*      {category.items.map((item) => (*/}
      {/*        <CardWithAsidePhoto menu={item} />*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*))}*/}
    </>
  );
};
