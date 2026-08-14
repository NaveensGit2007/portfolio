export const renderPlayground = () => {
  return `
    <div class="space-y-8">
      
      <!-- Section Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-black pb-4">
        <div>
          <div class="inline-flex items-center gap-2 bg-black text-accent-yellow border-2 border-black px-3 py-1 font-mono font-bold text-xs shadow-[2px_2px_0px_#FFE600] mb-2">
            <span>INTERACTIVE EXPERIMENT</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            PLAY WITH THIS.
          </h2>
        </div>
        <p class="font-mono text-xs font-bold text-slate-700 bg-accent-yellow p-2 border-2 border-black shadow-[2px_2px_0px_#000]">
          ⚡ Real-time terminal CLI, dynamic color swapper & interactive audio.
        </p>
      </div>

      <!-- Playground Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left: Interactive Terminal CLI (7 Cols) -->
        <div class="lg:col-span-7 brutal-card-lg bg-black text-emerald-400 border-4 border-black p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-4 shadow-[10px_10px_0px_#000]">
          
          <!-- Terminal Title Bar -->
          <div class="flex items-center justify-between border-b-2 border-emerald-800 pb-3 text-white">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-red-500 border border-black inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-500 border border-black inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-green-500 border border-black inline-block"></span>
              <span class="font-bold ml-2">navya-cli v1.0.0</span>
            </div>
            <span class="text-xs text-slate-400">bash / zsh</span>
          </div>

          <!-- Terminal Output Area -->
          <div id="terminal-output" class="space-y-3 min-h-[220px] max-h-[320px] overflow-y-auto pr-2 leading-relaxed">
            <div class="text-slate-300">
              Welcome to Navya Mittal's interactive terminal! Type <span class="text-accent-yellow font-bold">help</span> or click command buttons below.
            </div>
            <div class="text-slate-400">
              Try running: <span class="text-emerald-300">whoami</span>, <span class="text-emerald-300">skills</span>, <span class="text-emerald-300">projects</span>, <span class="text-emerald-300">run</span>
            </div>
          </div>

          <!-- Quick Command Action Buttons -->
          <div class="pt-2 border-t border-emerald-900 flex flex-wrap gap-2 text-xs">
            <span class="text-slate-400 py-1">QUICK COMMANDS:</span>
            <button data-cmd="whoami" class="term-quick-btn bg-slate-800 hover:bg-emerald-900 text-white px-2 py-0.5 border border-slate-600 rounded">whoami</button>
            <button data-cmd="skills" class="term-quick-btn bg-slate-800 hover:bg-emerald-900 text-white px-2 py-0.5 border border-slate-600 rounded">skills</button>
            <button data-cmd="projects" class="term-quick-btn bg-slate-800 hover:bg-emerald-900 text-white px-2 py-0.5 border border-slate-600 rounded">projects</button>
            <button data-cmd="run" class="term-quick-btn bg-emerald-700 hover:bg-emerald-600 text-black font-bold px-2 py-0.5 border border-slate-600 rounded">run</button>
            <button data-cmd="clear" class="term-quick-btn bg-red-900 hover:bg-red-800 text-white px-2 py-0.5 border border-slate-600 rounded">clear</button>
          </div>

          <!-- Command Input Line -->
          <form id="terminal-form" class="flex items-center gap-2 pt-2 border-t border-emerald-900">
            <span class="text-accent-yellow font-bold">navya@portfolio:~$</span>
            <input 
              type="text" 
              id="terminal-input" 
              class="flex-1 bg-transparent text-emerald-300 outline-none font-mono text-xs sm:text-sm placeholder-slate-600" 
              placeholder="type 'help' or any command..." 
              autocomplete="off"
            />
            <button type="submit" class="bg-emerald-500 text-black font-bold px-3 py-1 text-xs border border-black hover:bg-emerald-400">
              EXECUTE ⏎
            </button>
          </form>

        </div>

        <!-- Right: Theme Switcher & Interactive Controls (5 Cols) -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Accent Color Swapper Card -->
          <div class="brutal-card bg-white p-6 border-3 border-black space-y-4">
            <div class="flex items-center justify-between border-b-2 border-black pb-2">
              <h3 class="font-black text-lg uppercase">DYNAMIC ACCENT SWAPPER</h3>
              <span class="font-mono text-xs font-bold bg-accent-yellow px-2 py-0.5 border border-black">LIVE THEME</span>
            </div>
            
            <p class="font-mono text-xs text-slate-700 leading-relaxed">
              Click any color swatch below to instantly swap the primary Neo-Brutalist accent color across the entire site!
            </p>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <button data-color="#FFE600" class="theme-swatch-btn brutal-btn py-2 px-3 text-xs bg-accent-yellow font-bold border-2 border-black">
                ELECTRIC YELLOW
              </button>
              <button data-color="#2563EB" class="theme-swatch-btn brutal-btn py-2 px-3 text-xs bg-accent-blue text-white font-bold border-2 border-black">
                COBALT BLUE
              </button>
              <button data-color="#10B981" class="theme-swatch-btn brutal-btn py-2 px-3 text-xs bg-accent-green font-bold border-2 border-black">
                LIME GREEN
              </button>
              <button data-color="#FF3333" class="theme-swatch-btn brutal-btn py-2 px-3 text-xs bg-accent-red text-white font-bold border-2 border-black">
                FLAME RED
              </button>
              <button data-color="#EC4899" class="theme-swatch-btn brutal-btn py-2 px-3 text-xs bg-accent-pink text-white font-bold border-2 border-black">
                HOT PINK
              </button>
              <button data-color="#8B5CF6" class="theme-swatch-btn brutal-btn py-2 px-3 text-xs bg-accent-purple text-white font-bold border-2 border-black">
                NEON PURPLE
              </button>
            </div>
          </div>

          <!-- Sound Feedback Card -->
          <div class="brutal-card bg-paper-light p-6 border-3 border-black space-y-4">
            <div class="flex items-center justify-between border-b-2 border-black pb-2">
              <h3 class="font-black text-lg uppercase">AUDIO FEEDBACK ENGINE</h3>
              <span class="font-mono text-xs font-bold bg-accent-green px-2 py-0.5 border border-black">WEB AUDIO API</span>
            </div>

            <p class="font-mono text-xs text-slate-700 leading-relaxed">
              Experience tactile synth audio for buttons, terminal keys, and modal popups. Zero audio files required!
            </p>

            <button id="playground-sound-btn" class="brutal-btn brutal-btn-primary w-full py-2.5 text-xs font-black">
              TEST AUDIO SYNTH SFX 🔊
            </button>
          </div>

        </div>

      </div>

    </div>
  `;
};
