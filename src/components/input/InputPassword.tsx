import { FunctionComponent } from "react";
import InputText from "./InputText";
import type { InputTextProps } from "./InputText";

interface InputPasswordProps extends InputTextProps {
  validation?: never;
}
// min 8 chars, min 1 uppercase letter, min 1 lowercase letter, min 1 num, min 1 special char
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const InputPassword: FunctionComponent<InputPasswordProps> = (props) => {
  return <InputText type="password" {...props} validation={passwordRegex} />;
};

export default InputPassword;
