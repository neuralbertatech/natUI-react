import type { CSSProperties } from "react";

/**
 * BaseProps
 * @interface
 * @property [style] {CSSProperties} Override CSS properties
 *
 * @see https://github.com/frenic/csstype 
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
interface BaseProps {
	style?: CSSProperties;
}

export default BaseProps;
