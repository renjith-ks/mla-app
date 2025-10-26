import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

const pricingPlans = {
  monthly: [
    {
      name: 'Hustlers',
      badge: '⭐ Start Here for Hustlers',
      subtitle: 'Create your first digital wins without getting overwhelmed',
      price: 37,
      features: {
        generate: [
          '✨Unlimited Courses',
          '✨2 Audiobooks',
          '✨10 Email Campaigns',
        ],
        includes: [
          'One-Click Creation Tool',
          'Quiz Center',
          'Unlimited Image Generations',
          'PDF and Doc Downloads',
          'Course Hosting',
          'Quick Start Templates',
        ],
      },
    },
    {
      name: 'Founders',
      badge: '⭐ Most Popular for Creators',
      subtitle: 'Scale your business with smart tools and real support',
      price: 67,
      popular: true,
      features: {
        generate: [
          '✨Unlimited Courses',
          '✨10 Audiobooks',
          '✨25 Email Campaigns',
        ],
        includes: [
          'Everything in Hustlers plus...',
          'AI Coach',
          'Advanced Cover Editor',
          '2 Free Strategy Calls',
          'Advanced Course Hosting',
          'Marketing Area Access',
          'Early Access to New Features',
        ],
      },
    },
    {
      name: 'Legends',
      badge: '💪 Pro Tools for Legends',
      subtitle: 'Lead your space with pro features and priority access',
      price: 97,
      features: {
        generate: [
          '✨Unlimited Courses',
          '✨25 Audiobooks',
          '✨100 Email Campaigns',
        ],
        includes: [
          'Everything in Founders plus...',
          'White Glove Book Publishing',
          'Advanced Quiz Center',
          'Drip-Feed Automated Content',
          'VIP Marketing Area',
          'Premium Branding Suite',
          'Specialized Support',
          'Course Optimizer',
          'VIP Masterclass Access',
        ],
      },
    },
  ],
  annual: [
    {
      name: 'Hustlers',
      badge: '⭐ Start Here for Hustlers',
      subtitle: 'Create your first digital wins without getting overwhelmed',
      price: 30,
      features: {
        generate: [
          '✨Unlimited Courses',
          '✨2 Audiobooks',
          '✨10 Email Campaigns',
        ],
        includes: [
          'One-Click Creation Tool',
          'Quiz Center',
          'Unlimited Image Generations',
          'PDF and Doc Downloads',
          'Course Hosting',
          'Quick Start Templates',
        ],
      },
    },
    {
      name: 'Founders',
      badge: '⭐ Most Popular for Creators',
      subtitle: 'Scale your business with smart tools and real support',
      price: 50,
      popular: true,
      features: {
        generate: [
          '✨Unlimited Courses',
          '✨10 Audiobooks',
          '✨25 Email Campaigns',
        ],
        includes: [
          'Everything in Hustlers plus...',
          'AI Coach',
          'Advanced Cover Editor',
          '2 Free Strategy Calls',
          'Advanced Course Hosting',
          'Marketing Area Access',
          'Early Access to New Features',
        ],
      },
    },
    {
      name: 'Legends',
      badge: '💪 Pro Tools for Legends',
      subtitle: 'Lead your space with pro features and priority access',
      price: 70,
      features: {
        generate: [
          '✨Unlimited Courses',
          '✨25 Audiobooks',
          '✨100 Email Campaigns',
        ],
        includes: [
          'Everything in Founders plus...',
          'White Glove Book Publishing',
          'Advanced Quiz Center',
          'Drip-Feed Automated Content',
          'VIP Marketing Area',
          'Premium Branding Suite',
          'Specialized Support',
          'Course Optimizer',
          'VIP Masterclass Access',
        ],
      },
    },
  ],
};

