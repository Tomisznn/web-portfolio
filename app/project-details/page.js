"use client";
import { assets } from "@/assets/assets";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProjectDetails() {
    const router = useRouter();
  return (
    
    <>
      <div className="max-w-4xl mx-auto px-6 pt-10">
  <button 
    onClick={() => router.push('/#projects')}
    className="cursor-pointer px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-all text-sm flex items-center gap-2"
  >
    ← Back to Portfolio
  </button>
</div>
      <main className="max-w-4xl mx-auto px-6 py-20 font-sans">
        
        <div>
        <h1 className="text-5xl font-bold mb-4">AURA</h1>
        <p className="text-xl text-gray-600 mb-10">A deep dive into what AURA is all about.</p>
        </div>

        <a 
            href={"https://aura-version1.vercel.app"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-3 mb-5 rounded-full font-medium hover:bg-green-700 transition-all shadow-md text-center inline-block"
          >
            Visit Live Website ↗
          </a>

        <div className="w-full mb-12 rounded-xl overflow-hidden shadow-lg border border-gray-100">
   <Image 
     src={assets.aurass} 
     alt='AURA Project Screenshot' 
     layout="responsive"   
     width={1920}          
     height={1080}         
     className='rounded-xl object-contain' 
   />
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 underline decoration-blue-500">Full Description</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              AI-powered HR solutions that transform workplace performance
Streamline your human resources with intelligent automation. We help companies unlock their team's full potential through data-driven insights and smart management tools.
            </p>

            <h2 className="text-2xl font-semibold mb-4 underline decoration-blue-500">Problem Solved</h2>
            <p className="text-gray-700 leading-relaxed">
              AURA makes HR operations seamless. It reduces the time taken to do repetitive tasks. It is an all-in-one command center that elevates HR in the workplace.
            </p>
          </section>

          
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc ml-5 space-y-2 mb-8">
              <li>Onboarding Automation Features</li>
              <li>HR Attrition Analytics</li>
              <li>Performance Analysis</li>
              <li>Governance as a Service</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Typescript</span>
              <span className="bg-black text-white px-3 py-1 rounded-full text-sm">n8n</span>
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
            </div>
          </section>
        </div>

        
        <section className="mt-12 border-t pt-10">
          <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>
          <p className="text-gray-700 italic">
            Building this project improved my knowledge on front-end and AI integration into web applications. It also gave me a deeper understanding of APIs.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}