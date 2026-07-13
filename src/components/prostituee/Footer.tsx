export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">

      <div className="max-w-[1850px] mx-auto px-10 py-40">

        <div className="grid lg:grid-cols-2 gap-24">

          {/* Left */}

          <div>

            <p
              className="
              uppercase
              tracking-[0.7em]
              text-[10px]
              text-white/40
              mb-10
              "
            >
              Maison
            </p>

            <h2
              className="
              text-6xl
              md:text-8xl
              font-extralight
              tracking-[-0.06em]
              leading-[0.9]
              "
            >
              PROSTITUTÉE
            </h2>

            <p
              className="
              mt-12
              max-w-md
              text-white/50
              leading-8
              "
            >
              Designed by DIE.

              <br /><br />

              Quiet luxury through intimate
              essentials and timeless
              silhouettes.
            </p>

          </div>

          {/* Right */}

          <div
            className="
            grid
            grid-cols-2
            gap-y-10
            gap-x-20
            self-end
            "
          >

            <a className="uppercase tracking-[0.3em] text-[11px] hover:text-white/60 transition">
              Collection
            </a>

            <a className="uppercase tracking-[0.3em] text-[11px] hover:text-white/60 transition">
              Campaigns
            </a>

            <a className="uppercase tracking-[0.3em] text-[11px] hover:text-white/60 transition">
              Journal
            </a>

            <a className="uppercase tracking-[0.3em] text-[11px] hover:text-white/60 transition">
              About
            </a>

            <a className="uppercase tracking-[0.3em] text-[11px] hover:text-white/60 transition">
              Contact
            </a>

            <a className="uppercase tracking-[0.3em] text-[11px] hover:text-white/60 transition">
              Instagram
            </a>

          </div>

        </div>

        <div className="h-px bg-white/10 my-24" />

        <div className="flex justify-between items-center flex-wrap gap-8">

          <p
            className="
            uppercase
            tracking-[0.4em]
            text-[10px]
            text-white/35
            "
          >
            © 2027 DIE · PROSTITUTÉE
          </p>

          <p
            className="
            uppercase
            tracking-[0.4em]
            text-[10px]
            text-white/35
            "
          >
            Paris · Genève · Milano
          </p>

        </div>

      </div>

    </footer>
  );
}