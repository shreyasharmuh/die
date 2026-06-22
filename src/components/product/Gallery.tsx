import Image from "next/image";

export default function Gallery({
  product,
}: {
  product: any;
}) {

  return (

    <section className="py-20 px-8 md:px-16">

      <div className="max-w-[1700px] mx-auto">

        <div className="grid md:grid-cols-2 gap-8">

          {product.images.map(
            (img: string, index: number) => (

              <div key={index}>

                <Image
                  src={img}
                  alt={product.name}
                  width={1400}
                  height={1800}
                  className="w-full object-cover"
                />

              </div>

            )
          )}

        </div>

      </div>

    </section>

  );
}