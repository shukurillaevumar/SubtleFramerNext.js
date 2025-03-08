import Dot from "@/components/dot";
import Image from "next/image";
import UserPhoto from "@/photos/authorPhoto.avif";
import AboutBox from "@/components/aboutBox";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="w-full max-sm:w-full max-sm:p-2">
      <div className="flex justify-start items-center gap-3">
        <Dot />
        <p className="text-systemText font-semibold text-xl dark:text-systemTextWhiteMode">
          About
        </p>
      </div>
      <div className="mt-10">
        <p className="text-4xl font-medium text-white dark:text-black">
          It's Me Brian
        </p>
        <p className="text-xl text-systemText font-medium mt-4 dark:text-systemTextWhiteMode">
          I'm Brian Do, a product designer with over 5 years of experience,
          currently residing in Jakarta, Indonesia. I have a deep passion for
          crafting purposeful interfaces and products. My main goal is to bridge
          the divide between people and technology, transforming intricate
          challenges into meaningful and seamless experiences.
        </p>
      </div>
      <div className="flex justify-center items-center border-8 rounded-xl border-imgBorderColor mt-10">
        <Image
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
          src={UserPhoto}
          alt="img"
        />
      </div>
      <p className="text-4xl font-medium text-white mt-10 dark:text-black">
        More About Me
      </p>
      <p className="text-xl text-systemText font-medium mt-4 dark:text-systemTextWhiteMode">
        Brian Do holds a bachelor's degree in Graphic Design from a prestigious
        university in the United States and has a relentless drive for staying
        up-to-date with the latest technologies and design trends. Actively
        involved in the design community, Brian regularly participates in
        diverse design conferences and meetups.
      </p>
      <p className="text-xl text-systemText font-medium mt-4 dark:text-systemTextWhiteMode">
        When he's not immersed in design work, he finds solace in playing the
        guitar and exploring new coffee shops in his local area. Brian firmly
        believes in maintaining a healthy work-life balance, making sure to take
        breaks and reenergize his creativity. In his spare time, he also
        volunteers at a local animal shelter on weekends.
      </p>
      <p className="text-4xl font-medium text-white mt-10 dark:text-black">
        My Side Projects
      </p>
      <p className="text-xl text-systemText font-medium mt-4 dark:text-systemTextWhiteMode">
        I did passion side projects in the weekend, please take a look you will
        love it (i hope).
      </p>

      <AboutBox />
    </div>
  );
}
