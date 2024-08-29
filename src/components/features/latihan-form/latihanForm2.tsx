import { FormEvent, useState } from "react";
import Button from "../../button/Button"
import Input from "../../input/Input"
import "./latihanForm.css";

interface Biodata {
    nama: string;
    email: string;
    noHp: string;
}
export default function LatihanForm() {
    
    const defaultState:Biodata = {
        nama: "",
        email: "",
        noHp: ""
    }

    const [form, setForm] = useState<Biodata>(defaultState);

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        console.log("form", form);
    }
    return (
        <>
        <form className="latihan_form" onSubmit={handleSubmit}>
            <h2>Form Biodata</h2>
            <div className="latihan_form_item">
                <label htmlFor="name">Nama</label>
                <Input
                    value={form?.nama} 
                    onChange={(e) => setForm({...form, nama: e.target.value})}
                    style={{ marginLeft: 10 }} 
                    placeholder="Masukan Nama" 
                    required />
            </div>
            <div className="latihan_form_item">
                <label htmlFor="email">Email</label>
                <Input
                    value={form?.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    style={{ marginLeft: 10 }} 
                    placeholder="Masukan Email" 
                    required />
            </div>
            <div className="latihan_form_item">
                <label htmlFor="text">No. HP</label>
                <Input
                    value={form?.noHp}
                    onChange={(e) => setForm({...form, noHp: e.target.value})} 
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