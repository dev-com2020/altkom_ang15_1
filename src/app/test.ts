// let marka: string = 'Yeti';
// var message: string = `Obecnie dobrą marką mikrofonów jest ${marka}`;

function test(): void {
    const a = 0
}

function sayHello(name:string): string {
    return 'Witaj ' + name
}

const sayHello2 = function(name:string): string {
    return 'Witaj ' + name
}

const sayHello3: (name:string) => string = function(name:string): string {
    return 'Witaj ' + name
}


function sayHello4(name:string, greet?:string): string {
    if (!greet) {
        greet = 'Hello'
    }
    return greet + ' ' + name
}

// function add(optional?:number, mandatory: string){}

function sayHello5(name:string, greet:string = "Hello"): string {

    return `${greet} + ' ' + ${name}`
}

function sayHello6(name:string, ...names:string[]): string {

    return `${names}`
}

// const double = x: => x:number * 2
const double = (x: number) => x * 2;
const add = (x:number,y:number) => x + y


let res = add(5,7)
console.log(res)

let res2 = double(5)
console.log(res2)


let i = 3
for (let i = 0; i < 10; i++){

}

const PI = 3.14
const age: number = 7
const wzrost: number = 1.74

const isZero: boolean = false

const marki: string[] = ['A','B']
const ages: number[] = [4,3,55,22]

let obszar: any
obszar = '1000km'
obszar = 3000

const distances: any[] = ['1000',1000]

type Animal = 'Lew' | 'Jeż'

const zwierzak: Animal = 'Lew'

enum Brands {Fiat = 1,Bmw,Ford,Audi}

const auto: Brands = Brands.Bmw
const mojeAuto: string = Brands[2]

enum StackIndex {
    None = 0,
    Drop = 1000,
    Over = 2000,
    Modal = 3000
}


const selectBox: StackIndex = StackIndex.None

