import { skillsCategoryData } from '../data/portfolioData.js';

export const renderSkills = () => {
  return `
    <div class="space-y-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-black pb-4">
        <div>
          <div class="inline-flex items-center gap-2 bg-accent-blue text-white border-2 border-black px-3 py-1 font-mono font-bold text-xs shadow-[2px_2px_0px_#000] mb-2">
            <span>TECH STACK & TOOLING</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            SKILLS & CAPABILITIES
          </h2>
        </div>
        <p class="font-mono text-sm font-bold text-slate-700 max-w-md bg-white p-3 border-2 border-black shadow-[3px_3px_0px_#000]">
          ⚡ Verified technical stack based on actual coursework, projects, and hands-on software/data engineering.
        </p>
      </div>

      <!-- Skills Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${skillsCategoryData.map((cat, catIdx) => {
          const categoryColors = {
            yellow: "bg-accent-yellow border-black text-black",
            blue: "bg-accent-blue border-black text-white",
            green: "bg-accent-green border-black text-black",
            red: "bg-accent-red border-black text-white"
          };
          const badgeClass = categoryColors[cat.accent] || "bg-accent-yellow border-black text-black";

          return `
            <div class="brutal-card-lg bg-white p-6 border-4 border-black space-y-6">
              
              <!-- Category Title Badge -->
              <div class="flex items-center justify-between border-b-3 border-black pb-3">
                <span class="font-mono font-black text-base px-3 py-1 border-2 shadow-[2px_2px_0px_#000] uppercase ${badgeClass}">
                  ${cat.category}
                </span>
                <span class="font-mono text-xs font-bold text-slate-500">0${catIdx + 1} // CAPABILITY</span>
              </div>

              <!-- Skills Stickers List -->
              <div class="flex flex-wrap gap-3">
                ${cat.skills.map((skill, skillIdx) => `
                  <div class="skill-sticker brutal-card p-3 border-2 border-black cursor-pointer group hover:-translate-y-1 hover:rotate-1 transition-all duration-150 relative bg-paper-light">
                    
                    <div class="flex items-center justify-between gap-3">
                      <span class="font-black text-sm uppercase text-black group-hover:text-accent-blue transition-colors">
                        ${skill.name}
                      </span>
                      <span class="font-mono text-[10px] font-extrabold uppercase px-1.5 py-0.5 border border-black bg-white shadow-[1px_1px_0px_#000]">
                        ${skill.level}
                      </span>
                    </div>

                    <!-- Hidden Hover Detail Popover -->
                    <div class="mt-2 pt-2 border-t border-dashed border-black/40 text-xs font-mono text-slate-700 hidden group-hover:block transition-all">
                      ${skill.desc}
                    </div>

                  </div>
                `).join('')}
              </div>

            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
};
