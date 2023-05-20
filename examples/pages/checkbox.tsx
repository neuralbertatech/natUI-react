import { ChangeEvent, useState } from "react";

import { CheckBox } from "@neuralbertatech/react";
import Head from "next/head";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [isCheckedtest, setIsChecked] = useState(false);
  const handletestbox = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return(
    <>
    
      <Head>
        <title>CheckBox test</title>
      </Head>
      <main style={{padding: "32px"}}>
        <CheckBox name="test" isChecked={isCheckedtest} handleChange={handletestbox} style={{margin :"2ex"}}> test_test </CheckBox>
      </main>
    </>
  );
};

export default Home;