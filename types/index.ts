import { MouseEventHandler } from "react";
import { CustomButton } from "@/components";


export interface CustomButtonProps{
    title:string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}