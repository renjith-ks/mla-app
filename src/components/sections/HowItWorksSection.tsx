import { motion } from 'framer-motion';




export default function HowItWorksSection() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>


          <div className=" py-12 md:py-16 px-4 md:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Step 1 & 2: Course Goal Definition & Perfect Student */}
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12 md:mb-16">
      {/* Left Panel: Step 1 */}
      <div className="w-full md:w-1/2 bg-blue-100 rounded-xl shadow-lg p-6 md:p-10">
        {/* Step Badge */}
        <div className="bg-blue-600 text-white rounded-full px-4 py-1.5 text-sm mb-6 inline-block">
          Step 1 of 5:
        </div>
        
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Define Your Course Goal</h2>
        
        {/* Description */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
          Tell us what you want to teach and who you want to teach it to. We'll use this to create your perfect student persona.
        </p>
        
        {/* Input Card */}
        <div className=" rounded-lg p-4 md:p-6 border border-gray-200">
        
          <img src="https://minilessonsacademy.com/wp-content/uploads/2025/10/Course-Goal-1.png" alt="Name" className="w-full h-auto rounded-lg object-cover  border-2 border-blue-100"/>
  
        
          
          
         
          
   
          
          
        </div>
      </div>

      {/* Right Panel: Step 2 */}
      <div className="w-full md:w-1/2 bg-blue-100 rounded-xl shadow-lg p-6 md:p-10">
        {/* Step Badge */}
        <div className="bg-blue-600 text-white rounded-full px-4 py-1.5 text-sm mb-6 inline-block">
          Step 2 of 5:
        </div>
        
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Meet Your Perfect Student</h2>
        
        {/* Description */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
          Our AI has analyzed your market. Your ideal student isn’t just a “busy home cook.” They are “The Weekend Artisan.
        </p>
        
       <img src="https://minilessonsacademy.com/wp-content/uploads/2025/10/Meet-Your-1.png" alt="Name" className="w-full h-auto rounded-lg object-cover  border-2 border-blue-100"/>
  
      </div>
    </div>

    {/* Step 3 & 4: Course Outline & Structure */}
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12 md:mb-16">
      {/* Left Panel: Step 3 */}
      <div className="w-full md:w-1/2 bg-blue-100 rounded-xl shadow-lg p-6 md:p-10">
        {/* Step Badge */}
        <div className="bg-blue-600 text-white rounded-full px-4 py-1.5 text-sm mb-6 inline-block">
          Step 3 of 5:
        </div>
        
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Here's Your Well-Researched Outline</h2>
        
        {/* Description */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
          We scanned over 400 sources to identify audience pains, gaps, and insights to inform your outline. Here's the perfect, most time-relevant outline you should go with.
        </p>
         <img src="https://minilessonsacademy.com/wp-content/uploads/2025/10/Well-Researched.png" alt="Name" className="w-full h-auto rounded-lg object-cover  border-2 border-blue-100"/>
  
        
      </div>

      {/* Right Panel: Step 4 */}
      <div className="w-full md:w-1/2 bg-blue-100 rounded-xl shadow-lg p-6 md:p-10">
        {/* Step Badge */}
        <div className="bg-blue-600 text-white rounded-full px-4 py-1.5 text-sm mb-6 inline-block">
          Step 4 of 5:
        </div>
        
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Get Your Course Structure Right</h2>
        
        {/* Description */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
          Based on your details, we'll structure your course step by step. For cohorts, let's go with inquiry-based lessons to maximize engagement.
        </p>
        
     <img src="https://minilessonsacademy.com/wp-content/uploads/2025/10/Course-Structure-.png" alt="Name" className="w-full h-auto rounded-lg object-cover  border-2 border-blue-100"/>
  
      </div>
    </div>





    
    <div className="bg-blue-100 rounded-xl  p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2   mx-auto">
        
        {/* Left Section - Course Summary Card */}
        <div  >
          {/* Step Badge */}
          <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
            Step 5 of 5:
          </div>
          
          {/* Main Heading */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Your Complete Course Is Ready
          </h2>
          
          {/* Course Details List */}
          <div className="space-y-4">
            <div className="flex items-center text-lg text-gray-800">
              <svg className="text-blue-600 w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              6 Modules
            </div>
            
            <div className="flex items-center text-lg text-gray-800">
              <svg className="text-blue-600 w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              24 Lessons
            </div>
            
            <div className="flex items-center text-lg text-gray-800">
              <svg className="text-blue-600 w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              40 Assignments
            </div>
            
            <div className="flex items-center text-lg text-gray-800">
              <svg className="text-blue-600 w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              42 Additional Materials
            </div>
            
            <div className="flex items-center text-lg text-gray-800">
              <svg className="text-blue-600 w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              123 Sources Cited
            </div>
          </div>
        </div>

        
        <div className=" rounded-xl  overflow-hidden">
          
         
               <img src="https://minilessonsacademy.com/wp-content/uploads/2025/10/Course-Structure-.png" alt="Name" className="w-full h-auto rounded-lg object-cover  "/>

         
        
        </div>
      </div>
    </div>
  


 
  </div>
</div>
         
        </motion.div>

       
      </div>
    </section>
  );
}

