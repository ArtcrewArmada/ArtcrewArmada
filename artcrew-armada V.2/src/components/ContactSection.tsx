import React, { useState } from 'react';
import { Language } from '../types';
import { Mail, MapPin, Phone, Clock, CheckCircle } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('bespoke');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="bg-[#131313] py-24 px-6 md:px-16 border-t border-[#F5F2EA]/10">
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs text-[#B08A3E] uppercase tracking-[0.25em] font-semibold mb-3">
            {currentLang === 'TH' ? 'การนัดหมายและสั่งทำชิ้นงาน' : currentLang === 'FR' ? 'Atelier Privé & Sur-Mesure' : 'Private Salon & Bespoke Commissions'}
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#F5F2EA] uppercase tracking-wider mb-4">
            {currentLang === 'TH' ? 'ติดต่อเรา' : currentLang === 'FR' ? 'Contact' : 'Contact'}
          </h2>
          <div className="w-20 h-px bg-[#B08A3E] opacity-60 mb-6"></div>
          <p className="text-sm md:text-base text-[#AFAFA9] max-w-2xl font-light">
            {currentLang === 'TH'
              ? 'สำหรับการนัดหมายเข้าชมสตูดิโอแบบส่วนตัว การสั่งทำชิ้นงานคัสตอม หรือข้อเสนอความร่วมมือ'
              : currentLang === 'FR'
              ? 'Pour planifier une visite d\'atelier privée ou initier une commande spéciale.'
              : 'Arrange a private atelier consultation or commission a custom artifact forged from your own heirloom metals.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Atelier Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#181818] p-8 border border-[#F5F2EA]/10 space-y-6">
              <h3 className="font-serif-display text-2xl text-[#F5F2EA]">
                {currentLang === 'TH' ? 'สตูดิโออาร์มาดา' : 'ArtCrew Armada Ateliers'}
              </h3>

              <div className="flex items-start gap-4 text-xs text-[#AFAFA9]">
                <MapPin className="w-5 h-5 text-[#B08A3E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F2EA] block mb-1">Bangkok Atelier Sanctuary</strong>
                  Charoenkrung Creative District, Bangkok 10500, Thailand
                </div>
              </div>

              <div className="flex items-start gap-4 text-xs text-[#AFAFA9]">
                <MapPin className="w-5 h-5 text-[#B08A3E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F2EA] block mb-1">Paris Marais Salon</strong>
                  Rue de Turenne, 75003 Paris, France
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#AFAFA9]">
                <Clock className="w-5 h-5 text-[#B08A3E] shrink-0" />
                <div>
                  Tue – Sun: 11:00 AM – 7:00 PM (By Private Appointment Only)
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#AFAFA9]">
                <Mail className="w-5 h-5 text-[#B08A3E] shrink-0" />
                <div>atelier@artcrew-armada.com</div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#AFAFA9]">
                <Phone className="w-5 h-5 text-[#B08A3E] shrink-0" />
                <div>+66 (0) 2 892 4110 / +33 (0) 1 42 68 00 12</div>
              </div>
            </div>
          </div>

          {/* Contact & Bespoke Form */}
          <div className="lg:col-span-7 bg-[#181818] p-8 md:p-10 border border-[#F5F2EA]/10">
            {submitted ? (
              <div className="text-center py-16">
                <CheckCircle className="w-14 h-14 text-[#B08A3E] mx-auto mb-4" />
                <h3 className="font-serif-display text-2xl text-[#F5F2EA] mb-2">
                  {currentLang === 'TH' ? 'ส่งข้อความเรียบร้อยแล้ว' : currentLang === 'FR' ? 'Message Transmis' : 'Inquiry Received'}
                </h3>
                <p className="text-sm text-[#AFAFA9] font-light max-w-md mx-auto">
                  {currentLang === 'TH'
                    ? 'ภัณฑารักษ์ของเราจะติดต่อกลับทางอีเมลเพื่อยืนยันกำหนดการหรือรายละเอียดการสั่งทำ'
                    : 'Our head curator will respond with availability and material consultation guidelines.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif-display text-2xl text-[#F5F2EA] mb-2">
                  {currentLang === 'TH' ? 'ส่งคำขอปรึกษาช่างฝีมือ' : currentLang === 'FR' ? 'Formulaire de Demande' : 'Consultation Inquiry'}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[11px] uppercase tracking-widest text-[#AFAFA9] block mb-2 font-semibold">
                      {currentLang === 'TH' ? 'ชื่อของคุณ' : currentLang === 'FR' ? 'Votre Nom' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Elena Rostova"
                      className="w-full bg-transparent border-b border-[#F5F2EA]/30 focus:border-[#B08A3E] py-2 text-sm text-[#F5F2EA] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-widest text-[#AFAFA9] block mb-2 font-semibold">
                      {currentLang === 'TH' ? 'อีเมล' : currentLang === 'FR' ? 'Email' : 'Email'}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="client@luxury.com"
                      className="w-full bg-transparent border-b border-[#F5F2EA]/30 focus:border-[#B08A3E] py-2 text-sm text-[#F5F2EA] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-widest text-[#AFAFA9] block mb-2 font-semibold">
                    {currentLang === 'TH' ? 'ประเภทการติดต่อ' : currentLang === 'FR' ? 'Type de Demande' : 'Inquiry Nature'}
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-[#111111] border-b border-[#F5F2EA]/30 focus:border-[#B08A3E] py-2.5 px-2 text-sm text-[#F5F2EA] outline-none"
                  >
                    <option value="bespoke">{currentLang === 'TH' ? 'สั่งทำชิ้นงานเฉพาะบุคคล (Bespoke Commission)' : 'Bespoke Artifact Commission'}</option>
                    <option value="visit">{currentLang === 'TH' ? 'นัดหมายเยี่ยมชมสตูดิโอส่วนตัว (Private Atelier Visit)' : 'Private Atelier Visit'}</option>
                    <option value="acquisition">{currentLang === 'TH' ? 'สอบถามการครอบครองชิ้นงานพิเศษ (Museum Acquisition)' : 'Special Acquisition & Curation'}</option>
                    <option value="press">{currentLang === 'TH' ? 'การแถลงข่าวและสื่อมวลชน (Press & Collaborations)' : 'Press & Cultural Collaboration'}</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-widest text-[#AFAFA9] block mb-2 font-semibold">
                    {currentLang === 'TH' ? 'ข้อความหรือรายละเอียดความต้องการ' : currentLang === 'FR' ? 'Message' : 'Message Details'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={currentLang === 'TH' ? 'บอกเล่าถึงโลหะที่คุณต้องการรีไซเคิล หรือสไตล์ที่สนใจ...' : 'Describe your vision, metal preference, or preferred salon date...'}
                    className="w-full bg-transparent border border-[#F5F2EA]/20 focus:border-[#B08A3E] p-3 text-sm text-[#F5F2EA] outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#B08A3E] text-[#111111] py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#ebc06e] transition-colors cursor-pointer"
                >
                  {currentLang === 'TH' ? 'ส่งคำขอไปยังภัณฑารักษ์' : currentLang === 'FR' ? 'Envoyer la Demande' : 'Transmit Request to Atelier'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
