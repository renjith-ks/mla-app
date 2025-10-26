import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { generatePersonas } from '@/lib/api';
import type { Persona } from '@/types';

const formSchema = z.object({
  outcome: z.string().min(3, 'Outcome must be at least 3 characters'),
  audience: z.string().min(3, 'Audience must be at least 3 characters'),
});

type FormData = z.infer<typeof formSchema>;

const outcomeSuggestions = [
  'Learning Business Management',
  'How To Become A Chiropractor',
  'Using AI In Data Analysis',
];

const audienceSuggestions = [
  'Entrepreneur',
  'Chiropractors',
  'Data Scientists',
];

export default function InteractiveSection() {
  const navigate = useNavigate();
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [outcomeValue, setOutcomeValue] = useState('');
  const [audienceValue, setAudienceValue] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);
    setPersonas([]);

    try {
      const response = await generatePersonas(data);
      if (response.success) {
        setPersonas(response.personas);
      } else {
        setError(response.message || 'Failed to generate personas');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePersonaClick = () => {
    navigate('/pricing');
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/pricing');
    }
  };

  const fillExample = () => {
    setValue('outcome', 'Master sourdough baking');
    setValue('audience', 'Busy home cooks');
    setOutcomeValue('Master sourdough baking');
    setAudienceValue('Busy home cooks');
  };

  return (
    <section id="interactive-section" className="py-20 px-4 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Main Container with Border */}
        <div className="bg-white rounded-3xl shadow-2xl border-4 border-blue-400 p-8 md:p-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight flex items-center justify-center gap-3">
              <Sparkles className="w-10 h-10 text-blue-500" />
              Let's Prove It To You
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-600 mb-6">
              In 60 Seconds.
            </p>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tell us your desired outcome and who you're teaching. Our AI will instantly build your ideal learner persona.
            </p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Course Outcome Field */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <label htmlFor="outcome" className="text-lg font-bold text-gray-900">
                  Course Outcome
                </label>
                <Button
                  type="button"
                  onClick={fillExample}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded-md font-semibold w-full sm:w-auto sm:text-sm sm:px-4 sm:py-2 sm:rounded-lg"
                >
                  Try an Example
                </Button>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200">
                <Input
                  id="outcome"
                  placeholder="e.g., Master sourdough baking"
                  {...register('outcome')}
                  value={outcomeValue}
                  onChange={(e) => {
                    setOutcomeValue(e.target.value);
                    setValue('outcome', e.target.value);
                  }}
                  className="h-14 text-base border-none bg-transparent focus:ring-0 text-blue-600 font-semibold placeholder:text-blue-400 placeholder:font-normal px-0"
                />
                <div className="flex flex-wrap gap-2 mt-4">
                  {outcomeSuggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setValue('outcome', suggestion);
                        setOutcomeValue(suggestion);
                      }}
                      className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:border-blue-500 hover:bg-blue-50 transition-colors font-medium"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
              {errors.outcome && (
                <p className="text-sm text-red-500">{errors.outcome.message}</p>
              )}
            </div>

            {/* Ideally For Field */}
            <div className="space-y-3">
              <label htmlFor="audience" className="text-lg font-bold text-gray-900 block">
                Ideally For
              </label>
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200">
                <Input
                  id="audience"
                  placeholder="e.g., Busy home cooks"
                  {...register('audience')}
                  value={audienceValue}
                  onChange={(e) => {
                    setAudienceValue(e.target.value);
                    setValue('audience', e.target.value);
                  }}
                  className="h-14 text-base border-none bg-transparent focus:ring-0 text-blue-600 font-semibold placeholder:text-blue-400 placeholder:font-normal px-0"
                />
                <div className="flex flex-wrap gap-2 mt-4">
                  {audienceSuggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setValue('audience', suggestion);
                        setAudienceValue(suggestion);
                      }}
                      className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:border-blue-500 hover:bg-blue-50 transition-colors font-medium"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
              {errors.audience && (
                <p className="text-sm text-red-500">{errors.audience.message}</p>
              )}
            </div>

            {/* Generate Button */}
            <div className="flex flex-col items-center gap-4 pt-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-2 py-6 text-base rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Generating Personas...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    Generate My Ideal Learner Persona
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
              
              <p className="text-sm text-gray-600">
                No signup required. See the quality for yourself.
              </p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center"
              >
                {error}
              </motion.div>
            )}
          </form>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold text-gray-900">
                60-day money-back guarantee
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <span className="text-sm md:text-base font-bold text-gray-900">
                You own 100% of the content
              </span>
            </div>
          </div>
        </div>

        {/* See Plans Button - Outside the border box */}
        <div className="flex justify-center mt-10">
          <Button
            onClick={scrollToPricing}
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-10 py-6 text-base rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
          >
            See Plans & Start Building
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>


         
                
          

        {/* Personas Grid */}
        <AnimatePresence>
          {personas.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl md:text-3xl font-bold text-center mt-5 mb-8 text-gray-900">
                Your Ideal Students Are:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {personas.map((persona, index) => (
                  <motion.div
                    key={persona.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className="cursor-pointer transition-all hover:shadow-2xl hover:scale-105 border-2 hover:border-blue-500 bg-white"
                      onClick={handlePersonaClick}
                    >
                      <CardHeader>
                        <CardTitle className="text-xl md:text-2xl text-blue-600">
                          {persona.title}
                        </CardTitle>
                        <CardDescription className="text-base text-gray-700">
                          {persona.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-2">
                            Pain Points:
                          </h4>
                          <ul className="space-y-1">
                            {persona.painPoints.map((point, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-2">
                            Goals:
                          </h4>
                          <ul className="space-y-1">
                            {persona.goals.map((goal, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>{goal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center"
              >
                <p className="text-gray-600 mb-4">
                  Click any persona to see how Cluely can help you reach them
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
       
        {/* Platform Logos Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20"
          >
            <p className="text-sm text-black-400 mb-8 font-bold text-center">
              10k+ Creators have used Mini Lessons Academy to generate courses
              for these platforms
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 ">
              {/* Platform logo placeholders */}
              <div className="  flex items-center justify-center ">
                <span className="text-blue-900 text-4xl md:text-5xl font-extrabold">
                  Coursera
                </span>
              </div>
              <div className="  flex items-center justify-center  ">
                <span className="text-blue-900 text-4xl md:text-5xl font-extrabold">Udemy</span>
              </div>
              <div className="  flex items-center justify-center">
                <span className="text-blue-900 text-4xl md:text-5xl font-extrabold">
                  Whop
                </span>
              </div>
              <div className="  flex items-center justify-center">
                <span className="text-blue-900 text-4xl md:text-5xl font-extrabold">Skool</span>
              </div>
             
            </div>
            <div className="  flex items-center justify-center mt-20 mb-[-200px] ">
               <Button
              variant="outline"
              size="lg"
              
              className="bg-blue-100 hover:bg-blue-200 border-blue-200 text-black-700 font-semibold px-8 py-6 rounded-full text-base shadow-sm hover:shadow-md transition-all mb-12"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              our promise
            </Button>
            </div>
          </motion.div>

    </section>
  );
}

