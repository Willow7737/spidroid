import Image from 'next/image';
import aboutTech from '@/assets/about-tech.jpg'; // Import the image

export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Company Overview</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src={aboutTech} // Use the imported image variable
              alt="Minimalist technology"
              className="rounded-lg shadow-2xl"
              width={800}
              height={600}
              placeholder="blur" // This will now work correctly
            />
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-blue-600 rounded-full opacity-30 filter blur-2xl"></div>
            <div className="absolute -top-5 -left-5 w-32 h-32 bg-red-600 rounded-full opacity-30 filter blur-2xl"></div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Spidroid Technologies Inc.</h3>
            <p className="text-gray-300 leading-relaxed">
              Based in Accra, Ghana, we are a global technology company specializing in digital ecosystems and frontier technologies. As a multidisciplinary innovation house, we incubate, develop, and scale next-generation solutions—from social networks to AI-driven systems and Web3 applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
