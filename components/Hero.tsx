import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/hero_section.jpg"
        alt="GitFit Hero"
        fill
        sizes="100vw"
        priority
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      <div className="relative z-10 text-left max-w-4xl mx-auto px-4">
        <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 animate-fade-in-down">
          GitFit Revolution
        </h1>
        <p className="text-2xl mb-8 text-gray-300 animate-fade-in-up">Unleash Your Power: Kick, Punch, Conquer!</p>
        <Link href="/register" passHref>
          <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-fade-in">
            Join Now
          </button>
        </Link>
      </div>
    </section>
  );
}