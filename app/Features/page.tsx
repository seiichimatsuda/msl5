

// export const metadata = {

//   title: "事業分野",
//   description: "松田システム技研の事業分野のページです。",

// };



export default function Home() {
  return (
<main className="flex min-h-screen flex-col items-center justify-between p-12">



<div className="py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-md px-4 md:px-8 mx-auto">
  {/* <div className="max-w-screen-2xl px-4 md:px-8 mx-auto"> */}
    <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">事業分野</h1>

 

    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">研究開発</h2>

    <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">一歩先を行くアイディアを、製品やサービスとして具現化するために、 先端技術や先 進 デザインの研究・開発に日々、取り組んでいます。</p>


    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">先端技術のご紹介</h2>

<p className="text-gray-500 sm:text-lg">SoC（ System-on-a-chip）は、1つの半導体チップ上に必要とされる 一連の機能を集積 する集積回路の設計手法です。
現在、FPGA（Field Programmable Gate Array）を使ったSoC開発技術 研究に取り組んで います。</p>

  </div>
</div>






</main>

   
  )
}
