import { useState } from 'react';
import { personalInfo } from '../data/portfolio-data';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '../lib/queryClient';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center mb-12 lg:mb-16 gradient-text">GET IN TOUCH</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="glassmorphism rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold text-[#00ff88] mb-4 lg:mb-6">Contact Information</h3>
              
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#00ff88]/20 rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
                    <Mail className="text-[#00ff88]" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs lg:text-sm text-gray-400">Email</div>
                    <div className="text-sm lg:text-base text-white font-medium break-all">{personalInfo.email}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#00d4ff]/20 rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
                    <Phone className="text-[#00d4ff]" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs lg:text-sm text-gray-400">Phone</div>
                    <div className="text-sm lg:text-base text-white font-medium">{personalInfo.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#ff0080]/20 rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
                    <MapPin className="text-[#ff0080]" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs lg:text-sm text-gray-400">Location</div>
                    <div className="text-sm lg:text-base text-white font-medium">{personalInfo.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#00ff88]/20 rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
                    <Linkedin className="text-[#00ff88]" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs lg:text-sm text-gray-400">LinkedIn</div>
                    <a 
                      href={personalInfo.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs lg:text-sm text-[#00ff88] hover:text-[#00d4ff] transition-colors break-all"
                    >
                      Prajesh Prajapati                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-gray-700">
                <h4 className="text-base lg:text-lg font-semibold text-[#00d4ff] mb-3 lg:mb-4">Connect with me</h4>
                <div className="flex flex-wrap gap-3 lg:gap-4">
                  <a 
                    href={personalInfo.github} 
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-[#00ff88]/20 rounded-full flex items-center justify-center text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition-all duration-300"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-[#00d4ff]/20 rounded-full flex items-center justify-center text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black transition-all duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-[#ff0080]/20 rounded-full flex items-center justify-center text-[#ff0080] hover:bg-[#ff0080] hover:text-black transition-all duration-300"
                  >
                    <Twitter size={18} />
                  </a>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-[#00ff88]/20 rounded-full flex items-center justify-center text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition-all duration-300"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glassmorphism rounded-2xl p-6 lg:p-8 order-1 lg:order-2">
            <h3 className="text-xl lg:text-2xl font-bold text-[#ff0080] mb-4 lg:mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label className="block text-xs lg:text-sm font-medium text-gray-300 mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-gray-600 rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base text-white placeholder-gray-400 focus:border-[#00ff88] focus:outline-none focus:ring-2 focus:ring-[#00ff88]/20"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs lg:text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-gray-600 rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base text-white placeholder-gray-400 focus:border-[#00d4ff] focus:outline-none focus:ring-2 focus:ring-[#00d4ff]/20"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs lg:text-sm font-medium text-gray-300 mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base text-white placeholder-gray-400 focus:border-[#ff0080] focus:outline-none focus:ring-2 focus:ring-[#ff0080]/20"
                  placeholder="Project Discussion"
                  required
                />
              </div>
              
              <div>
                <label className="block text-xs lg:text-sm font-medium text-gray-300 mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base text-white placeholder-gray-400 focus:border-[#00ff88] focus:outline-none focus:ring-2 focus:ring-[#00ff88]/20 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold py-3 lg:py-4 rounded-lg hover:from-[#00d4ff] hover:to-[#ff0080] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none text-sm lg:text-base"
              >
                <Send className="mr-2" size={16} />
                {contactMutation.isPending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
