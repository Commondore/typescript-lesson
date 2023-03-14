/* Number */
// let num: number = 42;

// num = 2.2;

/* String */
// let firstname: string = "Mike";

// firstname = `My name ${firstname}`;

// const isCool: boolean = true;

// let some: number = 42;
// let some: unknown = null;

/* Union */
// let someData: number | string | null | undefined;

// type StringOrNumber = string | number;

// const someData: StringOrNumber = '42'

/* Array */
// const fruits: string[] = [];

// fruits.push('12')

// const userData: [string, number, boolean, ...string[]] = ["Mike", 42, true, 'dasda', '22'];

/* Functions */
// const logger = function (name: string): number {
//   console.log(name);

//   return 42;
// };
// const getData: (name: string) => number = logger;

// getData('42')

/* Type Guards */
// type titleType = string | number;

// const getTitle = (title: titleType): titleType => {
//   if (typeof title === "string") {
//     title.split("");
//   } else {
//     title.toFixed(2);
//   }

//   return title;
// };

/* Enum */
// enum Direction {
//   Up = "Up",
//   Down = "Down",
//   Left = "Left",
//   Right = "Right",
// }

// const getDirection = (dir: Direction): string => {
//   if (dir === Direction.Up) {
//     return "Вверх";
//   }
//   if (dir === Direction.Down) {
//     return "Вниз";
//   }
//   if (dir === Direction.Left) {
//     return "Влево";
//   }
//   if (dir === Direction.Right) {
//     return "Вправо";
//   }
//   return "Не задано направление";
// };

// getDirection(Direction.Up);

/* Interface */
// interface IUser {
//   name: string;
//   age: number;
//   greeting: (name: string) => string;
// }

// interface IUser {
//   lastname?: string;
// }

// enum ERole {
//   Admin = "admin",
//   Manager = "manager",
// }

// interface Admin extends IUser {
//   role: ERole;
// }

// type SimpleType = number | string;

// const user: IUser = {
//   name: "Mike",
//   age: 42,
//   greeting(name) {
//     return `Hello ${name}`;
//   },
// };

// const admin: Admin = {
//   name: "Mike",
//   age: 42,
//   greeting(name) {
//     return `Hello ${name}`;
//   },
//   role: ERole.Admin,
// };

// type Test = {
//   message: string;
// };

// type LogType = {
//   log: () => void;
// };

// type LogTestType = Test & LogType;

// const data: LogTestType = {
//   message: "Hello",
//   log() {
//     console.log(this.message);
//   },
// };

/* Generic */

// const greeting = function <T, K>(data: T, message: K): K {
//   console.log(data);

//   return message;
// };

// greeting<number, string>(42, "Mike");
// greeting<string, number>("42", 42);

// const data: Array<number> = [1, 2, 3];

// type.d.ts
// @types/swiper

// interface Simple<T> {
//   name: string;
//   age: number;
//   data: [T, T, T];
// }

// interface IData {
//   id: number;
//   title: string;
// }

// interface IData2 {
//   _id: string;
//   name: string;
// }

// const user: Simple<IData> = {
//   name: "Mike",
//   age: 42,
//   data: [
//     {
//       id: 1,
//       title: "title",
//     },
//     {
//       id: 1,
//       title: "title",
//     },
//     {
//       id: 1,
//       title: "title",
//     },
//   ],
// };


const getValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key]
}

const user = {
  name: "Mike"
}

getValue(user, 'name')
