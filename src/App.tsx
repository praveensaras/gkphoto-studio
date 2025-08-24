import React, { useEffect, useState } from 'react';
import { 
  Camera, 
  Video, 
  Edit, 
  Globe, 
  Play, 
  ChevronRight, 
  Star,
  Mail,
  Phone,
  MapPin,
  Send,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Commercials",
      description: "High-impact commercial videos that drive results and captivate audiences with cinematic storytelling."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Events",
      description: "Capture life's most precious moments with our premium event photography and videography services."
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Music Videos",
      description: "Artistic music videos that bring your sound to life through innovative visual storytelling."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Branding",
      description: "Complete brand visual identity through professional photography and video content creation."
    }
  ];

  const portfolioItems = [
    { title: "Epic Commercial", category: "Commercial", thumbnail: "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Wedding Magic", category: "Event", thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Music Visual", category: "Music", thumbnail: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Brand Story", category: "Branding", thumbnail: "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Corporate Film", category: "Commercial", thumbnail: "https://images.pexels.com/photos/3844790/pexels-photo-3844790.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Fashion Shoot", category: "Branding", thumbnail: "https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ];

  const processSteps = [
    { icon: <Edit className="w-6 h-6" />, title: "Script", description: "Creative concept development" },
    { icon: <Camera className="w-6 h-6" />, title: "Camera", description: "Professional filming & photography" },
    { icon: <Video className="w-6 h-6" />, title: "Editing", description: "Post-production magic" },
    { icon: <Globe className="w-6 h-6" />, title: "Delivery", description: "Global distribution ready" }
  ];

  const team = [
    { name: "Alex Rivera", role: "Creative Director", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Sarah Chen", role: "Lead Cinematographer", image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Marcus Johnson", role: "Post-Production Specialist", image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400" }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      role: "Brand Manager",
      content: "GK Photo Studio transformed our brand vision into cinematic reality. Their attention to detail is unmatched.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Event Coordinator",
      content: "The team captured our wedding beautifully. Every moment felt like a scene from a movie.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Music Artist",
      content: "My music video exceeded all expectations. They understood my artistic vision perfectly.",
      rating: 5
    }
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.jpeg" 
                alt="GK Photo Studio Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-400 bg-clip-text text-transparent">
                GK Photo Studio
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'Portfolio', 'Process', 'Team', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 backdrop-blur-md bg-black/50 p-4 rounded-lg">
              {['Home', 'Services', 'Portfolio', 'Process', 'Team', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-cyan-400 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/20 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]"></div>
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#ffffff" fill-opacity="0.1"><circle cx="30" cy="30" r="1"/></g></g></svg>')}")`,
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="space-y-8">
            <div className="mb-8">
              <img 
                src="/logo.jpeg" 
                alt="GK Photo Studio Logo" 
                className="h-24 w-auto mx-auto mb-6"
              />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="block bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Where Visions
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 via-cyan-300 to-white bg-clip-text text-transparent">
                Become Cinematic
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                Reality
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Premium photography and videography services that transform your vision into stunning cinematic experiences
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Portfolio <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={() => alert('Video reel feature coming soon! 🎬')}
                className="group relative px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
              >
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5" /> Watch Reel
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-yellow-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive creative solutions that elevate your brand through cinematic storytelling
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative p-8 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,212,255,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of our finest cinematic creations across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black hover:scale-105 transition-all duration-500"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-cyan-400/20 backdrop-blur-sm rounded-full p-4 hover:bg-cyan-400/30 transition-colors">
                      <Play className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-cyan-400 text-sm font-medium">{item.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              The GK Method
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our proven four-step process that transforms your vision into cinematic reality
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex-1 max-w-sm">
                  <div className="group relative">
                    {/* Step Card */}
                    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(138,43,226,0.2)]">
                      {/* Step Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      
                      <div className="text-cyan-400 mb-4 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300 flex justify-center">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Connecting Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent">
              Meet The Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Creative visionaries dedicated to bringing your stories to life through cinematic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,212,255,0.2)]"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-500 p-1">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-cyan-400 font-medium group-hover:text-yellow-400 transition-colors">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
              Client Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from our clients about their transformative experiences with GK Photo Studio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(255,215,0,0.2)]"
              >
                {/* Quote Icon */}
                <div className="text-6xl text-cyan-400/30 font-serif absolute top-4 left-4">"</div>
                
                <div className="relative z-10 pt-8">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic leading-relaxed group-hover:text-white transition-colors">
                    {testimonial.content}
                  </p>
                  
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Create Together
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your vision into cinematic reality? Get in touch and let's discuss your next project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 group-hover:border-white/30"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 group-hover:border-white/30"
                    />
                  </div>
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 hover:border-white/30"
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 hover:border-white/30"
                />
                
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 hover:border-white/30 resize-none"
                ></textarea>
                
                <button className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 group-hover:text-yellow-400 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">Email Us</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">hello@gkphotostudio.com</p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">projects@gkphotostudio.com</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 group-hover:text-yellow-400 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">Call Us</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">+1 (555) 123-4567</p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 group-hover:text-yellow-400 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">Visit Studio</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">123 Creative Avenue</p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Los Angeles, CA 90028</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              GK Photo Studio
            </div>
            <p className="text-gray-400 mb-8">
              Transforming visions into cinematic reality since 2020
            </p>
            <div className="flex justify-center space-x-8 text-gray-400">
              <span>© 2024 GK Photo Studio. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;