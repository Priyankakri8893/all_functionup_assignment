const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

// IMPORTANT: solve all problems using using destructuring and rest syntax

		
// ============================================================================= //
//1.
// remove first element from places array and print the remaining array 
//result = ['gurgaon', 'jaipur', 'pune']

   const [first , ...result] = places;
   console.log(result);


// ============================================================================= //
//2.
// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']

      const newPlace = "delhi";
      const newArray = [newPlace, ...morePlaces];
      console.log(newArray);

// ============================================================================= //
// 3.
// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]

const [a1, ...a3] =morePlaces;
const [b1, b2, b3, ...b4] =places;
const combinedArray = [a3, b1, b2, b3];
console.log(combinedArray);



const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
      pinCode: 123455,
      city:"delhi"
    },
    likes:["music", "movies"]
  }
  
// 4.
// destructure and store pincode into a variable named myPincode

  const { address: { pinCode: myPincode } } = myData;
  console.log(myPincode);
  
// 5.
// destructure and store second like into a vaiable named myLike

  const {likes: [first, myLike]} = myData;
  console.log(myLike);
  