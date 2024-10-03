import SocialYoutube from "@/assets/social-youtube.svg";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import logo from "@/assets/logosaas.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-[#BCBCBC] text-sm py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left md:text-left text-center">
          {/* Section 1: Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image src={logo} height={40} alt="SaaS logo" />
            <p className="mt-4 text-center md:text-left">
              &copy; 2024 Your Company, Inc. All rights reserved.
            </p>
          </div>

          {/* Section 2: Carbon Offsetting */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white mb-4">Carbon Offsetting</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-white block py-1">
                  Carbon Neutral
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white block py-1">
                  Carbon Offsets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white block py-1">
                  Verified Carbon Standard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white block py-1">
                  Gold Standard VER
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white block py-1">
                  Certified Emission Reduction
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white block py-1">
                  Quality Assurance Standard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white block py-1">
                  PAS 2060
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Consultancy */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white mb-4">Consultancy</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-white block py-1">
                  Carbon and GHG management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white block py-1">
                  Verification and Assurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white block py-1">
                  Energy Management and ESOS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white block py-1">
                  ISO 14001 support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white block py-1">
                  ISO 50001 support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white block py-1">
                  Lifecycle Assessments (LCA)
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4: Contact Info & Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-4">
              Contact and Follow Us
            </h4>
            <address className="not-italic mb-4">
              Your Company Ltd
              <br />
              Some Address
              <br />
              City, State, ZIP
              <br />
              <a href="mailto:info@company.com" className="hover:text-white">
                info@company.com
              </a>
              <br />
              <a href="tel:+1234567890" className="hover:text-white">
                +1 234 567 890
              </a>
            </address>
            <div className="flex justify-center md:justify-start gap-4">
              <SocialX />
              <SocialInsta />
              <SocialLinkedIn />
              <SocialPin />
              <SocialYoutube />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
