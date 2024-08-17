import { FC } from 'react';
import './Button.css';

type variant = "primary" | "secondary";

interface Props {
    label? : string;
    variant? : variant;
}

const Button: FC<Props> = ({label, variant})=> {
    const style = "button_" + variant;
    return (
        <button className={style}>
            {label}
        </button>
    )
}

Button.defaultProps = {
    variant: "primary",
};

export default Button;