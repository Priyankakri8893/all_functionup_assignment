// You can use the filter() and map() higher-order functions to achieve this:

// javascript
// Copy code
// const gurgaonUsers = facebookProfiles.filter(user => user.location === "gurgaon");
// const gurgaonUserNames = gurgaonUsers.map(user => `${user.firstName} ${user.lastName}`);
// First, we use the filter() method to create a new array called gurgaonUsers that contains only the Facebook profiles where the location property is equal to "gurgaon".

// Then, we use the map() method to create a new array called gurgaonUserNames that contains the full names of the users in the gurgaonUsers array. We achieve this by using template literals to concatenate the firstName and lastName properties of each user.

// Finally, you can log gurgaonUserNames to the console to see the output:

// css
// Copy code
// console.log(gurgaonUserNames); // ["Pritesh Kumar", "Sabiha Khan", "Jay undefined"]
// Note that the last item in the array has the value "Jay undefined", because the lastName property is missing from that user's profile. If you want to exclude such profiles, you can add an additional filter like so:

// javascript
// Copy code
// const gurgaonUserNames = gurgaonUsers
//   .filter(user => user.firstName && user.lastName) // exclude profiles with missing data
//   .map(user => `${user.firstName} ${user.lastName}`);
// This will exclude any profiles where either the firstName or lastName property is falsy (i.e. undefined, null, false, 0, "", or NaN).