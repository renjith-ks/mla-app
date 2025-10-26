import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const notForList = [
  "You're looking for a cheap ChatGPT wrapper.",
  "You're not committed to quality.",
  "You think price is more important than results.",
];

export default function NotForSection() {
  return (
    <section className="py-16 px-4 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Who This ISN'T For...
          </h2>
          <p className="  md:text-xl text-black font-semibold">
            We are passionately dedicated to student outcomes, which  means we are not the right fit
            for everyone. We are NOT for you if:
          </p>
        </motion.div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {notForList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 bg-blue-800 border-2 border-blue-200 rounded-xl"
            >
              <div className="bg-white text-blue p-1 rounded-full flex-shrink-0">
                <X className="h-2 w-2" />
              </div>
              <p className="text-white font-medium pt-2">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

