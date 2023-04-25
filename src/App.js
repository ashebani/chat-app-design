import person from "./images/avatar.jpg";

const App = () => {
  return (
    <div className="app relative md:px-20 py-20">
      <div
        className="absolute top-0 md:left-[-200px] md:h-[800px] md:w-[800px] bg-gradient-to-t to-purple-800 from-purple-600 rounded-b-full
      left-[-210px] h-[550px] w-[400px] -z-30"
      ></div>
      <div
        className="fixed bottom-0 md:right-[-400px] md:h-[800px] md:w-[800px] bg-gradient-to-t to-purple-800 from-purple-600 rounded-t-full
        opacity-5 right-[-210px] h-[550px] w-[400px] -z-30
      "
      ></div>

      <main
        className="flex md:w-[1000px] md:grid-cols-2 flex-wrap justify-center
      md:grid md:items-center md:justify-center md:py-2
      md:mx-auto
      "
      >
        {/* Iphone Design */}
        <div className="border-16 transition scale-[0.85] mx-auto -translate-y-20 bg-secondaryLightGrayishViolet border-white overflow-hidden drop-shadow-xl w-[370px] rounded-[3em]   md:translate-y-0 ">
          <header className="bg-gradient-to-r to-fuchsia-500 from-purple-600 relative grid  rounded-b-md">
            <div className="w-[55%] flex mx-auto h-6 bg-white rounded-b-[20px]"></div>
            <div className="flex items-center justify-between px-4">
              <div className="flex gap-2 items-center  py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>

                <img
                  src={person}
                  alt="Samuel "
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <div>
                  <span className="block text-white font-bold">
                    Samuel Green
                  </span>
                  <span className="text-sm text-primaryGrayishBlue">
                    Available to Walk
                  </span>
                </div>
              </div>

              <svg
                className="w-6 h-6"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 512"
              >
                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
              </svg>
            </div>
          </header>

          {/* Messages */}
          <div className=" pt-2 grid bg-slate-50">
            <div className="recieved md:recieved-desktop">
              That sounds great. I’d be happy with that.
            </div>
            <div className="recieved md:recieved-desktop">
              Could you send over some pictures of your dog, please?
            </div>
            <div className="justify-self-end flex gap-4 mx-4 my-2">
              <img
                className="w-16 rounded-large"
                src={require("./images/dog-image-1.jpg")}
                alt="dog"
              />
              <img
                className="w-16 rounded-large"
                src={require("./images/dog-image-2.jpg")}
                alt="dog"
              />
              <img
                className="w-16 rounded-large"
                src={require("./images/dog-image-3.jpg")}
                alt="dog"
              />
            </div>
            <div className="sent">
              Here are a few pictures. She’s a happy girl!
            </div>
            <div className="sent">Can you make it?</div>
            <div className="recieved md:recieved-desktop">
              She looks so happy! The time we discussed works. How long shall I
              take her out for?
            </div>
            <div className="recieved md:recieved-desktop service">
              <p>30 minute walk</p>
              <span className="font-bold text-xl">$29</span>
            </div>
            <div className="recieved md:recieved-desktop service">
              <p>1 hour walk</p>
              <span className="font-bold text-xl">$49</span>
            </div>

            {/* Text input */}
            <div className="flex bg-white rounded-full m-4 p-2 overflow-hidden justify-between">
              <input
                className="rounded-full focus:border-white active:border-white pl-2"
                type="text"
                placeholder="Type a message…"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="#ffffff"
                className="w-8 h-8 p-1 rounded-full bg-primaryVeryDarkDesaturatedViolet"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="text-center -mt-28 md:text-left">
          <h1 className="text-primaryVeryDarkDesaturatedViolet text-[40px] pt-8 font-medium">
            Simple booking
          </h1>
          <p className="text-primaryDarkGrayishViolet pt-3 px-8 md:pt-5 md:px-0 md:pr-32 text-md">
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
