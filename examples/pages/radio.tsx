import Head from "next/head";
import type { NextPage } from "next";
import { Radio } from "@neuralbertatech/react";

//import { useEffect, useState } from "react";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Radio Button</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        padding: "32px"
      }}>
        <Radio name="radio-test">Option 1</Radio>
        <Radio name="radio-test">Option 2</Radio>
        <Radio name="radio-test" disabled>Disabled Option</Radio>
      </main>
    </>
  );
};

export default Home;
