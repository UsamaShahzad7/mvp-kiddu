import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { instructions } from "./FAQ";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-12 md:p-16 lg:p-24">
      <header className="w-full">
        <div className="fixed z-10 top-0 left-0 bg-orange-500 flex flex-col sm:flex-row justify-evenly border rounded-b-[40px] border-black-500 w-full">
          <div className="flex flex-row justify-between items-center px-4 py-2 sm:px-8">
            <span>
              <Image
                src={"/images/app-logo.png"}
                alt="App Logo"
                width={60}
                height={60}
              />
            </span>
            <span className="font-alistaBlair w-2/5 text-lg sm:text-2xl">
              Joyllo
            </span>
          </div>
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center items-center cursor-pointer py-4">
            <a href="#">
              <li className="hover:bg-lightyellow px-4 py-2 sm:p-6 rounded-full text-sm sm:text-base">
                Home
              </li>
            </a>
            <a href="#features" className="transition-all duration-500">
              <li className="hover:bg-lightyellow px-4 py-2 sm:p-6 rounded-full text-sm sm:text-base">
                Features
              </li>
            </a>
            <a href="#faqs">
              <li className="hover:bg-lightyellow px-4 py-2 sm:p-6 rounded-full text-sm sm:text-base">
                FAQs
              </li>
            </a>
            <a href="#contact">
              <li className="hover:bg-lightyellow px-4 py-2 sm:p-6 rounded-full text-sm sm:text-base">
                Contact Us
              </li>
            </a>
          </ul>
        </div>
      </header>

      <div className="mt-10 p-6 sm:p-12 lg:p-24 mt-2 border rounded-t-[40px] h-screen w-full flex flex-col lg:flex-row items-center justify-around bg-simplewhite title-page">
        <div className="flex flex-col gap-2 px-2">
          <div className="font-alistaBlair font-bold text-orange-600 text-[50px] sm:text-[100px] lg:text-[200px]">
            Joyllo
            <div>
              <p className="text-xs sm:text-sm lg:text-base w-full lg:w-1/2">
                Welcome to BrightKids Learning! 🌟 BrightKids Learning is a fun
                and interactive mobile app designed to make learning exciting
                for children aged 3-10. With engaging games, colorful visuals,
                and age-appropriate lessons, BrightKids helps kids build skills
                in: 🎨 Creativity: Art and drawing activities that spark
                imagination. 🔢 Math: Simple puzzles and counting games to boost
                number skills. 📚 Reading: Phonics, word games, and storytime
                adventures. 🌎 Science & Discovery: Fun facts and experiments to
                explore the world. Parents can track their child’s progress and
                set daily learning goals in a safe, ad-free environment.
                BrightKids Learning—Where fun meets education! 🚀
              </p>
            </div>
          </div>
        </div>
        {/* <div className=" flex justify-center items-center mt-4 lg:mt-0 lg:w-3/5">
          <Image
            src={"/images/app-logo.png"}
            alt="App Logo"
            width={300}
            height={300}
            className="sm:w-[400px] sm:h-[400px] lg:w-full lg:h-[600px]"
          />
        </div> */}
      </div>

      <div
        id="features"
        className="p-6 sm:p-12 lg:p-24 border w-full text-center h-screen bg-simplewhite"
      >
        <div>Mid Section Content</div>
      </div>

      <div
        id="faqs"
        className="p-6 sm:p-12 lg:p-24 mt-2 border bg-simplewhite w-full text-center h-screen"
      >
        <div className="flex flex-col items-center">
          <Accordion
            type="single"
            collapsible
            className="w-full gap-y-12 border-none"
          >
            {instructions.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="mt-12"
              >
                <AccordionTrigger className="p-6 text-primary border rounded-t-[10px] font-semibold text-sm sm:text-lg py-2 text-center">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="bg-secondary h-24 border rounded-b-[40px] text-xs sm:text-base leading-relaxed text-center sm:p-6">
                  {item.subTitle}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div
        id="contact"
        className="mt-2 border border-black-500 w-full text-center h-screen"
      >
        <div>Contact Details</div>
      </div>

      <div className="mt-2 border border-black-500 w-full text-center h-screen">
        <div>Footer</div>
      </div>
    </main>
  );
}
