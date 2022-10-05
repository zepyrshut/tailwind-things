import { AllergensPills } from "../pills/AllergensPills.jsx";

export const CardWithAsidePhoto = (props) => {
  const { name, description, allergens, price, pictureLink } = props.menu;
  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  const menuHasPicture = pictureLink !== undefined;
  return (
    <div className={`p-2`}>
      <div
        className={`rounded-2xl bg-gradient-to-r from-[#91eff6] via-[#c8eddc] to-[#ffeac2] p-1 shadow-xl`}
      >
        <div
          className={`grid ${menuHasPicture ? "grid-cols-8" : "grid-cols-1"}`}
        >
          <div
            style={{ backgroundImage: `url(${pictureLink})` }}
            className={`rounded-l-xl col-span-3 bg-cover bg-center bg-norepeat`}
          ></div>

          <div
            className={`grid grid-cols-1 bg-white col-span-5 h-44 p-2 ${
              menuHasPicture ? "rounded-r-xl" : "rounded-xl"
            }`}
          >
            <h1 className={`text-center text-xl font-bold`}>{name}</h1>
            <div className={`px-2`}>
              <div>
                <p className={`font-thin content-start items-start`}>
                  {description}
                </p>
              </div>
            </div>
            <div
              className={`flex flex-nowrap place-content-between gap-2 self-end px-2`}
            >
              <ul
                className={`text-xs flex gap-1 overflow-x-scroll scrollbar-hide col-span-3`}
              >
                {allergens && allergens.length > 0
                  ? allergens.map((allergen) => (
                      <AllergensPills allergen={allergen} />
                    ))
                  : () => undefined}
              </ul>
            </div>
            <p
              className={`text-xl font-bold place-self-end  whitespace-nowrap pr-2`}
            >
              {formattedPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
