import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Melanie',
    role: '5th Grade Teacher',
    image: '👩‍🏫',
    rating: 5,
    quote: 'I reclaimed my weekends while creating better content.',
    description: 'Every Sunday disappeared into lesson planning. Now I type my topic and Mini Lessons gives me a complete, ready-to-teach lesson with built-in assessment questions. What consumed my entire Sunday now takes less than an hour. I\'ve reclaimed 15+ hours monthly while delivering better results.',
  },
  {
    name: 'Jamal',
    role: 'Mindset Coach',
    image: '👨‍💼',
    rating: 5,
    quote: 'I monetized my expertise without the tech nightmare.',
    description: 'For years, I had notebooks of prompts and exercises but couldn\'t turn them into a course. Mini Lessons transformed my scattered methods into a coherent system in one afternoon. Now new subscribers receive a valuable mini-course automatically, and my close rate increased from 30% to 65%.',
  },
  {
    name: 'Lily',
    role: 'Wellness Author & Mom',
    image: '👩‍⚕️',
    rating: 5,
    quote: 'I finally published what I\'ve been thinking about for years.',
    description: 'My mindful eating course outline sat untouched for three years. With Mini Lessons, I created a complete course and companion audiobook in one evening. I launched it at $97 and made more in two weeks than I do in six months, while being fully present for my family.',
  },
  {
    name: 'Necie',
    role: 'Entrepreneur',
    image: '💼',
    rating: 5,
    quote: 'This is a true money saver and success accelerator.',
    description: 'Mini Lesson Academy is a real game changer! In less than 5 minutes, I created an audiobook for my virtual tea party – no more expensive freelancers or countless apps. The platform\'s ease-of-use, beautiful cover creation, and streamlined functionality ended my overwhelm, boosted my productivity, and empowered me as a solo entrepreneur.',
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      // On desktop, move by 2 cards at a time
      if (window.innerWidth >= 768) {
        return (prev + 2) % testimonials.length;
      }
      // On mobile, move by 1 card at a time
      return (prev + 1) % testimonials.length;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      // On desktop, move by 2 cards at a time
      if (window.innerWidth >= 768) {
        return (prev - 2 + testimonials.length) % testimonials.length;
      }
      // On mobile, move by 1 card at a time
      return (prev - 1 + testimonials.length) % testimonials.length;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 px-4 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
            Hear From Our Most Satisfied <br /> Customers
          </h2>
        </motion.div>

        {/* Desktop View - 2 cards side by side */}
        <div className="hidden md:block">
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Testimonial Cards - Show 2 at a time */}
            <div className="flex gap-8 justify-center transition-all duration-500 ease-in-out">
              {testimonials.slice(currentSlide, currentSlide + 2).map((testimonial, index) => (
                <motion.div
                  key={currentSlide + index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md transition-all duration-300 ease-in-out hover:shadow-xl"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  {/* Profile Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">{testimonial.name}</h4>
                      <p className="font-normal text-base text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="font-bold text-xl text-gray-900 mb-4">
                    "{testimonial.quote}"
                  </p>

                  {/* Description */}
                  <p className="font-normal text-base text-gray-700 leading-relaxed">
                    {testimonial.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Pagination Dots - Show dots for each pair */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index * 2)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    Math.floor(currentSlide / 2) === index ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Single card with carousel */}
        <div className="md:hidden">
          <div className="relative max-w-sm mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Single Testimonial Card */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 mx-8 transition-all duration-500 ease-in-out hover:shadow-xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Profile Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                  {testimonials[currentSlide].image}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">{testimonials[currentSlide].name}</h4>
                  <p className="font-normal text-base text-gray-600">{testimonials[currentSlide].role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="font-bold text-xl text-gray-900 mb-4">
                "{testimonials[currentSlide].quote}"
              </p>

              {/* Description */}
              <p className="font-normal text-base text-gray-700 leading-relaxed">
                {testimonials[currentSlide].description}
              </p>
            </motion.div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      
    <section className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white mt-12 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Logo with Glow Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-500 rounded-2xl mt-[5rem] flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">M</span>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-500 rounded-lg blur-lg opacity-30"></div>
          </div>
        </motion.div>

        {/* Dotted Line */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="w-px h-16 sm:h-20 lg:h-24 mx-auto border-l-2 border-dotted border-blue-300"></div>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-6 sm:mb-8"
        >
          We Know What You're Thinking:
        </motion.h2>

        {/* Main Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-2xl sm:text-3xl md:text-5xl  font-bold text-gray-900 mb-8 sm:mb-12 lg:mb-16 leading-tight"
        >
          "If it's this fast, it can't be this good."
        </motion.blockquote>

        {/* Content Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="space-y-4 sm:space-y-6 lg:space-y-8 max-w-3xl mx-auto"
        >
          {/* First Paragraph */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed">
            Fair concern. <span className="font-extrabold">Most AI</span> spits out robotic slop that <span className="font-extrabold">hurts your credibility.</span>
          </p>

          {/* Second Paragraph */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed">
            That's why we didn't build another text generator.
          </p>

          {/* Third Paragraph */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 font-extrabold leading-relaxed ">
            We built an instructional design engine that creates quality learning experiences and amplifies your voice..
          </p>
        </motion.div>

      </div>
    </section>
  

    </section>
  );
}