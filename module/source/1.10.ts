{
    // Union type
    type FrontEndDevloper = "FakibazDevloper" | "Joniordevloper";
    const newdevloper : FrontEndDevloper = "FakibazDevloper";


    type user = {
        name: string,
        email?: string,
        gender: "male" | "female",
        bloadGroup: "O+" | "B+" | "A+"
    }

    const person1 = {
        name: "Imran",
        gender: "Male",
        bloadGroup: "O+"
    }
}