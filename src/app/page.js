"use client";

import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);

  const createHeartBurst = () => {
    const container = document.getElementById("heart-container");
    if (!container) return;

    const hearts = ["💖", "💕", "💗", "✨"];

    for (let i = 0; i < 14; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = `${window.innerWidth / 2 + (Math.random() * 220 - 110)}px`;
      heart.style.top = `${window.innerHeight / 2 + 60 + (Math.random() * 80 - 40)}px`;
      heart.style.animationDelay = `${Math.random() * 0.25}s`;
      container.appendChild(heart);

      setTimeout(() => heart.remove(), 2500);
    }
  };

  const handleClick = () => {
    if (step === 0) {
      setStep(1);
    } else if (step === 1) {
      setStep(2);
      setTimeout(() => {
        createHeartBurst();
      }, 100);
    }
  };

  return (
    <>
      <main className={`page ${step >= 1 ? "bloomed" : ""} ${step >= 2 ? "message-open" : ""}`}>
        <div id="heart-container" className="heart-container"></div>

        <div className="stars"></div>

        <div className="container">
          <div className="glow"></div>

          <div className="scene">
            <div className="ground"></div>

            <Flower position="left" step={step} color="blue" />
            <Flower position="center" step={step} color="violet" />
            <Flower position="right" step={step} color="green" />
          </div>

          <div className="controls">
            {step < 2 && (
              <button onClick={handleClick}>
                {step === 0 ? "Dokun aşkımm ✨" : "Bir kere daha dokun 💕"}
              </button>
            )}
          </div>

          <div className="message">
            <div className="message-text">
              Seni çok seviyorum sevgiliiimmm 💖
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          overflow: hidden;
          font-family: "Segoe UI", sans-serif;
          background:
            radial-gradient(circle at top, rgba(65, 26, 87, 0.45), transparent 35%),
            radial-gradient(circle at bottom, rgba(32, 67, 120, 0.35), transparent 30%),
            linear-gradient(180deg, #070816, #0c1024 65%, #11172e);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 1.4s ease;
          position: relative;
        }

        .stars,
        .stars::before,
        .stars::after {
          position: absolute;
          inset: 0;
          content: "";
          background-image:
            radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,.8), transparent),
            radial-gradient(2px 2px at 140px 90px, rgba(255,255,255,.6), transparent),
            radial-gradient(1.5px 1.5px at 220px 160px, rgba(255,255,255,.7), transparent),
            radial-gradient(2px 2px at 320px 40px, rgba(255,255,255,.75), transparent),
            radial-gradient(1.5px 1.5px at 420px 140px, rgba(255,255,255,.5), transparent),
            radial-gradient(2px 2px at 540px 70px, rgba(255,255,255,.7), transparent);
          background-size: 600px 220px;
          animation: drift 30s linear infinite;
          pointer-events: none;
          opacity: 0.5;
        }

        .stars::before {
          opacity: 0.35;
          transform: scale(1.2);
          animation-duration: 42s;
        }

        .stars::after {
          opacity: 0.25;
          transform: scale(1.5);
          animation-duration: 55s;
        }

        @keyframes drift {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(220px);
          }
        }

        .container {
          position: relative;
          width: min(92vw, 700px);
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          z-index: 2;
        }

        .glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(106, 180, 255, 0.16), transparent 65%);
          filter: blur(20px);
          transform: translateY(40px);
          opacity: 0.7;
          transition: all 1s ease;
        }

        .scene {
          position: relative;
          width: 360px;
          height: 360px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .ground {
          position: absolute;
          bottom: 22px;
          width: 270px;
          height: 22px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(40, 96, 67, 0.8), rgba(19, 36, 30, 0.2));
          filter: blur(2px);
          opacity: 0.85;
        }

        .controls {
          margin-top: 28px;
          z-index: 5;
        }

        button {
          padding: 14px 28px;
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          color: white;
          font-size: 18px;
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: 0.25s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,.22);
        }

        button:hover {
          transform: translateY(-2px) scale(1.02);
          background: rgba(255,255,255,.14);
        }

        .message {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
          pointer-events: none;
        }

        .message-text {
          max-width: 90%;
          font-size: clamp(28px, 5vw, 56px);
          font-weight: 700;
          line-height: 1.15;
          color: white;
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: all 1s ease;
          text-shadow:
            0 0 12px rgba(255,255,255,.15),
            0 0 30px rgba(255, 125, 201, .22);
        }

        .bloomed {
          background:
            radial-gradient(circle at 20% 25%, rgba(90, 169, 255, .28), transparent 25%),
            radial-gradient(circle at 80% 30%, rgba(125, 114, 255, .25), transparent 25%),
            radial-gradient(circle at 50% 85%, rgba(83, 216, 154, .20), transparent 22%),
            linear-gradient(180deg, #08101f, #111734 55%, #161d39);
        }

        .bloomed .glow {
          background: radial-gradient(circle, rgba(143, 190, 255, 0.22), transparent 65%);
          transform: translateY(20px) scale(1.08);
        }

        .message-open .message-text {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .heart-container {
          pointer-events: none;
          position: absolute;
          inset: 0;
          z-index: 50;
        }

        .heart :global(.heart) {
          position: absolute;
        }
      `}</style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
        }

        .heart {
          position: absolute;
          font-size: 22px;
          opacity: 0;
          animation: floatUp 2.4s ease forwards;
          filter: drop-shadow(0 0 8px rgba(255,255,255,.15));
        }

        @keyframes floatUp {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.6);
          }
          15% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-160px) scale(1.3) rotate(8deg);
          }
        }
      `}</style>
    </>
  );
}

