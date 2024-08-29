interface Biodata {
    name: string;
    age: number;
}

export default function ContohList() {

    const biodata : Biodata[] = [
        {
            name: "Jamet",
            age: 20
        },
        {
            name: "Juminten",
            age: 25
        },
        {
            name: "Arnold",
            age: 25
        },
        {
            name: "Indah",
            age: 25
        }
    ];

    
    return (
        <>
            <ol>
                {
                    biodata.map((item, index) => (<li key={index}>{item.name}, umur: {item.age}</li>))
                }
            </ol>
        </>
    )
}