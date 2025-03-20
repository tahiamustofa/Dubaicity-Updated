const AboutUs = () => {
    const teamMembers = [
    { name: 'MAHFUZ ALAM', role: 'CEO & FOUNDER' },
    { name: 'ASHRAFUL ISLAM', role: 'DIRECTOR' },
    { name: 'Sania Maqsod', role: 'SENIOR MANAGER' },
    { name: 'SYED MANZUR AHMED', role: 'MANAGER' },
    { name: 'MD ZONAYAT HOSSAIN', role: 'MARKETING SPECIALIST' },
    { name: 'FAHTIMA BIN MANZUR', role: 'CUSTOMER SERVICES' },
    { name: 'SONIA MAQSOOD', role: 'CUSTOMER SERVICES & ADMINISTRATIVE' },
    { name: 'SYED MAHMUD', role: 'CUSTOMER SERVICES' }
    ];

    const features = [
    {
        title: 'Expertise',
        description: 'Our skilled team provides expert support in business licensing, company formation, and trade license services, empowering your entrepreneurial path.'
    },
    {
        title: 'Tailored Solutions',
        description: 'We tailor services to your unique goals, industry dynamics, and regulatory needs, ensuring personalized solutions for success.'
    },
    {
        title: 'Efficiency',
        description: 'We fast-track business setup and license acquisition, saving you time and resources with our streamlined approach and proactive insights.'
    },
    {
        title: 'Compliance and Integrity',
        description: 'We prioritize regulatory compliance and ethical practices, ensuring your business operates with integrity and transparency within legal bounds.'
    }
    ];

    return (
    <div className="bg-white">
        {/* Hero Section */}
        <div className="relative py-16 bg-[#FDF7F2]">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              {/* Decorative element */}
            <div className="flex justify-center mb-8">
                <div className="w-48 h-8 bg-contain bg-no-repeat bg-center">
                  {/* Ornamental image placeholder */}
                </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">
                Unveiling Our Story and Mission
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
                At Ambition City Travel Agency, we're dedicated to simplifying licensing for businesses. With a focus
                on efficiency and innovation, our team is committed to providing tailored solutions that empower your
                success.
            </p>
            </div>
        </div>
        </div>

        {/* About Us Section */}
        <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-lg h-96">
                {/* Dubai cityscape image placeholder */}
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-6">Ambition City Travel Agency</h2>
                <div className="space-y-4">
                <p className="text-gray-600">
                    Create Clean, Peaceful Environment and Build Long term Relationship with Our Customers, By
                    Understanding There Needs and Meetings Them With the Highest Level Of Integrity And
                    Professionalism In The Travel & Tourism Industry.
                </p>
                <p className="text-gray-600">
                    Ambition City Travel Agency Services is One Of The Fastest Growing companies In Dubai,
                    UAE,With An Office Staffed By Highly Qualified And Trained Personal, Our Services Of Travel &
                    Tourism & Business Setup Experience Across a Range Of Multinational Companies, Business Group
                    And Travel & tourism In The UAE.
                </p>
                <p className="text-gray-600">
                    All Our Staff Come from Travel and Tourism and Business Facility Management Backgrounds And
                    Have Previously Worked For Many Multinational Travel Agency Companies In UAE.
                </p>
                <p className="text-gray-600">
                    We are Committed To Providing High Quality, Value For Travel & tourism, & Professional Business
                    Setup Services.
                </p>
                <p className="text-gray-600">
                    New Innovation & Digitalization of Easy the Life Of Customers
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>

        {/* Quality Policy Section */}
        <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              {/* Decorative element */}
            <div className="flex justify-center mb-8">
                <div className="w-48 h-8 bg-contain bg-no-repeat bg-center">
                  {/* Ornamental image placeholder */}
                </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Quality Policy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                At Ambition City Travel Agency, excellence is our standard. With a carefully curated team dedicated to exceptional
                service, we guarantee our clients a consistently superior experience.
        </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
                <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10">
                    {/* Mission icon placeholder */}
            </div>
            <h3 className="text-xl font-bold">Mission</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
            <li>• To Retain Consistency in Our High quality Travel & Business setup services.</li>
            <li>• To Maintain Standards By Retailing Staff Knowledge & Experience.</li>
            <li>• Resource Focus on Maintaining Travel &Tourism Standards.</li>
            <li>• Maintaining Our Quality Growth Through Maintaining Excellence in Our Provision of Services and Competitive Pricing.</li>
            <li>• Training and Development Of Staff Travel & Tourism in The Direction Of Company Growth And Customers Satisfactions.</li>
                </ul>
        </div>
        <div>
                <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10">
                    {/* Vision icon placeholder */}
            </div>
            <h3 className="text-xl font-bold">Vision</h3>
                </div>
                <p className="text-gray-600">
            Through A Commitment To Excellence And Continual Investment In Our People We
            Seek To Become The Leading Brand Name With In The Travel & Tourism Industry
            Nationwide.
                </p>
        </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-96">
              {/* Shanghai skyline image placeholder */}
            </div>
    </div>
        </div>
        {/* Team Section */}
        <div className="py-16">
    <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team Member</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200">
                    {/* Team member photo placeholder */}
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                </div>
            ))}
            </div>
        </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                <p className="text-gray-600 mb-6">
                Experience simplicity with our streamlined licensing platform. Tailored
                processes ensure hassle-free license acquisition, letting you focus on
                your business.
                </p>
                <div className="bg-gray-200 rounded-lg h-64">
                  {/* Business meeting image placeholder */}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-12 h-12 rounded-full bg-primary/10 mb-4">
                      {/* Feature icon placeholder */}
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    </div>
    );
};

export default AboutUs;