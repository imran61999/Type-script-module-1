{
    // oop -ingeritence

    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string){
            this.name= name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours: number){
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }


    class Student extends Parent {

        // name: string;
        // age: number;
        // address: string;

        constructor(name: string, age: number, address: string){
            // this.name= name;
            // this.age = age;
            // this.address = address;
            super(name, age, address)
        }
        // getSleep(numOfHours: number){
        //     console.log(`${this.name} will sleep for ${numOfHours}`);
        // }
    } 
    const student1 = new Student("Mr. studebt", 40, "uganda");
    student1.

    class Techer extends Parent {
        // name: string;
        // age: number;
        // address: string;
        designation: string;

        constructor(name: string, age: number, address: string, designation: string){
            // this.name= name;
            // this.age = age;
            // this.address = address;
            super(name, age, address)
            this.designation = designation;
        }
        // getSleep(numOfHours: number){
        //     console.log(`${this.name} will sleep for ${numOfHours}`);
        // }
        takeClass(numOfClass:number){
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }

    const teacher = new Techer("Mr. teacher", 70, "uganda" , "propessor");
    teacher.


    // 
}