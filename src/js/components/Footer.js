import { personalInfo } from '../data/portfolioData.js';

export const renderFooter = () => {
  return `
    <div class="w-full bg-black text-white border-t-4 border-black space-y-6">
      
      <!-- Infinite Neo-Brutalist Marquee Banner -->
      <div class="overflow-hidden border-b-2 border-slate-800 bg-accent-yellow text-black font-mono font-black text-sm sm:text-base py-2 uppercase select-none">
        <div class="animate-marquee whitespace-nowrap flex gap-8">
          <span>⚡ NAVYA MITTAL</span>
          <span>•</span>
          <span>B.TECH CSE '29 @ GLA UNIVERSITY</span>
          <span>•</span>
          <span>CODE → DATA → PRODUCTS</span>
          <span>•</span>
          <span>BUILT WITH CODE, CURIOSITY & TOO MANY TABS</span>
          <span>•</span>
          <span>PYTHON • SQL • ETL • AZURE</span>
          <span>•</span>
          <span>⚡ NAVYA MITTAL</span>
          <span>•</span>
          <span>B.TECH CSE '29 @ GLA UNIVERSITY</span>
          <span>•</span>
          <span>CODE → DATA → PRODUCTS</span>
          <span>•</span>
          <span>BUILT WITH CODE, CURIOSITY & TOO MANY TABS</span>
        </div>
      </div>

      <!-- Main Footer Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs">
        
        <div class="space-y-1 text-center md:text-left">
          <div class="text-base font-black tracking-wider text-accent-yellow">
            ${personalInfo.name.toUpperCase()}
          </div>
          <div class="text-slate-400 font-bold">
            ${personalInfo.degree} — ${personalInfo.institution}
          </div>
        </div>

        <div class="text-center font-bold text-slate-300 bg-slate-900 px-4 py-2 border border-slate-700">
          "BUILT WITH CODE, CURIOSITY & TOO MANY TABS."
        </div>

        <div class="flex items-center gap-4">
          <a href="${personalInfo.linkedin}" target="_blank" rel="noopener noreferrer" class="hover:text-accent-yellow underline">LINKEDIN ↗</a>
          <a href="${personalInfo.github}" target="_blank" rel="noopener noreferrer" class="hover:text-accent-yellow underline">GITHUB ↗</a>
          <button id="back-to-top-btn" class="brutal-btn brutal-btn-yellow py-1 px-3 text-xs font-black text-black">
            TOP ↑
          </button>
        </div>

      </div>

    </div>
  `;
};
