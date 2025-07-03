import Image from "next/image"

export default function Home() {
  return (
    <section className="mb-28 mt-14 md:mb-0 md:p-10">
      <div className="flex flex-col md:flex-row justify-center items-start md:gap-4 max-w-5xl mx-auto md:px-4">
        <div className="w-full md:w-1/2 max-w-xl">
          <Image
            src="/docs/menu-front.png"
            alt="Image 1"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 max-w-xl">
          <Image
            src="/docs/menu-back.png"
            alt="Image 2"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
