const person = {
    name: "Akash",
    mobile: 999999999,
    address: {
        pincode: 1234,
        city: "gurgaon",
        state: "haryana",
        emails: ["asd@gmail.com", "abc@yahoo.com", "rty@hotmail.com"],
    },
};

const newPerson = {...person};
newPerson.address = {...person.address};
newPerson.name = "Rahul";
newPerson.address.pincode = 4567;
newPerson.address.emails[0] = "asd@outlook.com";
console.log(newPerson);