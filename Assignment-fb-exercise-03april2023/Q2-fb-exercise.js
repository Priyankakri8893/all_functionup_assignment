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
        lastName: '',
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

function getNamesFromGurgaon(facebookProfiles) {
    const gurgaonResidents = facebookProfiles.filter((profile) => {
      return profile.address?.location?.toLowerCase() === "gurgaon";
    });
    const names = gurgaonResidents.map((profile) => {
      return `${profile.firstName} ${profile.lastName}`;
    });
    return names;
  }
  console.log(getNamesFromGurgaon(facebookProfiles));

  // use for loop

  function getNamesFromGurgaon(facebookProfiles) {
    const names = [];
  
    for (let i = 0; i < facebookProfiles.length; i++) {
      const profile = facebookProfiles[i];
      if (profile.address && profile.address.location === 'gurgaon') {
        names.push(profile.firstName + ' ' + profile.lastName);
      }
    }
  
    return names;
  }
  console.log(getNamesFromGurgaon(facebookProfiles));

  
//complete the above functin such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']