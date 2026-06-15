
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="px-8 md:px-16 pt-40 pb-24">

        <p className="uppercase tracking-[0.6em] text-xs text-black/40 mb-8">
          DIE / Contact
        </p>

        <h1 className="text-6xl md:text-[10rem] leading-[0.85] tracking-[-0.08em] font-light">
          CLIENT
          <br />
          SERVICES
        </h1>

        <p className="max-w-2xl mt-12 text-lg leading-relaxed text-black/60">
          For product inquiries, private appointments, editorial requests,
          collaborations and client services, our team is available to assist.
        </p>

      </section>

      {/* IMAGE */}
      <section className="px-8 md:px-16">

        <div className="relative overflow-hidden">

          <Image
            src="/images/editorial.jpg"
            alt="DIE Client Services"
            width={2000}
            height={1200}
            className="w-full h-[75vh] object-cover"
          />

        </div>

      </section>

      {/* CONTACT GRID */}
      <section className="px-8 md:px-16 py-32">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-black/40 mb-5">
              Client Services
            </p>

            <a
              href="mailto:clients@die.com"
              className="text-lg hover:opacity-60 transition"
            >
              clients@die.com
            </a>

            <p className="mt-4 text-black/60">
              Product information, orders,
              exchanges and assistance.
            </p>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-black/40 mb-5">
              Press
            </p>

            <a
              href="mailto:press@die.com"
              className="text-lg hover:opacity-60 transition"
            >
              press@die.com
            </a>

            <p className="mt-4 text-black/60">
              Editorial requests,
              publications and media inquiries.
            </p>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-black/40 mb-5">
              Partnerships
            </p>

            <a
              href="mailto:partners@die.com"
              className="text-lg hover:opacity-60 transition"
            >
              partners@die.com
            </a>

            <p className="mt-4 text-black/60">
              Collaborations, retail opportunities
              and strategic partnerships.
            </p>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-black/40 mb-5">
              Appointments
            </p>

            <a
              href="mailto:appointments@die.com"
              className="text-lg hover:opacity-60 transition"
            >
              appointments@die.com
            </a>

            <p className="mt-4 text-black/60">
              Private viewings and
              exclusive client consultations.
            </p>
          </div>

        </div>

      </section>

      {/* HOURS */}
      <section className="px-8 md:px-16 py-32 border-t border-black/10">

        <div className="grid lg:grid-cols-2 gap-24">

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-black/40 mb-6">
              Availability
            </p>

            <h2 className="text-5xl tracking-[-0.05em] font-light mb-8">
              Dedicated Support
            </h2>

            <p className="text-black/60 leading-relaxed text-lg">
              Our client advisors are available Monday through Friday,
              responding to inquiries with the attention and discretion
              expected from a luxury house.
            </p>
          </div>

          <div className="space-y-8">

            <div className="flex justify-between border-b border-black/10 pb-4">
              <span>Monday — Friday</span>
              <span>09:00 — 18:00</span>
            </div>

            <div className="flex justify-between border-b border-black/10 pb-4">
              <span>Saturday</span>
              <span>By Appointment</span>
            </div>

            <div className="flex justify-between border-b border-black/10 pb-4">
              <span>Sunday</span>
              <span>Closed</span>
            </div>

          </div>

        </div>

      </section>

      {/* QUOTE */}
      <section className="px-8 md:px-16 py-40 border-t border-black/10">

        <div className="max-w-5xl">

          <p className="text-5xl md:text-8xl leading-[0.95] tracking-[-0.06em] font-light">
            Every conversation
            <br />
            begins with intention.
          </p>

        </div>

      </section>

    </main>
  );
}

