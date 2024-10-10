"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { UserIcon, EnvelopeIcon, PhoneIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const backgroundImages = [
  '/register.jpg',
  '/register2.jpg',
  '/register3.jpg',
  '/register4.jpg',
  '/register5.jpg'
];

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [gender, setGender] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, whatsapp, gender });
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Animated Image Background */}
      <div className="w-full lg:w-1/2 relative overflow-hidden order-1" style={{ minHeight: '300px' }}>
        {backgroundImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Boxing Training ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-center p-4">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Join Our Kickboxing Community</h1>
            <p className="text-lg lg:text-xl">Transform your body, mind, and spirit through the art of boxing</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 bg-black p-8 lg:p-24 flex items-center justify-center order-2">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="text-white">Create an </span>
            <span className="text-red-600">Account</span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form fields remain unchanged */}
            <div className="relative">
              <UserIcon className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full pl-10 pr-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                placeholder="Full Name"
              />
            </div>
            <div className="relative">
              <EnvelopeIcon className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                placeholder="Email Address"
              />
            </div>
            <div className="relative">
              <PhoneIcon className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                id="whatsapp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
                className="w-full pl-10 pr-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                placeholder="WhatsApp Number"
              />
            </div>
            <div className="relative">
              <UserGroupIcon className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                className="w-full pl-10 pr-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 appearance-none"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-md font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}