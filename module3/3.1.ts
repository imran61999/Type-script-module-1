{
    // OOP => class

    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        //parameter properties

        constructor(public name: string, public species: string, public sound: string){
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("German shepard Bhai", "dog", "ghew ghew");
    const cat = new Animal("persian bhai", "cat", "meaw meaw");
    cat.makeSound();

    // 
}