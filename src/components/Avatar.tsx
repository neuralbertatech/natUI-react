/**
 * @module @neuralbertatech/ui-react
 */
import * as RadixAvatar from "@radix-ui/react-avatar";

import BaseProps from "../types";
import { FunctionComponent } from "react";

/**
 * @interface
 * @property src {string} The image source url.
 * @property alt {string} The alternative attribute if the image cannot be displayed.
 */
interface AvatarProps extends BaseProps {
  src: string;
  alt: string;
}

/**
 * Avatar Component
 * @component
 * @param src {string} The image source url.
 * @param alt {string} The alternative attribute if the image cannot be displayed.
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const Avatar: FunctionComponent<AvatarProps> = (props) => {
  const initial = props.alt.length > 0 ? props.alt[0].toUpperCase() : "";
  return (
    <RadixAvatar.Root>
      <RadixAvatar.Image src={props.src} alt={props.alt} />
      <RadixAvatar.Fallback>{initial}</RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};

export default Avatar;
