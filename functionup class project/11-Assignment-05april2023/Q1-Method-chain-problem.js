const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        location: "rampur",
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        location: "gurgaon",
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        location: "gurgaon",
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        location: "alwar",
    },
    {
        firstName: "Jay",
        location: "gurgaon",
    },
];

// return the full names of the facebook users who belong to guragon
// HINT: use higher order functions and chain them

// const gurgaonUsers = facebookProfiles.filter(user => user.location === "gurgaon");
// const gurgaonUserNames = gurgaonUsers.map(user => `${user.firstName} ${user.lastName}`);
// console.log(gurgaonUserNames); 


function test(facebookProfiles){
    const fullName = [];
    for(let i = 0; i < facebookProfiles.length; i++){
        if(facebookProfiles[i].location === "gurgaon"){
            let nam = `${facebookProfiles[i].firstName} ${facebookProfiles[i].lastName || ""}`;
            fullName.push(nam);
        }
    }
    return fullName;
}
console.log(test(facebookProfiles));