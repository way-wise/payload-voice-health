import Image from "next/image";
import ImageOne from "../../../../public/clients/image_1.png";
import ImageTwo from "../../../../public/clients/image_2.png";
import ImageThree from "../../../../public/clients/image_3.png";
import ImageFour from "../../../../public/clients/image_4.png";
import ImageFive from "../../../../public/clients/image_5.png";
import ImageSix from "../../../../public/clients/image_6.png";
import ImageSeven from "../../../../public/clients/image_7.png";

const ClientsData = [
  {
    src: ImageOne.src,
    alt: "athenahealth",
  },
  {
    src: ImageTwo.src,
    alt: "nexttech",
  },
  {
    src: ImageThree.src,
    alt: "eclinicalworks",
  },
  {
    src: ImageFour.src,
    alt: "epic",
  },
  {
    src: ImageFive.src,
    alt: "modmed",
  },
  {
    src: ImageSix.src,
    alt: "center",
  },
  {
    src: ImageSeven.src,
    alt: "oracle center",
  },
];

const TrustedClients = () => {
  return (
    <>
      <section
        id="trusted-clients"
        className="py-[60px]"
        aria-labelledby="trusted-clients-title"
      >
        <div className="container">
          <div className="flex flex-col md:gap-10 ">
            <h5 id="trusted-clients-title" className="text-center text-[20px] text-[#09081F] font-Inter font-semibold leading-7 tracking-[-0.5px]">
              Trusted by innovative clinics
            </h5>
          </div>
          <div
            className="slider-container mt-[30px]"
            aria-label="Trusted clients logo slider"
          >
            <div
              className="slide-content-toleft flex items-center gap-8 xl:gap-14"
              aria-roledescription="carousel"
            >
              {[...ClientsData, ...ClientsData].map((client, index) => (
                <Image
                  key={index}
                  width={152}
                  height={27}
                  src={client.src}
                  alt={client.alt}
                  className="aspect-auto min-h-[27px]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedClients;
