import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Will the AI content sound generic or like me?',
    answer:
      'No. This is the #1 problem we solve. Our AI is a collaborator that helps structure your unique expertise and is designed to be easily edited, so the final product is 100% you.',
  },
  {
    question: "I'm not tech-savvy. Is this really easy to use?",
    answer:
      'Yes. MLA was built for expert coaches, not developers. If you can write an email, you can build a world-class course.',
  },
  {
    question: 'How is this different from just using ChatGPT?',
    answer:
      'ChatGPT gives you raw text. MLA gives you a complete, pedagogically sound learning experience—from syllabus design to interactive quizzes.',
  },
  {
    question: 'Do I own the content I create?',
    answer:
      'Yes, 100%. Everything you create belongs to you and can be exported at any time. You are never locked into our platform.',
  },
  {
    question: 'What if no one buys my course?',
    answer:
      'This is a core fear, which is why we build marketing support directly into MLA—helping you validate your idea and write persuasive sales copy to ensure you launch to an engaged audience.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 md:py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
            FAQ
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-6 w-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5"
                >
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

