"use client";

import { motion } from "framer-motion";

export default function KeyAnimation() {
  return (
    <div className="relative flex h-[380px] w-[380px] items-center justify-center">
      {/* Soft ambient glow */}
      <motion.div
        className="absolute h-[300px] w-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(251,191,36,0.15) 0%, rgba(30,64,175,0.05) 60%, transparent 80%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Floating key */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -30 }}
        animate={{ opacity: 1, y: 0, rotate: -25 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          animate={{ y: [-6, 6, -6], rotate: [-25, -22, -25] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        >
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(0 12px 32px rgba(180,130,20,0.35))" }}
          >
            <defs>
              <linearGradient id="kGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#C8960F" />
                <stop offset="20%" stopColor="#E8C340" />
                <stop offset="45%" stopColor="#FFF5CC" />
                <stop offset="65%" stopColor="#E8C340" />
                <stop offset="100%" stopColor="#A67C00" />
              </linearGradient>
              <linearGradient id="kShaft" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E8C340" />
                <stop offset="35%" stopColor="#FFF5CC" />
                <stop offset="65%" stopColor="#D4A017" />
                <stop offset="100%" stopColor="#A67C00" />
              </linearGradient>
              <linearGradient id="kDark" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8B6914" />
                <stop offset="100%" stopColor="#6B4E0A" />
              </linearGradient>
              <linearGradient id="kHighlight" x1="0.3" y1="0" x2="0.7" y2="1">
                <stop offset="0%" stopColor="#FFFDE7" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#F5D060" stopOpacity="0" />
              </linearGradient>
              <filter id="kGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <g filter="url(#kGlow)">
              {/* === BOW (rounded head with keyhole) === */}
              <circle cx="95" cy="105" r="52" fill="url(#kGold)" />
              <circle cx="95" cy="105" r="44" fill="url(#kDark)" opacity="0.15" />
              <circle cx="95" cy="105" r="52" stroke="url(#kDark)" strokeWidth="3" fill="none" opacity="0.4" />
              {/* Highlight arc */}
              <path d="M60 80 A48 48 0 0 1 130 80" stroke="url(#kHighlight)" strokeWidth="4" fill="none" strokeLinecap="round" />
              {/* Inner keyhole shape */}
              <circle cx="95" cy="98" r="14" fill="#2a1a05" />
              <path d="M89 98 L87 124 L103 124 L101 98Z" fill="#2a1a05" />
              {/* Keyhole rim */}
              <circle cx="95" cy="98" r="14" stroke="url(#kGold)" strokeWidth="2.5" fill="none" opacity="0.5" />

              {/* === COLLAR (transition bow → shaft) === */}
              <rect x="143" y="95" width="18" height="20" rx="3" fill="url(#kGold)" />
              <rect x="146" y="97" width="12" height="16" rx="2" fill="url(#kDark)" opacity="0.15" />
              <line x1="143" y1="105" x2="161" y2="105" stroke="url(#kHighlight)" strokeWidth="1" />

              {/* === SHAFT === */}
              <rect x="159" y="97" width="100" height="16" rx="2" fill="url(#kShaft)" />
              {/* Center groove */}
              <rect x="165" y="103" width="88" height="3" rx="1" fill="url(#kDark)" opacity="0.12" />
              {/* Top highlight line */}
              <line x1="165" y1="100" x2="252" y2="100" stroke="#FFF5CC" strokeWidth="1" opacity="0.5" />

              {/* === TEETH (realistic stepped cuts) === */}
              <path d="M218 113 L218 133 L225 133 L225 125 L232 125 L232 138 L239 138 L239 120 L246 120 L246 133 L253 133 L253 113" fill="url(#kGold)" />
              <path d="M218 113 L218 133 L225 133 L225 125 L232 125 L232 138 L239 138 L239 120 L246 120 L246 133 L253 133 L253 113" stroke="url(#kDark)" strokeWidth="1.5" fill="none" opacity="0.3" />
              {/* Tooth tip notch */}
              <rect x="253" y="99" width="8" height="14" rx="1.5" fill="url(#kGold)" />
              <rect x="253" y="99" width="8" height="14" rx="1.5" stroke="url(#kDark)" strokeWidth="1" fill="none" opacity="0.2" />
            </g>

            {/* === SHINE SWEEP === */}
            <motion.rect
              x="40"
              y="30"
              width="35"
              height="180"
              rx="17"
              fill="white"
              opacity="0"
              style={{ transform: "rotate(-30deg)", transformOrigin: "150px 150px" }}
              animate={{ x: [40, 270], opacity: [0, 0.3, 0] }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 4,
                delay: 1.5,
              }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Sparkle stars */}
      {[
        { x: "12%", y: "18%", delay: 0.0, size: 18 },
        { x: "82%", y: "22%", delay: 1.8, size: 14 },
        { x: "78%", y: "72%", delay: 0.6, size: 20 },
        { x: "18%", y: "76%", delay: 2.4, size: 12 },
        { x: "55%", y: "8%",  delay: 1.0, size: 16 },
        { x: "88%", y: "50%", delay: 3.0, size: 10 },
      ].map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: s.x, top: s.y }}
          animate={{ opacity: [0, 1, 0], scale: [0.3, 1, 0.3] }}
          transition={{
            duration: 2.8,
            ease: "easeInOut",
            repeat: Infinity,
            delay: s.delay,
          }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 20 20" fill="#FBBF24">
            <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
