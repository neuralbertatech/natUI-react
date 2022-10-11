import { FunctionComponent } from "react";
import BaseProps from "./baseProps";
import * as RadixAvatar from "@radix-ui/react-avatar";

interface AvatarProps extends BaseProps {
  src: string;
  alt: string;
}

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
