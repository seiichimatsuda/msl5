export const metadata = {

  title: "環境活動",
  description: "松田システム技研の環境活動のページです。",

};


export default function Home() {
  return (
<main className="flex min-h-screen flex-col items-center justify-between p-12">



<div className="py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-md px-4 md:px-8 mx-auto">
  {/* <div className="max-w-screen-2xl px-4 md:px-8 mx-auto"> */}
    {/* <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">企業理念</h1> */}
  <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">環境への取り組み</h2>

<ul className="list-none list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
  <li>私たちは、事業活動の中に地球環境に関する取り組みを明確に位置づけ、環境保全と経済発展を両立させる持続可能な社会の実現をめざします</li>
  <li>私たちは、業務のあらゆる場面で、地球温暖化防止、化学物質の管理、資源の有効活用・廃棄物削減などの環境負荷低減に関する、一歩先の取り組みを推進します</li>
  <li>あわせて、取り組み状況やその成果を積極的に開示します</li>
</ul>

  
<h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">開発</h2>

<ul className="list-none list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
  <li>私たちは、研究開発、商品企画、設計段階において環境に配慮し、省エネルギー商品など環境への影響を最小化する商品・サービスを開発し、その普及に努めます</li>
</ul>

<h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">環境意識</h2>

<ul className="list-none list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
  <li>私たちは、あらゆる事業分野・部門・階層において環境に配慮した取り組みを推進するために、教育・啓発活動などを通じて環境意識の高揚に努めます</li>
  <li>あわせて、従業員が個人の生活においても地球環境の保全に配慮することを会社は支援します</li>
</ul>
  </div>
</div>




</main>

   
  )
}
