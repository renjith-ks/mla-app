import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Hustlers',
    subtitle: 'Create your first digital wins without getting overwhelmed.',
    price: 37,
    period: 'per month',
    features: [
      'One-Click Creation Tool',
      'Unlimited Courses & Image Generations',
      'Course Hosting & Quiz Center',
      '2 Audiobooks',
      '10 Email Campaigns',
    ],
    highlighted: false,
  },
  {
    name: 'Founders',
    subtitle: 'Scale your business with smart tools and real support....',
    price: 67,
    period: 'per month',
    badge: 'POPULAR',
    features: [
      'Everything in Hustlers, plus:',
      'AI Coach & Advanced Cover Editor',
      '2 Free Strategy Calls',
      'Advanced Course Hosting',
    ],
    highlighted: true,
  },
  {
    name: 'Legends',
    subtitle: 'Lead your space with pro features and priority access.',
    price: 97,
    period: 'per month',
    features: [
      'Everything in Founders, plus:',
      'White Glove Book Publishing',
      'Drip-Feed Automated Content',
      'Premium Branding Suite',
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  const navigate = useNavigate();

  return (
    <section id="pricing-section" className="py-20 px-4 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
                Choose Your Plan & Start Your Free Trial
              </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl scale-105 border-4 border-blue-400'
                  : 'bg-white border-2 border-gray-200 shadow-lg'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.highlighted ? 'text-blue-100' : 'text-gray-600'
                  }`}
                >
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-5xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    ${plan.price}
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    plan.highlighted ? 'text-blue-100' : 'text-gray-600'
                  }`}
                >
                  /{plan.period}
                </p>
              </div>

              <Button
                size="lg"
                onClick={() => navigate('/pricing')}
                className={`w-full mb-6 font-bold ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Start My Free Trial
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check
                      className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-white' : 'text-green-500'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted ? 'text-blue-50' : 'text-gray-700'
                      } ${feature.startsWith('Everything') ? 'font-semibold' : ''}`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-black md:text-xl font-medium"
        >
          You can cancel anytime. If you continue after 3 days, you're still covered by <br /> our
          unconditional 60-day money-back guarantee.
        </motion.p>
      </div>
    </section>
  );
}

