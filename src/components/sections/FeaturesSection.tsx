import { motion } from 'framer-motion';






export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-4  mt-3">
            AI Course Creation is Broken
          </h2>
          <p className="text-xl md:text-8xl font-extrabold text-blue-500 mb-[5rem]">
            We Fix That
          </p>
          <p className="text-xl md:text-5xl text-black-700 font-semibold max-w-2xl mx-auto ">
            Your Shortcut to <br /> <span> Expert Course Design</span>
          </p>
        </motion.div>

       <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
 
  <div className="bg-white  rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
    <img src="https://minilessonsacademy.com/wp-content/uploads/2025/10/Group-1948754900.png" alt="Card Image" className="w-full h-48 object-cover border-8 border-blue-600 rounded-lg "/>
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Market-proof Your Course</h2>
      <p className="text-gray-600 leading-relaxed">
        Our AI finds your audience, maps learner personas, uncovers gaps, and builds lessons with the most current insights.
      </p>
    </div>
  </div>

 
  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img src="https://minilessonsacademy.com/wp-content/uploads/2025/10/ib2.png" alt="Card Image" className="w-full h-48 object-cover border-8 border-blue-600 rounded-lg"/>
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Every Lesson Builds Toward Success</h2>
      <p className="text-gray-600 leading-relaxed">
       Our engine maps each course backward, ensuring each lesson builds toward the final skill.
      </p>
    </div>
  </div>


  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img src="https://minilessonsacademy.com/wp-content/uploads/2025/10/ib3.png" alt="Card Image" className="w-full h-48 object-cover border-8 border-blue-600 rounded-lg "/>
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Lesson Designs That Keep Learners Hooked</h2>
      <p className="text-gray-600 leading-relaxed">
        Pick the perfect flow for your course: inquiry-based lessons for cohorts, self-paced paths for individuals, or immersive project-based learning.
      </p>
    </div>
  </div>
</div>

        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-7">
  
  <div>
    <img
      src="https://minilessonsacademy.com/wp-content/uploads/2025/10/Design-Courses.png"
      alt="Sample"
      className="w-full h-auto rounded-2xl shadow-md object-cover  border-8 border-blue-600"
    />
  </div>

 
  <div className="space-y-4 ms-12">
    <h2 className="  md:text-4xl font-bold text-gray-800 leading-loose ">Design Courses Built <br />
     <span className='leading-relaxed'>Around Your Voice.</span></h2>
     <h1 className='font-bold text-gray-800 text-sm sm:text-base md:text-lg'>Personalized, Specifically, for Your <br /> Audience...</h1>
    <p className="text-gray-600 leading-loose text-sm sm:text-base md:text-lg ">
      Use our detailed Style DNA tool to generate courses that capture your uniqueness, your voice.
    </p>
  
  </div>
</div>


       
      </div>
    </section>
  );
}

