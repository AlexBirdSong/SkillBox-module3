// 1 задание

function concat(left:string, right:string):string{
       return left + right;
}
const result = concat('Hello ', 'World')


//2 задание

interface hometaskInterface{
    howIDoIt:string;
    simeArray:[string,string, number];
    withData: [{howIDoIt:string,simeArray:[string, number]}];
}

const MyHometask:hometaskInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

//3 задание

interface MyArray<T>{
   [N: number]: T;
   reduce<U>(fn: (accumulator:T , value:T)=> U ,initialValue: T):U;
}

const myVar: MyArray<number> = [1,2,3];
const initialValue = 0;
myVar.reduce((accumulator, value) => accumulator + value, initialValue); // -> 6

//4 задание

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

