import Image from "next/image";

const about = () => {

  return (
    <section id="about" className="grid grid-cols-2 container gap-4 pt-20">
        <div id="img" className="mx-4 my-4">
            <Image className="mx-auto" width={500} height={500} src="/perfil.jpg" alt="" />
        </div>
        <div id="informacion" className="my-4">
            <h1 className="text-5xl font-bold">Sobre Mi</h1>
            <hr />
            <h2 className="text-3xl font-bold text-gray-700 my-2">Agustin Lorenzatto</h2>
            <p className="text-xl grid gap-8">
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse ea laboriosam nam porro maxime pariatur eligendi temporibus quidem tempora cumque, aspernatur reprehenderit,
                    voluptatem ad eum deserunt magnam asperiores beatae facere. Eos animi, illum,
                    nobis maiores, sit voluptates ipsam provident impedit aspernatur ad deserunt quia ipsa nostrum amet sapiente aliquid.
                    Quod ab minima nesciunt quis sint eligendi necessitatibus, ut ducimus exercitationem.
                </span>
                
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis similique, nemo velit deleniti voluptas,
                    consectetur facilis quaerat, maxime accusantium laborum illum quibusdam est aperiam vel ipsum voluptatibus numquam
                    consequatur pariatur.
                </span>
            </p>
            <button className="border bg-transparent rounded-3xl border-black p-5 mt-5 text-3xl hover:bg-black hover:text-white">Descargar CV</button>
        </div>
    </section>

  )
}

export default about