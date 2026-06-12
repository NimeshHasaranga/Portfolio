import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <div className="max-w-106 rounded-lg hover:shadow-2xl duration-300 transition-all shadow-base-300 border border-base-300 bg-base-100">
      <img src={data?.image} alt={`${data?.title} image`} />
      <div className="p-4 xs:p-8">
        <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
        <p className="text-base-content text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-base-content/70 text-xs xxs:text-[14px] text-wrap"
        >
          {data?.description}
        </p>
        <a
          href={data?.link}
          className="btn hover:border-picto-primary hover:text-picto-primary bg-base-200 text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
        >
          Case Study
          <span className="ms-1 xs:ms-3">
            <FontAwesomeIcon icon={faArrowRight} size="l" className="" />
          </span>
        </a>
        {/* </p> */}
      </div>
    </div>
  );
};

export default Projects;
