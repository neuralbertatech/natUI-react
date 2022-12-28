import CodeBox from "./codebox";

const MyApp = () => {
  const code = `This is the code that will be copied.
`;

  return (
    <CodeBox code={code} language="python" />
  );
}

export default MyApp;
