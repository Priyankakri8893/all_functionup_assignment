const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];
//solve by higher order function
function getNameOfDriverWithoutDL(facebookProfiles) {
    const person = facebookProfiles.find(profile => profile.likes && profile.likes.includes('driving') && !profile.hasDrivingLicense);
    if (person) {
        return `${person.firstName} ${person.lastName}`;
    } else {
        return "No match found.";
    }
}
console.log(getNameOfDriverWithoutDL(facebookProfiles));

//solve by for loop
function getNameOfDriverWithoutdL(facebookProfiles) {
    for (let i = 0; i < facebookProfiles.length; i++) {
        const profile = facebookProfiles[i];
        if (profile.likes && profile.likes.includes("driving") && !profile.hasDrivingLicense) {
            return `${profile.firstName} ${profile.lastName}`;
        }
    }
}
console.log(getNameOfDriverWithoutdL(facebookProfiles));


//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh