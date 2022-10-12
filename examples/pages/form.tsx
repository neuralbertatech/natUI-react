import type { NextPage } from "next";
import Head from "next/head";
// TODO: refactor InputText, InputEmail, InputNumber to reuse same logic (possible higher order component)
// TODO: create InputPassword
import InputText, { InputTextState } from "@neuralbertatech/react/lib/InputText";
import InputEmail, { InputEmailState } from "@neuralbertatech/react/lib/InputEmail";
import InputNumber, { InputNumberState } from "@neuralbertatech/react/lib/InputNumber";
import Button from "@neuralbertatech/react/lib/Button";
import { useEffect, useState } from "react";

interface Form {
  name: string;
  email: string;
  age: number;
}

const Home: NextPage = () => {
  const [name, setName] = useState<InputTextState>({
    value: "",
  });
  const [email, setEmail] = useState<InputEmailState>({
    value: "",
  });
  const [age, setAge] = useState<InputNumberState>({
    value: 0,
  });
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    age: 0,
  });
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    setForm({
      name: name,
      email: email,
      age: age,
    });
    setDisableButton(Object.values(form)
      .some((value) => value.valid === false));
  }, [name, email]);

  return (
    <div>
      <Head>
        <title>Form</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        width: "100vw",
        height: "100vh"
      }}>
        <form>
          <label>Name</label>
          <InputText placeholder="Boaty McBoatface" validation={/\w+\s\w+/} state={[name, setName]} />
          <label>Email</label>
          <InputEmail placeholder="example@neuralberta.tech" state={[email, setEmail]} />
          <label>Age</label>
          <InputNumber placeholder="Email" state={[age, setAge]} min={0} max={5} />
        </form>
        <Button text="Log" onClick={() => console.table(form)} disabled={disableButton} />
      </main>
    </div>
  );
};

export default Home;
