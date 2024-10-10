import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

const instagramPosts = [
  { id: 1, imageUrl: '/instagram1.jpg', alt: 'Woman stretching' },
  { id: 2, imageUrl: '/instagram2.jpg', alt: 'Boxing gloves closeup' },
  { id: 3, imageUrl: '/instagram3.jpg', alt: 'Woman boxing' },
  { id: 4, imageUrl: '/instagram4.jpg', alt: 'Man with boxing gloves' },
];

const instagramAccountUrl = 'https://www.instagram.com/aymanhamouda830/';

export default function InstagramFeed() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            <span className="text-red-600">ON</span> INSTAGRAM
          </h2>
          <span className="text-red-600 font-bold text-2xl">#GITFIT</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {instagramPosts.map((post) => (
            <a 
              key={post.id} 
              href={instagramAccountUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group aspect-square rounded-lg border-2 border-gray-800 transition-all duration-300 hover:border-red-600 cursor-pointer"
            >
              <Image
                src={post.imageUrl}
                alt={post.alt}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaInstagram className="text-white text-3xl" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}