"use client";

import { useState, useEffect } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";
import { GithubIcon, LinkedinIcon, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Food Delivery Platform",
      description: "A food distribution website, similar to Zomato...",
      githubLink: "https://github.com/NJ9804/Food_Del"
    },
    {
      title: "Data Visualization Tool",
      description: "A chart generation website that takes data from Excel...",
      githubLink: "https://github.com/vishnuhari17/Prathibhimb_AI"
    },
     {
      title: "Citizen Alert App",
      description: "A mobile application designed to notify citizens...",
       githubLink: "https://github.com/NJ9804?tab=repositories"
    },
    {
      title: "Food Redistribution System",
      description: "A website that helps redistribute leftover food from events...",
      githubLink: "https://github.com/NJ9804?tab=repositories"
    }
  
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-white font-bold">NJ</span>
          <div className="flex gap-2">
            <NavLink href="#home" isActive={activeSection === "home"}>Home</NavLink>
            <NavLink href="#about" isActive={activeSection === "about"}>About</NavLink>
            <NavLink href="#skills" isActive={activeSection === "skills"}>Skills</NavLink>
            <NavLink href="#projects" isActive={activeSection === "projects"}>Projects</NavLink>
            <NavLink href="#contact" isActive={activeSection === "contact"}>Contact</NavLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        
        <div className="relative z-10 text-center">
          <div className="text-4xl md:text-6xl font-bold text-white mb-4">
            <TextGenerateEffect words="Hi, I'm Nandana J" />
          </div>
          <div className="text-xl md:text-2xl text-gray-300 mb-8">
            <TextGenerateEffect words="Full Stack Developer | App & Web Developer | UI/UX Designer" />
          </div>
          <div className="flex gap-4 justify-center" >
          <a href="/Nandana__J.pdf" download className="btn btn-outline btn-lg">
            <Button variant="outline" size="lg">
              <Mail className="mr-2" /> Download Resume
            </Button>
            </a>
            <Button variant="outline" size="lg" onClick={() => window.location.href = 'https://github.com/NJ9804?tab=repositories'}>
              View Projects
            </Button>
          </div>
        </div>
        <BackgroundBeams />
      </section>

      <TracingBeam className="px-6">
        {/* About Section */}
        <section id="about" className="max-w-4xl mx-auto py-20 pt-32">
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
                I'm a passionate <span className="text-white-400 font-semibold">Computer Science student</span> at FISAT (KTU),
                driven by a love for building and problem-solving. My journey spans from fundamental C & Python to the
                dynamic world of <span className="text-white-400 font-semibold">React, Flutter, and Firebase</span>.
                Currently, I'm immersed in app development, but I'm always eager to explore emerging technologies.
                I'm looking for an internship where I can contribute, learn, and be part of creating something truly impactful.
            </p>
          
          <div className="flex gap-4">
            <a href="https://github.com/NJ9804" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/nandana-j-9b188a22a" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
            </a>
          </div>
        </section>

        {/* Skills Section */}
<section id="skills" className="max-w-4xl mx-auto py-20">
  <h2 className="text-4xl font-bold text-white mb-8 text-center md:text-left">My Tech Toolkit</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Programming Languages */}
      <div className="bg-gray-900 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">Languages</h3>
          <div className="flex flex-wrap gap-2 justify-start">
              {["C", "Python","Java"].map(skill => (
                  <span key={skill} className="bg-gray-800 hover:bg-gray-700 text-gray-300 py-1 px-3 rounded-full transition-colors inline-block">{skill}</span>
              ))}
          </div>
      </div>

      {/* App Development */}
      <div className="bg-gray-900 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">App Development</h3>
          <div className="flex flex-wrap gap-2 justify-start">
              {["Flutter", "Firebase"].map(skill => (
                  <span key={skill} className="bg-gray-800 hover:bg-gray-700 text-gray-300 py-1 px-3 rounded-full transition-colors inline-block">{skill}</span>
              ))}
          </div>
      </div>

      {/* Web Technologies */}
      <div className="bg-gray-900 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">Web Technologies</h3>
           <div className="flex flex-wrap gap-2 justify-start">
              {["HTML", "CSS", "React", "Angular"].map(skill => (
                  <span key={skill} className="bg-gray-800 hover:bg-gray-700 text-gray-300 py-1 px-3 rounded-full transition-colors inline-block">{skill}</span>
              ))}
          </div>
      </div>

      {/* Databases */}
     <div className="bg-gray-900 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-100 mb-4">Databases</h3>
        <div className="flex flex-wrap gap-2 justify-start">
            {["MySQL", "MongoDB", "PostgreSQL"].map(skill => (
                <span key={skill} className="bg-gray-800 hover:bg-gray-700 text-gray-300 py-1 px-3 rounded-full transition-colors inline-block">{skill}</span>
            ))}
        </div>
    </div>
     


    {/* Cloud Platforms */}
    <div className="bg-gray-900 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-100 mb-4">Cloud Platforms</h3>
        <div className="flex flex-wrap gap-2 justify-start">
            {["AWS", "Azure", "Google Cloud"].map(skill => (
                <span key={skill} className="bg-gray-800 hover:bg-gray-700 text-gray-300 py-1 px-3 rounded-full transition-colors inline-block">{skill}</span>
            ))}
        </div>
    </div>

      {/* Version Control */}
        <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">Version Control</h3>
             <div className="flex flex-wrap gap-2 justify-start">
                {["Git", "GitHub"].map(skill => (
                    <span key={skill} className="bg-gray-800 hover:bg-gray-700 text-gray-300 py-1 px-3 rounded-full transition-colors inline-block">{skill}</span>
                ))}
            </div>
        </div>
  </div>
