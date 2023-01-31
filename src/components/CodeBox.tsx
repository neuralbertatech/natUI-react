import type { FunctionComponent, ReactElement } from "react";

import type BaseProps from "src/types";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
 * @property [icon] {ReactElement} The element to use for the copy button.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
interface CodeBoxProps extends BaseProps {
  code: String,
  language: Language,
  icon: ReactElement,
}

/**
 * CodeBox Component
 * @component
 * @param [code] {String} Text of code to display.
 * @param [language] {Language} The language to use for highlighting.
 * @param [icon] {ReactElement} The element to use for the copy button.
 *
 * @author Gareth War <garethwar@gmail.com>
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const CodeBox: FunctionComponent<CodeBoxProps> = (props) => {
  return (
    <div style={props.style} className="code">
      <Highlight className={props.language}>
        {props.code}
      </Highlight>
      <div style={{
        position: "absolute",
        top: 2,
        right: 2,
      }}>
        <CopyToClipboard text={props.code}>
          <button className="button is-outlined is-dark" style={{
            border: "1px",
          }}>{props.icon}</button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CodeBox;
