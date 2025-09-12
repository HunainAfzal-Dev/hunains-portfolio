"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Thumbs, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import panda from "../../public/assets/project1.png";
import welcomeFuel from "../../public/assets/project5.png";
import Atai from "../../public/assets/atai.png";

// Enhanced portfolio item type
type PortfolioItem = {
  id: number;
  category: string;
  title: string;
  description: string;
  images: StaticImageData[];
  link?: string;
  technologies?: string[];
  year?: string;
  client?: string;
  featured?: boolean;
};

// Enhanced portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: "app",
    title: "Mobile Banking App",
    description: "A comprehensive banking application with modern UI/UX and secure transaction features.",
    images: [panda, welcomeFuel, Atai],
    link: "https://example.com",
    technologies: ["React Native", "Node.js", "MongoDB"],
    year: "2024",
    client: "FinTech Corp",
    featured: true,
  },
  {
    id: 2,
    category: "product",
    title: "E-commerce Dashboard",
    description: "Advanced analytics dashboard for online retailers with real-time data visualization.",
    images: [welcomeFuel, panda, Atai],
    link: "https://example.com",
    technologies: ["React", "D3.js", "PostgreSQL"],
    year: "2024",
    client: "Retail Solutions",
  },
  {
    id: 3,
    category: "branding",
    title: "Brand Identity System",
    description: "Complete brand identity package including logo, typography, and visual guidelines.",
    images: [Atai, welcomeFuel, panda],
    link: "https://example.com",
    technologies: ["Adobe Creative Suite", "Figma"],
    year: "2023",
    client: "StartUp Inc",
    featured: true,
  },
  {
    id: 4,
    category: "app",
    title: "Fitness Tracking App",
    description: "Comprehensive fitness application with workout plans and progress tracking.",
    images: [panda, Atai, welcomeFuel],
    link: "https://example.com",
    technologies: ["Flutter", "Firebase", "ML Kit"],
    year: "2024",
    client: "HealthTech Solutions",
  },
  {
    id: 5,
    category: "product",
    title: "SaaS Platform",
    description: "Cloud-based project management platform for enterprise clients.",
    images: [welcomeFuel, Atai, panda],
    link: "https://example.com",
    technologies: ["Vue.js", "Express", "AWS"],
    year: "2023",
    client: "Enterprise Corp",
  },
  {
    id: 6,
    category: "branding",
    title: "Restaurant Brand Package",
    description: "Complete branding solution for modern restaurant chain.",
    images: [Atai, panda, welcomeFuel],
    technologies: ["Illustrator", "Photoshop", "InDesign"],
    year: "2023",
    client: "Gourmet Foods",
  },
  {
    id: 7,
    category: "books",
    title: "Digital Magazine",
    description: "Interactive digital magazine with multimedia content.",
    images: [panda, welcomeFuel, Atai],
    technologies: ["InDesign", "HTML5", "CSS3"],
    year: "2024",
    client: "Publishing House",
  },
];