const faqs = [
  {
    question: 'Can anyone create a course with Mini Lessons Academy, even without experience?',
    answer:
      "Absolutely! Whether you're brand new or experienced in your field, Mini Lessons makes course creation simple. Just bring your idea - we handle the heavy lifting.",
  },
  {
    question: 'How long does it take to create a course?',
    answer:
      "Extremely fast. Mini Lessons can generate a full course in 2-3 minutes! For larger topics (15+ chapters), it may take slightly longer (around 3-5 minutes), but you'll still get your content created very quickly!",
  },
  {
    question: 'Can I use Mini Lessons Academy on different devices?',
    answer:
      'Yes! You can log in from your phone, tablet, or computer - so you can create and edit courses anytime, anywhere.',
  },
  {
    question: 'What if I run into problems or need help with my course?',
    answer:
      "We've got you covered! Our support team, tutorials, and strategy calls ensure you get the help you need. Plus, our user-friendly interface makes everything easy to navigate.",
  },
  {
    question: 'Does Mini Lessons Academy help with marketing?',
    answer:
      'We provide a comprehensive marketing arena filled with templates, guides, videos, and strategies - giving you everything you need to promote and sell your courses.',
  },
  {
    question: 'What additional tools do I get when I sign up?',
    answer:
      "You'll unlock access to our course creator, book creator, course hosting, the AI Coach, marketing resources, strategy calls, and more. Everything you need to create and grow your content is included.",
  },
  {
    question: 'Does Mini Lessons Academy own any rights to my digital content?',
    answer:
      'Nope! Everything you create is 100% yours. Whether you sell it or give it away, you retain full ownership.',
  },
  {
    question: 'Can I download courses created with Mini Lessons Academy?',
    answer:
      'Yes! You can download and share your courses however you like. We believe in giving you complete control over your content.',
  },
  {
    question: 'How does Mini Lessons Academy actually work?',
    answer:
      'Our comprehensive course creation platform turns your ideas into structured, ready-to-sell courses, books, and guides. Everything is streamlined and intuitive, giving you full control. (Powered by AI to help you work even smarter.)',
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const plans = pricingPlans[billingCycle];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
          >
            Choose a Plan
          </motion.h1>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center items-center gap-4 mb-8"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                billingCycle === 'annual'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Annually
            </button>
          </motion.div>

          {billingCycle === 'annual' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg font-semibold text-green-600 mb-8"
            >
              ✨ Save up to 25% off with a yearly plan ✨
            </motion.p>
          )}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 border-2 ${
                  plan.popular
                    ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-2xl scale-105'
                    : 'border-gray-200 bg-white shadow-lg'
                }`}
              >
                {/* Badge */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">{plan.badge}</p>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">/ per month</p>
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className={`w-full mb-8 font-bold ${
                    plan.popular
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  Start 3-Day Trial!
                </Button>

                {/* Generate Section */}
                <div className="mb-6">
                  <p className="font-bold text-gray-900 mb-3">Generate</p>
                  <div className="space-y-2">
                    {plan.features.generate.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Includes Section */}
                <div>
                  <p className="font-bold text-gray-900 mb-3">
                    {plan.name} Plan Includes
                  </p>
                  <div className="space-y-2">
                    {plan.features.includes.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span
                          className={`text-sm text-gray-700 ${
                            feature.includes('Everything') ? 'font-semibold' : ''
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              See Which Plan Is Best For You
            </h2>
          </motion.div>

          {/* Desktop Comparison Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-6 text-left"></th>
                  <th className="py-4 px-6 text-center font-bold text-gray-900">Hustlers</th>
                  <th className="py-4 px-6 text-center font-bold text-gray-900 bg-blue-50">Founders</th>
                  <th className="py-4 px-6 text-center font-bold text-gray-900">Legends</th>
                </tr>
              </thead>
              <tbody>
                {/* Generate Section */}
                <tr className="border-b border-gray-200">
                  <td colSpan={4} className="py-4 px-6 font-bold text-lg text-gray-900">
                    Generate
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700 flex items-center gap-2">
                    Unlimited Courses
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-gray-300 rounded-full text-white text-xs">i</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700 flex items-center gap-2">
                    Audiobooks
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-gray-300 rounded-full text-white text-xs">i</span>
                  </td>
                  <td className="py-4 px-6 text-center font-semibold text-gray-900">2</td>
                  <td className="py-4 px-6 text-center font-semibold text-gray-900 bg-blue-50">10</td>
                  <td className="py-4 px-6 text-center font-semibold text-gray-900">25</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700 flex items-center gap-2">
                    Email Campaigns
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-gray-300 rounded-full text-white text-xs">i</span>
                  </td>
                  <td className="py-4 px-6 text-center font-semibold text-gray-900">10</td>
                  <td className="py-4 px-6 text-center font-semibold text-gray-900 bg-blue-50">25</td>
                  <td className="py-4 px-6 text-center font-semibold text-gray-900">100</td>
                </tr>

                {/* Features Included Section */}
                <tr className="border-b border-gray-200">
                  <td colSpan={4} className="py-4 px-6 font-bold text-lg text-gray-900">
                    Features Included
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700 flex items-center gap-2">
                    One-Click Creation Tool
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-gray-300 rounded-full text-white text-xs">i</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Quiz Center</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Unlimited Image Generations</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">PDF and Doc Downloads</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Course Hosting</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Quick Start Templates</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700 flex items-center gap-2">
                    AI Coach
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-gray-300 rounded-full text-white text-xs">i</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Advanced Cover Editor</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">2 Free Strategy Calls</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Advanced Course Hosting</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Marketing Area Access</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Early Access to New Features</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">White Glove Book Publishing</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Advanced Quiz Center</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Drip-Feed Automated Content</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">VIP Marketing Area</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Premium Branding Suite</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Specialized Support</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Course Optimizer</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">VIP Masterclass Access</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full"></span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-6 w-6 text-blue-600 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile View - Stacked Cards */}
          <div className="lg:hidden space-y-6">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="space-y-3">
                  <p className="font-semibold text-gray-900">Generate:</p>
                  <ul className="space-y-2 mb-4">
                    {plan.features.generate.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <Check className="h-5 w-5 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="font-semibold text-gray-900">Features:</p>
                  <ul className="space-y-2">
                    {plan.features.includes.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <Check className="h-5 w-5 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-base pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
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

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Creating?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Choose your plan and start your 3-day free trial today!
            </p>
            <Button
              size="xl"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl font-bold"
            >
              View Plans
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

