import { CodeBox } from "@neuralbertatech/react";

const MyApp = () => {
  const code = `This is the code that will be copied.
`;

  return (
    <CodeBox code={code} language="python" icon={<span>[c]</span>} />
  );
};

export default MyApp;