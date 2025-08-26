"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

// You can replace this with your actual profile image
const profileImage = "/assets/profile.jpg"; // Add your profile image path

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const skills = [
    { name: 'Frontend Development', level: 95, category: 'technical' },
    { name: 'React/Next.js', level: 90, category: 'technical' },
    { name: 'UI/UX Design', level: 85, category: 'design' },
    { name: 'Node.js', level: 80, category: 'technical' },
    { name: 'TypeScript', level: 88, category: 'technical' },
    { name: 'Figma', level: 82, category: 'design' },
    { name: 'MongoDB', level: 75, category: 'technical' },
    { name: 'Problem Solving', level: 92, category: 'soft' },
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
      achievements: [
        'Built and maintained 15+ production applications',
        'Improved application performance by 40%',
        'Mentored junior developers and conducted code reviews',
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and collaborated with design teams to create exceptional user experiences.',
      achievements: [
        'Developed 20+ responsive websites',
        'Reduced page load times by 35%',
        'Implemented modern CSS frameworks and animations',
      ]
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description: 'Started my journey in web development, working on various projects and learning modern technologies.',
      achievements: [
        'Learned React, Vue.js, and modern JavaScript',
        'Contributed to open-source projects',
        'Built first production application',
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      period: '2015 - 2019',
      description: 'Specialized in Software Engineering and Web Technologies',
    },
    {
      degree: 'Full Stack Web Development',
      institution: 'Online Bootcamp',
      period: '2019',
      description: 'Intensive program covering modern web development stack',
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '30+', label: 'Happy Clients' },
    { number: '15+', label: 'Technologies' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1, delay: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section ref={ref} className="py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl" style={{ backgroundColor: 'transparent' }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          style={{ color: '#131E25' }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        {/* Hero Section with Image and Intro */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-400 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <Image
                  src={profileImage}
                  alt="Profile"
                  width={400}
                  height={500}
                  className="w-full h-96 object-cover rounded-2xl"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iNTAiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTEwMCAzNTBDMTAwIDMwMCAxNDUgMjUwIDIwMCAyNTBTMzAwIDMwMCAzMDAgMzUwVjQwMEgxMDBWMzUwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Hi, I'm <span className="text-orange-500">Your Name</span>
            </h2>
            <p className="text-lg text-white leading-relaxed">
              A passionate full-stack developer with over 5 years of experience creating 
              digital solutions that bridge the gap between design and functionality. 
              I specialize in building scalable web applications using modern technologies 
              and best practices.
            </p>
            <p className="text-lg text-white leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-gradient-to-r from-orange-500 to-amber-400 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get In Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                target="_blank"
                className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-4xl font-bold text-orange-500 mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabbed Content Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { id: 'story', label: 'My Story', icon: '📖' },
                { id: 'skills', label: 'Skills', icon: '🛠️' },
                { id: 'experience', label: 'Experience', icon: '💼' },
                { id: 'education', label: 'Education', icon: '🎓' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'text-orange-600 border-b-2 border-orange-500 bg-orange-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8 min-h-[400px]">
            {activeTab === 'story' && (
              <motion.div
                key="story"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      My journey into the world of development began during my university years, 
                      where I discovered the magic of turning ideas into digital reality. What started 
                      as curiosity quickly became a passion.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Over the years, I've had the privilege of working with startups and established 
                      companies, each experience teaching me something new about problem-solving, 
                      teamwork, and the ever-evolving tech landscape.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900">What Drives Me</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span className="text-gray-600">Creating solutions that make a real impact</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span className="text-gray-600">Continuous learning and growth</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span className="text-gray-600">Building products that users love</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span className="text-gray-600">Collaborating with amazing teams</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Technical Skills</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                          variants={skillVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          custom={skill.level}
                          className="bg-gradient-to-r from-orange-500 to-amber-400 h-2.5 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Professional Experience</h3>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                            <p className="text-orange-600 font-medium">{exp.company}</p>
                          </div>
                          <span className="text-gray-500 bg-white px-3 py-1 rounded-full text-sm">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-500 mr-2 mt-1">✓</span>
                              <span className="text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Education & Certifications</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                        <span className="text-orange-600 bg-white px-3 py-1 rounded-full text-sm font-medium">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-amber-600 font-medium mb-2">{edu.institution}</p>
                      <p className="text-gray-600">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Create Something Amazing Together
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with fellow creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-gradient-to-r from-orange-500 to-amber-400 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Start a Conversation
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all"
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>

    // <div className='text-center'>
    //   Comming Soon...
    // </div>
  );
};

export default About;