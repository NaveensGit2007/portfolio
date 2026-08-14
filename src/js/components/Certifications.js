import { certificationsData } from '../data/portfolioData.js';

export const renderCertifications = () => {
  return `
    <div class="space-y-8">
      
      <!-- Section Header -->
      <div class="flex items-center gap-4 border-b-4 border-black pb-4">
        <span class="bg-accent-yellow text-black border-2 border-black px-3 py-1 font-mono font-black text-lg shadow-[2px_2px_0px_#000]">
          04
        </span>
        <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight">
          ACHIEVEMENTS & CERTIFICATIONS
        </h2>
      </div>

      <!-- Certification Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${certificationsData.map((item, idx) => `
          <div class="brutal-card bg-white p-6 border-3 border-black space-y-4 flex flex-col justify-between hover:-translate-y-1 transition-transform">
            
            <div class="space-y-3">
              <div class="flex items-center justify-between border-b-2 border-black pb-2 font-mono text-xs font-black">
                <span class="px-2 py-0.5 border border-black ${item.badgeColor}">
                  ${item.type}
                </span>
                <span class="text-slate-500">0${idx + 1}</span>
              </div>

              <h3 class="text-xl font-black uppercase text-black leading-snug">
                ${item.title}
              </h3>

              <p class="font-mono text-xs text-slate-700 leading-relaxed bg-paper p-3 border border-black">
                ${item.desc}
              </p>
            </div>

            <div class="pt-3 border-t-2 border-black flex items-center justify-between font-mono text-xs font-bold">
              <span class="text-slate-600">ISSUER: ${item.issuer}</span>
              <span class="bg-accent-yellow border border-black px-1.5 py-0.5 text-[10px]">VERIFIED</span>
            </div>

          </div>
        `).join('')}
      </div>

    </div>
  `;
};
