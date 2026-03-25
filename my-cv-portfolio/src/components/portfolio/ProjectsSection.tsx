import { useScrollReveal, revealClass } from "@/hooks/useScrollReveal";

const projects = [
  {
    num: "No_01",
    title: "Customer Segmentation",
    subtitle: "RFM Analysis × K-Means",
    tags: ["Python", "K-Means", "Data Viz", "Scikit-learn"],
    description:
      "Developed a customer segmentation model using RFM analysis to analyze purchasing behavior in e-commerce datasets. Implemented K-Means clustering to group customers into distinct segments.",
    link: "https://github.com",
    accentBorder: "border-l-4 border-l-violet",
    tagStyle: "border-violet/40 text-violet",
    numColor: "text-violet",
    subtitleColor: "text-violet",
    arrowColor: "text-violet",
    hoverTitle: "hover:text-violet",
    hoverBg: "hover:bg-violet/5",
  },
  {
    num: "No_02",
    title: "Movie Recommendation",
    subtitle: "Cosine Similarity Engine",
    tags: ["Python", "Collaborative Filtering", "Cosine Similarity"],
    description:
      "Built a movie recommendation system using collaborative filtering based on user rating patterns. Constructed a movie-user matrix and computed cosine similarity for top-N recommendations.",
    link: "https://github.com",
    accentBorder: "border-l-4 border-l-crimson",
    tagStyle: "border-crimson/40 text-crimson",
    numColor: "text-crimson",
    subtitleColor: "text-crimson",
    arrowColor: "text-crimson",
    hoverTitle: "hover:text-crimson",
    hoverBg: "hover:bg-crimson/5",
  },
  {
    num: "No_03",
    title: "Power BI Dashboards",
    subtitle: "Social & Sales Insights",
    tags: ["Power BI", "Data Cleaning", "DAX", "Reporting"],
    description:
      "Created interactive Power BI Dashboards to visualize analytical data and trends. Covering Social Insights and Sales Performance with effective data cleaning and transformation.",
    link: "#",
    accentBorder: "border-l-4 border-l-cyan",
    tagStyle: "border-cyan/40 text-cyan",
    numColor: "text-cyan",
    subtitleColor: "text-cyan",
    arrowColor: "text-cyan",
    hoverTitle: "hover:text-cyan",
    hoverBg: "hover:bg-cyan/5",
  },
  {
    num: "No_04",
    title: "Graphic Design",
    subtitle: "Group Publication Project",
    tags: ["Canva", "Figma", "Layout Design", "Branding"],
    description:
      "Collaborated with a college team to design multiple posters and presentation slides. Merged individual layouts into a professional PowerPoint for final presentation.",
    link: "#",
    accentBorder: "border-l-4 border-l-amber",
    tagStyle: "border-amber/40 text-amber",
    numColor: "text-amber",
    subtitleColor: "text-amber",
    arrowColor: "text-amber",
    hoverTitle: "hover:text-amber",
    hoverBg: "hover:bg-amber/5",
  },
];

const ProjectRow = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`group border-b border-rule py-10 md:py-12 transition-all duration-300 cursor-pointer
        ${project.accentBorder} ${project.hoverBg}
        ${revealClass(isVisible, "animate-reveal-up", `delay-${index * 100}`)}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start px-4 md:px-6">
        <div className="md:col-span-1">
          <span className={`font-mono-custom text-xs ${project.numColor}`}>{project.num}</span>
        </div>
        <div className="md:col-span-4">
          <h3 className={`font-display font-black text-foreground text-3xl md:text-4xl leading-tight tracking-tight transition-colors duration-200 ${project.hoverTitle}`}>
            {project.title}
          </h3>
          <p className={`font-mono-custom text-xs mt-1 tracking-widest uppercase ${project.subtitleColor}`}>
            {project.subtitle}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 border font-mono-custom text-[0.6rem] tracking-widest uppercase ${project.tagStyle}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="md:col-span-5">
          <p className="text-foreground/55 text-sm leading-relaxed font-body">
            {project.description}
          </p>
        </div>
        <div className="md:col-span-2 flex md:justify-end items-start">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 font-mono-custom text-xs tracking-widest uppercase group-hover:gap-4 transition-all duration-200 ${project.arrowColor}`}
          >
            <span>VIEW</span>
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal();

  return (
    <section id="projects" className="bg-card py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={headRef} className="flex items-end justify-between mb-16">
          <div>
            <div className={`label-crimson mb-4 ${revealClass(headVisible, "animate-reveal-left")}`}>
              — SECTION 03
            </div>
            <h2 className={`font-display font-black text-foreground text-[clamp(3rem,8vw,8rem)] leading-none tracking-tighter ${revealClass(headVisible, "animate-reveal-up", "delay-100")}`}>
              PROJ<span className="text-crimson">ECTS</span>
            </h2>
          </div>
          <div className={`hidden md:block text-right pb-3 ${revealClass(headVisible, "animate-reveal-right", "delay-200")}`}>
            <span className="caption-text">4 PROJECTS · 2023–2025</span>
          </div>
        </div>

        <div className={`editorial-rule mb-0 ${revealClass(headVisible, "animate-line-grow", "delay-300")}`} />

        {projects.map((project, i) => (
          <ProjectRow key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
