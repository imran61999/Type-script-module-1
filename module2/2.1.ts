{


// type assertion

let anything: any;
anything = "next label web devlopment";
// (anything as string).


const kgTogm = (value: string | number) : string | number | undefined =>{
    if (typeof value === 'string'){
        const convertedValue = parseFloat(value)* 1000;
        return convertedValue;
    }
    if(typeof value === "number"){
        return value *1000;
    }
}

const result1 = kgTogm(7888) as number;
const result2 = kgTogm("899") as number;

}