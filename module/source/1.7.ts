{
    // spreat oparator
    // rest oparator
    // destructuring



    // learn spreat oparator
     const bros1 : string[] =["Rahim", "Karim", "Mizan"];
     const bros2 : string[] = ["Nahid", "Rahat", "Roton"];

     bros1.push(...bros2); //spread oparator used


     const mentors1 = {
        typescript: "zaman",
        nextJS: "tonmoy",
        dataBase: "Robule"
     }

     const mentors2 = {
        redux: "Rahim",
        prisma: " Rashed",
        cloud: "Nahid"
     }

     const mentorList = {
        ...mentors1,
        ...mentors2
     }

    //  learn rest oparator

    const greedFriends = (...friends: string[]) =>{
        // console.log(`Hi ${friends1} ${friends2} ${friends3}`);
        friends.forEach((friend: string) => console.log(`Hi ${friend}`));
    }
    greedFriends("abul", "babul", "kabul");




}