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
//using for loop

function profileLookup(name, property) {
    for (let i = 0; i < facebookProfiles.length; i++) {
      if (facebookProfiles[i].firstName === name) {
        if (facebookProfiles[i].hasOwnProperty(property)) {
          return facebookProfiles[i][property];
        } else {
          return "no such property";
        }
      }
    }
    return "person does not exist";
  }
  console.log(profileLookup("Pritesh", "number"));

  //using higher order function

  function profileLookup(name, property) {
    const profile = facebookProfiles.find(profile => profile.firstName === name);

    if (!profile) {
        return "person does not exist";
    }

    if (!(property in profile)) {
        return "no such property";
    }

    return profile[property];
}
console.log(profileLookup("Pritesh", "emails"));


// complete the above function such that when it is called with name and property, then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
// 
// Hint: dynamically access properties using square bracket