</section>

        {/* Projects Section */}
<section id="projects" className="max-w-4xl mx-auto py-20">
    <h2 className="text-4xl font-bold text-white mb-12 text-center md:text-left">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1: Food Distribution Website  */}
        <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
             <h3 className="text-xl font-semibold text-white mb-2">
                 <span className="inline-flex items-center mr-2">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                       <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
               </span>Food Delivery Platform
            </h3>
            <p className="text-gray-400 mb-4">A food distribution website, similar to Zomato, allowing users to browse restaurants, view menus, and place orders.</p>
            <a href="https://github.com/NJ9804/Food_Del" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                View Project <ExternalLink className="ml-2 w-4 h-4" />
            </a>
        </div>

        {/* Project 2: Chart Generator (Prathibimb) */}
        <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">
              <span className="inline-flex items-center mr-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>

              </span>Data Visualization Tool
           </h3>
            <p className="text-gray-400 mb-4">A chart generation website that takes data from Excel or other sources and creates visual charts and graphs for easy analysis.</p>
             <a href="https://github.com/vishnuhari17/Prathibhimb_AI" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                View Project <ExternalLink className="ml-2 w-4 h-4" />
            </a>
        </div>

        {/* Project 3: Citizen Alert App */}
        <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">
            <span className="inline-flex items-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>

                </span>Citizen Alert App
           </h3>
            <p className="text-gray-400 mb-4">A mobile application designed to notify citizens about various alerts that they have customized, enhancing community safety and awareness.</p>
            <a href="https://github.com/NJ9804?tab=repositories" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                View Project <ExternalLink className="ml-2 w-4 h-4" />
            </a>
        </div>


        {/* Project 4: Food Redistribution Website */}
        <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
          <h3 className="text-xl font-semibold text-white mb-2">
            <span className="inline-flex items-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.721c-3.202 0-5.826-.531-8.21-1.74L12 20.058 6.21 17.022c-2.384 1.209-5.008 1.74-8.21 1.74v-6.427c0-3.202.531-5.826 1.74-8.21L4.942 4 6.83 6.411c-2.271.851-4.41 3.042-5.26 5.727H6v6.427h12v-6.427z" />
              </svg>
            </span>Food Redistribution System</h3>
            <p className="text-gray-400 mb-4">A website that helps redistribute leftover food from events to those in need, reducing food waste and promoting community support.</p>
             <a href="https://github.com/NJ9804?tab=repositories" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                View Project <ExternalLink className="ml-2 w-4 h-4" />
            </a>
        </div>
    </div>
</section>
      

       {/* Contact Section */}
<section id="contact" className="max-w-4xl mx-auto py-20 relative">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 opacity-20 rounded-lg blur-md"></div>

  <div className="relative z-10">
     <h2 className="text-4xl font-bold text-white mb-8 text-center md:text-left">
       Let's Connect
      </h2>
    <p className="text-gray-300 mb-8 text-center md:text-left">
        Ready to collaborate or explore new ideas? I'm always eager to connect!
     </p>
    <div className="flex justify-center md:justify-start">
    <a href="mailto:jnandana04@gmail.com"  className="bg-white-600 hover:bg-white-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition-colors">
     <Mail className="mr-2 w-5 h-5" />
          Send Message
    </a>
    </div>
  </div>
</section>
      </TracingBeam>
    </main>
  );
}