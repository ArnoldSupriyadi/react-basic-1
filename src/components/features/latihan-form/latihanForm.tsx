import { FormEvent, useState } from "react";
import Button from "../../button/Button"
import Input from "../../input/Input"
import "./latihanForm.css";

export default function LatihanForm() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [noHp, setNoHp] = useState("");

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        console.log("Nama: ", nama);
        console.log("Email: ", email);
        console.log("No. HP: ", noHp);
    }
    return (
        <>
        <form className="latihan_form" onSubmit={handleSubmit}>
            <h2>Form Biodata</h2>
            <div className="latihan_form_item">
                <label htmlFor="name">Nama</label>
                <Input
                    value={nama} 
                    onChange={(e) => setNama(e.target.value)}
                    style={{ marginLeft: 10 }} 
                    placeholder="Masukan Nama" 
                    required />
            </div>
            <div className="latihan_form_item">
                <label htmlFor="email">Email</label>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    style={{ marginLeft: 10 }} 
                    placeholder="Masukan Email" 
                    required />
            </div>
            <div className="latihan_form_item">
                <label htmlFor="text">No. HP</label>
                <Input
                    value={noHp}
                    onChange={(e) => setNoHp(e.target.value)} 
                    style={{ marginLeft: 10 }} 
                    placeholder="Masukan No. HP" 
                    required />
            </div>
            <div style={{ marginTop: 20 }}>
                <Button label="Submit" />
            </div>
        </form>
        </>
    )
}