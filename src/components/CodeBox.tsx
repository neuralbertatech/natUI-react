import type BaseProps from "src/types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import type { FunctionComponent } from "react";
import Highlight from "react-highlight";

type Language =
  "bash" |
  "c" |
  "cpp" |
  "curl" |
  "diff" |
  "dos" |
  "django" |
  "docker" |
  "md" |
  "python" |
  "r" |
  "rust" |
  "tex" |
  "txt" |
  "typescript";

/**
 * @interface
 * @property [code] {String} Text of code to display.
 * @property [language] {Language} The language to use for highlighting.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
interface CodeBoxProps extends BaseProps {
  code: String,
  language: Language;
}

/**
 * CodeBox Component
 * @component
 * @param [code] {String} Text of code to display.
 * @param [language] {Language} The language to use for highlighting.
 *
 * @author Gareth War <garethwar@gmail.com>
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const CodeBox: FunctionComponent<CodeBoxProps> = (props) => {
  return (
    <div style={props.style}>
      <Highlight className={props.language}>
        {props.code}
      </Highlight>
      <CopyToClipboard text={props.code}>
        <button>Copy</button>
      </CopyToClipboard>
    </div>
  );
};

export default CodeBox;
