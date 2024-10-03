import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import CogImage from "@/assets/cog.png";
export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_66%)]">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
              pathway to a greener future
            </h1>
            <p className="text-xl text-[#010d3e] tracking-tight mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis sint molestias eos earum veritatis, iusto iste
              praesentium sunt architecto atque sapiente et corporis labore cum?
              Molestias cum adipisci fugiat mollitia.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">get for free</button>
              <button className="btn btn-text gap-1 ">
                <span className="">learn more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={CogImage}
              alt="abc"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
