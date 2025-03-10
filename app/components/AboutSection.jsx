"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>+2</li>
        <li>Bachelors (5th sem)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id); 
    });
  };

  return (
    <section className="text-white py-8 px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
      <div className="flex-shrink-0">
        </div>
        <Image src="/images/computer.png" alt="computer" width={300} height={300} />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a student with passion for learning about web development.
            I have experience working with JavaScript, HTML, and CSS. I am a quick learner. 
            I am co-operative and a good team player.
          </p>

       
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>

          
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
