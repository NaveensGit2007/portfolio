import { personalInfo, heroData } from '../data/portfolioData.js';

export const renderHero = () => {
  return `
    <div class="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
      
      <!-- Decorative Floating Stickers (Asymmetric) -->
      <div class="absolute -top-6 left-0 hidden md:block z-10">
        <span class="brutal-badge brutal-badge-yellow sticker-rotate-1 animate-float shadow-[3px_3px_0px_#000]">
          🚀 BUILD MODE: ON
        </span>
      </div>
      
      <div class="absolute top-2 right-12 hidden lg:block z-10">
        <span class="brutal-badge brutal-badge-blue text-white sticker-rotate-2 shadow-[3px_3px_0px_#000]">
          ⚡ AVAILABLE FOR OPPORTUNITIES
        </span>
      </div>

      <!-- Left Column: Huge Asymmetric Typography & Action CTAs -->
      <div class="lg:col-span-7 flex flex-col justify-between space-y-6">
        
        <div class="space-y-4">
          <!-- Top Sub-Badge -->
          <div class="inline-flex items-center gap-2 bg-black text-white border-2 border-black px-3 py-1 font-mono text-xs font-bold shadow-[4px_4px_0px_#FFE600]">
            <span>HELLO WORLD 👋</span>
            <span>|</span>
            <span class="text-accent-yellow">${personalInfo.degree}</span>
          </div>

          <!-- Main Massive Headline -->
          <h1 class="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none uppercase select-none">
            HI, I'M <span class="bg-accent-yellow px-2 py-0.5 border-4 border-black inline-block shadow-[6px_6px_0px_#000] -rotate-1 hover:rotate-0 transition-transform">NAVYA.</span>
          </h1>

          <!-- Secondary Expressive Headline -->
          <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-snug">
            I BUILD, BREAK & LEARN THINGS WITH <span class="underline decoration-4 decoration-accent-blue underline-offset-4 font-mono">CODE.</span>
          </h2>

          <!-- Bio Description -->
          <p class="text-base sm:text-lg font-medium text-slate-800 max-w-2xl bg-white/80 p-4 border-3 border-black shadow-[4px_4px_0px_#000] font-mono leading-relaxed">
            ${heroData.description}
          </p>
        </div>

        <!-- Action CTAs -->
        <div class="flex flex-wrap items-center gap-4 pt-2">
          
          <a href="#projects" class="brutal-btn brutal-btn-primary text-sm sm:text-base font-black px-6 py-3">
            VIEW MY WORK ↓
          </a>

          <a href="#contact" class="brutal-btn brutal-btn-black text-sm sm:text-base font-bold px-6 py-3">
            CONNECT WITH ME →
          </a>

          <a href="${personalInfo.linkedin}" target="_blank" rel="noopener noreferrer" class="brutal-btn brutal-btn-blue text-sm sm:text-base font-bold px-5 py-3" title="Open LinkedIn Profile">
            LINKEDIN ↗
          </a>

        </div>

        <!-- Quick Brutalist Tags -->
        <div class="flex flex-wrap gap-2 pt-2 font-mono text-xs font-bold">
          <span class="brutal-badge brutal-badge-paper">DATA ENGINEERING</span>
          <span class="brutal-badge brutal-badge-paper">PYTHON</span>
          <span class="brutal-badge brutal-badge-paper">SQL</span>
          <span class="brutal-badge brutal-badge-paper">REST APIs</span>
          <span class="brutal-badge brutal-badge-paper">AZURE</span>
        </div>

      </div>

      <!-- Right Column: Interactive 3D Brutalist Status Card -->
      <div class="lg:col-span-5 flex flex-col justify-center">
        <div id="hero-tilt-card" class="brutal-card-lg bg-white p-6 sm:p-8 space-y-6 relative overflow-hidden transition-transform duration-200">
          
          <!-- Card Header Banner -->
          <div class="bg-black text-white p-3 border-2 border-black -mx-2 -mt-2 flex items-center justify-between font-mono text-xs font-bold">
            <span class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              CARD // SYSTEM_STATUS
            </span>
            <span id="live-time" class="text-accent-yellow">18:47 IST</span>
          </div>

          <!-- Profile Info Blocks -->
          <div class="space-y-4 font-mono">
            
            <div class="border-b-2 border-black pb-3">
              <span class="text-xs text-slate-500 font-bold uppercase block mb-1">STATUS:</span>
              <div class="flex items-center gap-2 bg-emerald-100 border-2 border-black p-2 font-black text-xs sm:text-sm">
                <span class="w-3 h-3 bg-emerald-500 rounded-full border border-black"></span>
                <span class="uppercase">${personalInfo.status}</span>
              </div>
            </div>

            <div class="border-b-2 border-black pb-3">
              <span class="text-xs text-slate-500 font-bold uppercase block mb-1">ROLE:</span>
              <span class="font-extrabold text-sm sm:text-base text-black bg-accent-yellow/40 px-2 py-0.5 border border-black block">
                ${personalInfo.role}
              </span>
            </div>

            <div class="border-b-2 border-black pb-3">
              <span class="text-xs text-slate-500 font-bold uppercase block mb-1">COLLEGE / LOCATION:</span>
              <span class="font-bold text-xs sm:text-sm text-black block">
                ${personalInfo.institution}
              </span>
              <span class="text-xs text-slate-600">${personalInfo.location}</span>
            </div>

            <div>
              <span class="text-xs text-slate-500 font-bold uppercase block mb-1">INTERESTS:</span>
              <div class="flex flex-wrap gap-1.5 text-xs font-bold">
                <span class="bg-accent-blue/10 border border-black px-2 py-0.5">CODE</span>
                <span class="bg-accent-green/10 border border-black px-2 py-0.5">DATA</span>
                <span class="bg-accent-red/10 border border-black px-2 py-0.5">TECH</span>
                <span class="bg-accent-yellow/30 border border-black px-2 py-0.5">ETL PIPELINES</span>
              </div>
            </div>

          </div>

          <!-- Bottom Card Stamp -->
          <div class="pt-2 flex items-center justify-between border-t-2 border-black text-xs font-mono font-black">
            <span class="bg-accent-yellow border border-black px-2 py-0.5">VERIFIED CSE '26</span>
            <span class="text-slate-500">CTRL + CREATE ⌘</span>
          </div>

        </div>
      </div>

    </div>
  `;
};
