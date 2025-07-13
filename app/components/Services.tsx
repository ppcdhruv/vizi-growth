'use client';
import { motion } from 'framer-motion';
import { BarChart, Target, Funnel, TrendingUp, Palette } from 'lucide-react';
import Card from './ui/Card';

const services = [
  { icon: BarChart, title: 'Paid Media',      desc: 'Data-driven ad campaigns across Meta, Google, TikTok & more.' },
  { icon: Target,   title: 'CRO',             desc: 'Systematic A/B testing & UX fixes to lift revenue.' },
  { icon: Funnel,   title: 'Funnel Building', desc: 'End-to-end funnels engineered for scale and profit.' },
  { icon: TrendingUp, title: 'Analytics',     desc: 'Dashboards, attribution & forecasting you can trust.' },
  { icon: Palette,  title: 'Creative',        desc: 'Scroll-stopping ad creative & landing pages that convert.' }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center">What we do</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="flex flex-col items-start">
                <s.icon className="h-10 w-10 text-teal" />
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-neutral-600">{s.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
