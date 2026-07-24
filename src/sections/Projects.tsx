import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../data';
import { cn } from '../utils/cn';

export default function Projects() {
  const containerRef = useRef(null);
  
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Selected <br/><span className="text-white/50">Works</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  });

  // Parallax effect for images
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index % 2 === 0 ? 0 : 0.2 }}
      className={cn(
        "group relative flex flex-col gap-4",
        index % 2 !== 0 ? "md:mt-32" : ""
      )}
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-900">
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="flex justify-between items-center px-2">
        <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="text-white/50 text-sm font-medium uppercase tracking-wider">{project.category}</p>
      </div>
    </motion.div>
  );
}
