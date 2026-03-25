import heroTexture from "@/assets/hero-texture.jpg";
import { useEffect, useState } from "react";

const TICKER_ITEMS = [
  "PYTHON", "•", "DATA VISUALIZATION", "•", "K-MEANS CLUSTERING", "•",
  "POWER BI", "•", "SQL", "•", "DSA", "•", "KIIT UNIVERSITY", "•",
  "B.TECH IT", "•", "MACHINE LEARNING", "•", "CANVA", "•", "FIGMA", "•",
];

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Layered backgrounds */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Multi-color gradient overlay */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      {/* Colored accent glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-violet/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-crimson/8 blur-[100px] pointer-events-none" />

      {/* Grid lines decoration */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-[33%] top-0 bottom-0 w-px bg-foreground/5" />
        <div className="absolute left-[66%] top-0 bottom-0 w-px bg-foreground/5" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-foreground/5" />
      </div>

      {/* Issue label — top left */}
      <div className={`absolute top-24 left-6 md:left-12 z-20 flex items-center gap-4 ${loaded ? "animate-reveal-left delay-200" : "opacity-0"}`}>
        <div className="editorial-rule-violet w-8" />
        <span className="caption-text opacity-60">B.TECH INFORMATION TECHNOLOGY · 2023–2027</span>
      </div>

      {/* Top-right tag */}
      <div className={`absolute top-24 right-6 md:right-12 z-20 text-right ${loaded ? "animate-reveal-right delay-200" : "opacity-0"}`}>
        <span className="caption-text opacity-60">KIIT UNIVERSITY · BHUBANESWAR</span>
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pb-10 w-full">
        <div className="mb-4">
          <div className={`label-violet mb-3 ${loaded ? "animate-reveal-up delay-100" : "opacity-0"}`}>
            PORTFOLIO · EDITION 01
          </div>

          {/* Giant name */}
          <div className="overflow-hidden">
            <h1 className={`font-display font-black text-paper leading-none text-[clamp(4rem,15vw,14rem)] tracking-tighter ${loaded ? "animate-reveal-up delay-150" : "opacity-0"}`}>
              IPSHITA
            </h1>
          </div>

          <div className="flex items-center gap-4 md:gap-6 overflow-hidden">
            <div className={`h-1 md:h-2 flex-shrink-0 bg-crimson ${loaded ? "animate-line-grow delay-300 w-12 md:w-20" : "w-0"}`} />
            <h1 className={`font-display font-black text-paper leading-none text-[clamp(4rem,15vw,14rem)] tracking-tighter ${loaded ? "animate-reveal-up delay-200" : "opacity-0"}`}>
              TEWARY
            </h1>
          </div>
        </div>

        {/* Rule */}
        <div className={`editorial-rule mb-6 max-w-2xl ${loaded ? "animate-line-grow delay-400" : "opacity-0"}`} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <p className={`text-foreground/60 font-body text-sm leading-relaxed max-w-xs ${loaded ? "animate-reveal-up delay-500" : "opacity-0"}`}>
            Enthusiastic B.Tech student in Information Technology with strong
            foundations in programming, data analysis, and visualization.
            Building intelligent systems one dataset at a time.
          </p>

          <div className={`flex flex-col justify-end gap-3 ${loaded ? "animate-reveal-up delay-600" : "opacity-0"}`}>
            <div className="flex items-center gap-3">
              <span className="caption-text text-cyan">EMAIL</span>
              <div className="editorial-rule flex-1" />
              <a href="mailto:tewaryipshita@gmail.com" className="font-mono-custom text-xs text-violet hover:text-paper transition-colors">
                tewaryipshita@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="caption-text text-amber">PHONE</span>
              <div className="editorial-rule flex-1" />
              <span className="font-mono-custom text-xs text-foreground/50">+91 7384425179</span>
            </div>
          </div>
        </div>

        <div className={`mt-10 flex items-center gap-3 ${loaded ? "animate-reveal-up delay-700" : "opacity-0"}`}>
          <div className="w-px h-12 bg-violet" />
          <span className="caption-text">SCROLL TO EXPLORE</span>
          <span className="animate-blink text-violet caption-text">▼</span>
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="relative z-20 border-t border-rule bg-ink/60 backdrop-blur-sm overflow-hidden py-3">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className={`font-display font-black text-sm tracking-widest mx-4 ${
                item === "•"
                  ? "text-violet"
                  : i % 7 === 0 ? "text-cyan" : i % 5 === 0 ? "text-amber" : i % 3 === 0 ? "text-crimson" : "text-foreground/40"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
