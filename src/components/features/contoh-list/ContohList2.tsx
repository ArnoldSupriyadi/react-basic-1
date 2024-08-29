
import CardAvatar from "../../cards/CardAvatar";

interface Biodata {
    name: string;
    age: number;
    image: string;
}

const ContohList2 = () => {
    const biodata : Biodata[] = [
        {
            name: "Jamet",
            age: 20,
            image: "https://www.w3schools.com/howto/img_avatar.png"
        },
        {
            name: "Juminten",
            age: 25,
            image: "https://www.w3schools.com/howto/img_avatar2.png"
        },
        {
            name: "Arnold",
            age: 25,
            image: "https://www.w3schools.com/howto/img_avatar.png"
        },
        {
            name: "Indah",
            age: 25,
            image: "https://www.w3schools.com/howto/img_avatar2.png"
        }
    ];

    return (
        <>
            <ul>
                {
                    biodata.map((item, index) => (
                        <li key={index}>
                            <CardAvatar name={item.name} age={item.age} image={item.image} />
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default ContohList2;
