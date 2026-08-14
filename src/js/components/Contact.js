import { personalInfo } from '../data/portfolioData.js';

export const renderContact = () => {
  return `
    <div class="brutal-card-lg bg-accent-yellow p-6 sm:p-12 border-4 border-black shadow-[12px_12px_0px_#000] relative overflow-hidden space-y-10">
      
      <!-- Headline & Subtitle -->
      <div class="space-y-4 max-w-3xl">
        <div class="inline-flex items-center gap-2 bg-black text-white border-2 border-black px-3 py-1 font-mono font-bold text-xs shadow-[2px_2px_0px_#000]">
          <span>05 // GET IN TOUCH</span>
        </div>

        <h2 class="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none text-black">
          LET'S BUILD SOMETHING.
        </h2>

        <p class="font-mono text-base sm:text-lg text-black font-bold max-w-2xl bg-white p-4 border-3 border-black shadow-[4px_4px_0px_#000]">
          I'm currently seeking internship opportunities, software engineering roles, data projects, and technical collaborations. Whether you have a project idea, job opportunity, or just want to chat tech—reach out!
        </p>
      </div>

      <!-- Quick Action Buttons Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <!-- LinkedIn Button -->
        <a href="${personalInfo.linkedin}" target="_blank" rel="noopener noreferrer" class="brutal-btn brutal-btn-blue p-6 flex flex-col items-start gap-3 border-3 border-black group text-decoration-none">
          <span class="font-mono text-xs font-black bg-black text-white px-2 py-0.5 border border-white">LINKEDIN ↗</span>
          <span class="text-2xl font-black uppercase tracking-wide">CONNECT NOW</span>
          <span class="font-mono text-xs font-bold text-blue-100">linkedin.com/in/naveen-mittal</span>
        </a>

        <!-- Copy Email Button -->
        <button id="copy-email-btn" class="brutal-btn brutal-btn-black p-6 flex flex-col items-start gap-3 border-3 border-black group text-left">
          <span class="font-mono text-xs font-black bg-accent-yellow text-black px-2 py-0.5 border border-black">DIRECT EMAIL ✉</span>
          <span class="text-2xl font-black uppercase tracking-wide">COPY EMAIL</span>
          <span class="font-mono text-xs font-bold text-slate-300 break-all">${personalInfo.email}</span>
        </button>

        <!-- GitHub Button -->
        <a href="${personalInfo.github}" target="_blank" rel="noopener noreferrer" class="brutal-btn brutal-btn-green p-6 flex flex-col items-start gap-3 border-3 border-black group text-decoration-none">
          <span class="font-mono text-xs font-black bg-black text-white px-2 py-0.5 border border-white">GITHUB ↗</span>
          <span class="text-2xl font-black uppercase tracking-wide">VIEW CODE</span>
          <span class="font-mono text-xs font-bold text-emerald-950">github.com/NaveensGit2007</span>
        </a>

      </div>

      <!-- Quick Message Form -->
      <div class="bg-white p-6 sm:p-8 border-4 border-black space-y-6 shadow-[6px_6px_0px_#000]">
        
        <div class="border-b-3 border-black pb-3">
          <h3 class="text-2xl font-black uppercase text-black">SEND A QUICK MESSAGE</h3>
          <p class="font-mono text-xs text-slate-600 font-bold">Direct message input with client validation</p>
        </div>

        <form id="contact-form" class="space-y-4 font-mono text-sm">
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1">
              <label for="contact-name" class="font-bold text-xs uppercase text-slate-800">YOUR NAME *</label>
              <input 
                type="text" 
                id="contact-name" 
                required 
                class="w-full bg-paper p-3 border-2 border-black font-bold outline-none focus:bg-white transition-colors"
                placeholder="Recruiter / Collaborator Name"
              />
            </div>

            <div class="space-y-1">
              <label for="contact-email" class="font-bold text-xs uppercase text-slate-800">YOUR EMAIL *</label>
              <input 
                type="email" 
                id="contact-email" 
                required 
                class="w-full bg-paper p-3 border-2 border-black font-bold outline-none focus:bg-white transition-colors"
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          <div class="space-y-1">
            <label for="contact-message" class="font-bold text-xs uppercase text-slate-800">MESSAGE / OPPORTUNITY DETAILS *</label>
            <textarea 
              id="contact-message" 
              rows="4" 
              required 
              class="w-full bg-paper p-3 border-2 border-black font-bold outline-none focus:bg-white transition-colors"
              placeholder="Hi Navya, we looked at your portfolio and would like to connect regarding..."
            ></textarea>
          </div>

          <button type="submit" class="brutal-btn brutal-btn-primary py-3 px-8 text-base font-black tracking-wider w-full sm:w-auto">
            SEND MESSAGE NOW 🚀
          </button>

        </form>

      </div>

    </div>
  `;
};
