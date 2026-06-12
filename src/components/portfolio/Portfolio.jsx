import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "FRONTEND / UI",
    title: "E-Commerce Redesign",
    description:
      "A complete frontend overhaul of an e-commerce platform using React, optimizing performance and load times.",
    link: "https://github.com/NimeshHasaranga",
  },
  {
    id: 2,
    image: card2,
    category: "REACT & TAILWIND",
    title: "Financial Dashboard",
    description:
      "Designed and built an intuitive financial tracking dashboard for seamless data visualization.",
    link: "https://github.com/NimeshHasaranga",
  },
  {
    id: 3,
    image: card3,
    category: "WEB APP",
    title: "Healthcare Portal",
    description:
      "Developed a modern healthcare appointment booking system with a focus on accessibility.",
    link: "https://github.com/NimeshHasaranga",
  },
  {
    id: 4,
    image: card4,
    category: "UI-UX DESIGN",
    title: "Brand Identity System",
    description:
      "Created a unified design system and component library for rapid frontend development.",
    link: "https://github.com/NimeshHasaranga",
  },
  {
    id: 5,
    image: card5,
    category: "FULLSTACK INTERFACE",
    title: "Task Management Tool",
    description:
      "Implemented an interactive drag-and-drop task board for Agile software teams.",
    link: "https://github.com/NimeshHasaranga",
  },
  {
    id: 6,
    image: card6,
    category: "ANIMATION / MOTION",
    title: "Interactive Landing Page",
    description:
      "Enhanced user experience by integrating Framer Motion animations into a high-conversion landing page.",
    link: "https://github.com/NimeshHasaranga",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
