export default function Index() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-300">Open to work</span>
          </div>
          
          <h2 className="text-orange-500 font-bold text-lg tracking-wider uppercase">
            PRODUCT & MOTION DESIGNER
          </h2>
          <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
            Ashutosh Sinha
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Crafting user-centric designs that enhance product experiences for modern digital platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-orange-500 text-sm mb-1">Email</div>
            <div className="text-gray-300 text-xs">Available on request</div>
          </div>
          <div className="text-center">
            <div className="text-orange-500 text-sm mb-1">Phone</div>
            <div className="text-gray-300 text-xs">Available on request</div>
          </div>
          <div className="text-center">
            <div className="text-orange-500 text-sm mb-1">LinkedIn</div>
            <div className="text-gray-300 text-xs">ashutoshsinha</div>
          </div>
          <div className="text-center">
            <div className="text-orange-500 text-sm mb-1">Location</div>
            <div className="text-gray-300 text-xs">Bangalore, India</div>
          </div>
        </div>

        <div className="flex gap-4 pt-8 justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-semibold px-8 py-3 rounded-full transition-colors">
            Download CV
          </button>
          <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-gray-900 px-8 py-3 rounded-full transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
