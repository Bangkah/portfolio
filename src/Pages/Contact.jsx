import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Komentar from "../components/Commentar";
import { useNavigate } from "react-router-dom"; 
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const ContactPage = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mengirim data via AJAX ke Formspree
      await axios.post('https://formspree.io/f/xqpklqkb', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }, {
        headers: {
          'Accept': 'application/json'
        }
      });

      // Jika berhasil, langsung arahkan ke halaman thank you kustom 
      navigate('/thank-you');

    } catch (error) {
      alert('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f4f0e6] min-h-screen text-[#111111] pt-16 px-[5%] sm:px-[5%] lg:px-[10%]">
      {/* Header Section */}
      <div className="text-center mt-8 mb-12">
        <div className="inline-block relative group">
          <h2 data-aos="fade-down" className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#111111] relative z-10">
            Hubungi Saya
          </h2>
          <div className="absolute -bottom-2 -right-4 w-full h-1/2 bg-[#ff5c58] -z-10 border-3 border-[#111111]" />
        </div>
        <p data-aos="fade-up" className="text-[#111111] font-bold uppercase tracking-widest text-sm sm:text-base mt-6 max-w-2xl mx-auto">
          Punya pertanyaan? Kirimi saya pesan, dan saya akan segera membalasnya.
        </p>
      </div>

      <div className="py-8" id="Contact">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] 2xl:grid-cols-[40%_60%] gap-8 md:gap-12">
          
          {/* Left Column: Form & Social */}
          <div className="flex flex-col gap-8">
            <div className="bg-white border-4 border-[#111111] shadow-[8px_8px_0px_#111111] p-6 sm:p-10 rounded-sm" data-aos="fade-right">
              <div className="flex justify-between items-start mb-8 pb-6 border-b-4 border-[#111111]">
                <div>
                  <h2 className="text-3xl font-black uppercase text-[#111111] mb-2">
                    Kirim Pesan
                  </h2>
                  <p className="text-[#111111]/70 font-bold text-sm uppercase">
                    Mari bicarakan proyek Anda.
                  </p>
                </div>
                <div className="bg-[#ffcf33] p-3 border-3 border-[#111111] shadow-[3px_3px_0px_#111111] rotate-6">
                  <Share2 className="w-6 h-6 stroke-[3] text-[#111111]" />
                </div>
              </div>

              {/* Form menggunakan onSubmit JavaScript */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Input Name */}
                <div className="relative group">
                  <label className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#111111] bg-[#ffcf33] px-2 py-0.5 border-2 border-[#111111] shadow-[2px_2px_0px_#111111] rounded-sm mb-1">
                    <User className="w-3.5 h-3.5 stroke-[2.5]" />
                    Nama
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Masukkan nama Anda..."
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-3 bg-white text-[#111111] font-semibold border-3 border-[#111111] shadow-[4px_4px_0px_#111111] focus:shadow-[6px_6px_0px_#111111] focus:bg-[#fffde7] focus:-translate-x-0.5 focus:-translate-y-0.5 transition-all outline-none rounded-sm placeholder-[#111111]/40 disabled:opacity-50"
                    required
                  />
                </div>

                {/* Input Email */}
                <div className="relative group">
                  <label className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#111111] bg-[#4fc3f7] px-2 py-0.5 border-2 border-[#111111] shadow-[2px_2px_0px_#111111] rounded-sm mb-1">
                    <Mail className="w-3.5 h-3.5 stroke-[2.5]" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Masukkan email Anda..."
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-3 bg-white text-[#111111] font-semibold border-3 border-[#111111] shadow-[4px_4px_0px_#111111] focus:shadow-[6px_6px_0px_#111111] focus:bg-[#fffde7] focus:-translate-x-0.5 focus:-translate-y-0.5 transition-all outline-none rounded-sm placeholder-[#111111]/40 disabled:opacity-50"
                    required
                  />
                </div>

                {/* Input Message */}
                <div className="relative group">
                  <label className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#111111] bg-[#7bd88f] px-2 py-0.5 border-2 border-[#111111] shadow-[2px_2px_0px_#111111] rounded-sm mb-1">
                    <MessageSquare className="w-3.5 h-3.5 stroke-[2.5]" />
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    placeholder="Masukkan pesan Anda..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full resize-none h-[120px] p-3 bg-white text-[#111111] font-semibold border-3 border-[#111111] shadow-[4px_4px_0px_#111111] focus:shadow-[6px_6px_0px_#111111] focus:bg-[#fffde7] focus:-translate-x-0.5 focus:-translate-y-0.5 transition-all outline-none rounded-sm placeholder-[#111111]/40 disabled:opacity-50"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#111111] text-white py-4 font-black uppercase tracking-wider border-3 border-[#111111] shadow-[6px_6px_0px_#ff5c58] hover:bg-[#ff5c58] hover:text-[#111111] hover:shadow-[6px_6px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_#111111] transition-all flex items-center justify-center gap-2 rounded-sm cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-5 h-5 stroke-[3]" />
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            </div>

            <div data-aos="fade-up">
              <SocialLinks />
            </div>
          </div>

          {/* Right Column: Comments */}
          <div className="bg-white border-4 border-[#111111] shadow-[8px_8px_0px_#111111] p-4 md:p-8 rounded-sm h-fit" data-aos="fade-left">
            <Komentar />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;