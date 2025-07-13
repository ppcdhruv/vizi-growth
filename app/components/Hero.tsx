'use client';
import { motion } from 'framer-motion';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-100 via-ivory to-teal/10" />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold tracking-tight md:text-7xl"
      >
        Visibility. <br className="sm:hidden" /> Credibility. <br /> Profitability.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-xl text-lg text-neutral-600"
      >
        A performance marketing powerhouse for fast-scaling brands.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8 flex flex-col gap-4 sm:flex-row"
      >
        <Button href="#contact">Book a Strategy Call</Button>
        <Button href="#case-studies" variant="secondary">
          Explore Case Studies
        </Button>
      </motion.div>
    </section>
  );
}
