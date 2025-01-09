export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border rounded-b-[40px] border-black-500 w-full">
        <ul className=" border rounded-b-[40px] flex flex-row gap-12 justify-center bg-orange-500 h-24 items-center cursor-pointer">
          <li className="!float-left inline font-alistaBlair font-bold text-whiteWithOpacity text-[20px]">
            Kiddu
          </li>
          <li className="hover:bg-simplewhite p-6 border-xl rounded-full !border-none">
            Home
          </li>
          <li className="hover:bg-simplewhite p-6 border-xl rounded-full !border-none">
            Features
          </li>
          <li className="hover:bg-simplewhite p-6 border-xl rounded-full !border-none">
            About Us
          </li>
          <li className="hover:bg-simplewhite p-6 border-xl rounded-full !border-none">
            Contact Us
          </li>
        </ul>
      </div>

      <div className="p-24 mt-2 border rounded-[40px] border-black-500 h-screen w-full flex flex-row items-center justify-around bg-simplewhite title-page">
        <div className="flex flex-col gap-2 p-2">
          <div className="font-alistaBlair font-bold hover:text-orange-500 text-orange-600 text-[200px]">
            Kiddu
            <div>
              <p className="!font-xs !text-sm w-1/2">
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
        <div className="sketchfab-embed-wrapper">
          <iframe
            title="Cartoon Cute Lion"
            web-share
            width="600"
            height="600"
            src="https://sketchfab.com/models/65acb8cce4ce449590a07c193a37d1b5/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_hint=0&ui_theme=dark&dnt=1"
          ></iframe>
        </div>
      </div>

      <div className="mt-2 border border-black-500 w-full text-center h-screen">
        <div className="">Mid Section Content</div>
      </div>

      <div className="mt-2 border border-black-500 w-full text-center h-screen">
        <div className="">Contact Details</div>
      </div>

      <div className="mt-2 border border-black-500 w-full text-center h-screen">
        <div className="">Footer</div>
      </div>
    </main>
  );
}
