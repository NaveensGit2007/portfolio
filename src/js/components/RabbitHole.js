import { rabbitHoleTopics } from '../data/portfolioData.js';

export const renderRabbitHole = () => {
  return `
    <div class="space-y-8">
      
      <!-- Section Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-black pb-4">
        <div>
          <div class="inline-flex items-center gap-2 bg-accent-purple text-white border-2 border-black px-3 py-1 font-mono font-bold text-xs shadow-[2px_2px_0px_#000] mb-2">
            <span>DEEP DIVES & EXPLORATION</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            CURRENTLY DOWN THE RABBIT HOLE ↓
          </h2>
        </div>
        <p class="font-mono text-xs font-bold text-slate-700 bg-white p-2 border-2 border-black shadow-[2px_2px_0px_#000]">
          Active topics being studied & researched in depth.
        </p>
      </div>

      <!-- Rabbit Hole Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${rabbitHoleTopics.map((topic, idx) => {
          const accentMap = {
            yellow: "bg-accent-yellow",
            blue: "bg-accent-blue text-white",
            green: "bg-accent-green",
            red: "bg-accent-red text-white"
          };
          const badgeStyle = accentMap[topic.accent] || "bg-accent-yellow";

          return `
            <div class="rabbit-card brutal-card bg-white p-6 border-3 border-black space-y-4 cursor-pointer hover:-translate-y-1.5 transition-transform">
              
              <div class="flex items-center justify-between border-b-2 border-black pb-2 font-mono text-xs font-bold">
                <span class="px-2 py-0.5 border border-black uppercase ${badgeStyle}">
                  ${topic.tag}
                </span>
                <span class="text-slate-500">EXPLORATION // 0${idx + 1}</span>
              </div>

              <h3 class="text-2xl font-black uppercase text-black">
                ${topic.title}
              </h3>

              <p class="font-mono text-xs text-slate-700 leading-relaxed bg-paper p-3 border border-black">
                ${topic.desc}
              </p>

              <!-- Progress Bar -->
              <div class="space-y-1 font-mono">
                <div class="flex justify-between text-xs font-bold">
                  <span>PROGRESS / MASTERY:</span>
                  <span>${topic.progress}%</span>
                </div>
                <div class="w-full h-4 bg-paper border-2 border-black p-0.5 shadow-[2px_2px_0px_#000]">
                  <div class="h-full ${topic.accent === 'blue' ? 'bg-accent-blue' : topic.accent === 'green' ? 'bg-accent-green' : topic.accent === 'red' ? 'bg-accent-red' : 'bg-accent-yellow'} border border-black transition-all duration-500" style="width: ${topic.progress}%"></div>
                </div>
              </div>

            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
};
