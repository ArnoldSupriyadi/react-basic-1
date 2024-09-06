import { FormEvent, useState, useEffect } from "react";
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
    const [error, setError] = useState<string | null>(null);

    const [biodatas, setBiodatas] = useState<Biodata[]>([]);

    const getData = async () => {
        try {
            const response = await fetch("http://localhost:3001/biodata", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setBiodatas(data);
        } catch (error) {
            // Menggunakan type assertion
        if (error instanceof Error) {
            setError(error.message);
            console.error("Error fetching data:", error.message);
            } else {
                setError("An unknown error occurred");
                console.error("Error fetching data:", error);
            }
        }
    };

    useEffect(() => {
        getData();
      }, []);

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        fetch("http://localhost:3001/biodata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
            .then(res => getData())
            .catch(err => alert("Data gagal disimpan"))
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

        <div>
            <h2>Data Biodata</h2>
            <ul>
                {biodatas.map((biodata, index) => (
                    <li key={index}>
                        <p>Nama: {biodata.nama}</p>
                        <p>Email: {biodata.email}</p>
                        <p>No. HP: {biodata.noHp}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}