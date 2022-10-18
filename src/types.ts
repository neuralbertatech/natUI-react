import { CSSProperties } from "react";

/**
 * BaseProps
 * @interface
 * @property [style] {CSSProperties} Override CSS properties
 * @see https://github.com/frenic/csstype 
 */
interface BaseProps {
	style?: CSSProperties;
}

export default BaseProps;
