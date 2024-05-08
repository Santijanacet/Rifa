import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./premios.css"

export default function Premios({ img, titulo, descripcion, precio }) {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full max-w-sm mx-auto">
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img src={img} alt="card-image" />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {titulo}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {descripcion}
        </p>
      </div>
      <div className="p-3 flex items-center justify-center" >
       <a href="https://wa.me/+573003996872" className="btn1">
          Comprar boleta en {precio} $ pesos 
          <img src="./image/wp.svg" alt=""  className="icon"/>
       </a>
    </div>
    </div>
  );
}
