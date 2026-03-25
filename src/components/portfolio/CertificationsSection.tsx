import { useScrollReveal, revealClass } from "@/hooks/useScrollReveal";

const certifications = [
  {
    title: "Graphic Design Course",
    org: "KIIT University",
    period: "Sept – Nov 2025",
    location: "Bhubaneswar, Odisha",
    desc: "Poster, logo, and presentation design using Canva.",
    tag: "DESIGN",
    labelClass: "label-amber",
    ruleClass: "editorial-rule-amber",
    borderClass: "border-l border-amber/40",
    bgClass: "hover:bg-amber/5",
    titleHover: "hover:text-amber",
  },
  {
    title: "Build School: Startup Pitch",
    org: "KIIT University",
    period: "Feb – Apr 2025",
    location: "Bhubaneswar, Odisha",
    desc: "Inter-college startup proposal & pitch. Strategic thinking, public speaking, teamwork.",
    tag: "BUSINESS",
    labelClass: "label-crimson",
    ruleClass: "editorial-rule-crimson",
    borderClass: "border-l border-crimson/40",
    bgClass: "hover:bg-crimson/5",
    titleHover: "hover:text-crimson",
  },
  {
    title: "Power BI Certification",
    org: "TNX",
    period: "Jan – Mar 2024",
    location: "Online",
    desc: "Intermediate Power BI: dashboard creation, data analysis, and reporting.",
    tag: "DATA",
    labelClass: "label-cyan",
    ruleClass: "editorial-rule-cyan",
    borderClass: "border-l border-cyan/40",
    bgClass: "hover:bg-cyan/5",
    titleHover: "hover:text-cyan",
  },
];

const education = [
  {
    school: "KIIT University",
    degree: "B.Tech — Information Technology",
    period: "2023 – 2027",
    grade: "CGPA: 6.92",
    location: "Bhubaneswar, Odisha",
    gradeColor: "text-violet",
  },
  {
    school: "Sarodamoyee Highschool",
    degree: "Intermediate",
    period: "2022 – 2023",
    grade: "67.8%",
    location: "Chandrakona Road, West Bengal",
    gradeColor: "text-cyan",
  },
  {
    school: "Chandrakona Girls' Highschool",
    degree: "Matriculation",
    period: "2020 – 2021",
    grade: "88%",
    location: "Chandrakona Road, West Bengal",
    gradeColor: "text-amber",
  },
];

const CertCard = ({ cert, index }: { cert: (typeof certifications)[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`py-8 px-6 group transition-colors duration-300
        ${cert.borderClass} ${cert.bgClass}
        ${revealClass(isVisible, "animate-reveal-up", `delay-${(index + 1) * 150}`)}`}
    >
      <div className="flex justify-between items-start mb-6">
        <span className={`${cert.labelClass} text-[0.55rem]`}>{cert.tag}</span>
        <span className="caption-text">{cert.period}</span>
      </div>
      <div className={`${cert.ruleClass} mb-6`} />
      <h3 className={`font-display font-black text-foreground text-xl leading-tight group transition-colors duration-200 mb-2 ${cert.titleHover}`}>
        {cert.title}
      </h3>
      <p className="caption-text mb-3">{cert.org} · {cert.location}</p>
      <p className="text-foreground/45 text-xs leading-relaxed font-body">{cert.desc}</p>
    </div>
  );
};

const EduRow = ({ edu, index }: { edu: (typeof education)[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`border-b border-rule py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center
        hover:bg-secondary/30 transition-colors duration-300 px-2
        ${revealClass(isVisible, "animate-reveal-up", `delay-${index * 100}`)}`}
    >
      <div className="md:col-span-1 caption-text">{edu.period}</div>
      <div className="md:col-span-6">
        <h3 className="font-display font-black text-foreground text-2xl md:text-3xl leading-tight tracking-tight">
          {edu.school}
        </h3>
        <p className="font-mono-custom text-xs text-caption mt-1 tracking-widest uppercase">{edu.location}</p>
      </div>
      <div className="md:col-span-3">
        <p className="font-body text-foreground/55 text-sm">{edu.degree}</p>
      </div>
      <div className="md:col-span-2 text-right">
        <span className={`font-display font-black text-xl ${edu.gradeColor}`}>{edu.grade}</span>
      </div>
    </div>
  );
};

const CertificationsSection = () => {
  const { ref: certHead, isVisible: certVisible } = useScrollReveal();
  const { ref: eduHead, isVisible: eduVisible } = useScrollReveal();

  return (
    <section id="certifications" className="bg-ink py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Cert header */}
        <div ref={certHead}>
          <div className={`label-amber mb-4 ${revealClass(certVisible, "animate-reveal-left")}`}>— SECTION 04</div>
          <h2 className={`font-display font-black text-foreground text-[clamp(2rem,6vw,6rem)] leading-none tracking-tighter mb-16 ${revealClass(certVisible, "animate-reveal-up", "delay-100")}`}>
            CERTIF<span className="text-amber">ICATIONS</span>
          </h2>
        </div>

        <div className={`editorial-rule mb-12 ${revealClass(certVisible, "animate-line-grow", "delay-200")}`} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-28">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>

        {/* Education header */}
        <div ref={eduHead}>
          <div className={`label-cyan mb-4 ${revealClass(eduVisible, "animate-reveal-left")}`}>— SECTION 05</div>
          <h2 className={`font-display font-black text-foreground text-[clamp(2rem,6vw,6rem)] leading-none tracking-tighter mb-16 ${revealClass(eduVisible, "animate-reveal-up", "delay-100")}`}>
            EDU<span className="text-cyan">CATION</span>
          </h2>
        </div>

        <div className={`editorial-rule mb-0 ${revealClass(eduVisible, "animate-line-grow", "delay-200")}`} />

        {education.map((edu, i) => (
          <EduRow key={edu.school} edu={edu} index={i} />
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
