import { motion } from 'framer-motion';
import MagneticButton from '../components/ui/MagneticButton';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-12 relative bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              Let's <br/> <span className="text-white/50">Collaborate</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-md">
              Have a project in mind? Looking to partner or just want to say hi? I'd love to hear from you.
            </p>
            
            <div className="flex flex-col gap-4 text-lg">
              <a href="mailto:hello@aditya.com" className="hover:text-accent transition-colors font-medium">hello@aditya.com</a>
              <p className="text-white/50">+1 (555) 000-0000</p>
            </div>
          </motion.div>
        </div>

        <div className="md:w-1/2">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative group">
              <input 
                type="text" 
                id="name" 
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-accent peer" 
                placeholder=" "
                required
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 top-4 text-white/50 text-xl transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm"
              >
                What's your name?
              </label>
            </div>

            <div className="relative group">
              <input 
                type="email" 
                id="email" 
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-accent peer" 
                placeholder=" "
                required
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 top-4 text-white/50 text-xl transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm"
              >
                What's your email?
              </label>
            </div>

            <div className="relative group">
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-accent peer resize-none" 
                placeholder=" "
                required
              />
              <label 
                htmlFor="message" 
                className="absolute left-0 top-4 text-white/50 text-xl transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm"
              >
                Tell me about your project
              </label>
            </div>

            <div className="pt-4">
              <MagneticButton type="submit" className="w-full md:w-auto !px-12 !py-5 text-lg">
                Send Message
              </MagneticButton>
            </div>
          </motion.form>
        </div>

      </div>
    </section>
  );
}
