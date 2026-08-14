import { educationData } from '../data/portfolioData.js';

export const renderEducation = () => {
  return `
    <div class="space-y-8">
      
      <!-- Section Header -->
      <div class="flex items-center gap-4 border-b-4 border-black pb-4">
        <span class="bg-accent-red text-white border-2 border-black px-3 py-1 font-mono font-black text-lg shadow-[2px_2px_0px_#000]">
          03
        </span>
        <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight">
          EDUCATION
        </h2>
      </div>

      <!-- Oversized Academic ID Card Container -->
      <div class="brutal-card-lg bg-white p-6 sm:p-10 border-4 border-black shadow-[10px_10px_0px_#000] relative overflow-hidden space-y-8">
        
        <!-- ID Card Top Banner -->
        <div class="bg-black text-white p-4 border-3 border-black -mx-2 -mt-2 flex flex-wrap items-center justify-between gap-4 font-mono text-xs font-bold">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 bg-accent-yellow rounded-full"></span>
            <span>ACADEMIC CREDENTIAL // STUDENT_ID</span>
          </div>
          <div class="bg-accent-yellow text-black px-3 py-1 border border-black font-black">
            ID: ${educationData.studentCardId}
          </div>
        </div>

        <!-- Main ID Card Content Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left Badge & Degree Summary -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="bg-accent-yellow/20 p-6 border-3 border-black space-y-4 relative">
              <div class="inline-block bg-accent-red text-white font-mono text-xs font-black px-2.5 py-1 border border-black uppercase shadow-[2px_2px_0px_#000]">
                ${educationData.status}
              </div>
              
              <h3 class="text-2xl sm:text-3xl font-black uppercase text-black leading-tight">
                ${educationData.degree}
              </h3>
              
              <div class="space-y-1 font-mono text-sm">
                <p class="font-extrabold text-black uppercase text-base">${educationData.institution}</p>
                <p class="text-slate-700">${educationData.location}</p>
                <p class="text-xs font-bold text-slate-500">${educationData.duration}</p>
              </div>

              <!-- Brutalist Stamp -->
              <div class="absolute bottom-2 right-2 opacity-15 pointer-events-none select-none font-black text-4xl font-mono">
                GLA UNIV
              </div>
            </div>

            <!-- Official Highlights -->
            <div class="space-y-3 font-mono text-xs">
              <span class="font-bold text-slate-500 uppercase block">ACADEMIC HIGHLIGHTS:</span>
              ${educationData.highlights.map(point => `
                <div class="bg-paper p-3 border-2 border-black font-medium text-slate-800 shadow-[2px_2px_0px_#000]">
                  ✓ ${point}
                </div>
              `).join('')}
            </div>

          </div>

          <!-- Right Column: Coursework Grid -->
          <div class="lg:col-span-7 space-y-4">
            
            <div class="bg-paper p-3 border-2 border-black font-mono text-xs font-black flex justify-between items-center">
              <span>CORE TECHNICAL COURSEWORK</span>
              <span class="text-accent-blue">COMPUTER SCIENCE</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${educationData.coursework.map((course, idx) => `
                <div class="bg-white p-3 border-2 border-black font-mono text-xs font-bold shadow-[3px_3px_0px_#000] flex items-center gap-3">
                  <span class="bg-accent-yellow border border-black px-2 py-0.5 font-black">0${idx + 1}</span>
                  <span>${course}</span>
                </div>
              `).join('')}
            </div>

            <div class="p-4 bg-accent-blue/10 border-2 border-black font-mono text-xs text-slate-800 leading-relaxed">
              💡 <strong>Academic Note:</strong> Coursework focuses heavily on algorithmic efficiency, system design fundamentals, hands-on database operations, and scalable software pipelines.
            </div>

          </div>

        </div>

      </div>

    </div>
  `;
};
