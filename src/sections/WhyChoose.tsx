import Image from "next/image";
import iconOffsetGreen from "@/assets/icon_offset_green.png";
import reduceIcon from "@/assets/reduceicon.png";
import reviewIcon from "@/assets/reviewicon.png";
import iconShoutBlack from "@/assets/icon_shout_black.png";
import measureIcon from "@/assets/measure.png";
import cogIcon from "@/assets/cog.png";
import Target from "@/assets/aim.png";

const features = [
  {
    title: "Calculate",
    description:
      "Accurately calculate carbon emissions across organizations, sectors, and supply chains for a comprehensive overview.",
    image: measureIcon,
    items: [
      "Organisations",
      "Public sector",
      "Products",
      "Services",
      "Events",
      "Individuals",
      "Supply chain",
      "Software",
    ],
  },
  {
    title: "Target",
    description:
      "Set actionable and measurable emission reduction targets aligned with global standards.",
    image: Target,
    items: ["Target Setting", "Science Based Targets", "SBT registration"],
  },
  {
    title: "Reduce",
    description:
      "Implement effective carbon reduction strategies tailored to your business needs.",
    image: reduceIcon,
    items: [
      "Reduction strategies",
      "Implementation",
      "Carbon engineering",
      "Energy audits",
    ],
  },
  {
    title: "Offset",
    description:
      "Offset emissions through certified global projects like tree planting and renewable energy.",
    image: iconOffsetGreen,
    items: [
      "Fully certified projects",
      "Global locations",
      "Carbon reduction",
      "Carbon removals",
      "Quality Assurance Standard",
      "Tree planting",
    ],
  },
  {
    title: "Communicate",
    description:
      "Communicate your progress on carbon reduction efforts to stakeholders effectively.",
    image: iconShoutBlack,
    items: [
      "Green Claims Support",
      "Internal comms",
      "Behaviour change",
      "Team building",
    ],
  },
  {
    title: "Comply",
    description:
      "Stay compliant with global and regional carbon regulations and standards.",
    image: reviewIcon,
    items: ["SECR", "TCFD", "SEC", "CDP", "ESOS", "PPN06/21", "And more..."],
  },
];

export const WhyChoose = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-center text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-10 mb-10">
          Why Offset with Carbon Footprint?
        </h2>
        <p className="section-description mb-[50px] md:mb-[120px]">
          Carbon offsetting funds solutions to reducing carbon emissions now.
          Frequently carbon offsetting reduces emissions much faster than you
          can as an individual/single company. Carbon offsetting projects help
          to combat global climate change as well as caring for local
          communities. In many instances providing much needed employment,
          health improvement, biodiversity, reforestation and broad social
          benefits to impoverished communities.
        </p>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-bold text-[#FF5A5F]">
                  0{index + 1}
                </div>
                <Image
                  src={feature.image}
                  alt={`${feature.title} icon`}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <hr className="border-gray-300 mb-4" />
              <p className="text-gray-500 mb-4">{feature.description}</p>
              <ul className="list-none space-y-2">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-gray-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
