"use client"

import { useEffect, useRef } from 'react';
import { Gamepad2, Trophy, Sparkles, Coffee } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
  time: string;
  title: string;
  type: 'keynote' | 'talk' | 'panel' | 'workshop' | 'break' | 'game';
  description?: string;
  badges?: { text: string; style: string }[];
}

export default function Timeline() {
  const containerRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const schedule: TimelineItem[] = [
    {
      time: "09:00 - 10:00",
      type: "keynote",
      title: "The Future Is Collective",
      description: "Opening remarks on the power of community-driven innovation."
    },
    {
      time: "10:15 - 11:00",
      type: "talk",
      title: "Sustainable Growth Without Compromise",
      description: "How to scale your business while maintaining net-zero goals."
    },
    {
      time: "11:15 - 12:15",
      type: "panel",
      title: "Tech for Good: Building with Purpose",
      description: "Industry leaders discuss the ethical implications of AI."
    },
    {
      time: "12:15 - 13:30",
      type: "break",
      title: "Networking Lunch & Refreshments",
    },
    {
      time: "13:30 - 14:30",
      type: "workshop",
      title: "Vision Mapping for Sustainable Businesses",
      description: "Interactive session: Create your 5-year sustainability roadmap."
    },
    {
      time: "14:45 - 15:30",
      type: "talk",
      title: "The New Metrics of Success: Impact Over Scale",
      description: "Redefining KPIs for the modern era."
    },
    {
      time: "16:00 - 17:00",
      type: "panel",
      title: "From Solo Founder to Collaborative Ecosystem",
      description: "Navigating the transition from founder to leader."
    },
    {
      time: "17:30 - 18:30",
      type: "game",
      title: "Cyber-Sprint Coding Challenge",
      description: "Compete in a live algorithmic battle. Fastest solver takes all.",
      badges: [
        { text: "Grand Prize $2,000", style: "bg-gradient-to-r from-emerald-400 to-cyan-500 text-black shadow-[0_0_15px_rgba(52,211,153,0.6)]" },
        { text: "Live Leaderboard", style: "border border-cyan-500 text-cyan-400" }
      ]
    },
    {
      time: "19:00 - 20:30",
      type: "game",
      title: "Neon Nights: VR Tournament",
      description: "High-octane VR showdown. Top 3 players win exclusive tech gear.",
      badges: [
        { text: "Winner takes VR Kit", style: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]" },
        { text: "Free Entry", style: "border border-blue-500 text-blue-400" }
      ]
    }
  ];

  useEffect(() => {
    if (!listRef.current) return;

    const items = listRef.current.children;

    gsap.fromTo(items,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="bg-black text-white py-24 px-6 md:px-12 min-h-screen relative z-20">
      
      {/* Header Area */}
      <div className="max-w-[1600px] mx-auto mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/20 pb-8 gap-8">
          
          {/* Left: Date */}
          <div className="flex items-center gap-3">
             <svg width="24" height="8" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-3 text-[#3B82F6]">
                <path d="M1 5C1 5 4.5 1 8.5 5C12.5 9 16 5 16 5C16 5 19.5 1 23.5 5C27.5 9 31 5 31 5C31 5 34.5 1 38.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            <span className="font-bold tracking-widest uppercase text-sm md:text-base">January 15, 2026</span>
          </div>

          {/* Right: Title (Moved from center/left to right) */}
          <h2 className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tighter text-right">
            Timeline
          </h2>

        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Column: Day Indicator (Sticky) */}
        <div className="lg:w-1/4">
          <div className="sticky top-32">
            <h3 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
              Main Day
            </h3>
            <p className="mt-4 text-gray-400 text-lg font-medium max-w-[200px]">
              Kicking off with innovation, AI, and community.
            </p>
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div ref={listRef} className="lg:w-3/4 flex flex-col gap-8">
          {schedule.map((item, index) => {
            const isBreak = item.type === 'break';
            const isGame = item.type === 'game';

            if (isBreak) {
              return (
                <div key={index} className="flex flex-col md:flex-row items-center justify-center py-8 md:py-12 px-6 border-y border-white/10 bg-white/5 rounded-xl gap-4 my-4 group hover:bg-white/10 transition-colors duration-500 text-center">
                  <Coffee className="w-6 h-6 text-[#3B82F6] animate-pulse flex-shrink-0" />
                  <span className="text-xl md:text-2xl font-bold tracking-wide text-gray-300 group-hover:text-white transition-colors">
                    {item.time} — {item.title}
                  </span>
                </div>
              );
            }

            return (
              <div 
                key={index} 
                className={`
                  group relative flex flex-col md:flex-row gap-6 md:gap-12 py-8 border-b border-white/10 
                  ${isGame ? 'bg-gradient-to-r from-blue-900/20 to-indigo-900/10 border-none rounded-2xl p-6 md:p-8 hover:from-blue-900/30 hover:to-indigo-900/20 transition-all duration-500' : 'hover:pl-4 transition-all duration-300'}
                `}
              >
                {/* Time */}
                <div className={`md:w-48 flex-shrink-0 text-lg md:text-xl font-medium tracking-wide ${isGame ? 'text-blue-300' : 'text-gray-400 group-hover:text-[#3B82F6] transition-colors'}`}>
                  {item.time}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex items-start justify-between gap-4">
                     <div className="flex items-center gap-3">
                        {/* Type Squiggle/Icon */}
                        {isGame ? (
                           <Gamepad2 className="w-6 h-6 text-indigo-400" />
                        ) : (
                           <svg width="20" height="8" viewBox="0 0 40 10" fill="none" className="w-5 h-2 mt-2 text-[#3B82F6]">
                             <path d="M1 5C1 5 4.5 1 8.5 5C12.5 9 16 5 16 5C16 5 19.5 1 23.5 5C27.5 9 31 5 31 5C31 5 34.5 1 38.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                        )}
                        <h4 className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight ${isGame ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' : 'text-white'}`}>
                          {item.title}
                        </h4>
                     </div>
                     
                     {/* Game Trophy Icon */}
                     {isGame && <Trophy className="w-8 h-8 text-yellow-400 drop-shadow-lg hidden sm:block" />}
                  </div>

                  {item.description && (
                    <p className={`text-lg md:text-xl ml-8 ${isGame ? 'text-gray-300' : 'text-gray-500'}`}>
                      {item.description}
                    </p>
                  )}

                  {/* Badges for Games */}
                  {isGame && item.badges && (
                    <div className="flex flex-wrap gap-3 ml-8 mt-2">
                      {item.badges.map((badge, bIndex) => (
                        <span key={bIndex} className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest ${badge.style}`}>
                          {bIndex === 0 && <Sparkles className="w-3 h-3 md:w-4 md:h-4" />}
                          {badge.text}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
