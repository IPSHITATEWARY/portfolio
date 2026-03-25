import { useScrollReveal, revealClass } from "@/hooks/useScrollReveal";

const skills = [
  {
    category: "PROGRAMMING LANGUAGES",
    items: ["C/C++", "Java", "Python", "DSA"],
    col: "01",
    color: "text-violet",
    rule: "editorial-rule-violet",
    label: "label-violet",
    bg: "hover:bg-violet/5",
    border: "border-l border-violet/40",
    dot: "bg-violet",
    hover: "group-hover:text-violet",
  },
  {
    category: "DATABASES",
    items: ["DBMS", "SQL", "MySQL"],
    col: "02",
    color: "text-cyan",
    rule: "editorial-rule-cyan",
    label: "label-cyan",
    bg: "hover:bg-cyan/5",
    border: "border-l border-cyan/40",
    dot: "bg-cyan",
    hover: "group-hover:text-cyan",
  },
  {
    category: "DATA & VISUALIZATION",
    items: ["Power BI", "RFM Analysis", "K-Means", "Preprocessing"],
    col: "03",
    color: "text-crimson",
    rule: "editorial-rule-crimson",
    label: "label-crimson",
    bg: "hover:bg-crimson/5",
    border: "border-l border-crimson/40",
    dot: "bg-crimson",
    hover: "group-hover:text-crimson",
  },
  {
    category: "DESIGN TOOLS",
    items: ["Canva", "Figma (Learning)", "PowerPoint"],
    col: "04",
    color: "text-amber",
    rule: "editorial-rule-amber",
    label: "label-amber",
    bg: "hover:bg-amber/5",
    border: "border-l border-amber/40",
    dot: "bg-amber",
    hover: "group-hover:text-amber",
  },
  {
    category: "DEV ENVIRONMENT",
    items: ["VS Code", "Anaconda", "PyCharm", "Linux"],
    col: "05",
    color: "text-violet",
    rule: "editorial-rule-violet",
    label: "label-violet",
    bg: "hover:bg-violet/5",
    border: "border-l border-violet/40",
    dot: "bg-violet",
    hover: "group-hover:text-violet",
  },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`py-8 px-6 group transition-colors duration-300 cursor-default
        ${skill.border} ${skill.bg}
        ${revealClass(isVisible, "animate-reveal-up", `delay-${(index + 1) * 100}`)}`}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="caption-text opacity-30">{skill.col}</span>
      </div>
      <div className={`${skill.label} mb-1 text-[0.58rem]`}>{skill.category}</div>
      <div className={`${skill.rule} mb-5`} />
      <ul className="space-y-3">
        {skill.items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className={`mt-[7px] w-1.5 h-1.5 flex-shrink-0 rounded-full ${skill.dot}`} />
            <span className={`font-display font-black text-foreground text-xl leading-tight transition-colors duration-200 ${skill.hover}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal();

  return (
    <section id="skills" className="bg-ink py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={headRef} className="flex items-start justify-between mb-16">
          <div>
            <div className={`label-cyan mb-4 ${revealClass(headVisible, "animate-reveal-left")}`}>
              — SECTION 02
            </div>
            <h2 className={`font-display font-black text-foreground text-[clamp(3rem,8vw,8rem)] leading-none tracking-tighter ${revealClass(headVisible, "animate-reveal-up", "delay-100")}`}>
              SKILLS &amp;<br />
              <span className="text-shimmer">TOOLS</span>
            </h2>
          </div>
          <div className={`hidden md:block text-right pt-4 ${revealClass(headVisible, "animate-reveal-right", "delay-200")}`}>
            <div className="caption-text mb-1">TECH STACK</div>
            <div className="editorial-rule-cyan w-20 ml-auto mt-2" />
          </div>
        </div>

        <div className={`editorial-rule mb-12 ${revealClass(headVisible, "animate-line-grow", "delay-300")}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {skills.map((skill, i) => (
            <SkillCard key={skill.col} skill={skill} index={i} />
          ))}
        </div>

        <div className={`editorial-rule mt-12 mb-6 ${revealClass(headVisible, "animate-line-grow", "delay-400")}`} />
        <div className="flex items-center justify-between">
          <span className="caption-text text-amber">CGPA: 6.92</span>
          <span className="caption-text text-violet">B.TECH IN INFORMATION TECHNOLOGY</span>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
