
export const metadata = {

  title: "企業理念",
  description: "松田システム技研の企業理念のページです。",

};

export default function Home() {
  return (
<main className="flex min-h-screen flex-col items-center justify-between p-12">



<div className="py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-md px-4 md:px-8 mx-auto">
  {/* <div className="max-w-screen-2xl px-4 md:px-8 mx-auto"> */}
    {/* <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">企業理念</h1> */}
  <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">企業理念</h2>

<ul className="list-none list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
  <li>私たちは、グローバルで革新的な経営により、社会との調和ある成長をめざす</li>
  <li>私たちは、開かれた取引関係を基本に、互いに研究と創造に努め、長期安定的な成長と共存共栄を実現する</li>
  <li>私たちは、おたがいの個性・能力を認め合い、公正・透明な企業活動につとめ開かれた企業を目指します</li>
  <li>私たちは、自然と恵みと多くの人々との出会いに感謝し、自然生態系と人間性を尊重します</li>
</ul>

  
<h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">行動基準</h2>

<ul className="list-none list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
  <li>異文化を理解し、誠実かつ行動的な国際人をめざす</li>
  <li>常にお客様の目線で考え、お互いに協力して行動する</li>
  <li>先達のチャレンジ精神を継承し、自ら考え、進んで行動する</li>
  <li>健康と明朗をモットーとし、人格の向上につとめる</li>
</ul>

<h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">法令と企業倫理の順守</h2>

<ul className="list-none list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
  <li>法令と企業倫理の順守は経営の根幹</li>
  <li>公正な行動</li>
  <li>関係法令の社内徹底</li>
  <li>法令違反の早期是正と厳正な対処</li>
</ul>
  </div>
</div>









</main>

   
  )
}
