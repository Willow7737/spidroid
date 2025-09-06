export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Spidroid Technologies Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
