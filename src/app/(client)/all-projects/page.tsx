"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import panda from "../../public/assets/project1.png";
import welcomeFuel from "../../public/assets/project5.png";
import Atai from "../../public/assets/atai.png";

// Define the portfolio item type
type PortfolioItem = {
  id: number;
  category: string;
  title: string;
  description: string;
  images: StaticImageData[]; // Array of images for each project
  link?: string; // Optional link for the project
};

// Sample portfolio data with multiple images
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: "app",
    title: "App 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    images: [panda, welcomeFuel, Atai],
    link: "https://example.com",
  },
  {
    id: 2,
    category: "product",
    title: "Product 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    images: [welcomeFuel, panda, Atai],
    link: "https://example.com",
  },
  {
    id: 3,
    category: "branding",
    title: "Branding 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    images: [Atai, welcomeFuel, panda],
    link: "https://example.com",
  },
  {
    id: 1,
    category: "app",
    title: "App 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    images: [panda, welcomeFuel, Atai],
    link: "https://example.com",
  },
  {
    id: 2,
    category: "product",
    title: "Product 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    images: [welcomeFuel, panda, Atai],
    link: "https://example.com",
  },
  {
    id: 3,
    category: "branding",
    title: "Branding 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    images: [Atai, welcomeFuel, panda],
    link: "https://example.com",
  },
  {
    id: 1,
    category: "app",
    title: "App 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    images: [panda, welcomeFuel, Atai],
    link: "https://example.com",
  },
  {
    id: 2,
    category: "product",
    title: "Product 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    images: [welcomeFuel, panda, Atai],
    link: "https://example.com",
  },
  {
    id: 3,
    category: "branding",
    title: "Branding 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    images: [Atai, welcomeFuel, panda],
    link: "https://example.com",
  },
  {
    id: 4,
    category: "app",
    title: "App 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    images: [panda, welcomeFuel, Atai],
    link: "https://example.com",
  },
  {
    id: 5,
    category: "product",
    title: "Product 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    images: [welcomeFuel, panda, Atai],
    link: "https://example.com",
  },
  {
    id: 6,
    category: "branding",
    title: "Branding 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    images: [Atai, welcomeFuel, panda],
    link: "https://example.com",
  },
  // Add more items as needed
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  // Filter portfolio items based on the selected category
  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 ">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-4xl font-bold mb-4"
        >
          Portfolio
        </h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
          sit in iste officiis commodi quidem hic quas.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center flex-wrap gap-4 mb-8"
        >
          {["*", "app", "product", "branding", "books"].map((filter) => (
            <button
              key={filter}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 hover:bg-blue-50"
                }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === "*" ? "All" : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <Image
                  src={item.images[0]} // Display the first image as the thumbnail
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                  <h4 className="text-white text-lg font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                  <div className="mt-4 flex gap-4">
                    <button
                      onClick={() => setSelectedProject(item)}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <i className="bi bi-zoom-in text-2xl"></i>
                    </button>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        <i className="bi bi-link-45deg text-2xl"></i>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Image Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-lg max-w-3xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
            >
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-96"
              >
                {selectedProject.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image}
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{selectedProject.title}</h3>
                <p className="text-gray-600">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;