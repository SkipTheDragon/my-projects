import {color, variant} from "@material-tailwind/react/types/components/button";

export default interface Button {
    content: string,
    color: color,
    url: string,
    type: variant,
    svg: SVGElement,
    isActive: boolean
}
