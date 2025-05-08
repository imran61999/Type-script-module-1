{


interface Devloper<T> {
    name: string,
    computer: {
        brand: string,
        model: string,
        relaseYear: number
    },
    smartWatch: T
}
    const poorDevloper : Devloper<{brand: string, model: string, display: string}> ={
        name: "imran",
        computer: {
            brand: "samsung",
            model: "xxi",
            relaseYear: 2013
        },
        smartWatch: {
            brand: "casio",
            model: "gs",
            display: "oled"
        }
    }
    const richrDevloper : Devloper<{
        brand: string,
        model: string,
        heartTrack: boolean,
        sleepTrack: boolean
    }> ={
        name: "hossain",
        computer: {
            brand: "hp",
            model: "js",
            relaseYear: 2018
        },
        smartWatch: {
            brand: "apple",
            model: "pl",
            heartTrack: true,
            sleepTrack: true
        }
    }

}