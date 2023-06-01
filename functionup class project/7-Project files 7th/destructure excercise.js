
    const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
    const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
    // remove first element from places array and print the remaining array 
//     const [first , ...result] = places;
// console.log(result);

    // insert that element at the start of the morePlaces array and print the new array
    // const newPlace = "delhi";
    // const newArray = [newPlace, ...morePlaces];
    // console.log(newArray);
    // take out last three element from the morePlacesArray and take out first three elements from the places array 
//and print the combined array

// const [a1, ...a3] =morePlaces;
// const [b1, b2, b3, ...b4] =places;
// const combinedArray = [...a3, b1, b2, b3];
// console.log(combinedArray);


const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
      pinCode: 123455,
      city:"delhi"
    },
    likes:["music", "movies"]
  };
  // // destructure and store pincode into a variable named myPincode
  // const { address: { pinCode: myPincode } } = myData;
  // console.log(myPincode);


  // // destructure and store second like into a vaiable named myLike

  const {likes: [first, myLike]} = myData;
console.log(myLike);
