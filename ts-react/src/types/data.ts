export interface IData {
  username: string;
  age: number;
  count: number;
}

export interface IDataItem {
  name: string;
}

export interface FirebaseList<T> {
  [key: string]: T;
}
