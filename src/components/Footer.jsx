import React from "react";
import log from "../assets/AJ_logo_62909C.png"; // إذا عندك لوجو AJ بدّله هنا
import {
  SiVisa,
  SiMastercard,
  SiApplepay,
  SiGooglepay,
} from "react-icons/si";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Thw from "../assets/images__4_-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5]">
      {/* ===== شريط علوي FULL-BLEED بعرض الشاشة بالكامل ===== */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
        {/* الخلفية المنحنية */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 36"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M28 0 H100 V36 H28 A28 28 0 0 1 28 0 Z" fill="#62909C"/>
        </svg>

        {/* محتوى الشريط */}
        <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            {/* الشعار */}
<div className="shrink-0 self-start">
  <img
    src={log}
    alt="شعار AJ"
    className="w-28 md:w-40 object-contain select-none pointer-events-none invert brightness-0"
  /> 
</div>


            {/* وسائل الدفع */}
            <div className="text-white w-full md:w-auto md:ml-auto md:self-center">
              <div className="w-full flex justify-end">
                <div className="flex items-center gap-5 md:gap-6 mb-3 md:mb-4">
                  <SiVisa className="text-3xl md:text-4xl drop-shadow-sm" />
                  <SiMastercard className="text-3xl md:text-4xl drop-shadow-sm" />
                  <SiApplepay className="text-3xl md:text-4xl drop-shadow-sm" />
                  <img src={Thw} className="w-10 invert brightness-0" alt="Thawani" />
                </div>
              </div>

              <p className="text-right text-lg md:text-2xl font-semibold leading-relaxed">
                وسائل دفع متعددة
                <br />
                اختر وسيلة الدفع المناسبة
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ===== نهاية الشريط العلوي ===== */}

      {/* الأقسام السفلية */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-[#2e3528] md:text-right text-center">
          
          {/* AJ */}
          <div>
            <h4 className="text-xl font-bold mb-3">AJ</h4>
            <p className="text-sm leading-7 text-[#4a4a4a]">
              في AJ نبتكر عطورًا عصرية تجمع بين الفخامة والبساطة لتمنح كل لحظة حضوراً مختلفاً.
              نحرص على تجربة تسوّق سهلة، تغليف أنيق، وخدمة عملاء سريعة تلبي ذائقتك.
            </p>
          </div>

          {/* روابط مهمة */}
          <div>
            <h4 className="text-xl font-bold mb-3">روابط مهمة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#d3ae27] transition">
                  قصتنا
                </Link>
              </li>

              <li>
                <Link to="/shop" className="hover:text-[#d3ae27] transition">
                  المنتجات
                </Link>
              </li>
              <li>
                <Link
                  to="/return-policy"
                  className="hover:text-[#d3ae27] transition"
                >
                  سياسة الاستبدال والاسترجاع
                </Link>
              </li>
            </ul>
          </div>

          {/* تواصل معنا */}
          <div>
            <h4 className="text-xl font-bold mb-3">تواصل معنا</h4>
            <p className="text-sm mb-4">+96899106707</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.instagram.com/aj_perfume.om/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#d3ae27] transition"
                aria-label="Instagram - AJ"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=968999106707&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#d3ae27] transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* الحقوق */}
        <div className="border-t border-[#2e3528]/20 pt-4 pb-8 text-center text-sm text-[#4a4a4a]">
          جميع الحقوق محفوظة لدى متجر AJ —{" "}
          <a
            href="https://www.instagram.com/mobadeere/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#2e3528] transition-colors"
          >
            تصميم مبادر
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
