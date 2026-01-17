

//     import React, { useState } from 'react';
// import { ShoppingCart, Menu, X, Home, Package, Info, Mail, Star, Truck, Shield, Heart, ChevronRight, Award } from 'lucide-react';

// const CeramicStore = () => {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [cart, setCart] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const products = [
//     { id: 1, name: 'Minimalist Bowl Set', price: 89, category: 'Bowls', rating: 5, color: '#E8DCC4' },
//     { id: 2, name: 'Elegant White Vase', price: 125, category: 'Vases', rating: 5, color: '#F5F5F0' },
//     { id: 3, name: 'Handmade Coffee Mug', price: 35, category: 'Mugs', rating: 4, color: '#D4A574' },
//     { id: 4, name: 'Rustic Dinner Plate', price: 65, category: 'Plates', rating: 5, color: '#C8B8A0' },
//     { id: 5, name: 'Artisan Tea Set', price: 180, category: 'Sets', rating: 5, color: '#B8A890' },
//     { id: 6, name: 'Terracotta Planter', price: 45, category: 'Planters', rating: 4, color: '#CC7755' },
//     { id: 7, name: 'Blue Ceramic Bowl', price: 52, category: 'Bowls', rating: 5, color: '#7BA7BC' },
//     { id: 8, name: 'Modern Vase Collection', price: 95, category: 'Vases', rating: 4, color: '#E0E0D8' },
//     { id: 9, name: 'Glazed Espresso Cup', price: 28, category: 'Mugs', rating: 5, color: '#6B5A4D' },
//     { id: 10, name: 'Artisan Serving Bowl', price: 78, category: 'Bowls', rating: 5, color: '#F0E8DC' },
//     { id: 11, name: 'Sculptural Planter', price: 68, category: 'Planters', rating: 4, color: '#A89080' },
//     { id: 12, name: 'Breakfast Set', price: 145, category: 'Sets', rating: 5, color: '#D8C8B0' }
//   ];

//   const categories = ['All', 'Bowls', 'Vases', 'Mugs', 'Plates', 'Sets', 'Planters'];

