import Image from "next/image";

export default function Editorial() {
return  <section className="relative h-screen w-full overflow-hidden">


  <Image
    src="/images/image1.jpg"
    alt="Editorial Campaign Image"
    fill
    priority
    className="object-cover scale-105"
  />

  <div className="absolute inset-0 bg-black/35" />

  <div className="relative z-10 h-full flex items-center justify-center text-center px-8">

    <div className="max-w-5xl">

      <p className="uppercase tracking-[0.6em] text-white/70 mb-8 text-xs">
        DIE / Editorial Campaign
      </p>

      <h2 className="text-white text-5xl md:text-8xl leading-[0.9] tracking-[-0.06em] font-light">
        FORM
        <br />
        WITHOUT
        <br />
        NOISE
      </h2>

      <p className="text-white/80 mt-10 max-w-xl mx-auto text-lg">
        Precision. Silence. Presence.
      </p>

    </div>

  </div>

</section>
}
