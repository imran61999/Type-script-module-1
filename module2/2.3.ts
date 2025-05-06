{

    // generic type

    type GenericArray<param> = Array<param>

    // const rollNumber : number[] = [ 90, 67, 45, 34];
    const rollNumber : GenericArray<number> = [ 90, 67, 45, 34];

    // const mentor: string[] = ["X", "Y", "Z"];
    const mentor: GenericArray <string> = ["X", "Y", "Z"];

    // const boolArray: boolean[] = [true , false , true];
    const boolArray: GenericArray <boolean> = [true , false , true];

    const user: GenericArray<{name: string , age: number}> =[
        {
            name: "imran",
            age: 25,
        },
        {
            name: "Hossain",
            age: 23,
        }
    ];

    // Generic tuple
    type GenericTuple<x , y> = [x , y];

    const manush : GenericTuple<string , string> = ['Mr.x', 'Mr.y']
    const userWithId: GenericTuple<number, {name: string, email: string}> = [899, {name: "imran", email: "nit@gmail.com"}]

}