//   const testimonials = [
//     { name: 'Sarah Mitchell', text: 'The quality is exceptional! Each piece feels like a work of art in my home.', rating: 5 },
//     { name: 'James Chen', text: 'Beautiful craftsmanship and fast shipping. Highly recommend!', rating: 5 },
//     { name: 'Emma Rodriguez', text: 'These ceramics have transformed my dining experience. Absolutely stunning!', rating: 5 }
//   ];

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const navigation = [
//     { name: 'Home', icon: Home, page: 'home' },
//     { name: 'Shop', icon: Package, page: 'shop' },
//     { name: 'About', icon: Info, page: 'about' },
//     { name: 'Contact', icon: Mail, page: 'contact' }
//   ];

//   const filteredProducts = selectedCategory === 'All' ? products : products.filter(p => p.category === selectedCategory);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <nav className="fixed top-0 w-full bg-white backdrop-blur-lg shadow-sm z-50 border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 py-5">
//           <div className="flex justify-between items-center">
//             <h1 className="text-3xl font-bold text-gray-900 cursor-pointer hover:text-gray-700 transition-colors" onClick={() => setCurrentPage('home')}>
//               Clay and Craft
//             </h1>
            
//             <div className="hidden md:flex space-x-2">
//               {navigation.map((item) => {
//                 const IconComponent = item.icon;
//                 return (
//                   <button
//                     key={item.page}
//                     onClick={() => setCurrentPage(item.page)}
//                     className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${currentPage === item.page ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}
//                   >
//                     <IconComponent size={18} />
//                     <span>{item.name}</span>
//                   </button>
//                 );
//               })}
//             </div>

//             <div className="flex items-center space-x-4">
//               <button className="relative p-3 hover:bg-gray-100 rounded-full transition-colors">
//                 <ShoppingCart size={26} className="text-gray-800" />
//                 {cart.length > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold shadow-lg">
//                     {cart.length}
//                   </span>
//                 )}
//               </button>

//               <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//                 {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//               </button>
//             </div>
//           </div>

//           {mobileMenuOpen && (
//             <div className="md:hidden mt-6 pb-4 space-y-2">
//               {navigation.map((item) => {
//                 const IconComponent = item.icon;
//                 return (
//                   <button
//                     key={item.page}
//                     onClick={() => {
//                       setCurrentPage(item.page);
//                       setMobileMenuOpen(false);
//                     }}
//                     className={`w-full flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all ${currentPage === item.page ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}
//                   >
//                     <IconComponent size={20} />
//                     <span>{item.name}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </nav>

//       <div className="pt-24">
//         {currentPage === 'home' && (
//           <div className="min-h-screen">
//             <div className="relative h-screen flex items-center justify-center overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100"></div>
//               <div className="absolute inset-0 opacity-10">
//                 <div className="absolute top-20 left-20 w-72 h-72 bg-amber-300 rounded-full blur-3xl animate-pulse"></div>
//                 <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-300 rounded-full blur-3xl animate-pulse"></div>
//               </div>
//               <div className="relative text-center px-4 z-10 max-w-5xl">
//                 <div className="inline-block px-6 py-2 bg-white backdrop-blur-sm rounded-full mb-6 shadow-lg">
//                   <span className="text-sm font-medium text-gray-700">Handcrafted with Love Since 2015</span>
//                 </div>
//                 <h1 className="text-7xl md:text-9xl font-bold text-gray-900 mb-6 tracking-tight leading-none">
//                   Clay and Craft
//                 </h1>
//                 <p className="text-2xl md:text-3xl text-gray-700 mb-10 font-light">
//                   Where artistry meets functionality in every piece
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <button onClick={() => setCurrentPage('shop')} className="bg-gray-900 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2">
//                     Explore Collection <ChevronRight size={20} />
//                   </button>
//                   <button onClick={() => setCurrentPage('about')} className="bg-white text-gray-900 px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl">
//                     Our Story
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="py-20 px-4 bg-white">
//               <div className="max-w-7xl mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                   <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-xl transition-shadow duration-300">
//                     <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
//                       <Award className="text-amber-600" size={28} />
//                     </div>
//                     <h3 className="font-bold text-xl mb-2 text-gray-800">Handcrafted</h3>
//                     <p className="text-gray-600">Each piece uniquely made by skilled artisans</p>
//                   </div>
//                   <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-xl transition-shadow duration-300">
//                     <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
//                       <Truck className="text-blue-600" size={28} />
//                     </div>
//                     <h3 className="font-bold text-xl mb-2 text-gray-800">Free Shipping</h3>
//                     <p className="text-gray-600">On orders over $100 worldwide</p>
//                   </div>
//                   <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-shadow duration-300">
//                     <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
//                       <Shield className="text-green-600" size={28} />
//                     </div>
//                     <h3 className="font-bold text-xl mb-2 text-gray-800">Quality Guarantee</h3>
//                     <p className="text-gray-600">30-day money back guarantee</p>
//                   </div>
//                   <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-rose-50 to-pink-50 hover:shadow-xl transition-shadow duration-300">
//                     <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
//                       <Heart className="text-rose-600" size={28} />
//                     </div>
//                     <h3 className="font-bold text-xl mb-2 text-gray-800">Made with Love</h3>
//                     <p className="text-gray-600">Every detail carefully considered</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
//               <div className="max-w-7xl mx-auto">
//                 <div className="text-center mb-16">
//                   <h2 className="text-5xl font-bold text-gray-900 mb-4">Featured Collection</h2>
//                   <p className="text-xl text-gray-600">Discover our most loved pieces</p>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                   {products.slice(0, 3).map((product) => (
//                     <div key={product.id} className="group cursor-pointer">
//                       <div className="relative overflow-hidden rounded-3xl mb-6 shadow-2xl bg-white p-8 aspect-square">
//                         <div className="absolute inset-8 rounded-2xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500" style={{backgroundColor: product.color}}></div>
//                         <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg z-10">
//                           <span className="text-sm font-bold text-gray-800">${product.price}</span>
//                         </div>
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
//                           <p className="text-gray-500 mt-1">{product.category}</p>
//                         </div>
//                         <button onClick={() => addToCart(product)} className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
//                           <ShoppingCart size={20} />
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="py-20 px-4 bg-white">
//               <div className="max-w-7xl mx-auto">
//                 <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">What Our Customers Say</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                   {testimonials.map((testimonial, idx) => (
//                     <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
//                       <div className="flex mb-4">
//                         {[...Array(testimonial.rating)].map((_, i) => (
//                           <Star key={i} className="text-amber-500 fill-amber-500" size={20} />
//                         ))}
//                       </div>
//                       <p className="text-gray-700 text-lg mb-6 italic">{testimonial.text}</p>
//                       <p className="font-bold text-gray-900">{testimonial.name}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
//               <div className="max-w-4xl mx-auto text-center text-white">
//                 <h2 className="text-5xl font-bold mb-6">Start Your Collection Today</h2>
//                 <p className="text-xl mb-10 text-gray-300">Join thousands of satisfied customers worldwide</p>
//                 <button onClick={() => setCurrentPage('shop')} className="bg-white text-gray-900 px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl">
//                   Browse All Products
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {currentPage === 'shop' && (
//           <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50 py-24 px-4">
//             <div className="max-w-7xl mx-auto">
//               <div className="mb-12">
//                 <h1 className="text-6xl font-bold mb-4 text-gray-900">Shop Collection</h1>
//                 <p className="text-gray-600 text-xl">Handpicked ceramics for your home</p>
//               </div>
              
//               <div className="flex flex-wrap gap-3 mb-12">
//                 {categories.map((cat) => (
//                   <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === cat ? 'bg-gray-900 text-white shadow-xl scale-105' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'}`}>
//                     {cat}
//                   </button>
//                 ))}
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {filteredProducts.map((product) => (
//                   <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
//                     <div className="relative h-80 p-8 flex items-center justify-center" style={{backgroundColor: product.color}}>
//                       <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
//                       <div className="text-center z-10">
//                         <div className="text-6xl font-bold text-white/20 mb-2">{product.category}</div>
//                       </div>
//                       <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
//                         <Heart size={20} className="text-gray-700" />
//                       </button>
//                     </div>
//                     <div className="p-6">
//                       <div className="flex items-center gap-1 mb-3">
//                         {[...Array(product.rating)].map((_, i) => (
//                           <Star key={i} className="text-amber-500 fill-amber-500" size={16} />
//                         ))}
//                         <span className="text-sm text-gray-500 ml-2">({product.rating}.0)</span>
//                       </div>
//                       <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
//                       <p className="text-gray-500 mb-4">{product.category}</p>
//                       <div className="flex items-center justify-between">
//                         <span className="text-3xl font-bold text-gray-900">${product.price}</span>
//                         <button onClick={() => addToCart(product)} className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2">
//                           Add <ShoppingCart size={18} />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {currentPage === 'about' && (
//           <div className="min-h-screen">
//             <div className="bg-gradient-to-br from-amber-100 to-orange-100 py-32 px-4">
//               <div className="max-w-4xl mx-auto text-center">
//                 <h1 className="text-7xl font-bold mb-6 text-gray-900">Our Story</h1>
//                 <p className="text-2xl text-gray-700">Crafting beauty one piece at a time</p>
//               </div>
//             </div>

//             <div className="py-20 px-4 bg-white">
//               <div className="max-w-5xl mx-auto">
//                 <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-12 mb-12 shadow-xl">
//                   <h2 className="text-4xl font-bold mb-6 text-gray-900">The Beginning</h2>
//                   <p className="text-xl text-gray-700 leading-relaxed mb-6">
//                     Clay and Craft began in a small studio in 2015 born from a deep passion for ceramic artistry and a desire to bring handcrafted beauty into everyday life. What started as a one person operation has grown into a collective of talented artisans each bringing their unique vision and expertise to every piece we create.
//                   </p>
//                   <p className="text-xl text-gray-700 leading-relaxed">
//                     Our founder inspired by traditional pottery techniques from around the world set out to create a brand that honors ancient craftsmanship while embracing contemporary design. Every piece tells a story of dedication skill and artistic expression.
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//                   <div className="bg-blue-50 rounded-3xl p-10 shadow-lg">
//                     <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h3>
//                     <p className="text-lg text-gray-700 leading-relaxed">
//                       To create timeless ceramic pieces that elevate daily rituals and bring joy to homes around the world. We believe in slow craftsmanship sustainable practices and the enduring value of handmade art.
//                     </p>
//                   </div>
//                   <div className="bg-green-50 rounded-3xl p-10 shadow-lg">
//                     <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Values</h3>
//                     <p className="text-lg text-gray-700 leading-relaxed">
//                       We source materials ethically minimize waste and ensure fair wages for all our artisans. Sustainability is woven into every decision we make and every piece we craft.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white shadow-2xl mb-12">
//                   <h2 className="text-4xl font-bold mb-6">The Craft</h2>
//                   <p className="text-xl leading-relaxed mb-6">
//                     Each piece goes through multiple stages of creation from wedging and centering the clay to shaping on the wheel to careful trimming and refining. After the first firing we apply our signature glazes developed through years of experimentation before the final high temperature firing.
//                   </p>
//                   <p className="text-xl leading-relaxed">
//                     This process can take weeks but we believe the result is worth every moment. When you hold one of our pieces you are holding hours of focused work years of refined skill and a tradition that spans millennia.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
//               <div className="max-w-6xl mx-auto">
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                   <div className="text-center">
//                     <div className="text-6xl font-bold text-gray-900 mb-2">10+</div>
//                     <div className="text-gray-600 text-lg">Years Experience</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-6xl font-bold text-gray-900 mb-2">15K+</div>
//                     <div className="text-gray-600 text-lg">Happy Customers</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-6xl font-bold text-gray-900 mb-2">500+</div>
//                     <div className="text-gray-600 text-lg">Unique Designs</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-6xl font-bold text-gray-900 mb-2">25</div>
//                     <div className="text-gray-600 text-lg">Master Artisans</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {currentPage === 'contact' && (
//           <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50 py-24 px-4">
//             <div className="max-w-6xl mx-auto">
//               <div className="text-center mb-16">
//                 <h1 className="text-6xl font-bold mb-4 text-gray-900">Get in Touch</h1>
//                 <p className="text-xl text-gray-600">We would love to hear from you</p>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                 <div className="bg-white rounded-3xl p-10 shadow-2xl">
//                   <h2 className="text-3xl font-bold mb-8 text-gray-900">Send us a Message</h2>
//                   <div className="space-y-6">
//                     <div>
//                       <label className="block text-gray-700 font-semibold mb-3 text-lg">Full Name</label>
//                       <input type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-gray-900 transition-colors text-lg" placeholder="John Doe" />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 font-semibold mb-3 text-lg">Email Address</label>
//                       <input type="email" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-gray-900 transition-colors text-lg" placeholder="john@example.com" />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 font-semibold mb-3 text-lg">Phone Number</label>
//                       <input type="tel" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-gray-900 transition-colors text-lg" placeholder="+1 (555) 000-0000" />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700 font-semibold mb-3 text-lg">Message</label>
//                       <textarea className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-gray-900 transition-colors text-lg" placeholder="Tell us about your inquiry..." rows={5}></textarea>
//                     </div>
//                     <button className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-colors duration-300 shadow-xl hover:shadow-2xl">
//                       Send Message
//                     </button>
//                   </div>
//                 </div>

//                 <div className="space-y-8">
//                   <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-10 shadow-xl">
//                     <h3 className="text-2xl font-bold mb-6 text-gray-900">Visit Our Studio</h3>
//                     <div className="space-y-4 text-lg text-gray-700">
//                       <p className="font-semibold">Clay and Craft Headquarters</p>
//                       <p>123 Artisan Lane<br/>Creative District<br/>New York NY 10001<br/>United States</p>
//                     </div>
//                   </div>

//                   <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-10 shadow-xl">
//                     <h3 className="text-2xl font-bold mb-6 text-gray-900">Studio Hours</h3>
//                     <div className="space-y-3 text-lg text-gray-700">
//                       <div className="flex justify-between">
//                         <span className="font-semibold">Monday to Friday</span>
//                         <span>9:00 AM to 6:00 PM</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="font-semibold">Saturday</span>
//                         <span>10:00 AM to 4:00 PM</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="font-semibold">Sunday</span>
//                         <span>Closed</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-10 shadow-xl">
//                     <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Details</h3>
//                     <div className="space-y-4 text-lg text-gray-700">
//                       <p><span className="font-semibold">Email:</span> hello@clayandcraft.com</p>
//                       <p><span className="font-semibold">Phone:</span> +1 (555) 123-4567</p>
//                       <p><span className="font-semibold">Instagram:</span> @clayandcraft</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <footer className="bg-gray-900 text-white py-16 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h3 className="text-3xl font-bold mb-4">Clay and Craft</h3>
//           <p className="text-gray-400 mb-6 text-lg">Handcrafted ceramics with passion and precision</p>
//           <p className="text-gray-500">© 2025 Clay and Craft. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CeramicStore;


import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Home, Package, Info, Mail, Star, Truck, Shield, Heart, ChevronRight, Award } from 'lucide-react';

const CeramicStore = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    { id: 1, name: 'Minimalist Bowl Set', price: 89, category: 'Bowls', rating: 5, color: '#E8DCC4' },
    { id: 2, name: 'Elegant White Vase', price: 125, category: 'Vases', rating: 5, color: '#F5F5F0' },
    { id: 3, name: 'Handmade Coffee Mug', price: 35, category: 'Mugs', rating: 4, color: '#D4A574' },
    { id: 4, name: 'Rustic Dinner Plate', price: 65, category: 'Plates', rating: 5, color: '#C8B8A0' },
    { id: 5, name: 'Artisan Tea Set', price: 180, category: 'Sets', rating: 5, color: '#B8A890' },
    { id: 6, name: 'Terracotta Planter', price: 45, category: 'Planters', rating: 4, color: '#CC7755' },
    { id: 7, name: 'Blue Ceramic Bowl', price: 52, category: 'Bowls', rating: 5, color: '#7BA7BC' },
    { id: 8, name: 'Modern Vase Collection', price: 95, category: 'Vases', rating: 4, color: '#E0E0D8' },
    { id: 9, name: 'Glazed Espresso Cup', price: 28, category: 'Mugs', rating: 5, color: '#6B5A4D' },
    { id: 10, name: 'Artisan Serving Bowl', price: 78, category: 'Bowls', rating: 5, color: '#F0E8DC' },
    { id: 11, name: 'Sculptural Planter', price: 68, category: 'Planters', rating: 4, color: '#A89080' },
    { id: 12, name: 'Breakfast Set', price: 145, category: 'Sets', rating: 5, color: '#D8C8B0' }
  ];

  const categories = ['All', 'Bowls', 'Vases', 'Mugs', 'Plates', 'Sets', 'Planters'];

  const testimonials = [
    { name: 'Sarah Mitchell', text: 'The quality is exceptional! Each piece feels like a work of art in my home.', rating: 5 },
    { name: 'James Chen', text: 'Beautiful craftsmanship and fast shipping. Highly recommend!', rating: 5 },
    { name: 'Emma Rodriguez', text: 'These ceramics have transformed my dining experience. Absolutely stunning!', rating: 5 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const navigation = [
    { name: 'Home', icon: Home, page: 'home' },
    { name: 'Shop', icon: Package, page: 'shop' },
    { name: 'About', icon: Info, page: 'about' },
    { name: 'Contact', icon: Mail, page: 'contact' }
  ];

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full bg-white backdrop-blur-lg shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 cursor-pointer hover:text-gray-700 transition-colors" onClick={() => setCurrentPage('home')}>
              Clay and Craft
            </h1>
            
            <div className="hidden md:flex space-x-2">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.page}
                    onClick={() => setCurrentPage(item.page)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${currentPage === item.page ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <IconComponent size={18} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-3 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingCart size={26} className="text-gray-800" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold shadow-lg">
                    {cart.length}
                  </span>
                )}
              </button>

              <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-4 space-y-2">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.page}
                    onClick={() => {
                      setCurrentPage(item.page);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all ${currentPage === item.page ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <IconComponent size={20} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      <div className="pt-24">
        {currentPage === 'home' && (
          <div className="min-h-screen">
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://cdn.coverr.co/videos/coverr-pottery-making-on-a-wheel-6006/1080p.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"></div>
              <div className="relative text-center px-4 z-10 max-w-5xl">
                <div className="inline-block px-6 py-2 bg-white/90 backdrop-blur-md rounded-full mb-6 shadow-2xl">
                  <span className="text-sm font-medium text-gray-800">Handcrafted with Love Since 2015</span>
                </div>
                <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight leading-none drop-shadow-2xl">
                  Clay and Craft
                </h1>
                <p className="text-2xl md:text-3xl text-white mb-10 font-light drop-shadow-lg">
                  Where artistry meets functionality in every piece
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => setCurrentPage('shop')} className="bg-white text-gray-900 px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2">
                    Explore Collection <ChevronRight size={20} />
                  </button>
                  <button onClick={() => setCurrentPage('about')} className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                    Our Story
                  </button>
                </div>
              </div>
            </div>

            <div className="py-20 px-4 bg-white">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Award className="text-amber-600" size={28} />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">Handcrafted</h3>
                    <p className="text-gray-600">Each piece uniquely made by skilled artisans</p>
                  </div>
                  <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Truck className="text-blue-600" size={28} />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">Free Shipping</h3>
                    <p className="text-gray-600">On orders over $100 worldwide</p>
                  </div>
                  <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Shield className="text-green-600" size={28} />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">Quality Guarantee</h3>
                    <p className="text-gray-600">30-day money back guarantee</p>
                  </div>
                  <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-rose-50 to-pink-50 hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Heart className="text-rose-600" size={28} />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">Made with Love</h3>
                    <p className="text-gray-600">Every detail carefully considered</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-5xl font-bold text-gray-900 mb-4">Featured Collection</h2>
                  <p className="text-xl text-gray-600">Discover our most loved pieces</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {products.slice(0, 3).map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-3xl mb-6 shadow-2xl bg-white p-8 aspect-square">
                        <div className="absolute inset-8 rounded-2xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500" style={{backgroundColor: product.color}}></div>
                        <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg z-10">
                          <span className="text-sm font-bold text-gray-800">${product.price}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                          <p className="text-gray-500 mt-1">{product.category}</p>
                        </div>
                        <button onClick={() => addToCart(product)} className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                          <ShoppingCart size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="py-20 px-4 bg-white">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-amber-500 fill-amber-500" size={20} />
                        ))}
                      </div>
                      <p className="text-gray-700 text-lg mb-6 italic">{testimonial.text}</p>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h2 className="text-5xl font-bold mb-6">Start Your Collection Today</h2>
                <p className="text-xl mb-10 text-gray-300">Join thousands of satisfied customers worldwide</p>
                <button onClick={() => setCurrentPage('shop')} className="bg-white text-gray-900 px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  Browse All Products
                </button>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'shop' && (
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50 py-24 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <h1 className="text-6xl font-bold mb-4 text-gray-900">Shop Collection</h1>
                <p className="text-gray-600 text-xl">Handpicked ceramics for your home</p>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {categories.map((cat) => (
                  <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === cat ? 'bg-gray-900 text-white shadow-xl scale-105' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'}`}>
                    {cat}
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-80 p-8 flex items-center justify-center" style={{backgroundColor: product.color}}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <div className="text-center z-10">
                        <div className="text-6xl font-bold text-white/20 mb-2">{product.category}</div>
                      </div>
                      <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
                        <Heart size={20} className="text-gray-700" />
                      </button>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} className="text-amber-500 fill-amber-500" size={16} />
                        ))}
                        <span className="text-sm text-gray-500 ml-2">({product.rating}.0)</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-500 mb-4">{product.category}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                        <button onClick={() => addToCart(product)} className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2">
                          Add <ShoppingCart size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentPage === 'about' && (
          <div className="min-h-screen">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 py-32 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-7xl font-bold mb-6 text-gray-900">Our Story</h1>
                <p className="text-2xl text-gray-700">Crafting beauty one piece at a time</p>
              </div>
            </div>

            <div className="py-20 px-4 bg-white">
              <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-12 mb-12 shadow-xl">
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">The Beginning</h2>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Clay and Craft began in a small studio in 2015 born from a deep passion for ceramic artistry and a desire to bring handcrafted beauty into everyday life. What started as a one person operation has grown into a collective of talented artisans each bringing their unique vision and expertise to every piece we create.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Our founder inspired by traditional pottery techniques from around the world set out to create a brand that honors ancient craftsmanship while embracing contemporary design. Every piece tells a story of dedication skill and artistic expression.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-blue-50 rounded-3xl p-10 shadow-lg">
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      To create timeless ceramic pieces that elevate daily rituals and bring joy to homes around the world. We believe in slow craftsmanship sustainable practices and the enduring value of handmade art.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-3xl p-10 shadow-lg">
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Values</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We source materials ethically minimize waste and ensure fair wages for all our artisans. Sustainability is woven into every decision we make and every piece we craft.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white shadow-2xl mb-12">
                  <h2 className="text-4xl font-bold mb-6">The Craft</h2>
                  <p className="text-xl leading-relaxed mb-6">
                    Each piece goes through multiple stages of creation from wedging and centering the clay to shaping on the wheel to careful trimming and refining. After the first firing we apply our signature glazes developed through years of experimentation before the final high temperature firing.
                  </p>
                  <p className="text-xl leading-relaxed">
                    This process can take weeks but we believe the result is worth every moment. When you hold one of our pieces you are holding hours of focused work years of refined skill and a tradition that spans millennia.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gray-900 mb-2">10+</div>
                    <div className="text-gray-600 text-lg">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gray-900 mb-2">15K+</div>
                    <div className="text-gray-600 text-lg">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gray-900 mb-2">500+</div>
                    <div className="text-gray-600 text-lg">Unique Designs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gray-900 mb-2">25</div>
                    <div className="text-gray-600 text-lg">Master Artisans</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50 py-24 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-6xl font-bold mb-4 text-gray-900">Get in Touch</h1>
                <p className="text-xl text-gray-600">We would love to hear from you</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* <div className="bg-white rounded-3xl p-10 shadow-2xl">
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">Send us a Message</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-3 text-lg">Full Name</label>
                      <input type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-gray-900 transition-colors text-lg" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-3 text-lg">Email Address</label>
                      <input type="email" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-gray-900 transition-colors text-lg" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-3 text-lg">Phone Number</label>
                      <input type="tel" className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-gray-900 transition-colors text-lg" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-3 text-lg">Message</label>
                      <textarea className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-gray-900 transition-colors text-lg" placeholder="Tell us about your inquiry..." rows={5}></textarea>
                    </div>
                    <button className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-colors duration-300 shadow-xl hover:shadow-2xl">
                      Send Message
                    </button>
                  </div>
                </div> */}
                <div className="w-full h-85 md:h-[600px] rounded-2xl overflow-hidden shadow-inner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56361.51854513671!2d69.62772034302193!3d23.250734077448573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e209000b6f17%3A0x7077f358af0774a6!2sBhuj%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1759409340395!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-10 shadow-xl">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Visit Our Studio</h3>
                    <div className="space-y-4 text-lg text-gray-700">
                      <p className="font-semibold">Clay and Craft Headquarters</p>
                      <p>123 Artisan Lane<br/>Creative District<br/>New York NY 10001<br/>United States</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-10 shadow-xl">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Studio Hours</h3>
                    <div className="space-y-3 text-lg text-gray-700">
                      <div className="flex justify-between">
                        <span className="font-semibold">Monday to Friday</span>
                        <span>9:00 AM to 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Saturday</span>
                        <span>10:00 AM to 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-10 shadow-xl">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Details</h3>
                    <div className="space-y-4 text-lg text-gray-700">
                      <p><span className="font-semibold">Email:</span> hello@clayandcraft.com</p>
                      <p><span className="font-semibold">Phone:</span> +1 (555) 123-4567</p>
                      <p><span className="font-semibold">Instagram:</span> @clayandcraft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Clay and Craft</h3>
          <p className="text-gray-400 mb-6 text-lg">Handcrafted ceramics with passion and precision</p>
          <p className="text-gray-500">© 2025 Clay and Craft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CeramicStore;