import { ChangeEvent, useState } from "react";
import Input from "./components/input/Input";

function App() {
  const [nama, setNama] = useState<string>();

  const handleChangeNama = (e: ChangeEvent<HTMLInputElement>) => {
      setNama(e.target.value);
  };

  return (
    <div className="App">
        <Input onChange={handleChangeNama} />
        <h1>{nama}</h1>
        <br />
        {nama == "john" ? (
          <div>
            <h1>Nama kamu adalah {nama}</h1>
          </div>
        ) : (
          <div>
            <h1>Nama kamu bukan john</h1>
          </div>
        )}
    </div>
  )
};

export default App;