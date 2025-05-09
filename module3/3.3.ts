{
    // type guard

    // typeOf --> type guard
    

    const add = (num1 : string | number, num2: string | number): string | number=>{
        if(typeof num1 === 'number' && typeof num2 === 'number'){
            return num1+num2;
        }
        else{
            return num1.toString() + num2.toString();
        }
    }

    const result = add(9 , 9);
    console.log(result);
} 