import Highlight from 'react-highlight';
import { useRef } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const CodeBox = ({ code, language }) => {
  const codeRef = useRef(null);

  const handleCopyClick = () => {
    copy(codeRef.current.textContent);
  }

  return (
    <div>
      <Highlight ref={codeRef} className={language}>
        {code}
      </Highlight>
      <CopyToClipboard text={code}>
      <button>Copy</button>
      </CopyToClipboard>
      
    </div>
  );
}

export default CodeBox;