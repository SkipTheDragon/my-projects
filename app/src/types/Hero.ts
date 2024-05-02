import {Alert} from "./atoms/Alert.ts";
import Button from "./atoms/Button.ts";

export interface Hero {
    title:string,
    description:string,
    alert?: Alert;
    buttons?: Button[];
}
