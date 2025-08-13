/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

export default function Cv() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "UP TALK",
      desc: "Internal platform for University of Phayao",
      year: "Jul 2024- Sep 2024",
      detail:
        "UP TALK is an internal platform with categorized discussions and admin moderation. I was responsible for UX/UI design to ensure a user-friendly experience.",
        image: "/uptalk.png",
    },
    {
      title: "Cookzy",
      desc: "Recipe website with smart search",
      year: "Dec 2024- Feb 2025",
      detail:
       "Cookzy is a categorized recipe platform with an ingredient-based search feature. I designed the UI and built back-end systems to manage recipe/ingredient data.",
       image: "/cookzy.png",
      },
  ];

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yTarget = element.offsetTop;
    const startY = window.pageYOffset;
    const diff = yTarget - startY;
    const duration = 1200; // เวลาเลื่อน (ms)
    let startTime: number | null = null;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easing แบบ easeInOutQuad
      const easing = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, startY + diff * easing);

      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  };

  
  

  return (
    <>
    <nav className="sticky top-0 z-50">
      <div className="bg-red-700 text-white py-1.5 text-center relative">
        <div className="text-base font-semibold uppercase tracking-wide">
          Software Engineering
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 bg-red-700 text-white text-[10px] px-3 py-[2px] rounded-full shadow-sm">
          [ SE ]
        </div>
      </div>

      <div className="bg-white border-b border-red-700 mt-5 px-4 py-2 flex justify-center items-center">
        <ul className="flex space-x-6 text-gray-700 font-medium text-sm uppercase tracking-wide">
          {["AboutMe", "Education", "Skills", "projects"].map((section) => (
            <li key={section}>
              <button
                onClick={() => smoothScrollTo(section)}
                className="hover:text-red-700 transition"
              >
                {section === "projects" ? "Projects" : section}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex space-x-3 items-center ml-auto pr-2 text-red-700 text-base">
          <span>&#9734;</span>
          <span>&#9660;</span>
          <span>&#9825;</span>
          <span>&#187;</span>
          <span>&#187;</span>
        </div>
      </div>
    </nav>


        {/* Hero */}
      <div className="bg-red-700 p-4 h-[600px]">
  <motion.h1
    className="text-gray-50 text-6xl md:text-8xl font-extrabold flex justify-center items-center h-48"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay: 0.1 }}
  >
    WIMONSIRI DEESAN
  </motion.h1>

  <motion.h1
    className="text-gray-50 text-3xl font-extrabold flex justify-center items-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    The purpose of our lives is to be happy
  </motion.h1>

  <motion.div
    className="flex justify-center items-center space-x-4 p-5 z-10 relative"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay: 0.5 }}
  >
    <a href="https://github.com/66022905" target="_blank" rel="noopener noreferrer">
      <Image
        src="/github2.png"
        alt="GitHub"
        width={40}
        height={40}
        className="hover:opacity-80"
      />
    </a>
    <a href="https://www.facebook.com/wimonsiri.ball/" target="_blank" rel="noopener noreferrer">
      <Image
        src="/facebook2.png"
        alt="facebook"
        width={40}
        height={40}
        className="hover:opacity-80"
      />
    </a>
    <a href="https://www.instagram.com/bxllx_bb/" target="_blank" rel="noopener noreferrer">
      <Image
        src="/instagram1.png"
        alt="instagram"
        width={40}
        height={40}
        className="hover:opacity-80"
      />
    </a>
  </motion.div>

  <motion.div
    className="flex justify-center items-center -translate-y-20"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay: 0.7 }}
  >
    <Image
      src="/belle4.png"
      alt="about me image"
      width={400}
      height={400}
      className="object-cover"
    />
  </motion.div>
</div>


      {/* About Me */}
<motion.div
  id="AboutMe"
  className="min-h-screen bg-neutral-100 flex items-center justify-center p-8"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.8 }}
>
  <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 border bg-white">
    <motion.div
      className="p-8"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h1 className="text-red-600 text-6xl md:text-8xl font-extrabold">
        ABOUT<br />ME
      </h1>
      <p className="mt-6 text-sm tracking-wide text-black uppercase font-medium">
        Wimonsiri Deesan, a 3-year Software Engineering student at the University of Phayao. I am currently seeking an internship opportunity in the areas of Software Testing / QA Testing, UX/UI Design, or Business Analysis between November 2025 and March 2026.
      </p>
      <a
        href="/WimonsiriDeesanResume2025.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-700 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-400 mt-6 inline-block"
      >
        Resume
      </a>
    </motion.div>
    <motion.div
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <Image
        src="/Belle1.jpeg"
        alt="about me image"
        width={500}
        height={400}
        className="object-cover rounded-md"
      />
    </motion.div>
  </div>
