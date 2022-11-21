import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen w-full flex items-center justify-center bg-white ">
        <p>section1</p>
      </div>

      <div className="min-h-screen w-full bg-slate-50 flex justify-center items-center bg-[url('/assets/Group291.svg')] bg-no-repeat bg-fill bg-center bg-blue/20 bg-blend-multiply">
        <div className="max-w-screen-xl w-full flex justify-center items-center"></div>
      </div>
    </Layout>
  );
}
