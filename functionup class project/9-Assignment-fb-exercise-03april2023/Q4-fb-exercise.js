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
// //solve by higher order function
// function getDLStatus(facebookProfiles) {
//     const gurgaonProfiles = facebookProfiles.filter(
//       (profile) => profile.address && profile.address.location === "gurgaon"
//     );
//     const dlStatuses = gurgaonProfiles.map((profile) => {
//       const fullName = `${profile.firstName} ${profile.lastName || ""}`;
//       const dlStatus = profile.hasDrivingLicense ? "D/L" : "N D/L";
//       return `${fullName} - ${dlStatus}`;
//     });
//     return dlStatuses;
//   }
//   const gurgaonDLStatuses = getDLStatus(facebookProfiles);
//   console.log(gurgaonDLStatuses); 

// //solve by for loop
// function getGurgaonDLStatus(facebookProfiles) {
//     const result = [];
  
//     for (let i = 0; i < facebookProfiles.length; i++) {
//       const profile = facebookProfiles[i];
  
//       if (profile.address && profile.address.location === "gurgaon") {
//         const name = profile.firstName + " " + (profile.lastName || '');
//         const dlStatus = profile.hasDrivingLicense ? "D/L" : "N D/L";
//         result.push(name + " - " + dlStatus);
//       }
//     }
//     return result;
//   }
//   const gurgaonDLStatus = getGurgaonDLStatus(facebookProfiles);
//   console.log(gurgaonDLStatus);
  
    
//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

function getGurgaonDLStatus(facebookProfiles) {
  const nadl = [];
  for(let i=0; i<facebookProfiles.length; i++){
    const fb = facebookProfiles[i];
    if(fb.address && fb.address.location == 'gurgaon'){
      const na = `${fb.firstName} ${fb.lastName || ''}`
      const dls = fb.hasDrivingLicense ? 'D/L':'N D/L'
      nadl.push(na + ' - '+dls )
    }
  }
  return nadl
}
const gurgaonDLStatus = getGurgaonDLStatus(facebookProfiles);
   console.log(gurgaonDLStatus);