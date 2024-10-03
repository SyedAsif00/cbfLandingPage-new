const features = [
  {
    title: "Calculate",
    description:
      "Accurately calculate carbon emissions across organizations, sectors, and supply chains for a comprehensive overview.",
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
    items: ["Target Setting", "Science Based Targets", "SBT registration"],
  },
  {
    title: "Reduce",
    description:
      "Implement effective carbon reduction strategies tailored to your business needs.",
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
    items: ["SECR", "TCFD", "SEC", "CDP", "ESOS", "PPN06/21", "And more..."],
  },
];

export const WhyChoose = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-[#D2DCFF]">
      <div className="container mx-auto px-4 text-center">
        {/* Main Title */}
        <h2 className="text-center text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-10 mb-10">
          Why Offset with Carbon Footprint?
        </h2>
        <p className="section-description text-2xl mt-5 mb-10">
          Carbon offsetting funds solutions to reducing carbon emissions now.
          Frequently carbon offsetting reduces emissions much faster than you
          can as an individual/single company. Carbon offsetting projects help
          to combat global climate change as well as caring for local
          communities. In many instances providing much needed employment,
          health improvement, biodiversity, reforestation and broad social
          benefits to impoverished communities.
        </p>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white p-8 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <h3 className="section-title text-[24px] font-semibold text-transparent bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 bg-clip-text mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                {feature.description}
              </p>
              {/* Adjusting UL and LI styles */}
              <ul className="list-disc pl-5 text-gray-500 space-y-2">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
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
