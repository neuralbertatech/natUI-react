import BaseProps from "../types";
import type { FunctionComponent } from "react";

interface PDFProps extends BaseProps {
  file: string;
}

/**
 * PDF Component
 * @component
 * @param file {string} Valid URL for PDF file location.
 *
 * @author Nandan Ramesh <nandan@ualberta.ca>
 */
const PDF: FunctionComponent<PDFProps> = (props) => {

  return (
    <iframe src={props.file} className="w-full h-full">
    </iframe>
  );
};

export default PDF;
