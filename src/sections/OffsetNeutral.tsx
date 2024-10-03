"use client";
import Image from "next/image";
import windmillImage from "@/assets/carbonoffsetwind-removebg-preview.png"; // Ensure the path is correct

const steps = [
  {
    title: "STEP 1 - calculate your emissions",
    description: [
      {
        text: "- Individuals: Use our ",
        linkText: "FREE online carbon footprint calculator",
        href: "#",
      },
      {
        text: "- Small Businesses: Register and use our ",
        linkText: "FREE online business calculator",
        href: "#",
      },
      {
        text: "- Larger Businesses: We offer a ",
        linkText: "consultancy appraisal service",
        href: "#",
        extraText: " and verification services.",
      },
    ],
  },
  {
    title: "STEP 2 - start reducing your emissions",
    description: [
      {
        text: "Find out more about how to ",
        linkText: "reduce your emissions",
        href: "#",
      },
    ],
  },
  {
    title: "STEP 3 - choose an offset project from our portfolio",
    description: [
      {
        text: "View projects from our ",
        linkText: "carbon offset portfolio",
        href: "#",
      },
    ],
  },
];

export const OffsetNeutral = () => {
  return (
    <section className="bg-white py-16 bg-gradient-to-b from-[#ffffff] to-[#d2dcff]">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <h2 className="section-title text-center mb-8">
          How to Offset and Become Carbon Neutral
        </h2>

        {/* Subtitle */}
        <p className="text-center text-xl text-gray-700 mb-12">
          Carbon offsetting is easy and takes just 3 Steps!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Steps */}
          <div>
            {steps.map((step, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title.split(" - ")[0]} -{" "}
                  <span className="text-green-600">
                    {step.title.split(" - ")[1]}
                  </span>
                </h3>
                {step.description.map((desc, descIndex) => (
                  <p
                    key={descIndex}
                    className="text-md text-gray-700 mt-2 sm:pb-5"
                  >
                    {desc.text}
                    <a href={desc.href} className="text-green-600 underline">
                      {desc.linkText}
                    </a>
                    {desc.extraText && desc.extraText}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={windmillImage}
              alt="Windmill illustration"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
