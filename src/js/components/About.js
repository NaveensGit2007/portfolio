import { personalInfo, journeyTimeline } from '../data/portfolioData.js';

export const renderAbout = () => {
  return `
    <div class="relative brutal-card-lg bg-paper-light p-6 sm:p-10 border-4 border-black shadow-[8px_8px_0px_#000] space-y-10">
      
      <!-- Poster Pin Accent Header -->
      <div class="flex items-center justify-between border-b-4 border-black pb-4">
        <div class="flex items-center gap-4">
          <span class="bg-accent-yellow text-black border-2 border-black px-3 py-1 font-mono font-black text-lg shadow-[2px_2px_0px_#000]">
            01
          </span>
          <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            ABOUT ME
          </h2>
        </div>
        <div class="hidden sm:flex items-center gap-2 font-mono text-xs font-black bg-black text-white px-3 py-1 border-2 border-black">
          <span>POSTER // WALL_01</span>
        </div>
      </div>

      <!-- Content Grid: Bio & Values -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Bio Narrative Block -->
        <div class="lg:col-span-6 space-y-6">
          <div class="brutal-card bg-white p-6 border-3 border-black space-y-4">
            <h3 class="text-xl sm:text-2xl font-black uppercase border-b-2 border-black pb-2 text-black">
              CODE. DATA. CONTINUOUS GROWTH.
            </h3>
            <p class="text-base text-slate-800 font-medium leading-relaxed font-mono">
              I am currently pursuing my <strong>B.Tech in Computer Science & Engineering</strong> at <strong>GLA University, Mathura</strong>. My technical journey is driven by a deep curiosity for how data flows through systems and how clean software architecture turns raw code into reliable solutions.
            </p>
            <p class="text-base text-slate-800 font-medium leading-relaxed font-mono">
              Whether writing automated Python scripts for ETL data processing, crafting optimized SQL queries in MySQL, or exploring cloud scalability with Microsoft Azure, I approach every challenge with a problem-solving mindset and a drive to learn.
            </p>
          </div>

          <!-- Highlight Bullet Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${personalInfo.quickBioPoints.map((point, index) => `
              <div class="bg-white border-2 border-black p-3 font-mono text-xs font-bold shadow-[3px_3px_0px_#000] flex items-start gap-2">
                <span class="bg-accent-yellow border border-black px-1.5 py-0.5 font-black text-black">0${index + 1}</span>
                <span>${point}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Right Side: 4-Block Journey Timeline -->
        <div class="lg:col-span-6 space-y-4">
          <div class="bg-black text-white p-3 border-2 border-black font-mono text-xs font-extrabold flex justify-between items-center">
            <span>DEVELOPMENT JOURNEY TIMELINE</span>
            <span class="text-accent-yellow">GLA CSE → 2026</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${journeyTimeline.map((item, idx) => {
              const bgColors = ["bg-accent-yellow", "bg-accent-blue text-white", "bg-accent-green", "bg-accent-red text-white"];
              const cardBg = bgColors[idx % bgColors.length];
              return `
                <div class="brutal-card p-5 border-3 border-black space-y-2 relative overflow-hidden group">
                  <div class="flex items-center justify-between border-b-2 border-black pb-2">
                    <span class="font-mono font-black text-xl px-2 py-0.5 border border-black ${cardBg} shadow-[2px_2px_0px_#000]">
                      ${item.number}
                    </span>
                    <span class="font-mono text-xs font-black uppercase text-slate-600">${item.title}</span>
                  </div>
                  <h4 class="font-extrabold text-base uppercase text-black pt-1">${item.tagline}</h4>
                  <p class="font-mono text-xs text-slate-700 leading-relaxed">${item.description}</p>
                </div>
              `;
            }).join('')}
          </div>
        </div>

      </div>

    </div>
  `;
};
