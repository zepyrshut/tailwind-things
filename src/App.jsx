import './custom.css';

export const App = () => {
  return (
    <>
      <hr/>
      <div className={`p-2`}>
      <a className={`relative block overflow-hidden rounded-xl bg-[url(https://lacocinademimadre.net/wp-content/uploads/2019/07/WhatsApp-Image-2022-05-15-at-6.23.46-PM.jpeg)] bg-cover bg-center bg-no-repeat`}>
        <div className={`relative bg-black bg-opacity-60 p-6 text-white grid grid-cols-1`}>
          <div className={`flex gap-2 items-center justify-between`}>
        <h1 className={`text-xl font-bold`}>Spaguetti a la boloñesa</h1>
          <p className={`text-2xl font-bold whitespace-nowrap`}>12,50 €</p>
          </div>
        <p className={`py-3`}>Casera, hecha con carne de vaca vieja, salsa boloñesa y queso.</p>
          <div className={`flex items-center pt-5`}>
            <ul className={`flex gap-1 overflow-x-scroll scrollbar-hide`}>
              <li className={`inline-block rounded-full bg-red-300 text-red-800 px-2 py-1.5 text-xs whitespace-nowrap`}>Frutos de cáscara</li>
              <li className={`inline-block rounded-full bg-orange-300 text-orange-800 px-2 py-1.5 text-xs whitespace-nowrap`}>Gluten</li>
            </ul>
          </div>
        </div>
      </a>
      </div>
      <hr/>

      <div className={`p-2`}>

        <div className={`rounded-2xl bg-gradient-to-r from-[#91eff6] via-[#c8eddc] to-[#ffeac2] p-1 shadow-xl`}>



        <div className={`grid grid-cols-8`}>

          <div className={`rounded-l-xl col-span-3 bg-cover bg-center bg-norepeat bg-[url(https://lacocinademimadre.net/wp-content/uploads/2020/04/WhatsApp-Image-2020-06-11-at-23.45.51.jpeg)]`}>
          </div>


          <div className={`grid grid-cols-1 rounded-r-xl bg-white col-span-5 h-44 pt-3 p-2`}>


            <h1 className={`text-center text-xl font-bold`}>
              Salmorejo cordobés
            </h1>

            <div className={`px-3`}>

              <div className={``}>
            <p className={`font-thin content-start items-start`}>
              Con jamón ibérico y aceite de oliva virgen extra.
              Con jamón ibérico y aceite de oliva virgen extra.
              Con jamón ibérico y aceite de oliva virgen extra.



            </p>
              </div>

            </div>

            <div className={`flex flex-nowrap place-content-between gap-2 self-end`}>
            <ul className={`text-xs flex gap-1 overflow-x-scroll scrollbar-hide col-span-3`}>
              <li className={`bg-orange-300 text-orange-900 py-1.5 px-2 rounded-full whitespace-nowrap`}>Gluten</li>
            </ul>
            <p className={`text-right text-xl font-bold whitespace-nowrap`}>5,00 €</p>
            </div>

          </div>

        </div>

        </div>




      </div>


    </>
  );
}