"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import REACTIMG from "../../public/reactjs-svgrepo-com.svg"
import NODEIMG from "../../public/nodejs-icon-svgrepo-com.svg"
import EXPRESSIMG from "../../public/express-svgrepo-com.svg"
import CPLUSPLUS from "../../public/c-plus-plus-svgrepo-com.svg"
import HTMLIMG from "../../public/html-5-svgrepo-com.svg"
import CSSIMG from "../../public/css-3-svgrepo-com.svg"
import PYTHONIMG from "../../public/python-svgrepo-com.svg"
import NEXTIMG from "../../public/nextjs-fill-svgrepo-com.svg"
import TAILIMG from "../../public/tailwind-svgrepo-com.svg"
import CORPIMG from "../../public/United_States_Army_Corps_of_Engineers_logo.svg"
import TRCIMG from "../../public/Logo4iPrism.jpg"
import OHIOIMG from "../../public/ohio-bobcats.svg"
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";
import GOOGLEIMG from "../../public/gmail-icon-logo-svgrepo-com.svg"
import LIIMG from "../../public/linkedin-icon-2-logo-svgrepo-com.svg"
import GITIMG from "../../public/github-icon-1-logo-svgrepo-com.svg"

export default function Home() {
  const cardsContainer = useRef<HTMLDivElement>(null);
  const cardContainerCss = 'items-center justify-items-center sm:p-[15px] min-w-[20%] flex flex-col drop-shadow-lg bg-[#202024] border hover:border-[#78339c] border-[#202024] rounded-md mt-[20px] mb-[20px]'
  const OPTIONS: EmblaOptionsType = {}
  const PROJECT_1_SLIDES = [
    () => <Image src="/Project1/LOGIN.PNG" alt="login img" height={450} width={750} />,
    () => <Image src="/Project1/HOME.PNG" alt="home img" height={450} width={750} />,
    () => <Image src="/Project1/EMPLOYEE-CREATION.PNG" alt="emp img" height={450} width={750} />,
    () => <Image src="/Project1/TRAINING-REVIEW.PNG" alt="review img" height={450} width={750} />,
  ]

  const PROJECT_2_SLIDES = [
    () => <Image src="/Project2/OULOGIN.PNG"alt="login img" height={700} width={300}/>,
    () => <Image src="/Project2/MAIN.PNG" alt="main img" height={700} width={300}/>,
    () => <Image src="/Project2/EVENT-CREATE.PNG" alt="event create img" height={700} width={300}/>,
    () => <Image src="/Project2/EVENT-VIEW.PNG" alt="event view img" height={700} width={300}/>,
    () => <Image src="/Project2/MAP.PNG" alt="map img" height={700} width={300}/>,
    () => <Image src="/Project2/CHAT.PNG" alt="chat img" height={700} width={300}/>,
  ]
  
  const PROJECT_3_SLIDES = [
    () => <Image src="/Project3/Stats2.png" alt="stats img" height={450} width={750}/>,
    () => <Image src="/Project3/SampleTest.png" alt="sample img"  height={450} width={750}/>,
    () => <Image src="/Project3/Features2.png" alt="feature img"  height={450} width={750}/>,
  ]


  const scrollButton = (target: string) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling animation
      block: 'start',     // Aligns the top of the target section to the top of the viewport
    });
  }

  const applyOverlayMask = (e: PointerEvent) => {
    const documentTarget = e.currentTarget as Element;

    if (!cardsContainer.current) {
      return;
    }

    // Calculate the x and y coordinates of the mouse relative to the cards container
    const x = e.pageX - cardsContainer.current.offsetLeft;
    const y = e.pageY - cardsContainer.current.offsetTop;

    // Update the css variables
    cardsContainer.current.setAttribute(
      "style",
      `--x: ${x}px; --y: ${y}px; --opacity: 1`
    );
  };

  useEffect(() => {
    // When the page renders, add the event listener
    document.body.addEventListener("pointermove", (e) => {
      applyOverlayMask(e);
    });

    // Clean up function
    return () => {
      document.body.removeEventListener("pointermove", (e) => {
        applyOverlayMask(e);
      });
    };
  }, []);

  return (

    <div className="bg-[#1A1A1D] min-h-screen bg-[radial-gradient(#3e3e42_1px,transparent_1px)] [background-size:64px_64px]">
      <div className="min-h-screen pt-[10%] ml-[10%] mr-[10%] flex-col flex justify-between">
        <div className="relative" ref={cardsContainer}>
          <div>
            <div className="items-center justify-items-center sm:p-20 drop-shadow-lg bg-[#202024] rounded-md">
              <p className="text-white text-3xl">Hello my name is <span className="text-[#AD49E1]">Bryce</span>, <br /> &ensp; I am an aspiring software developer!</p>
            </div>
          </div>
          <div className="absolute inset-0"
            style={{
              opacity: "var(--opacity, 0)",
              mask: `
  radial-gradient(
    25rem 25rem at var(--x) var(--y),
    #000 1%,
    transparent 50%
  )`,
              WebkitMask: `
  radial-gradient(
    25rem 25rem at var(--x) var(--y),
    #000 1%,
    transparent 50%
  )`,
            }}
          >
            <div className="items-center justify-items-center sm:p-20 select-none pointer-events-none transition-colors text-transparent bg-[#78339c]">
              <p className="text-white text-3xl">Hello my name is <span className="">Bryce</span>, <br /> &ensp; I am an aspiring software developer!</p>
            </div>

          </div>
          <div className="flex justify-evenly space-x-[10px]  mt-[10px]">
            <button className="flex-1 text-white text-3xl drop-shadow-lg bg-[#202024] rounded-md py-4 border border-[#202024] hover:border-[#78339c] cursor-pointer" onClick={() => scrollButton('aboutMe')}>About Me</button>
            <button className="flex-1 text-white text-3xl drop-shadow-lg bg-[#202024] rounded-md py-4 border border-[#202024] hover:border-[#78339c] cursor-pointer" onClick={() => scrollButton('projects')}>Projects</button>
            <button className="flex-1 text-white text-3xl drop-shadow-lg bg-[#202024] rounded-md py-4 border border-[#202024] hover:border-[#78339c] cursor-pointer" onClick={() => scrollButton('contact')}>Contact</button>
          </div>
        </div>
        <div className="flex justify-center items-end pb-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill='none' viewBox="0 0 24 24" strokeWidth="1" stroke="#AD49E1" className="flex size-13 bg-[#202024] rounded-full animate-bounce  border border-[#202024] hover:border-[#78339c] " onClick={() => scrollButton('aboutMe')}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>
        </div>
      </div>
      <div className="text-white">
        <div className="justify-items-center bg-[#202024] p-4" id="aboutMe">
          <h1 className="text-3xl">About Me</h1>
        </div>
        {/* About me cards */}
        <div className="flex justify-evenly space-x-[5px] mt-[20px] mb-[20px]">
          {/* Technology card */}
          <div className="items-center justify-items-center sm:p-[15px] drop-shadow-lg bg-[#202024] border-[#202024] rounded-md w-[25%]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.25" stroke="#AD49E1" className="size-35 rounded-full bg-[#2d2d33] p-5"
              onMouseEnter={(e) => { e.currentTarget.classList.add("spin-once") }}
              onAnimationEnd={(e) => { e.currentTarget.classList.remove("spin-once") }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
            <h1 className="text-xl pt-5">Technologies I've Worked With: </h1>

            <div className="grid grid-cols-3 gap-3 pt-5">
              <div className="flex-col items-center justify-center rounded bg-[#2d2d33] p-4 border hover:border-[#78339c] border-[#202024]">
                <Image src={REACTIMG} alt="react img" />
                <p className="justify-self-center">REACT.JS</p>
              </div>
              <div className="flex-col items-center justify-center rounded bg-[#2d2d33] p-4 border hover:border-[#78339c] border-[#202024]">
                <Image src={NODEIMG} alt="node img" />
                <p className="justify-self-center">NODE.JS</p>
              </div>
              <div className="flex-col items-center justify-center rounded bg-[#2d2d33] p-4 border hover:border-[#78339c] border-[#202024]">
                <Image src={EXPRESSIMG} alt="express img" />
                <p className="justify-self-center">EXPRESS</p>
              </div>
              <div className="flex-col items-center justify-center rounded bg-[#2d2d33] p-4 border hover:border-[#78339c] border-[#202024]">
                <Image src={HTMLIMG} alt="html img" />
                <p className="justify-self-center">HTML</p>
              </div>
              <div className="flex-col items-center justify-center rounded bg-[#2d2d33] p-4 border hover:border-[#78339c] border-[#202024]">
                <Image src={CSSIMG} alt="css img" />
                <p className="justify-self-center">CSS</p>
              </div>
              <div className="flex-col items-center justify-center rounded bg-[#2d2d33] p-4 border hover:border-[#78339c] border-[#202024]">
                <Image src={CPLUSPLUS} alt="cplusplus img" />
                <p className="justify-self-center">C++</p>
              </div>
              <div className="flex-col items-center justify-center rounded bg-[#2d2d33] p-4 border hover:border-[#78339c] border-[#202024]">
                <Image src={PYTHONIMG} alt="python img" />
                <p className="justify-self-center">PYTHON</p>
              </div>
              <div className="flex-col items-center justify-center rounded bg-[#2d2d33] p-4 border hover:border-[#78339c] border-[#202024]">
                <Image src={NEXTIMG} alt="next img" />
                <p className="justify-self-center">NEXT.JS</p>
              </div>
              <div className="flex-col items-center justify-center rounded bg-[#2d2d33] p-4 border hover:border-[#78339c] border-[#202024]">
                <Image src={TAILIMG} alt="tailwind img" />
                <p className="justify-self-center">TAILWIND</p>
              </div>
            </div>
          </div>
          {/* Work experience card */}
          <div className="items-center justify-items-center sm:p-[15px] drop-shadow-lg bg-[#202024] border-[#202024] rounded-md w-[25%]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.25" stroke="#AD49E1" className="size-35 rounded-full bg-[#2d2d33] p-5"
              onMouseEnter={(e) => { e.currentTarget.classList.add("spin-once") }}
              onAnimationEnd={(e) => { e.currentTarget.classList.remove("spin-once") }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
            </svg>
            <h1 className="text-xl pt-5">Places I've Worked: </h1>
            <div>
              <div className="flex flex-row justify-evenly bg-[#2d2d33] rounded-md p-4 mt-5 border hover:border-[#78339c] border-[#202024] ">
                <div className="min-w-[40%] pr-4 min-h-[15vh]">
                  <p className="text-sm pb-3">June 2024 - Present</p>
                  <Image src={CORPIMG} alt="corps img" />
                </div>
                <div>
                  <p>Computer Scientist for the US Army Corps of Engineers</p>
                </div>
              </div>
              <div className="flex flex-row justify-evenly bg-[#2d2d33] rounded-md p-4 mt-5 border hover:border-[#78339c] border-[#202024]">
                <div className="min-w-[40%] pr-4 min-h-[15vh]">
                  <p className="text-sm pb-3">May 2022 - August 2023</p>
                  <Image src={TRCIMG} alt="TRC img" />
                </div>
                <div>
                  <p>Information Systems Intern for Transportation Research Center</p>
                </div>
              </div>
            </div>
          </div>
          {/* Eductaion card */}
          <div className="items-center justify-items-center sm:p-[15px] drop-shadow-lg bg-[#202024] border-[#202024] rounded-md w-[25%]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.25" stroke="#AD49E1" className="size-35 rounded-full bg-[#2d2d33] p-[5px]"
              onMouseEnter={(e) => { e.currentTarget.classList.add("spin-once") }}
              onAnimationEnd={(e) => { e.currentTarget.classList.remove("spin-once") }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
            <h1 className="text-xl pt-5">My Education: </h1>
            <div>
              <div className="flex flex-row justify-evenly bg-[#2d2d33] rounded-md p-[4px] mt-5 border hover:border-[#78339c] border-[#202024] ">
                <div className="w-[30%] pr-[4px] min-h-[15vh]">
                  <p className="text-sm pb-3">August 2020 - May 2024</p>
                  <p className="text-sm pb-3">Ohio University</p>
                  <Image src={OHIOIMG} alt="corps img" height={50} width={100} />
                </div>
                <div className="w-[50%]">
                  <p>Bachelor of Science in Computer Science</p>
                </div>
              </div>
              <div className="flex flex-row justify-evenly bg-[#2d2d33] rounded-md p-[4px] mt-5 border hover:border-[#78339c] border-[#202024]">
                <div className="w-[30%] pr-[4px] min-h-[15vh]">
                  <p className="text-sm pb-3">August 2020 - May 2024</p>
                  <p className="text-sm pb-3">Ohio University</p>
                  <Image src={OHIOIMG} alt="corps img" height={50} width={100} />
                </div>
                <div className="w-[50%]">
                  <p>Bachelor of Science in Mathematics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="text-white ">
        <div className="justify-items-center bg-[#202024] p-4" id="projects">
          <h1 className="text-3xl">Projects</h1>
        </div>
        {/* Project #1 */}
        <div className="flex flex-row justify-between">
          <div className="items-center justify-items-center sm:p-10 drop-shadow-lg bg-[#202024] border-[#202024] rounded-md mt-[20px] mb-[20px]  w-[30%] ml-10 border hover:border-[#78339c] border-[#202024]">
            <h1 className="text-2xl"> Training Manager Web Application </h1>
            <p className="text-md justify-self-start mt-10"> &ensp; This web application was initially requested to be built by my employer (USACE), however due to restricted resources I was unable to create the app using the tools I thought best. I ended up creating this app using PowerApps and preceded to create this in my own time using <span className="text-[#AD49E1]"> ReactJs </span> and <span className="text-[#AD49E1]"> Node.js </span> with a local <span className="text-[#AD49E1]"> oracle database </span>
              This app is designed to help managers plan and maintain a training plan for their employees. Some of the features include:</p>
            <br />
            <ul className="list-disc">
              <li>Functional <span className="text-[#AD49E1]"> authentication </span>, with a registration and login screen. Passwords are salted, hashed, and stored properly</li>
              <li>The ability to create courses with customizable course hours, travel hours, travel cost, and tuition</li>
              <li>Creation of employees with hourly rates and assignment to organizations</li>
              <li>Creation of organizations</li>
              <li>The ability to add courses in bulk to employees and then individualize each employees courses to be added</li>
            </ul>
            <br />
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/bhnichol/TrainingManager/' className="text-[#AD49E1] hover:underline">SOURCE CODE</a>
          </div>
          <div className="items-center justify-items-center sm:p-10 drop-shadow-lg bg-[#202024] border hover:border-[#78339c] border-[#202024] rounded-md mt-[20px] mb-[20px]  w-[60%] mr-10 ">
            <EmblaCarousel slides={PROJECT_1_SLIDES} options={OPTIONS} />
          </div>
        </div>
        {/* Project 2 */}
        <div className="flex flex-row justify-between">
          <div className="items-center justify-items-center sm:p-10 drop-shadow-lg bg-[#202024] border hover:border-[#78339c] border-[#202024] rounded-md mt-[20px] mb-[20px]  w-[60%] ml-10 ">
            <div className="ml-[35%] mr-[35%]">
            <EmblaCarousel slides={PROJECT_2_SLIDES} options={OPTIONS} />
            </div>
          </div>
          <div className="items-center justify-items-center sm:p-10 drop-shadow-lg bg-[#202024] border hover:border-[#78339c] border-[#202024] rounded-md mt-[20px] mb-[20px]  w-[30%] mr-10">
            <h1 className="text-2xl"> SpOUrtify App </h1>
            <p className="text-md justify-self-start mt-10"> &ensp; This iOs app was created for a class. I worked on a team as the Quality Assurance manager, my main roles aside from developing consisted of code reviews and testing to ensure a quality project. This app was intended to be used by Ohio University as a event board. 
              Students could post events, meetups, or even just post that they need an extra person for a sporting event. This app was created using <span className="text-[#AD49E1]">React Native</span> and used <span className="text-[#AD49E1]">Firebase</span> as the database. Some of its features include:</p>
            <br />
            <ul className="list-disc">
              <li>Functional <span className="text-[#AD49E1]"> authentication </span>, uses <span className="text-[#AD49E1]">Redux Toolkit</span> for state management and route protection</li>
              <li>Create events that are visible to the public or private and visible to only selected individuals or groups</li>
              <li>Fully customize event banners with icons and thumbnails, set an attendee limit, and set a location that can be viewed within the app on a map.</li>
              <li>Chat rooms with ability to make one-on-one or group chats</li>
            </ul>
            <br />
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/bhnichol/spOUrtify/' className="text-[#AD49E1] hover:underline">SOURCE CODE</a>
          </div>
        </div>
        {/* Project 3 */}
        <div className="flex flex-row justify-between">
          <div className="items-center justify-items-center sm:p-10 drop-shadow-lg bg-[#202024] border hover:border-[#78339c] border-[#202024] rounded-md mt-[20px] mb-[20px]  w-[30%] ml-10">
            <h1 className="text-2xl"> Cancer Random Forest Classifier </h1>
            <p className="text-md justify-self-start mt-10"> &ensp; This program was created for a class during my time as a student at Ohio University. 
              Using <span className="text-[#AD49E1]">python</span> I was tasked with creating a <span className="text-[#AD49E1]">random forest classifier</span> to classify anonymous patients as having cancer or not having cancer. Using python, 
              I developed a program that created <span className="text-[#AD49E1]">binary trees</span> using <span className="text-[#AD49E1]">recursive</span> methodologies for the "forest" of the classifier. The program contains contants that allow the user to change the size of the forest and depth of each binary tree. 
              Some of the accomplishments that I took away from this project were:</p>
            <br />
            <ul className="list-disc">
              <li>Gained experience in <span className="text-[#AD49E1]">bioinformatics</span>, <span className="text-[#AD49E1]">computational genomics</span>, and cancer informatics</li>
              <li>Implemented, employed, and evaluated <span className="text-[#AD49E1]">machine learning</span> methods, including decision tree, random forest, information gain, entropy, n-fold cross-validation, and bootstrapping</li>
              <li>Applied <span className="text-[#AD49E1]">data mining</span> processes (involving data cleaning, exploratory data analysis, feature extraction, pattern discovery, and classification) to discover new knowledge from real-world data sets</li>
              <li>Worked with 250 anonymous patients and developed a classifier that predicted cancer in a patient with 80% accuracy</li>
            </ul>
            <br />
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/bhnichol/RandomForestClassifier/' className="text-[#AD49E1] hover:underline">SOURCE CODE</a>
          </div>
          <div className="items-center justify-items-center sm:p-10 drop-shadow-lg bg-[#202024] border hover:border-[#78339c] border-[#202024] rounded-md mt-[20px] mb-[20px]  w-[60%] mr-10 ">
            <EmblaCarousel slides={PROJECT_3_SLIDES} options={OPTIONS} />
          </div>
        </div>
        {/* Project 4 */}
        {/* <div className="flex flex-row justify-between">
          <div className="items-center justify-items-center sm:p-10 drop-shadow-lg bg-[#202024] border hover:border-[#78339c] border-[#202024] rounded-md mt-[20px] mb-[20px]  w-[60%] ml-10 ">
            <div className="">
            <EmblaCarousel slides={PROJECT_4_SLIDES} options={OPTIONS} />
            </div>
          </div>
          <div className="items-center justify-items-center sm:p-10 drop-shadow-lg bg-[#202024] border hover:border-[#78339c] border-[#202024] rounded-md mt-[20px] mb-[20px]  w-[30%] mr-10">
            <h1 className="text-2xl"> Training Manager Web Application </h1>
            <p className="text-md justify-self-start mt-10"> &ensp; This web application was initially requested to be built by my employer (USACE), however due to restricted resources I was unable to create the app using the tools I thought best. I ended up creating this app using PowerApps and preceded to create this in my own time using <span className="text-[#AD49E1]"> ReactJs </span> and <span className="text-[#AD49E1]"> Node.js </span> with a local <span className="text-[#AD49E1]"> oracle database </span>
              This app is designed to help managers plan and maintain a training plan for their employees. Some of the features include:</p>
            <br />
            <ul className="list-disc">
              <li>Functional <span className="text-[#AD49E1]"> authentication </span>, with a registration and login screen. Passwords are salted, hashed, and stored properly</li>
              <li>The ability to create courses with customizable course hours, travel hours, travel cost, and tuition</li>
              <li>Creation of employees with hourly rates and assignment to organizations</li>
              <li>Creation of organizations</li>
              <li>The ability to add courses in bulk to employees and then individualize each employees courses to be added</li>
            </ul>
            <br />
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/bhnichol/TrainingManager/' className="text-[#AD49E1] hover:underline">SOURCE CODE</a>
          </div>
        </div> */}
      </div>
      <div className="text-white">
        <div className="justify-items-center bg-[#202024] p-4" id="contact">
          <h1 className="text-3xl">Contact</h1>
        </div>
          <div className="flex flex-row items-center justify-center justify-self-center space-x-[10px] w-full">
          <div className={`${cardContainerCss}`}>
            <Image src={LIIMG} alt="Linked img" height={100}/>
            <div className="pt-2">
            <a target="_blank" rel="noopener noreferrer" href='www.linkedin.com/in/bryce-nicholson22' className="text-[#AD49E1] hover:underline ">LINKEDIN</a>
            </div>
          </div>
          <div className={`${cardContainerCss}`}>
            <Image src={GOOGLEIMG} alt="Google img" height={100}/>
            <div className="pt-2">
            <a target="_blank" rel="noopener noreferrer" href='' className="text-[#AD49E1] hover:underline ">bhnichol22@gmail.com</a>
            </div>
          </div>
          <div className={`${cardContainerCss}`}>
            <Image src={GITIMG} alt="git img" height={100}/>
            <div className="pt-2">
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/bhnichol/' className="text-[#AD49E1] hover:underline ">GITHUB</a>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}
