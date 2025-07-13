'use client';
import { motion } from 'framer-motion';

const team = [
  { name: 'Alex Rivera',  role: 'Founder & Growth Lead' },
  { name: 'Priya Desai',  role: 'Creative Director'     },
  { name: 'Jordan Lee',   role: 'Data Scientist'       }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold">About ViziGrowth™</h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-600">
          Radical clarity. ROI-first thinking. No fluff.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {team.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="h-24 w-24 rounded-full bg-neutral-200" />
              <h3 className="mt-4 font-semibold">{t.name}</h3>
              <p className="text-sm text-neutral-500">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