</motion.div>
        
<motion.div
  id="Education"
  className="bg-red-700 p-3 min-h-[600px] flex flex-col justify-center items-center text-white"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.8 }}
>
  <motion.h1
    className="text-4xl md:text-6xl font-extrabold mb-8"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.6, delay: 0.1 }}
  >
    Education
  </motion.h1>

  <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
    <motion.div
      className="bg-red-800 p-5 rounded-xl shadow-md w-full md:w-96 h-80 text-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold">University of Phayao</h2>
      <p className="text-sm">Bachelor of Engineering (Software Engineering)</p>
      <p className="text-sm">GPA: 2.80</p>
      <div className="flex justify-center items-center mt-4">
        <Image
          src="/university.png"
          alt="Bachelor image"
          width={180}
          height={180}
          className="object-cover rounded-md"
        />
      </div>
    </motion.div>

    <motion.div
      className="bg-red-800 p-5 rounded-xl shadow-md w-full md:w-96 h-80 text-center"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h2 className="text-2xl font-bold">Thungphotalea Pittaya School</h2>
      <p className="text-sm">Science-Math</p>
      <div className="flex justify-center items-center mt-2">
        <Image
          src="/university.png"
          alt="High school image"
          width={180}
          height={180}
          className="object-cover rounded-md"
        />
      </div>
    </motion.div>
  </div>
</motion.div>


        {/* Skills */}
        <motion.div
  id="Skills"
  className="bg-white p-3 min-h-[600px] flex flex-col justify-center items-center text-red-800"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.8 }}
>
  <motion.h1
    className="text-4xl md:text-6xl font-extrabold mb-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.6 }}
  >
    Skills
  </motion.h1>

  <div className="flex flex-wrap justify-center gap-6">
    {/* Frontend */}
    <motion.div
      className="p-5 rounded-xl shadow-md w-80 h-80 text-left bg-red-800 text-white"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold mb-2 text-center">Frontend</h2>
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript (basic)</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
      </ul>
    </motion.div>

    {/* Dev Tools */}
    <motion.div
      className="p-5 rounded-xl shadow-md w-80 h-80 text-left bg-red-800 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2 className="text-2xl font-bold mb-2 text-center">Development Tools</h2>
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>VS Code</li>
        <li>GitHub</li>
        <li>Postman</li>
        <li>Robot Framework (basic)</li>
      </ul>
    </motion.div>

    {/* Other Skills */}
    <motion.div
      className="p-5 rounded-xl shadow-md w-80 h-80 text-left bg-red-800 text-white"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-2 text-center">Other Skills</h2>
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>UX/UI (Figma)</li>
        <li>Canva</li>
        <li>Microsoft (Word, Excel, PowerPoint)</li>
      </ul>
    </motion.div>
  </div>
</motion.div>
 
<motion.div
  id="projects"
  className="bg-red-700 px-6 py-12 flex flex-col items-center text-white"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.8 }}
>
  <motion.h1
    className="text-4xl md:text-6xl font-extrabold mb-12"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.6 }}
  >
    Projects
  </motion.h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
    {projects.map((proj, index) => (
      <motion.div
        key={index}
        onClick={() => {
          setSelectedProject(proj);
          setShowModal(true);
        }}
        className="cursor-pointer bg-red-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <Image
          src={proj.image}
          alt={proj.title}
          width={400}
          height={250}
          className="object-cover w-full h-[200px]"
        />
        <div className="p-5 text-center text-white">
          <h2 className="text-xl font-bold mb-1">{proj.title}</h2>
          <p className="text-sm mb-1">{proj.desc}</p>
          <span className="text-xs italic text-white">{proj.year}</span>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Modal ตรงนี้ไม่จำเป็นต้องใช้ motion */}
  {showModal && selectedProject && (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-4 py-8 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-2xl p-6 md:p-8 relative flex flex-col gap-6 shadow-2xl">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-6 text-gray-400 hover:text-red-500 text-2xl"
        >
          ×
        </button>
        <div className="text-black text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{selectedProject.title}</h2>
          <p className="text-sm italic text-gray-500 mb-4">{selectedProject.year}</p>
          <p className="text-base leading-relaxed text-gray-700">{selectedProject.detail}</p>
        </div>
        <div className="flex justify-center">
          <Image
            src={selectedProject.image || "/default-project.jpg"}
            alt={`${selectedProject.title} image`}
            width={1000}
            height={850}
            className="rounded-xl object-cover shadow-md max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  )}
</motion.div>
</>
  );
}