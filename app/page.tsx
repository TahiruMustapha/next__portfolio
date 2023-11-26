import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-screen h-screen relative">
      <div
        className=" flex w-full h-full items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-10  md:pl-40 pb-56 md:pb-20 flex flex-col gab-5 z-[10] max-w-[750px]">
          <h1 className="  w-[17rem]  md:w-full text-[20px]  md:text-[50px]  text-white font-semibold">
            Make Anything Possible With
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {""} Web Development
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            As a front-end developer, I specialize in crafting visually
            appealing and highly functional web applications. My skill set
            includes HTML, CSS, JavaScript, React, Next.js, TypeScript, and
            Tailwind CSS. I am passionate about transforming ideas into seamless
            user experiences and staying updated with the latest industry
            trends. Let's collaborate to bring your vision to life through the
            power of code and design.
          </p>
          <div className=" flex-col mt-3 md:flex-row gap-5 hidden md:flex">
            <Link
              href="/my-skills"
              className=" group rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white md:max-w-[200px]"
            >
              Learn More
            </Link>
            <Link
              href="/my-projects"
              className=" group rounded-[20px] bg-transparent border border-white md:px-5 px-3 md:py-3 py-2 text-sm md:text-lg text-white max-w-[150px] md:max-w-[200px]"
            >
              {/* <div className=" absolute roundedcd-[20px] z-[1] bg-white inset-0 opacity-0 group hover:opacity-20 " /> */}
              My Projects
            </Link>
            <Link
              href="/contact-me"
              className=" group rounded-[20px] bg-transparent border border-white  px-5 py-3 text-lg text-white max-w-[200px]"
            >
              {/* <div className=" absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group hover:opacity-20 " /> */}
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-10 z-20 flex  gap-5 right-5 flex-col md:hidden ">
        <Link
          href="/mySkills"
          className=" group relative rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn More
        </Link>
        <Link
          href="/projects"
          className=" group relative rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My Projects
        </Link>
        <Link
          href="/contact"
          className=" group relative rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact Me
        </Link>
      </div>
      <div className=" absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className=" absolute right-55 top-40"
        />
        <Image src="/cliff.webp" alt="cliff" height={480} width={480} />
      </div>
      <div className=" absolute w-full h-auto bottom-0 z-[5]">
        <Image
          src="/trees.webp"
          alt="trees"
          height={2000}
          width={2000}
          className="w-full h-full"
        />
      </div>
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className=" absolute z-10 left-0 top-10"
      />
    </main>
  );
}
