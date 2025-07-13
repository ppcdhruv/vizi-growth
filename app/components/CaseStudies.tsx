'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from './ui/Card';

const studies = [
  {
    industry: 'E-commerce',
    title: '3× ROAS for DTC Skincare',
    metrics: { roas: '3.4×', cpa: '-42%', revenue: '+128%' }
  },
  {
    industry: 'Wellness',
    title: 'Scaled Fitness App to 7-Figures',
    metrics: { installs: '+250%', cpi: '-35%', ltv: '+60%' }
  },
  {
    industry: 'Tech',
    title: 'B2B SaaS Pipeline Growth',
    metrics: { leads: '+400%', cpl: '-55%', sql: '+210%' }
  }
];

const filters = ['All', 'E-commerce', 'Wellness', 'Tech'];

export default function CaseStudies() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? studies : studies.filter(s => s.industry === active);

  return (
    <section id="case-studies" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center">Proven Results</h2>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-1 text-sm font-semibold transition ${active === f ? 'bg-teal text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Card>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-teal">{s.industry}</p>
                <ul className="mt-4 space-y-1 text-sm text-neutral-600">
                  {Object.entries(s.metrics).map(([k, v]) => (
                    <li key={k}>
                      <span className="font-semibold capitalize">{k}:</span> {v}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
