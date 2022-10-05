export const CardWithBackgroundPhoto = (props) => {
  return (
    <div className={`p-2`}>
      <a
        className={`relative block overflow-hidden rounded-xl bg-[url(https://lacocinademimadre.net/wp-content/uploads/2019/07/WhatsApp-Image-2022-05-15-at-6.23.46-PM.jpeg)] bg-cover bg-center bg-no-repeat`}
      >
        <div
          className={`relative bg-black bg-opacity-60 p-6 text-white grid grid-cols-1`}
        >
          <div className={`flex gap-2 items-center justify-between`}>
            <h1 className={`text-xl font-bold`}>Spaguetti a la boloñesa</h1>
            <p className={`text-2xl font-bold whitespace-nowrap`}>12,50 €</p>
          </div>
          <p className={`py-3`}>
            Casera, hecha con carne de vaca vieja, salsa boloñesa y queso.
          </p>
          <div className={`flex items-center pt-5`}>
            <ul className={`flex gap-1 overflow-x-scroll scrollbar-hide`}>
              <li
                className={`inline-block rounded-full bg-red-300 text-red-800 px-2 py-1.5 text-xs whitespace-nowrap`}
              >
                Frutos de cáscara
              </li>
              <li
                className={`inline-block rounded-full bg-orange-300 text-orange-800 px-2 py-1.5 text-xs whitespace-nowrap`}
              >
                Gluten
              </li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
};
