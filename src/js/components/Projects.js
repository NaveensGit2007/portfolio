import { projectsData } from '../data/portfolioData.js';

export const renderProjects = () => {
  return `
    <div class="space-y-8">
      
      <!-- Section Header & Filter Controls -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b-4 border-black pb-6">
        <div>
          <div class="inline-flex items-center gap-2 bg-accent-green text-black border-2 border-black px-3 py-1 font-mono font-bold text-xs shadow-[2px_2px_0px_#000] mb-2">
            <span>PORTFOLIO & CODE</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            THINGS I'VE BUILT.
          </h2>
        </div>

        <!-- Filter Buttons -->
        <div id="project-filters" class="flex flex-wrap gap-2 font-mono text-xs font-bold">
          <button data-filter="all" class="project-filter-btn brutal-btn brutal-btn-primary py-1.5 px-3 text-xs">
            ALL (4)
          </button>
          <button data-filter="data" class="project-filter-btn brutal-btn py-1.5 px-3 text-xs bg-white">
            ETL & DATA
          </button>
          <button data-filter="software" class="project-filter-btn brutal-btn py-1.5 px-3 text-xs bg-white">
            SOFTWARE & WEB
          </button>
          <button data-filter="database" class="project-filter-btn brutal-btn py-1.5 px-3 text-xs bg-white">
            DATABASES
          </button>
        </div>
      </div>

      <!-- Asymmetrical Project Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${projectsData.map((project, idx) => {
          const cardRotations = ["rotate-0", "rotate-1", "-rotate-1", "rotate-0"];
          const rotationClass = cardRotations[idx % cardRotations.length];

          return `
            <div data-category="${project.category}" class="project-card brutal-card-lg bg-white p-6 sm:p-8 border-4 border-black space-y-6 flex flex-col justify-between ${rotationClass} hover:rotate-0 transition-transform">
              
              <div class="space-y-4">
                <!-- Top Card Bar -->
                <div class="flex items-center justify-between border-b-3 border-black pb-3">
                  <span class="font-mono font-black text-sm px-2.5 py-0.5 border-2 border-black bg-accent-yellow shadow-[2px_2px_0px_#000]">
                    ${project.number}
                  </span>
                  <span class="font-mono text-xs font-extrabold px-2 py-0.5 border border-black bg-paper">
                    ${project.categoryLabel}
                  </span>
                </div>

                <!-- Project Title -->
                <h3 class="text-2xl sm:text-3xl font-black uppercase text-black leading-tight hover:text-accent-blue transition-colors">
                  ${project.title}
                </h3>

                <!-- Short Description -->
                <p class="font-mono text-sm text-slate-700 leading-relaxed bg-paper p-3 border-2 border-black">
                  ${project.shortDesc}
                </p>

                <!-- Tech Stack Badges -->
                <div class="flex flex-wrap gap-1.5 pt-1">
                  ${project.fullDetails.techStack.map(tech => `
                    <span class="brutal-badge brutal-badge-paper text-[11px]">
                      ${tech}
                    </span>
                  `).join('')}
                </div>
              </div>

              <!-- Action Footer -->
              <div class="pt-4 border-t-3 border-black flex flex-wrap items-center justify-between gap-3">
                <button data-project-id="${project.id}" class="view-project-modal-btn brutal-btn brutal-btn-primary text-xs font-black py-2 px-4">
                  VIEW DETAILS →
                </button>
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="brutal-btn py-2 px-3 text-xs font-bold bg-white font-mono">
                  GITHUB ↗
                </a>
              </div>

            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
};

export const renderProjectModal = (project) => {
  if (!project) return '';

  return `
    <div class="relative w-full max-w-3xl brutal-card-lg bg-white p-6 sm:p-10 border-4 border-black shadow-[12px_12px_0px_#000] max-h-[90vh] overflow-y-auto space-y-6">
      
      <!-- Close Button -->
      <button id="close-modal-btn" class="absolute top-4 right-4 brutal-btn brutal-btn-red text-sm font-black p-2 py-1" title="Close Modal">
        ✕ CLOSE
      </button>

      <!-- Modal Header -->
      <div class="space-y-2 border-b-4 border-black pb-4 pr-12">
        <div class="flex items-center gap-2 font-mono text-xs font-bold">
          <span class="bg-accent-yellow border border-black px-2 py-0.5">${project.number}</span>
          <span class="bg-paper border border-black px-2 py-0.5 uppercase">${project.categoryLabel}</span>
        </div>
        <h3 class="text-3xl sm:text-4xl font-black uppercase text-black">
          ${project.title}
        </h3>
      </div>

      <!-- Problem & Approach Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
        
        <div class="bg-paper p-4 border-2 border-black space-y-2">
          <h4 class="font-black text-xs uppercase bg-accent-red text-white p-1 inline-block border border-black">
            01 // PROBLEM STATEMENT
          </h4>
          <p class="text-slate-800 leading-relaxed">${project.fullDetails.problem}</p>
        </div>

        <div class="bg-paper p-4 border-2 border-black space-y-2">
          <h4 class="font-black text-xs uppercase bg-accent-blue text-white p-1 inline-block border border-black">
            02 // TECHNICAL APPROACH
          </h4>
          <p class="text-slate-800 leading-relaxed">${project.fullDetails.approach}</p>
        </div>

      </div>

      <!-- Results & Metrics -->
      <div class="bg-accent-green/20 p-4 border-3 border-black space-y-2 font-mono">
        <h4 class="font-black text-xs uppercase bg-accent-green text-black p-1 inline-block border border-black">
          03 // RESULT & IMPACT
        </h4>
        <p class="text-slate-900 font-bold text-sm leading-relaxed">${project.fullDetails.result}</p>
      </div>

      <!-- What I Learned -->
      <div class="bg-accent-yellow/20 p-4 border-3 border-black space-y-2 font-mono">
        <h4 class="font-black text-xs uppercase bg-accent-yellow text-black p-1 inline-block border border-black">
          04 // KEY TAKEAWAYS
        </h4>
        <p class="text-slate-900 font-medium text-sm leading-relaxed">${project.fullDetails.whatILearned}</p>
      </div>

      <!-- Tech Stack Badges -->
      <div class="space-y-2 font-mono">
        <span class="text-xs font-bold uppercase text-slate-500 block">TECHNOLOGIES USED:</span>
        <div class="flex flex-wrap gap-2">
          ${project.fullDetails.techStack.map(tech => `
            <span class="brutal-badge brutal-badge-paper font-bold text-xs">${tech}</span>
          `).join('')}
        </div>
      </div>

      <!-- Action Links -->
      <div class="pt-4 border-t-3 border-black flex flex-wrap gap-4 justify-between items-center">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="brutal-btn brutal-btn-black py-2.5 px-6 text-xs">
          VIEW CODE ON GITHUB ↗
        </a>
        <button id="close-modal-bottom-btn" class="brutal-btn py-2.5 px-6 text-xs bg-paper">
          BACK TO PORTFOLIO
        </button>
      </div>

    </div>
  `;
};
