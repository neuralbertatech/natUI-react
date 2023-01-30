import BaseProps from "../types";
import type { FunctionComponent } from "react";

/**
 * @interface
 * @property file {string} The location of the video file.
 * @property [controls=true] {boolean} Whether or not to show controls for the video.
 *
 * @author Ganesh Saraswat <gsaraswa@ualberta.ca>
 */
interface VideoProps extends BaseProps {
  file: string;
  controls?: boolean;
}

/**
 * Video Component
 * @component
 * @param file {string} The location of the video file.
 * @param [controls=true] {boolean} Whether or not to show controls for the video.
 *
 * @author Ganesh Saraswat <gsaraswa@ualberta.ca>
 */
const Video: FunctionComponent<VideoProps> = (props) => {
  return (   
    <div>
      <video width="max-w-full" height="max-h-full" controls={props.controls}>
        <source src={props.file}></source>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

Video.defaultProps = {
  file:"",
  controls:true
};

export default Video;
