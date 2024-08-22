import { FC, InputHTMLAttributes } from "react";

type typeInput = "text" | "number" | "password";
interface Props extends InputHTMLAttributes<HTMLInputElement>{
    placeholder? : string;
    value? : number | string;
    type? : typeInput;
}
const Input : FC<Props> = ({ placeholder, type, value, ...props}) => {
    return (
        <>
            <input type={type} placeholder={placeholder} value={value} {...props} />
        </>
    )
}
Input.defaultProps = { placeholder: "Masukan Data", type: "text"};
export default Input;

