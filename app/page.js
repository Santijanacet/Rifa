import Link from "next/link";
import "./page.css";
export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mb-8">
      <h1 className="text-4xl font-sans tracking-wider text-white text-center mx-auto max-w-5xl">
  ¡Explora, gana y sorpréndete! <span style={{color:"#FDE047"}}>Participa en nuestra rifa</span> y podrías ganar bonos, viajes increíbles y los últimos modelos de teléfonos.
</h1>

      </div>
      <Link
        href="/premios"
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 px-6 rounded-lg bg-yellow-300 text-gray-900 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      >
        Comprar boletos
      </Link>
    </div>
  </>
  );
}
