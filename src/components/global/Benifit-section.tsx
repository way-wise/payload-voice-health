import React from "react";
import BenefitCard from "@/app/components/benefit-section/BenefitCard";
import ImageOne from "../../../../public/benefit/card_1.png";
import ImageTwo from "../../../../public/benefit/card_2.png";
import ImageThree from "../../../../public/benefit/card_3.png";

const cards = [
  {
    title: "Providers",
    points: [
      "Eliminate no-shows",
      "Improve overall customer satisfaction scores",
      "Triage, transcribe, and update patient cases instead of listening to voicemails",
    ],
    image: ImageOne.src,
  },
  {
    title: "Office Managers",
    points: [
      "Reduce staff burnout",
      "Book more appointments",
      "Do seamless onboarding",
    ],
    image: ImageTwo.src,
  },
  {
    title: "Patients",
    points: [
      "No more waiting time",
      "Call 24/7",
      "Experience white glove service every time",
    ],
    image: ImageThree.src,
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 lg:py-[96px]">
      <div className="container">
        <div className="grid grid-row-3 gap-10">
          {cards.map((card, index) => (
            <BenefitCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
