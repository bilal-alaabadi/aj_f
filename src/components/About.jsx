import React from 'react';
import { Link } from 'react-router-dom';
import perfumeImg from '../assets/IMG_5112.jpg';

const About = () => {
  return (
    <div dir="rtl" className="bg-white text-[#4E5A3F]">
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* الصورة */}
          <div className="md:w-1/2">
            <img
              src={perfumeImg}
              alt="عطور AJ العصرية"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg transform scale-105"
            />
          </div>

          {/* المحتوى النصي */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-[#d3ae27] mb-6">
              AJ: عطور عصرية تجمع بين الفخامة والبساطة
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-2xl italic text-[#9B2D1F]">
                "العطر الذي يبدأ بك… ولا ينتهي"
              </p>

              <p>
                AJ علامة عطور عصرية صنعت لتمنح كل لحظة حضوراً مختلفاً، بلمسة تجمع بين الغموض والأناقة.
              </p>

              <p>
                نحن نركّز على ابتكار عطور مميزة ولا تُنسى؛ مستوحاة من الشغف والبحث عن التميز في كل تفصيلة.
              </p>

              <p>
                كل تركيبة في AJ تحمل حكاية فريدة، لتصبح أكثر من مجرد عطر عابر؛ إنها توقيع شخصي يعكس هويتك ويترك أثراً لا يُمحى.
              </p>

              <p>
                مهمتنا ليست فقط صناعة الروائح، بل منحك وسيلة للتعبير عن ذاتك، لتجعل من كل لحظة ذكرى تدوم.
              </p>

              <p className="font-semibold text-[#4E5A3F]">
                AJ... حيث تلتقي الفخامة بالبساطة، وتولد الروائح لتبقى خالدة.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl text-[#d3ae27] font-semibold">
            AJ: العطر الذي يبدأ بك… ولا ينتهي
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
