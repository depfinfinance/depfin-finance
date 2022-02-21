import Head from 'next/head'
import Image from 'next/image'
import HomeLayout from '../Layouts/HomeLayout'


export default function Home() {
  return (
    <div className = "app">
      <Head>
        <title>
        Loans from R30 000 to R10 Million | Apply Now - Depfin Finance
        </title>
        <meta
          name="description"
          content="We offer personal loans of up to R200 000 with repayment terms ranging from 24 - 72 months. Apply for a loan today!"
        />
        {/* viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:title"
          content="Loan from R5000 to R200 000 | Apply in minutes - Depfin Finance"
        />
        <meta
          property="og:description"
          content="We offer personal loans of up to R200 000 with repayment terms ranging from 24 - 72 months. Apply for a loan today!"
        />
        <meta
          property="og:image"
          content="https://depfin.com.au/static/media/logo.png"
        />
        <meta property="og:url" content="https://depfin.com.au/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Depfin Finance" />
      </Head>

     

      <main>
       <HomeLayout />

      </main>
    </div>
  );
}
