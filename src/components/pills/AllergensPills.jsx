export const AllergensPills = (props) => {
  const { allergen } = props;

  const allergenColor = {
    gluten: "bg-orange-300 text-orange-900",
    crustaceos: "bg-red-300 text-red-900",
    huevos: "bg-amber-300 text-amber-900",
    pescado: "bg-sky-300 text-sky-900",
    cacahuetes: "bg-amber-500 text-amber-900",
    soja: "bg-emerald-300 text-emerald-900",
    lacteos: "bg-purple-300 text-purple-900",
    frutos_cascara: "bg-yellow-700 text-yellow-400",
    apio: "bg-lime-300 text-lime-900",
    mostaza: "bg-yellow-500 text-yellow-900",
    sesamo: "bg-orange-400 text-orange-900",
    sulfitos: "bg-blue-300 text-blue-900",
    altramuz: "bg-yellow-300 text-yellow-900",
    moluscos: "bg-gray-300 text-gray-900",
  };

  const allergenName = {
    gluten: "Gluten",
    crustaceos: "Crustáceos",
    huevos: "Huevos",
    pescado: "Pescado",
    cacahuetes: "Cacahuetes",
    soja: "Soja",
    lacteos: "Lácteos",
    frutos_cascara: "Frutos de cáscara",
    apio: "Apio",
    mostaza: "Mostaza",
    sesamo: "Sésamo",
    sulfitos: "Sulfitos",
    altramuz: "Altramuces",
    moluscos: "Moluscos",
  };

  return (
    <>
      <li
        className={`px-1.5 py-0.5 rounded-full whitespace-nowrap ${allergenColor[allergen]}`}
      >
        {allergenName[allergen]}
      </li>
    </>
  );
};
