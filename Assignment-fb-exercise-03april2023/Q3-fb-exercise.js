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
//solve by for loop
function findFullName(stateName) {
    for (let i = 0; i < facebookProfiles.length; i++) {
        if (facebookProfiles[i].address && facebookProfiles[i].address.state === stateName) {
            return facebookProfiles[i].firstName + ' ' + facebookProfiles[i].lastName;
        }
    }
    return "No residents found in that state.";
}
console.log(findFullName("haryana")); 

//solve by higher order function
function findFullName(stateName) {
    const resident = facebookProfiles.find(profile => profile.address && profile.address.state === stateName);
    if (resident) {
      return `${resident.firstName} ${resident.lastName}`;
    } else {
      return "No residents found";
    }
  }
  console.log(findFullName("up"));
    
// 2. complete this function, which takes state name as argument and return the name 
// of one of its residents