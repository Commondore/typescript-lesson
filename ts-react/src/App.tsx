import { useEffect, useState } from "react";
import { fetchData } from "./api";
import "./App.css";
import { CounterButton } from "./components/CounterButton";
import { Form } from "./components/Form";
import { IData } from "./types/data";

interface StateList extends IData {
  id: string;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [list, setList] = useState<StateList[] | []>([]);

  const increase = () => setCount((v) => v + 1);

  useEffect(() => {
    fetchData().then((data) => {
      const result = Object.keys(data).map((key) => {
        return {
          ...data[key],
          id: key,
        };
      });

      setList(result);
    });
  }, []);

  return (
    <div className="App">
      <Form count={count} />
      <CounterButton count={count} click={increase}>
        Count is
      </CounterButton>

      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              {item.username} age: {item.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
