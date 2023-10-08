
export const metadata = {

  title: "お問合せページ",
  description: "松田システム技研のお問合せページです。",

};




export default function Home() {
  return (
<main className="flex min-h-screen flex-col items-center justify-between p-12">





<div className="py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-md px-4 md:px-8 mx-auto">
  {/* <div className="max-w-screen-2xl px-4 md:px-8 mx-auto"> */}
    {/* <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">企業理念</h1> */}
 
{/*  
  <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">サービスに関するお問い合わせ</h2>
<ul className="list-none list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
  <li>###</li>
</ul> */}

  
{/* <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">コンサルティングに関するお問い合わせ</h2>

<ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
  <li>##</li>
</ul> */}

<h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">お問い合わせ</h2>



<ul className="list-none list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
<li>お問合せ、打合せ、ご連絡については、<a  href="https://msl-contact.square.site/"style={{
              textDecoration: 'underline',
              color: 'blue',
             
            }}>問合せページ</a>からお問合せ下さい。ご連絡さしあげるまでに数日かかる場合がございます。また、内容によってはお答えできない場合がございますので、あらかじめご了承願います。</li>

  <br />



</ul>


  </div>
</div>






</main>

   
  )
}
