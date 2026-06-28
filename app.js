const neuralPulseStyle = document.createElement('style');
neuralPulseStyle.textContent = `
/* Neural pulse effect — onda de inteligencia Lux Render */
.hero-panel,
.neural-ui,
.system-card,
.cta-section {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.hero-panel::after,
.neural-ui::after,
.system-card::after,
.cta-section::after {
  content: "";
  position: absolute;
  inset: -45%;
  pointer-events: none;
  z-index: 0;
  background:
    linear-gradient(
      105deg,
      transparent 0%,
      transparent 40%,
      rgba(126, 231, 255, 0.00) 44%,
      rgba(126, 231, 255, 0.22) 48%,
      rgba(212, 180, 109, 0.14) 50%,
      rgba(126, 231, 255, 0.18) 52%,
      rgba(126, 231, 255, 0.00) 56%,
      transparent 100%
    );
  transform: translateX(-72%) rotate(7deg);
  animation: neuralWave 6.8s cubic-bezier(.2,.7,.2,1) infinite;
  mix-blend-mode: screen;
  opacity: .78;
}

.neural-ui::after {
  animation-delay: 1.1s;
  opacity: .9;
}

.system-card::after {
  animation-delay: 2.2s;
  opacity: .52;
}

.cta-section::after {
  animation-delay: 3.2s;
  opacity: .42;
}

.hero-panel > *,
.neural-ui > *,
.system-card > *,
.cta-section > * {
  position: relative;
  z-index: 1;
}

.neural-ui::before,
.hero-panel::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    linear-gradient(rgba(126,231,255,.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(126,231,255,.03) 1px, transparent 1px);
  background-size: 34px 34px;
  mask-image: radial-gradient(circle at 50% 45%, black 0%, transparent 72%);
  opacity: .38;
}

@keyframes neuralWave {
  0%, 58% {
    transform: translateX(-72%) rotate(7deg);
    opacity: 0;
  }
  66% {
    opacity: .82;
  }
  78% {
    opacity: .48;
  }
  92%, 100% {
    transform: translateX(72%) rotate(7deg);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-panel::after,
  .neural-ui::after,
  .system-card::after,
  .cta-section::after {
    animation: none;
    opacity: 0;
  }
}
`;
document.head.appendChild(neuralPulseStyle);

const nav=document.querySelector('.nav');window.addEventListener('scroll',()=>{if(window.scrollY>20){nav.style.background='rgba(7,9,13,.9)';nav.style.borderColor='rgba(255,255,255,.18)'}else{nav.style.background='rgba(7,9,13,.76)';nav.style.borderColor='rgba(255,255,255,.12)'}});document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',event=>{const target=document.querySelector(link.getAttribute('href'));if(!target)return;event.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})})});