// Filter categories with counts
const getFilterCategories = (items: PortfolioItem[]) => {
  const categoryCounts = items.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return [
    { key: "*", label: "All", count: items.length },
    ...Object.entries(categoryCounts).map(([key, count]) => ({
      key,
      label: key.charAt(0).toUpperCase() + key.slice(1),
      count,
    })),
  ];
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "title">("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  // Memoized filtered and sorted items
  const filteredAndSortedItems = useMemo(() => {
    let filtered = portfolioItems;

    // Apply category filter
    if (activeFilter !== "*") {
      filtered = filtered.filter((item) => item.category === activeFilter);
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.technologies?.some((tech) =>
            tech.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Apply sorting
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (b.year || "").localeCompare(a.year || "");
        case "oldest":
          return (a.year || "").localeCompare(b.year || "");
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  }, [activeFilter, searchQuery, sortBy]);

  const filterCategories = useMemo(() => getFilterCategories(portfolioItems), []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedProject && e.key === "Escape") {
      setSelectedProject(null);
    }
  }, [selectedProject]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="portfolio" className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[#FF7C00] to-[#FFA856] bg-clip-text text-transparent mb-6">
            Our Portfolio
          </h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white max-w-3xl mx-auto text-lg leading-relaxed">
            Discover our latest projects that showcase innovation, creativity, and technical excellence. 
            Each project represents our commitment to delivering exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Controls Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          {/* Search and View Toggle */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <svg
                  className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "newest" | "oldest" | "title")}
                className="text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Alphabetical</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "grid"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "list"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-3">
            {filterCategories.map((filter) => (
              <motion.button
                key={filter.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-[#FF7C00] to-[#FFA856] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:shadow-lg border border-gray-200"
                }`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
                <span className="ml-2 text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                  {filter.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 text-center text-white"
        >
          Showing {filteredAndSortedItems.length} of {portfolioItems.length} projects
        </motion.div>

        {/* Portfolio Grid/List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }
        >
          <AnimatePresence mode="wait">
            {filteredAndSortedItems.map((item) => (
              <motion.div
                key={`${item.id}-${activeFilter}-${searchQuery}`}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer ring-2 ring-gradient-to-r from-[#FF7C00] to-[#FFA856] ${
                  viewMode === "list" ? "flex gap-6 bg-white p-6" : "bg-white"
                } ${item.featured ? "ring-2 ring-gradient-to-r from-[#FF7C00] to-[#FFA856]" : ""}`}
              >
                {item.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className={viewMode === "list" ? "flex-shrink-0 w-48" : ""}>
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    width={400}
                    height={300}
                    className={`${
                      viewMode === "grid" ? "w-full h-64" : "w-full h-32 rounded-lg"
                    } object-cover transition-transform duration-500 group-hover:scale-110`}
                  />
                </div>
                
                <div className={`${viewMode === "grid" ? "absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100" : "flex-1"} transition-all duration-300`}>
                  <div className={`${viewMode === "grid" ? "absolute bottom-0 left-0 right-0 p-6 text-white" : "space-y-3"}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`${viewMode === "grid" ? "text-white text-xl" : "text-gray-900 text-lg"} font-bold`}>
                        {item.title}
                      </h4>
                      {viewMode === "list" && item.year && (
                        <span className="text-gray-500 text-sm">{item.year}</span>
                      )}
                    </div>
                    
                    <p className={`${viewMode === "grid" ? "text-gray-200" : "text-gray-600"} text-sm mb-3`}>
                      {item.description}
                    </p>
                    
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              viewMode === "grid"
                                ? "bg-white bg-opacity-20 text-white"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(item);
                        }}
                        className={`${
                          viewMode === "grid"
                            ? "text-white hover:text-blue-400"
                            : "text-blue-600 hover:text-blue-800"
                        } transition-colors`}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </motion.button>
                      
                      {item.link && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${
                            viewMode === "grid"
                              ? "text-white hover:text-blue-400"
                              : "text-blue-600 hover:text-blue-800"
                          } transition-colors`}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredAndSortedItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>

      {/* Enhanced Image Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Main Image Carousel */}
              <div className="relative">
                <Swiper
                  modules={[Navigation, Pagination, Thumbs, EffectFade]}
                  navigation
                  pagination={{ clickable: true }}
                  thumbs={{ swiper: thumbsSwiper }}
                  effect="fade"
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

                {/* Thumbnails */}
                {selectedProject.images.length > 1 && (
                  <Swiper
                    modules={[Thumbs]}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    watchSlidesProgress={true}
                    className="mt-4 px-4"
                  >
                    {selectedProject.images.map((image, index) => (
                      <SwiperSlide key={index} className="cursor-pointer">
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          width={100}
                          height={75}
                          className="w-full h-16 object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedProject.title}
                    </h3>
                    {selectedProject.client && (
                      <p className="text-blue-600 font-medium">Client: {selectedProject.client}</p>
                    )}
                  </div>
                  {selectedProject.year && (
                    <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {selectedProject.year}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                {selectedProject.technologies && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedProject.link && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    View Live Project
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;