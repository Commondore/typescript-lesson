import { useState } from "react";
import { postData } from "../../api";
import { IData } from "../../types/data";

interface FormProps {
  count: number;
}

export const Form = ({ count }: FormProps) => {
  const [data, setData] = useState({
    username: "",
    age: "",
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentData: IData = {
      ...data,
      age: parseInt(data.age),
      count,
    };

    const result = await postData(currentData);

    console.log(result);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input onChange={changeHandler} type="text" name="username" />
        </div>

        <div>
          <input type="text" name="age" onChange={changeHandler} />
        </div>

        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};
