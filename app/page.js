'use client'
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {

 

const [isDarkMode, setIsDarkMode] = useState(false);

  // 1. On Mount: Check localStorage or System Preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // 2. Whenever isDarkMode changes, update the HTML class and localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);


  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0b1120] dark:text-white transition-colors duration-300">
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    
    {/* Wrap components in a main tag to ensure they inherit the text color */}
    <main>
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contacts isDarkMode={isDarkMode} />
    </main>
    
    <Footer isDarkMode={isDarkMode} />
  </div>
  );
}

