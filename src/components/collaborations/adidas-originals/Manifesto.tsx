export default function Manifesto() {
  return (
    <section className="bg-[#F7F7F4] text-black py-44 md:py-60">

      <div className="max-w-[1700px] mx-auto px-8 md:px-20">

        {/* Label */}

        <p
          className="
          uppercase
          tracking-[0.65em]
          text-[10px]
          text-black/35
          mb-12
          "
        >
          Manifesto
        </p>

        {/* Headline */}

        <h2
          className="
          text-5xl
          md:text-7xl
          xl:text-[8rem]
          font-extralight
          tracking-[-0.05em]
          leading-[0.9]
          max-w-5xl
          "
        >
          Movement
          <br />
          becomes
          <br />
          identity.
        </h2>

        {/* Body */}

        <div className="grid lg:grid-cols-2 gap-20 mt-28">

          <p
            className="
            text-lg
            leading-10
            text-black/70
            "
          >
            DIE × Adidas Originals explores a contemporary wardrobe shaped by
            performance, precision and cultural permanence. Rather than
            separating sport from luxury, the collaboration considers movement
            as a universal design language—where garments are engineered with
            intention and worn beyond the boundaries of competition.
          </p>

          <p
            className="
            text-lg
            leading-10
            text-black/70
            "
          >
            Drawing from the legacy of the Three Stripes and DIE’s editorial
            philosophy, each silhouette balances technical innovation with
            refined minimalism. Every detail is reduced to its essential form,
            creating a collection designed for modern life while honoring the
            heritage of performance design.
          </p>

        </div>

        {/* Quote */}

        <div className="mt-40 border-t border-black/10 pt-20">

          <p
            className="
            text-3xl
            md:text-5xl
            font-extralight
            leading-relaxed
            tracking-[-0.03em]
            max-w-5xl
            "
          >
            "Performance is not a destination.
            It is a continuous dialogue between
            innovation, discipline and design."
          </p>

        </div>

      </div>

    </section>
  );
}