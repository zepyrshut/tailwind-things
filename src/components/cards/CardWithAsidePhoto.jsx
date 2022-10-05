import { AllergensPills } from "../pills/AllergensPills.jsx";
import { useEffect, useState } from "react";

export const CardWithAsidePhoto = (props) => {
  const [priceHalfState, setPriceHalfState] = useState(null);
  const [priceFullState, setPriceFullState] = useState(null);

  const {
    name,
    description,
    allergens,
    price,
    priceHalf,
    priceFull,
    pictureLink,
  } = props.menu;

  useEffect(() => {
    if (priceHalf != undefined) {
      setPriceHalfState(renderPrice(priceHalf));
    }

    if (priceFull != undefined) {
      setPriceFullState(renderPrice(priceFull));
    }
  }, [priceHalf, priceFull]);

  function renderPrice(price) {
    const formattedPrice = new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);

    return formattedPrice;
  }

  const menuHasPicture = pictureLink !== undefined;
  return (
    <div className={`first:mt-5 last:mb-10 mb-5 mx-2`}>
      <div
        className={`rounded-2xl bg-gradient-to-r from-[#CCAD52] via-[#202020] to-[#EAEAEA] p-1 shadow-md`}
      >
        <div
          className={`grid ${menuHasPicture ? "grid-cols-8" : "grid-cols-1"}`}
        >
          <div
            style={{ backgroundImage: `url(${pictureLink})` }}
            className={`rounded-l-xl col-span-3 bg-cover bg-center bg-norepeat`}
          ></div>

          <div
            className={`grid grid-cols-1 bg-white col-span-5 h-52 p-2 ${
              menuHasPicture ? "rounded-r-xl" : "rounded-xl"
            }`}
          >
            <h1 className={`text-center text-xl font-bold text-[#CCAD52]`}>
              {name}
            </h1>
            <div className={`px-2 mt-2 mb-2 overflow-auto`}>
              <div>
                <p className={`font-thin content-start items-start`}>
                  {description}
                </p>
              </div>
            </div>
            <div
              className={`flex flex-nowrap place-content-between gap-2 self-end px-2 py-1`}
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
              {priceHalfState} {priceHalfState && priceFullState && " / "}
              {priceFullState}
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
