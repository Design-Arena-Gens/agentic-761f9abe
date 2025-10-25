const Scene = () => (
  <svg
    className="scene"
    viewBox="0 0 700 520"
    role="img"
    aria-labelledby="scene-title scene-desc"
  >
    <title id="scene-title">
      Anime detailer cleaning a wet, shining Honda 350cc in his neon garage
    </title>
    <desc id="scene-desc">
      A young, energetic rider polishes his dripping Honda motorcycle with a
      microfiber cloth. The garage glows in violet and teal neon while a bucket
      of water and shampoo sprayer rest nearby.
    </desc>
    <defs>
      <linearGradient id="garageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1f1147" />
        <stop offset="100%" stopColor="#05030f" />
      </linearGradient>
      <linearGradient id="floorGlow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#2c75ff" stopOpacity="0.35" />
        <stop offset="50%" stopColor="#9b51f5" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.35" />
      </linearGradient>
      <linearGradient id="bikeBody" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f72585" />
        <stop offset="50%" stopColor="#fcb045" />
        <stop offset="100%" stopColor="#fee440" />
      </linearGradient>
      <linearGradient id="bikeHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="bucketFill" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#00f5d4" />
        <stop offset="100%" stopColor="#4361ee" />
      </linearGradient>
      <radialGradient id="headGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffb4e6" />
        <stop offset="100%" stopColor="#ff006e" stopOpacity="0.2" />
      </radialGradient>
      <filter id="wetShine" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <rect width="700" height="520" fill="url(#garageGradient)" />
    <g opacity="0.65">
      <rect x="60" y="55" width="580" height="10" fill="#321f6b" />
      <rect x="60" y="125" width="580" height="10" fill="#2c1c59" />
      <rect x="60" y="195" width="580" height="10" fill="#24184d" />
    </g>
    <g>
      <rect
        x="40"
        y="360"
        width="620"
        height="120"
        fill="url(#floorGlow)"
        opacity="0.55"
      />
      <ellipse
        cx="350"
        cy="430"
        rx="280"
        ry="65"
        fill="#04040a"
        opacity="0.65"
      />
    </g>

    <g id="bike">
      <ellipse
        cx="225"
        cy="380"
        rx="72"
        ry="72"
        fill="#040b1b"
        stroke="#1ef2ff"
        strokeWidth="4"
      />
      <ellipse
        cx="225"
        cy="380"
        rx="45"
        ry="45"
        fill="#0d0f2a"
        stroke="#fff"
        strokeOpacity="0.35"
        strokeWidth="2"
      />
      <ellipse
        cx="470"
        cy="395"
        rx="82"
        ry="82"
        fill="#040b1b"
        stroke="#1ef2ff"
        strokeWidth="4"
      />
      <ellipse
        cx="470"
        cy="395"
        rx="52"
        ry="52"
        fill="#0d0f2a"
        stroke="#fff"
        strokeOpacity="0.35"
        strokeWidth="2"
      />

      <path
        d="M160 348 Q210 300 280 290 L430 270 Q470 268 498 296 T535 364 Q514 386 480 388 L310 403 Q240 400 210 375 Q170 356 160 348 Z"
        fill="url(#bikeBody)"
        stroke="#ffe9a0"
        strokeWidth="4"
        filter="url(#wetShine)"
      />
      <path
        d="M295 285 Q300 250 340 240 T420 230 Q470 225 500 260 L450 265 Q380 270 340 280 Z"
        fill="#100a2a"
        opacity="0.85"
      />
      <path
        d="M305 310 Q360 290 430 300 Q460 306 485 320 Q450 328 410 330 L315 328 Z"
        fill="#050c22"
        opacity="0.6"
      />
      <path
        d="M235 318 Q228 288 245 272 T300 255 L290 290 Q272 308 256 318 Z"
        fill="#101437"
      />
      <rect
        x="420"
        y="250"
        width="85"
        height="18"
        rx="9"
        fill="#1ef2ff"
        opacity="0.6"
      />
      <path
        d="M235 318 Q272 330 310 360 L280 368 Q245 352 210 332 Z"
        fill="#121c4f"
        opacity="0.9"
      />
      <path
        d="M430 333 L515 330 L532 360 L448 368 Z"
        fill="#151c45"
        opacity="0.75"
      />
      <path
        d="M200 350 Q210 330 230 325 T275 342 L255 360 Q220 366 200 350 Z"
        fill="#0c1234"
        opacity="0.88"
      />
      <path
        d="M530 310 L560 325 Q575 350 558 368 L530 352 Z"
        fill="#20285d"
        opacity="0.85"
      />
      <path
        d="M260 250 Q255 210 290 205 T380 210 Q430 212 445 238 L415 238 Q360 238 300 242 Z"
        fill="#fcb045"
        opacity="0.78"
      />
      <path
        d="M170 363 Q210 345 250 348 T335 370 L335 388 L250 382 Q210 378 170 363 Z"
        fill="url(#bikeHighlight)"
        opacity="0.85"
      />
      <path
        d="M440 350 L520 340 Q545 342 555 358 L515 364 Z"
        fill="url(#bikeHighlight)"
        opacity="0.75"
      />
      <g opacity="0.4">
        <path
          d="M290 300 L320 298 L328 310 L300 315 Z"
          fill="#ffffff"
          opacity="0.6"
        />
        <path
          d="M415 310 L450 306 L456 320 L422 326 Z"
          fill="#ffffff"
          opacity="0.6"
        />
        <path
          d="M340 352 L370 348 L372 360 L342 365 Z"
          fill="#ffffff"
          opacity="0.5"
        />
      </g>
    </g>

    <g id="bucket">
      <path
        d="M120 402 Q118 365 140 352 L190 348 Q204 358 205 402 Q198 445 160 452 Q130 448 120 402 Z"
        fill="#0a1132"
        stroke="#00f5d4"
        strokeWidth="3"
      />
      <ellipse
        cx="162"
        cy="356"
        rx="42"
        ry="10"
        fill="#13225a"
        stroke="#00f5d4"
        strokeWidth="3"
      />
      <ellipse cx="162" cy="360" rx="36" ry="8" fill="url(#bucketFill)" />
      <path
        d="M140 338 Q130 320 150 305 L175 300 Q200 300 195 308 L165 312 Q151 322 158 338 Z"
        fill="#00f5d4"
        opacity="0.6"
      />
      <path
        d="M208 333 L236 340 Q242 345 238 352 L210 346 Z"
        fill="#8be9ff"
        opacity="0.7"
      />
    </g>

    <g id="sprayer">
      <rect
        x="520"
        y="260"
        width="28"
        height="72"
        rx="12"
        fill="#0b1438"
        stroke="#47ffe8"
        strokeWidth="3"
      />
      <rect x="516" y="244" width="36" height="20" rx="7" fill="#47ffe8" />
      <rect x="523" y="232" width="22" height="16" rx="6" fill="#081027" />
      <rect
        x="532"
        y="224"
        width="16"
        height="9"
        rx="4"
        fill="#47ffe8"
        opacity="0.6"
      />
      <circle cx="534" cy="320" r="10" fill="#fff" opacity="0.3" />
      <circle cx="534" cy="290" r="10" fill="#fff" opacity="0.15" />
    </g>

    <g id="character">
      <ellipse
        cx="315"
        cy="275"
        rx="58"
        ry="68"
        fill="url(#headGlow)"
        opacity="0.4"
      />
      <path
        d="M308 204 Q322 188 340 194 T367 220 Q360 252 334 256 Q310 255 300 226 Z"
        fill="#ffd8bf"
      />
      <path
        d="M302 212 Q292 180 316 168 T364 174 Q380 184 374 200 L352 198 Q332 188 310 194 Z"
        fill="#1f1b63"
      />
      <path
        d="M303 232 L315 255 L285 300 L262 290 L294 240 Z"
        fill="#ffd8bf"
      />
      <path
        d="M280 310 L310 252 Q332 248 350 254 L360 320 Q362 340 350 360 L302 345 Z"
        fill="#2c3a94"
      />
      <path
        d="M350 360 L380 368 Q392 360 398 340 L390 300 Q380 270 360 264 L350 320 Z"
        fill="#1f295f"
      />
      <path
        d="M260 300 Q242 312 248 334 L270 368 Q276 380 302 374 L298 350 Q280 340 275 320 Z"
        fill="#1a2250"
      />
      <path
        d="M298 350 Q310 336 330 332 L348 350 Q344 368 328 378 L308 376 Z"
        fill="#ffd8bf"
      />
      <path
        d="M328 366 Q348 342 372 332 L410 330 Q420 342 414 356 L372 352 L340 376 Z"
        fill="#f1f7ff"
        opacity="0.6"
      />
      <path
        d="M268 286 Q252 286 250 305 Q250 322 262 328 L272 320 Z"
        fill="#13e2ff"
        opacity="0.8"
      />

      <g filter="url(#wetShine)">
        <path
          d="M328 316 L340 298 Q356 288 376 292 L390 306 L358 332 Z"
          fill="#2ce1ff"
          opacity="0.75"
        />
        <path
          d="M334 304 L358 290 Q370 290 378 300 Q364 308 350 312 Z"
          fill="#ffffff"
          opacity="0.6"
        />
      </g>

      <g opacity="0.8">
        <path
          d="M312 214 Q318 210 324 212 Q328 214 325 220 Q320 232 306 228 Q298 226 304 220 Z"
          fill="#f99737"
        />
        <path
          d="M344 214 Q350 210 356 212 Q360 214 357 220 Q352 232 338 228 Q330 226 336 220 Z"
          fill="#f99737"
        />
      </g>

      <path
        d="M308 206 Q316 214 328 214 Q340 214 348 206"
        stroke="#2a1f5f"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M320 232 Q330 236 340 232"
        stroke="#2a1f5f"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>

    <g id="sprayParticles" opacity="0.6">
      <circle cx="565" cy="260" r="3" fill="#8cf9ff" />
      <circle cx="575" cy="252" r="4" fill="#c8f7ff" />
      <circle cx="588" cy="248" r="3" fill="#7af1ff" />
      <circle cx="598" cy="240" r="2" fill="#c3f8ff" />
      <circle cx="575" cy="240" r="3" fill="#7af1ff" />
      <circle cx="584" cy="232" r="2.5" fill="#7af1ff" />
    </g>

    <g id="waterStreaks" opacity="0.45">
      <path
        d="M230 258 L234 320"
        stroke="#8bf8ff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="6 12"
      />
      <path
        d="M280 260 L284 330"
        stroke="#8bf8ff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="10 14"
      />
      <path
        d="M440 250 L444 320"
        stroke="#defaff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="12 18"
      />
      <path
        d="M470 245 L474 312"
        stroke="#c4f5ff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 16"
      />
    </g>
  </svg>
);

export default function Home() {
  return (
    <main className="page">
      <div className="glow" />
      <section className="hero">
        <div className="text">
          <span className="tag">Garage Session</span>
          <h1>Neon Rinse for the Honda 350cc</h1>
          <p>
            Somewhere between Capsule Corp aesthetics and real-world grit, Ken
            brings his Honda 350cc back to life. A microfiber swipe, shampoo
            spray, and a bucket of perfectly mixed suds keep the chrome wet and
            gleaming under ultraviolet tubes.
          </p>
          <ul>
            <li>Neon-soaked garage lit with violet and cyan strips</li>
            <li>Microfiber cloth gliding over water-beaded metal</li>
            <li>Shining, freshly rinsed 350cc street racer stance</li>
          </ul>
        </div>
        <Scene />
      </section>
      <footer>
        <p>
          Crafted to feel like an anime still frame — dynamic, saturated, and
          full of motion.
        </p>
      </footer>
    </main>
  );
}
