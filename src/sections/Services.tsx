import { motion } from 'framer-motion';
import { services } from '../data';

export default function Services() {
  return (
    <section id="services" className="py-24 f:py-40 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">My <br/><span className="text-white/50">Expertise</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500 flex flex-col gap-6"
            >
              <div className="text-4xl font-light text-white/20 group-hover:text-accent transition-colors duration-500">
                0{index + 1}
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
