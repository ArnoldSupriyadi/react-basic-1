import { useState } from "react";
import Input from "../../input/Input";

export default function StateInput() {
    const [nama, setNama] = useState<string>();
    return (
        <>
        <Input placeholder="Masukan nama" value={nama} onChange={((e) =>  {
            const newValue = e.target.value;
            console.log(newValue);
            setNama(e.target.value);
        })}/>
        <h1>{nama}</h1>
        </>
    )
}