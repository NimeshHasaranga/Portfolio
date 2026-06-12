import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "14 Nov, 2024",
    comments: 12,
    title: "Mastering React Hooks: Best Practices for Clean Code",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "05 Dec, 2024",
    comments: 8,
    title: "Building Scalable UIs with Tailwind CSS and Next.js",
    link: "#!",
  },
  {
    id: 3,
    image: img3,
    date: "10 Jan, 2025",
    comments: 24,
    title: "A Complete Guide to Frontend Performance Optimization",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "22 Feb, 2025",
    comments: 5,
    title: "Framer Motion: Creating Fluid Animations in React",
    link: "#!",
  },
  {
    id: 5,
    image: img2,
    date: "18 Mar, 2025",
    comments: 17,
    title: "Accessibility in Web Development: Why It Matters",
    link: "#!",
  },
  {
    id: 6,
    image: img1,
    date: "02 Apr, 2025",
    comments: 31,
    title: "State Management in 2025: Redux vs Zustand vs Context",
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Blog</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Check out my recent blog posts where I share insights on design,
          development, and the latest industry trends.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
