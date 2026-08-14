import { personalInfo } from '../data/portfolioData.js';

export const renderNavbar = () => {
  return `
    <nav class="w-full bg-white border-b-4 border-black box-border px-4 lg:px-8 py-3 shadow-[0_4px_0_#000]">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        
        <!-- Left: Logo & Status Badge -->
        <a href="#hero" class="flex items-center gap-3 group text-decoration-none">
          <div class="bg-accent-yellow border-2 border-black px-3 py-1 font-black text-lg tracking-wider shadow-[2px_2px_0px_#000] group-hover:-translate-y-0.5 transition-transform">
            ${personalInfo.shortName}
          </div>
          <div class="hidden sm:flex items-center gap-2 bg-paper border-2 border-black px-2 py-0.5 font-mono text-xs font-bold shadow-[2px_2px_0px_#000]">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>B.TECH CSE '26</span>
          </div>
        </a>

        <!-- Center: Desktop Nav Links -->
        <div class="hidden md:flex items-center gap-6 font-bold text-sm tracking-wide font-mono">
          <a href="#about" class="hover:bg-accent-yellow hover:border-2 hover:border-black px-2 py-1 transition-all">ABOUT</a>
          <a href="#skills" class="hover:bg-accent-blue hover:text-white hover:border-2 hover:border-black px-2 py-1 transition-all">SKILLS</a>
          <a href="#projects" class="hover:bg-accent-green hover:border-2 hover:border-black px-2 py-1 transition-all">PROJECTS</a>
          <a href="#education" class="hover:bg-accent-red hover:text-white hover:border-2 hover:border-black px-2 py-1 transition-all">EDUCATION</a>
          <a href="#contact" class="hover:bg-accent-yellow hover:border-2 hover:border-black px-2 py-1 transition-all">CONTACT</a>
        </div>

        <!-- Right Controls: Audio Toggle, LinkedIn & Connect CTA -->
        <div class="hidden sm:flex items-center gap-3">
          
          <!-- Sound FX Toggle -->
          <button id="sound-toggle-btn" class="brutal-btn py-1.5 px-3 text-xs bg-paper font-mono" title="Toggle audio feedback">
            <span id="sound-icon">🔊</span>
            <span id="sound-text">SOUND</span>
          </button>

          <!-- Primary Connect Button -->
          <a href="#contact" class="brutal-btn brutal-btn-primary py-1.5 px-4 text-xs font-black tracking-wider">
            LET'S CONNECT →
          </a>
        </div>

        <!-- Mobile Hamburger Button -->
        <button id="mobile-menu-btn" class="md:hidden brutal-btn py-1.5 px-3 text-sm font-mono font-bold bg-accent-yellow">
          MENU ☰
        </button>

      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-menu" class="hidden md:hidden mt-4 pt-4 border-t-2 border-black flex flex-col gap-3 font-mono font-bold text-center">
        <a href="#about" class="mobile-nav-link p-2 bg-paper border-2 border-black shadow-[2px_2px_0px_#000]">01. ABOUT ME</a>
        <a href="#skills" class="mobile-nav-link p-2 bg-accent-yellow border-2 border-black shadow-[2px_2px_0px_#000]">02. SKILLS</a>
        <a href="#projects" class="mobile-nav-link p-2 bg-accent-blue text-white border-2 border-black shadow-[2px_2px_0px_#000]">03. PROJECTS</a>
        <a href="#education" class="mobile-nav-link p-2 bg-accent-green border-2 border-black shadow-[2px_2px_0px_#000]">04. EDUCATION</a>
        <a href="#contact" class="mobile-nav-link p-2 bg-accent-red text-white border-2 border-black shadow-[2px_2px_0px_#000]">05. CONTACT</a>
        <div class="flex justify-center gap-3 pt-2">
          <a href="${personalInfo.linkedin}" target="_blank" rel="noopener noreferrer" class="brutal-btn brutal-btn-blue text-xs w-full">LINKEDIN ↗</a>
        </div>
      </div>
    </nav>
  `;
};