function Flower({ position, step, color }) {
  return (
    <>
      <div className={`flower ${position}`}>
        <div className={`stem ${step >= 1 ? "open" : ""}`}>
          <div className={`leaf left ${step >= 1 ? "show" : ""}`}></div>
          <div className={`leaf right ${step >= 1 ? "show" : ""}`}></div>

          <div className={`bloom ${step >= 1 ? "show" : ""}`}>
            <div className={`petal p1 ${color}`}></div>
            <div className={`petal p2 ${color}`}></div>
            <div className={`petal p3 ${color}`}></div>
            <div className={`petal p4 ${color}`}></div>
            <div className={`petal p5 ${color}`}></div>
            <div className="core"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .flower {
          position: absolute;
          bottom: 42px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .flower.left {
          left: 58px;
          transform: scale(0.95);
        }

        .flower.center {
          left: 145px;
          transform: scale(1.08);
        }

        .flower.right {
          right: 58px;
          transform: scale(0.92);
        }

        .stem {
          width: 6px;
          height: 0;
          border-radius: 20px;
          background: linear-gradient(180deg, #6ef7b2, #1a7f53);
          box-shadow: 0 0 12px rgba(80, 255, 173, 0.25);
          transition: height 1.2s ease;
          position: relative;
        }

        .stem.open {
          height: 150px;
        }

        .leaf {
          position: absolute;
          width: 42px;
          height: 18px;
          background: linear-gradient(135deg, #5ff0b0, #245b46);
          border-radius: 100% 0 100% 0;
          opacity: 0;
          transform: scale(0.2) rotate(0deg);
          transition: all 0.8s ease;
          box-shadow: 0 0 10px rgba(80, 255, 173, 0.15);
        }

        .leaf.left {
          left: -36px;
          bottom: 58px;
          transform-origin: right center;
        }

        .leaf.right {
          right: -36px;
          bottom: 92px;
          transform-origin: left center;
        }

        .leaf.left.show {
          opacity: 1;
          transform: scale(1) rotate(-24deg);
        }

        .leaf.right.show {
          opacity: 1;
          transform: scale(1) rotate(24deg);
        }

        .bloom {
          position: absolute;
          top: -22px;
          left: 50%;
          width: 0;
          height: 0;
          transform: translateX(-50%) scale(0.2);
          opacity: 0;
          transition: all 0.9s ease 0.55s;
        }

        .bloom.show {
          width: 90px;
          height: 90px;
          opacity: 1;
          transform: translateX(-50%) scale(1);
        }

        .petal {
          position: absolute;
          width: 34px;
          height: 54px;
          border-radius: 60% 60% 55% 55%;
          transform-origin: bottom center;
          filter: drop-shadow(0 0 12px rgba(255,255,255,.08));
          left: 50%;
          top: 50%;
          margin-left: -17px;
          margin-top: -27px;
        }

        .petal.blue {
          background: linear-gradient(180deg, #9ad7ff, #5aa9ff);
        }

        .petal.violet {
          background: linear-gradient(180deg, #b6a8ff, #7d72ff);
        }

        .petal.green {
          background: linear-gradient(180deg, #9ff7d0, #53d89a);
        }

        .p1 {
          transform: rotate(0deg) translateY(-8px);
        }

        .p2 {
          transform: rotate(72deg) translateY(-8px);
        }

        .p3 {
          transform: rotate(144deg) translateY(-8px);
        }

        .p4 {
          transform: rotate(216deg) translateY(-8px);
        }

        .p5 {
          transform: rotate(288deg) translateY(-8px);
        }

        .core {
          position: absolute;
          width: 22px;
          height: 22px;
          left: 50%;
          top: 12px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: radial-gradient(circle, #fff6a6, #ffd84a 70%, #ffbf00);
          box-shadow: 0 0 16px rgba(255, 220, 90, 0.45);
        }
      `}</style>
    </>
  );
}