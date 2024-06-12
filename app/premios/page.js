import Premios from "@/components/premios";
import "./premios.css";

export default function Boletos() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <h1 className="text-5xl font-sans tracking-wider text-yellow-500 text-center mx-auto max-w-5xl">
        RIFA POR UN SUEÑO
      </h1>
      <h3 className="text-3xl font-sans tracking-wider text-white text-center mx-auto max-w-5xl">
        Descubre el lujo de ganar: premios exclusivos que van desde emocionantes
        viajes hasta tecnología y demás.
      </h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-6 xl:gap-x-8">
        <Premios
          img={"image/viaje.webp"}
          titulo={"Viaje a España - Madrid (Juega con Sinuano)"}
          descripcion={
            "Imagina una aventura en España donde cada día es una nueva sorpresa: desde la majestuosidad de Madrid."
          }
        />
        <Premios
          img={"image/mercado.webp"}
          titulo={"Gran mercado familiar (Juega con Caribeña)"}
          descripcion={
            "Descubre un mercado familiar lleno de sorpresas locales e internacionales, una experiencia única para disfrutar en familia."
          }
        />
        <Premios
          img={"image/Bono2.webp"}
          titulo={"Bono de 300 mil pesos  (Juega con Dorado)"}
          descripcion={
            "Disfruta de la libertad de gastar 300 mil pesos como quieras: viajes, experiencias únicas, o tus sueños hechos realidad."
          }
        />
        <Premios
          img={"image/telefono.webp"}
          titulo={"Teléfono celular (Juega con la Fastantisca)"}
          descripcion={
            "Participa en el sorteo y gana un teléfono que combina estilo, funcionalidad y conectividad para mantener tu vida conectada y elegante. ¡¡Este es tu momento!!"
          }
        />
        <Premios
          img={"image/Bono2.webp"}
          titulo={"Bono de 300 mil pesos  (Juega con Paisita)"}
          descripcion={
            "El bono de 300 mil pesos te brinda la oportunidad de hacer realidad tus sueños, ya sea viajar, disfrutar experiencias únicas o invertir en lo que desees."
          }
        />
      </div>

      <a href="https://wa.me/+573003996872" className="btn1">
        <span>Compra tu boleta por
          
          
          
           5000 $ pesos</span>
        <img src="./image/wp.svg" alt="" className="icon" />
      </a>
    </div>
  );
}
