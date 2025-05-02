// learing function
// normal function 
// Arrow function

function add(num1 : number, num2 : number): number{
    return num1+num2;
}

add(6, 89)

const addArrow = (num3 : number , num4 : number): number => num3 + num4;

// object --> function --> method

const poorUser = {
    name: "imran",
    balance: 0,
    addBalance(balance: number): string{
        return `my new balance is : ${this.balance + balance}`;
    }
}

const arr : number[] = [9,6,34];
const newArray: number[] = arr.map((elem: number): number => elem * elem);
