import React from 'react';

function App() {
return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
    <section className="relative">
        {/* Image placeholder */}
        <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400">Add Hero Image Here</span>
        </div>

        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="mb-8">
            {/* Decorative element placeholder */}
            <div className="w-48 h-8 mx-auto mb-4 bg-gray-200">
            <span className="text-gray-400 text-sm">Decorative Element</span>
            </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tour Plan With Us
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            At Ambition City Travel Agency, we're dedicated to simplifying licensing for businesses. With a focus
            on efficiency and innovation, our team is committed to providing tailored solutions that empower your success
        </p>
        </div>
    </section>

      {/* Features Section */}
    <section className="py-16 px-4">
        <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-400">Icon</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Customized Tours</h3>
            <p className="text-gray-600">Personalized itineraries tailored to your preferences</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-400">Icon</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
            <p className="text-gray-600">Professional and knowledgeable tour guides</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-400">Icon</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock assistance for your peace of mind</p>
            </div>
        </div>
        </div>
    </section>
    </div>
);
}

export default App;