import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

export default function ContactSection() {
  return (
    <section id="contact" className="relative my-12 mt-24 text-white lg:my-16">
      <div className="mx-auto max-w-2xl rounded-lg border border-[#464c6a] p-6 text-center lg:p-10">
        <h2 className="mb-3 text-xl font-medium uppercase text-[#16f2b3]">Contact me</h2>
        <p className="mb-8 text-[#d3d8e8]">
          I am open to IT development and ERP support opportunities.
        </p>
        <div className="flex flex-col items-center gap-5">
          <Link className="flex items-center gap-3 hover:text-[#16f2b3]" href={`mailto:${personalData.email}`}>
            <MdAlternateEmail size={28} />
            {personalData.email}
          </Link>
          <p className="flex items-center gap-3">
            <CiLocationOn size={28} />
            {personalData.address}
          </p>
          <Link
            className="flex items-center gap-3 hover:text-[#16f2b3]"
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub size={28} />
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
