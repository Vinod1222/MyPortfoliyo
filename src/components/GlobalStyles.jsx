export function GlobalStyles() {
  return <style>{`
:root {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #19192d;
  background: #f7f8fa;
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  min-width: 320px;
  margin: 0;
  overflow-x: hidden;
}

button,
input,
select {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

section {
  scroll-margin-top: 82px;
}

.build-loader {
  animation: buildBadgeExit 1.45s ease forwards;
}

.build-loader span {
  animation: buildProgress 1.05s ease-out forwards;
}

.domain-item {
  opacity: 0;
  animation: domainSwap 5.4s linear infinite;
}

.domain-item:nth-child(2) {
  animation-delay: 2.7s;
}

.domain-item svg {
  animation: domainIconFloat 1.9s ease-in-out infinite;
}

.orbit-spin {
  animation: orbitSpin 22s linear infinite;
}

.flow-dot {
  animation: dataFlow 6.8s linear infinite;
}

.flow-dot::after {
  content: "";
  position: absolute;
  inset: 7px;
  border-radius: 999px;
  background: #fff5f1;
  box-shadow: 0 0 28px rgba(255, 102, 77, 0.9);
}

.flow-one {
  animation-delay: 0s;
}

.flow-two {
  animation-delay: -2.2s;
}

.flow-three {
  animation-delay: -4.4s;
}

.cube::before,
.cube::after {
  content: "";
  position: absolute;
  inset: 10%;
  border: 6px solid rgba(255, 102, 77, 0.62);
  transform: rotate(45deg);
}

.cube::after {
  inset: 24%;
  border-width: 5px;
  border-radius: 50%;
}

.cube-face {
  position: absolute;
  width: 54%;
  height: 54%;
  border: 5px solid rgba(255, 102, 77, 0.74);
  opacity: 0.75;
}

.face-top {
  top: 11%;
  left: 23%;
  transform: rotate(45deg);
}

.face-left {
  left: 2%;
  bottom: 19%;
  transform: skewY(30deg);
}

.face-right {
  right: 2%;
  bottom: 19%;
  transform: skewY(-30deg);
}

.orbit-item::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 58px;
  background: linear-gradient(180deg, var(--accent), transparent);
  opacity: 0.45;
}

.orbit-top {
  left: 50%;
  top: 6%;
  transform: translate(-50%, -50%);
}

.orbit-top::before {
  left: 50%;
  top: 100%;
}

.orbit-rightTop {
  right: 10%;
  top: 32%;
  transform: translate(50%, -50%);
}

.orbit-rightTop::before,
.orbit-rightBottom::before {
  right: 50%;
  top: 50%;
  transform: rotate(90deg);
}

.orbit-rightBottom {
  right: 10%;
  bottom: 27%;
  transform: translate(50%, 50%);
}

.orbit-bottom {
  left: 50%;
  bottom: 6%;
  transform: translate(-50%, 50%);
}

.orbit-bottom::before {
  left: 50%;
  bottom: 100%;
  transform: rotate(180deg);
}

.orbit-leftBottom {
  left: 10%;
  bottom: 27%;
  transform: translate(-50%, 50%);
}

.orbit-leftBottom::before,
.orbit-leftTop::before {
  left: 50%;
  top: 50%;
  transform: rotate(-90deg);
}

.orbit-leftTop {
  left: 10%;
  top: 32%;
  transform: translate(-50%, -50%);
}

.case-card::before {
  content: "";
  position: absolute;
  inset: 0;
  width: 7px;
  background: linear-gradient(180deg, #ff654d, #7f5cff);
  opacity: 0.95;
}

.skeleton-screen {
  animation: skeletonExit 1150ms ease forwards;
}

.skeleton-shimmer::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.72), transparent);
  transform: translateX(-100%);
  animation: skeletonShimmer 950ms ease-in-out infinite;
}

.skeleton-orbit-spin {
  animation: orbitSpin 2.7s linear infinite;
}

.skill-meter-fill {
  animation: skillMeterFill 900ms ease-out both;
}

@keyframes orbitSpin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes skeletonShimmer {
  to {
    transform: translateX(100%);
  }
}

@keyframes skeletonExit {
  0%,
  74% {
    opacity: 1;
    visibility: visible;
  }

  100% {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
}

@keyframes skillMeterFill {
  from {
    width: 0;
  }

  to {
    width: var(--level);
  }
}

@keyframes buildProgress {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes buildBadgeExit {
  0%,
  78% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-16px);
    pointer-events: none;
  }
}

@keyframes dataFlow {
  from {
    offset-distance: 0%;
  }

  to {
    offset-distance: 100%;
  }
}

@keyframes domainSwap {
  0%,
  45%,
  100% {
    opacity: 1;
  }

  50%,
  95% {
    opacity: 0;
  }
}

@keyframes domainIconFloat {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-2px);
  }
}

@media (max-width: 640px) {
  body {
    max-width: 100vw;
  }

  .flow-dot {
    display: none;
  }

  .orbit-item::before {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
  `}</style>;
}
