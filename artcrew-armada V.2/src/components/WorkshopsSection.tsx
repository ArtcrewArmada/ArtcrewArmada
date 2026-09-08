import React, { useState } from 'react';
import { WORKSHOPS_DATA } from '../data/content';
import { WorkshopItem, Language } from '../types';
import { Calendar, Clock, User, CheckCircle, Users } from 'lucide-react';

interface WorkshopsSectionProps {
  currentLang: Language;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({ currentLang }) => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopItem | null>(null);
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');

  const formatPrice = (price: WorkshopItem['price']) => {
    if (currentLang === 'TH') return `฿${price.THB.toLocaleString()}`;
    if (currentLang === 'FR') return `${price.EUR.toLocaleString()} €`;
    return `$${price.USD.toLocaleString()}`;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingEmail) return;
    setIsBooked(true);
    setTimeout(() => {
      setIsBooked(false);
      setSelectedWorkshop(null);
      setBookingName('');
      setBookingEmail('');
    }, 3000);
  };

  return (
    <section id="learning" className="bg-[#111111] py-24 px-6 md:px-16 border-t border-[#F5F2EA]/10">
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs text-[#B08A3E] uppercase tracking-[0.25em] font-semibold mb-3">
            {currentLang === 'TH' ? 'สถาบันหัตถศิลป์หมุนเวียน' : currentLang === 'FR' ? 'Académie Circulaire & Ateliers' : 'Apprenticeships & Masterclasses'}
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#F5F2EA] uppercase tracking-wider mb-4">
            {currentLang === 'TH' ? 'การเรียนรู้และกิจกรรม' : currentLang === 'FR' ? 'Learning & Activities' : 'Learning & Activities'}
          </h2>
          <div className="w-20 h-px bg-[#B08A3E] opacity-60 mb-6"></div>
          <p className="text-sm md:text-base text-[#AFAFA9] max-w-2xl font-light">
            {currentLang === 'TH'
              ? 'ลงมือสร้างสรรค์เครื่องประดับและประติมากรรมโลหะด้วยตัวคุณเอง ร่วมกับช่างฝีมือชั้นครูในสตูดิโอบรรยากาศส่วนตัว'
              : currentLang === 'FR'
              ? 'Participez à des ateliers immersifs de joaillerie et travail des métaux upcyclés avec nos maîtres artisans.'
              : 'Immersive small-cohort atelier masterclasses transmitting rare ancestral metalworking and circular jewelry techniques.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {WORKSHOPS_DATA.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-[#181818] border border-[#F5F2EA]/15 overflow-hidden flex flex-col hover:border-[#B08A3E]/60 transition-all duration-300 shadow-xl"
            >
              <div className="relative aspect-[16/9] bg-[#111111] overflow-hidden">
                <img
                  src={workshop.image}
                  alt={workshop.title[currentLang]}
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#111111]/90 border border-[#B08A3E]/40 px-3 py-1 text-xs text-[#B08A3E] font-semibold uppercase tracking-wider">
                  {workshop.level[currentLang]}
                </div>
                <div className="absolute bottom-4 right-4 bg-[#B08A3E] text-[#111111] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  {workshop.spotsLeft} {currentLang === 'TH' ? 'ที่นั่งเหลือ' : currentLang === 'FR' ? 'places' : 'spots left'}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif-display text-2xl text-[#F5F2EA] mb-4 leading-snug">
                  {workshop.title[currentLang]}
                </h3>

                <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs text-[#AFAFA9] mb-6 py-4 border-y border-[#F5F2EA]/10">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#B08A3E]" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#B08A3E]" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <User className="w-4 h-4 text-[#B08A3E]" />
                    <span>{workshop.instructor[currentLang]}</span>
                  </div>
                </div>

                <p className="text-sm text-[#AFAFA9] leading-relaxed font-light mb-6 flex-1">
                  {workshop.description[currentLang]}
                </p>

                <div className="space-y-2 mb-8">
                  <span className="text-[11px] uppercase tracking-widest text-[#B08A3E] font-semibold block">
                    {currentLang === 'TH' ? 'สิ่งที่รวมในคอร์ส:' : currentLang === 'FR' ? 'Inclus:' : 'Workshop Inclusions:'}
                  </span>
                  {workshop.includes[currentLang].map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#F5F2EA]/90 font-light">
                      <CheckCircle className="w-3.5 h-3.5 text-[#B08A3E] shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-[#AFAFA9] block">
                      {currentLang === 'TH' ? 'ค่าลงทะเบียน' : currentLang === 'FR' ? 'Tarif' : 'Tuition'}
                    </span>
                    <span className="font-serif-display text-2xl text-[#B08A3E] font-semibold">
                      {formatPrice(workshop.price)}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedWorkshop(workshop)}
                    className="bg-[#F5F2EA] text-[#111111] text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-[#B08A3E] hover:text-[#F5F2EA] transition-colors cursor-pointer"
                  >
                    {currentLang === 'TH' ? 'สำรองที่นั่ง' : currentLang === 'FR' ? 'Réserver' : 'Reserve Spot'}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal for Booking Workshop */}
        {selectedWorkshop && (
          <div className="fixed inset-0 z-50 bg-[#111111]/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#181818] border border-[#B08A3E]/40 max-w-lg w-full p-8 relative shadow-2xl">
              <button
                onClick={() => setSelectedWorkshop(null)}
                className="absolute top-4 right-4 text-[#AFAFA9] hover:text-[#F5F2EA] text-lg p-2"
              >
                ✕
              </button>

              <h3 className="font-serif-display text-2xl text-[#F5F2EA] mb-2">
                {selectedWorkshop.title[currentLang]}
              </h3>
              <p className="text-xs text-[#B08A3E] uppercase tracking-widest mb-6">
                {selectedWorkshop.date} • {formatPrice(selectedWorkshop.price)}
              </p>

              {isBooked ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-[#B08A3E] mx-auto mb-3" />
                  <h4 className="font-serif-display text-xl text-[#F5F2EA] mb-2">
                    {currentLang === 'TH' ? 'ลงทะเบียนสำเร็จ' : currentLang === 'FR' ? 'Réservation Confirmée' : 'Seat Reserved'}
                  </h4>
                  <p className="text-xs text-[#AFAFA9]">
                    {currentLang === 'TH' 
                      ? 'เราได้ส่งรายละเอียดและคำแนะนำเตรียมตัวไปยังอีเมลของคุณแล้ว' 
                      : 'Confirmation and preparation guide sent to your inbox.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-widest text-[#AFAFA9] block mb-1">
                      {currentLang === 'TH' ? 'ชื่อ - นามสกุล' : currentLang === 'FR' ? 'Nom Complet' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      placeholder="e.g. Master Ananda"
                      className="w-full bg-[#111111] border-b border-[#F5F2EA]/30 focus:border-[#B08A3E] py-2 px-1 text-sm text-[#F5F2EA] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-widest text-[#AFAFA9] block mb-1">
                      {currentLang === 'TH' ? 'อีเมลสำหรับยืนยัน' : currentLang === 'FR' ? 'Adresse E-mail' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      required
                      value={bookingEmail}
                      onChange={(e) => setBookingEmail(e.target.value)}
                      placeholder="artisan@armada.com"
                      className="w-full bg-[#111111] border-b border-[#F5F2EA]/30 focus:border-[#B08A3E] py-2 px-1 text-sm text-[#F5F2EA] outline-none"
                    />
                  </div>

                  <div className="pt-4 flex gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-[#B08A3E] text-[#111111] py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#ebc06e] transition-colors cursor-pointer"
                    >
                      {currentLang === 'TH' ? 'ยืนยันการสำรองที่นั่ง' : currentLang === 'FR' ? 'Confirmer' : 'Confirm Registration'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedWorkshop(null)}
                      className="border border-[#F5F2EA]/20 text-[#AFAFA9] px-4 text-xs uppercase hover:text-[#F5F2EA]"
                    >
                      {currentLang === 'TH' ? 'ยกเลิก' : 'Cancel'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
