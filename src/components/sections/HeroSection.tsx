import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToInteractive = () => {
    const element = document.getElementById("interactive-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    




    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/30 to-white py-16 px-4 md:py-24 lg:py-32">
      
      {/* Start My Free Trial Button - Top Right */}
      <div className="absolute top-6 right-28 z-10">
              <button
  className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  transition-all duration-300 hover:scale-110  text-white font-semibold  text-sm sm:text-base px-6 sm:px-8  py-3 rounded-full   flex items-center justify-center gap-2 mx-auto sm:mx-0"
>
  Start my free trial
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    className="w-4 h-4 sm:w-5 sm:h-5"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</button>

      </div>
      
      <div className="max-w-7xl mx-auto mt-5">
 


        <div className="text-center max-w-6xl mx-auto">

          
          {/* Top Badge with Avatars and Stars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center items-center gap-6 mb-12"
          >
            {/* Avatar Group */}
            <div className="flex -space-x-3">

              
              <img
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="user"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="user"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src="https://randomuser.me/api/portraits/men/18.jpg"
                alt="user"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src="https://randomuser.me/api/portraits/men/5.jpg"
                alt="user"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src="https://randomuser.me/api/portraits/men/64.jpg"
                alt="user"
              />
            </div>

            {/* Stars and Text */}
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-blue-700 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-600 font-light">
                10k+ Satisfied Students
              </p>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-8 leading-[20px] text-gray-700 tracking-tight"
          >
            You Already Know World-Class Courses Take Months to Build.{" "}
            <span className="block mt-2">Ship Yours in Seconds.</span>
          </motion.h1>

          {/* Meet AI Co-Pilot Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToInteractive}
              className="bg-blue-100 hover:bg-blue-200 border-blue-200 text-black-700 font-semibold px-8 py-6 rounded-full text-base shadow-sm hover:shadow-md transition-all"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Meet Your AI Co-Pilot
            </Button>
          </motion.div>

          {/* Features List - Horizontal Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
          >
            <div className="flex items-start gap-3 text-left">
              <div className="flex-shrink-0 mt-1">
                <Check className="w-6 h-6 text-blue-600" strokeWidth={3} />
              </div>
              <p className="text-base md:text-lg text-gray-800 font-medium leading-snug">
                <span className="font-bold">Unlimited Course Creation</span>{" "}
                Without Writing A Single Word
              </p>
            </div>
            <div className="flex items-start gap-3 text-left">
              <div className="flex-shrink-0 mt-1">
                <Check className="w-6 h-6 text-blue-600" strokeWidth={3} />
              </div>
              <p className="text-base md:text-lg text-gray-800 font-medium leading-snug">
                <span className="font-bold">Unlimited Image Generation</span>{" "}
                Without Knowing Any Design Skills.
              </p>
            </div>
            <div className="flex items-start gap-3 text-left">
              <div className="flex-shrink-0 mt-1">
                <Check className="w-6 h-6 text-blue-600" strokeWidth={3} />
              </div>
              <p className="text-base md:text-lg text-gray-800 font-medium leading-snug">
                <span className="font-bold">Forever Hosting.</span> Zero Tech
                Knowledge Required
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <Button
              size="xl"
              onClick={scrollToInteractive}
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all font-bold px-12 py-10 text-lg rounded-full"
            >
              Start my free trial →
            </Button>
          </motion.div>

         
        </div>
      </div>
    </section>
  );
}
