import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Provide your Web3Forms access key here
    formData.append("access_key", "e7f0fde3-8dc8-4dc7-ab0d-8cb0340e8100");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your message has been sent to Abhishek.");
        setIsSuccess(true);
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        setIsSuccess(false);
      }
    } catch (error) {
      console.log("Error submitting form", error);
      setResult("Something went wrong! Please try sending an email directly.");
      setIsSuccess(false);
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <p className="text-brand-primary font-medium tracking-widest uppercase mb-2">Reach Out</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-black mb-6 text-white uppercase tracking-tight">Let's work together!</h3>
            <p className="text-gray-400 mb-10 leading-relaxed font-medium">
              I am currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="bg-brand-primary/10 p-4 rounded-xl text-brand-primary shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Email</h4>
                  <a href="mailto:abhisheksingh639328@gmail.com" className="text-lg font-bold text-white hover:text-brand-primary transition-colors">
                    abhisheksingh639328@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="bg-brand-primary/10 p-4 rounded-xl text-brand-primary shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Phone</h4>
                  <a href="tel:+919670390654" className="text-lg font-bold text-white hover:text-brand-primary transition-colors">
                    +91 9670390654
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="bg-brand-primary/10 p-4 rounded-xl text-brand-primary shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-lg font-bold text-white">Phagwara, Punjab, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 rounded-2xl border border-dark-border flex flex-col justify-center"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle2 size={80} className="text-[#55f76bff] mb-6 drop-shadow-[0_0_15px_rgba(85,247,107,0.5)]" />
                <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4">Message Sent!</h3>
                <p className="text-brand-primary font-bold text-lg mb-6">{result}</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-dark-card border border-dark-border hover:border-brand-primary px-8 py-3 rounded-lg text-white font-bold transition-all uppercase tracking-widest text-sm"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Your Name</label>
                  <input type="text" name="name" required className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-4 text-white font-medium focus:outline-none focus:border-brand-primary transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Your Email</label>
                  <input type="email" name="email" required className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-4 text-white font-medium focus:outline-none focus:border-brand-primary transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Message</label>
                  <textarea name="message" required rows="4" className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-4 text-white font-medium focus:outline-none focus:border-brand-primary transition-colors resize-none" placeholder="How can I help you?"></textarea>
                </div>
                <button disabled={isSubmitting} className={`w-full ${isSubmitting ? 'bg-gray-600' : 'bg-brand-primary hover:bg-brand-primary/80'} text-white font-black uppercase tracking-widest py-4 rounded-lg flex items-center justify-center space-x-3 transition-all disabled:opacity-70 disabled:cursor-not-allowed`}>
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <Send size={18} />}
                </button>
                {result && !isSuccess && (
                  <p className="text-red-400 text-sm font-bold text-center mt-4">{result}</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
