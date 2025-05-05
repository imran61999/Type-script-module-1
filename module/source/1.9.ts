{
    // Type alias

    type student = {
        name: string,
        age: number,
        contactNum?: string,
        gender: string,
        address: string
    } 
    
    const student1 : student= {
        name: "imran",
        age: 89,
        contactNum: "01880677553",
        gender: "female",
        address: "Chattrogaram"
    };

    const student2 : student = {
        name: "imran",
        age: 89,
        gender: "female",
        address: "Chattrogaram"
    };

    const student3: student = {
        name: "imran",
        age: 89,
        gender: "female",
        address: "Chattrogaram"
    };
}