import CodeBox from "./codebox";

const MyApp = () => {
  const code = `code to be entered
`;

  return (
    <CodeBox code={code} language="python" />
  );
}

export default MyApp;
