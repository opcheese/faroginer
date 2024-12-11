"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CookieIcon, GiftIcon, SparklesIcon } from 'lucide-react'

export default function GingerbreadFactoryLanding() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-amber-50 text-brown-900 font-sans">
      {/* Header */}
      <header className="bg-brown-800 text-amber-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <CookieIcon className="h-8 w-8" />
            <span className="text-2xl font-bold">Gingerbread Dreams</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home" className="hover:text-amber-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-300 transition-colors">About</a></li>
              <li><a href="#products" className="hover:text-amber-300 transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 text-center bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-amber-900 animate-bounce">Welcome to Gingerbread Dreams</h1>
          <p className="text-xl mb-8 text-amber-800">Where every bite is a magical adventure!</p>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-transform hover:scale-105">
            Explore Our Treats
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Gingerbread Dreams???</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <CookieIcon className="h-16 w-16 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold mb-2">Magical Recipes</h3>
              <p>Our secret family recipes have been perfected over generations.</p>
            </div>
            <div className="text-center">
              <GiftIcon className="h-16 w-16 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold mb-2">Perfect Gifts</h3>
              <p>Delight your loved ones with our enchanting gingerbread creations.</p>
            </div>
            <div className="text-center">
              <SparklesIcon className="h-16 w-16 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold mb-2">Festive Magic</h3>
              <p>Experience the joy and wonder of the holiday season in every bite.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Magical Creations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <img
                  src={`/placeholder.svg?height=200&width=300&text=Gingerbread+${item}`}
                  alt={`Gingerbread Product ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Gingerbread Delight {item}</h3>
                  <p className="text-gray-600 mb-4">A magical treat that will transport you to a world of wonder.</p>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">Order Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-amber-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl italic mb-4">"The gingerbread houses from Gingerbread Dreams are simply magical! They transport me back to my childhood every time."</p>
            <p className="font-semibold">- Happy Customer</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact the Gingerbread Fairies</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Your Name"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <Textarea
                placeholder="Your Message"
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-800 text-amber-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Gingerbread Dreams. All rights reserved.</p>
          <p className="mt-2">Spreading joy, one gingerbread at a time!</p>
        </div>
      </footer>
    </div>
  )
}

