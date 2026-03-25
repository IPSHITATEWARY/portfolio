import { useScrollReveal, revealClass } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { ref: topRef, isVisible: topVisible } = useScrollReveal();
  const { ref: linksRef, isVisible: linksVisible } = useScrollReveal();

  const socials = [
    { label: "LINKEDIN", sub: "Professional profile", colorClass: "text-violet", hoverBg: "hover:bg-violet/5", barClass: "bg-violet", hoverColor: "hover:text-violet" },
    { label: "GITHUB",   sub: "Code repositories",   colorClass: "text-cyan",   hoverBg: "hover:bg-cyan/5",   barClass: "bg-cyan",   hoverColor: "hover:text-cyan" },
    { label: "LEETCODE", sub: "DSA practice",         colorClass: "text-amber",  hoverBg: "hover:bg-amber/5",  barClass: "bg-amber",  hoverColor: "hover:text-amber" },
  ];

  const contactItems = [
    { label: "EMAIL",    value: "tewaryipshita@gmail.com", labelColor: "text-violet",  isLink: true },
    { label: "PHONE",    value: "+91 7384425179",           labelColor: "text-crimson", isLink: false },
    { label: "LOCATION", value: "Bhubaneswar, India",       labelColor: "text-cyan",    isLink: false },
  ];

  return (
    <section id="contact" className="bg-card py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={topRef}>
          <div className={`label-violet mb-4 ${revealClass(topVisible, "animate-reveal-left")}`}>— SECTION 06</div>

          <div className="mb-16 overflow-hidden">
            <h2 className={`font-display font-black text-foreground leading-none tracking-tighter text-[clamp(3rem,10vw,10rem)] ${revealClass(topVisible, "animate-reveal-up", "delay-100")}`}>
              LET'S
            </h2>
            <div className={`flex items-center gap-4 md:gap-6 -mt-2 md:-mt-4 ${revealClass(topVisible, "animate-reveal-up", "delay-200")}`}>
              <div className="w-16 md:w-32 h-1.5 md:h-3 flex-shrink-0 gradient-violet" />
              <h2 className="font-display font-black text-shimmer leading-none tracking-tighter text-[clamp(3rem,10vw,10rem)]">
                CONNECT
              </h2>
            </div>
          </div>
        </div>

        <div className={`editorial-rule mb-12 ${revealClass(topVisible, "animate-line-grow", "delay-300")}`} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left */}
          <div className={revealClass(topVisible, "animate-reveal-left", "delay-300")}>
            <p className="text-foreground/55 text-sm leading-relaxed font-body max-w-sm mb-10">
              Currently seeking internship opportunities to apply technical and
              analytical skills in real-world projects. Open to roles in data
              analysis, software development, and design.
            </p>
            <div className="space-y-5">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className={`font-mono-custom text-[0.6rem] tracking-widest uppercase ${item.labelColor}`}>
                    {item.label}
                  </span>
                  <div className="editorial-rule flex-1" />
                  {item.isLink ? (
                    <a href={`mailto:${item.value}`} className="font-mono-custom text-xs text-foreground hover:text-violet transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-mono-custom text-xs text-foreground/50">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: social links */}
          <div ref={linksRef} className="space-y-0">
            {socials.map((link, i) => (
              <a
                key={link.label}
                href="#"
                className={`group flex items-center justify-between border-b border-rule py-6 px-2 transition-all duration-200
                  ${link.hoverBg}
                  ${revealClass(linksVisible, "animate-reveal-right", `delay-${i * 150}`)}`}
              >
                <div>
                  <div className={`font-display font-black text-foreground text-2xl md:text-3xl transition-colors duration-200 ${link.hoverColor}`}>
                    {link.label}
                  </div>
                  <div className="caption-text mt-1">{link.sub}</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-0 h-0.5 ${link.barClass} group-hover:w-8 transition-all duration-300`} />
                  <span className={`text-2xl group-hover:translate-x-2 transition-transform duration-200 ${link.colorClass}`}>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={`editorial-rule mt-16 mb-8 ${revealClass(topVisible, "animate-line-grow", "delay-400")}`} />
        <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${revealClass(topVisible, "animate-reveal-up", "delay-500")}`}>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 gradient-violet" />
            <span className="caption-text">IPSHITA TEWARY © 2025</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="caption-text text-violet">KIIT UNIVERSITY</span>
            <span className="w-1 h-1 rounded-full bg-crimson" />
            <span className="caption-text text-cyan">B.TECH IT</span>
            <span className="w-1 h-1 rounded-full bg-amber" />
            <span className="caption-text text-amber">2023–2027</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
