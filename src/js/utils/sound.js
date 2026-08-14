/**
 * Web Audio API Sound Utility for Neo-Brutalist Tactile Feedback
 * Provides zero-latency synth sound effects for clicks, keypresses, theme switches & modals.
 */

let audioCtx = null;
let soundEnabled = true;

export const initAudio = () => {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
};

export const toggleSound = () => {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    playClickSound(800, 'sine', 0.05);
  }
  return soundEnabled;
};

export const isSoundEnabled = () => soundEnabled;

export const playClickSound = (freq = 440, type = 'sine', duration = 0.04) => {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq / 2, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Ignore audio context errors gracefully
  }
};

export const playKeyPressSound = () => {
  if (!soundEnabled) return;
  const freqs = [350, 420, 500, 580];
  const randomFreq = freqs[Math.floor(Math.random() * freqs.length)];
  playClickSound(randomFreq, 'triangle', 0.02);
};

export const playSuccessSound = () => {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, now + i * 0.06);
      gain.gain.setValueAtTime(0.04, now + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.1);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 0.1);
    });
  } catch (e) {}
};
