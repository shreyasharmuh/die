export default function Footer() {
  return (
    <footer className="bg-white text-black">

      <div className="max-w-[1800px] mx-auto px-8 md:px-20 py-24">

        <div className="h-px bg-black/10 mb-20" />

        <div className="grid lg:grid-cols-3 gap-20">

          {/* Left */}

          <div>

            <p
              className="
              uppercase
              tracking-[0.75em]
              text-[10px]
              text-black/35
              mb-8
              "
            >
              Collaboration
            </p>

            <h3
              className="
              text-3xl
              font-extralight
              tracking-[-0.04em]
              "
            >
              DIE ×
              <br />
              Emporio Armani
            </h3>

          </div>

          {/* Center */}

          <div>

            <p className="uppercase tracking-[0.6em] text-[10px] text-black/35 mb-8">
              Campaign
            </p>

            <div className="space-y-4 text-black/65">

              <p>Autumn Winter 2027</p>

              <p>Milan</p>

              <p>Geneva</p>

              <p>Zurich</p>

            </div>

          </div>

          {/* Right */}

          <div className="lg:text-right">

            <p className="uppercase tracking-[0.6em] text-[10px] text-black/35 mb-8">
              Archive
            </p>

            <p className="text-black/65 leading-8">
              A conceptual collaboration
              exploring contemporary
              Italian tailoring through the
              editorial language of DIE.
            </p>

          </div>

        </div>

        <div className="mt-24 flex justify-between items-center">

          <p
            className="
            uppercase
            tracking-[0.6em]
            text-[9px]
            text-black/35
            "
          >
            © 2027 DIE®
          </p>

          <p
            className="
            uppercase
            tracking-[0.6em]
            text-[9px]
            text-black/35
            "
          >
            Collaboration Archive
          </p>

        </div>

      </div>

    </footer>
  );
}