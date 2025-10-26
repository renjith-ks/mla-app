import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Urgency Section */}
      <section className="py-20 px-4 md:py-28 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
                <h2 className="text-2xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                  A Note On Availability
                </h2>
                <p className=" md:text-xl text-gray-700 mb-[60px] leading-relaxed font-medium ">
                  To guarantee that every new member gets our full 1-on-1 onboarding support and that <br /> our AI servers run at peak speed, <span className="font-extrabold">we can only accept 150 new creators this month.</span>
                </p>
                <div className='container max-w-[790px]   px-4 md:py-1 rounded-2xl shadow-2xl scale-105 '>
                  <div className='flex items-center justify-center mb-2'>
                     <div className="flex -space-x-3 ">

              
              <img
                className="w-20 h-20 rounded-full border-2 border-white object-cover"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="user"
              />
              <img
                className="w-20 h-20 rounded-full border-2 border-white object-cover"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="user"
              />
              <img
                className="w-20 h-20 rounded-full border-2 border-white object-cover"
                src="https://randomuser.me/api/portraits/men/18.jpg"
                alt="user"
              />
            
            
            </div>
                  </div>
                       <p className=" md:text-2xl text-black mb-6 leading-relaxed font-normal">
                  Thanks to our incredible community of <strong className="font-bold">10,000+ creators</strong>, we're constantly growing and adding powerful new features.
                </p>
                <p className=" text-black mb-2 leading-relaxed md:text-2xl">
                  <strong className="font-bold">To reflect this added value, we'll be increasing our prices <br /> soon</strong>.
                </p>
                <p className="md:text-xl  text-gray-900 mb-6">
                  This is your opportunity to lock in the current rate for good. However, <br /> because we provide dedicated support to every new user, <span className=" font-extrabold">our trial spots for <br /> this month are limited and almost gone</span>.
                </p>
            <p className="md:text-xl mb-8">
              Click "Start My Free Trial Now" to claim your spot and secure your lifetime <br /> price.
            </p>
            <Button
              size="xl"
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl font-bold px-14 py-7 text-lg rounded-full transition-all mb-5"
            >
              Start My Free Trial →
            </Button>
                </div>
            
          </motion.div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 px-4 md:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
         
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
              Join 10,000+ Creators Building Courses That Actually Sell
            </h3>
            <p className=" text-sm md:text-xl text-blue-100 mb-8 font-medium max-w-3xl mx-auto">
              Start your 3-day free trial today. No credit card required.
            </p>
            <Button
              size="xl"
              onClick={scrollToTop}
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl font-bold px-12 py-7 text-lg rounded-full transition-all"
            >
              Start My Free Trial →
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

