export const metadata = {

  title: "松田システム技研",
  description: "松田システム技研のホームページです。",

};


export default function Home() {


  return (



<main className="flex min-h-screen flex-col items-center justify-between p-12">



<div className="max-w-screen-md px-4 md:px-8 mx-auto">
 
    <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
      {/* <!-- content - start --> */}
      <div className="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
        <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">当社の取り組み</p>

        <h1 className="text-black-800 text-1xl sm:text-3xl md:text-3xl font-bold mb-8 md:mb-12">IT トランスフォーメーション</h1>

        <p className="lg:w-5/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">コンピューターの利用技術研究を通して培った独自のスキルや知見を役立てたいとの想いから、今必要とされている改革と将来の革新的な取り組みによりよく対応できるITインフ ラストラクチャーの設計、サービス導入と運用に関わるコストの削減をご支援します。</p>

    
      </div>


    </section>
  </div>



</main>

   
  )
}
