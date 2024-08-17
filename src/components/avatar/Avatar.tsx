import './Avatar.css';
import { FC } from 'react'; 

type size = "lg" | "sm" | "md";

interface Props {
    url?: string;
    label?: string;
    size? : size;
}

const Avatar : FC<Props> = ({ label, url, size }) => {
    return (
        <>
            <div className={`avatar avatar_${size}`}>
                {url && <img src={url} alt={label} />}
            </div>
        </>
    )
}

Avatar.defaultProps = { size: "md" };

export default Avatar;