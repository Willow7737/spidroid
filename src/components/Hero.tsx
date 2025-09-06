import Image from 'next/image';
import heroBg from '@/assets/hero-bg.jpg'; // Import the image

export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <Image
        src={heroBg} // Use the imported image variable
        alt="Abstract technology background"
        layout="fill"
        objectFit="cover"
        className="filter blur-sm"
        placeholder="blur" // This will now work correctly
        quality={80}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Redefining Human Connection
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
          Building digital ecosystems, advanced software, and frontier technologies from an African perspective.
        </p>
        <div className="mt-8">
          <a href="#about" className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition duration-300">
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
}
