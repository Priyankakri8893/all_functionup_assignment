
Assignment :
Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false) 

create the following API’s (write logic in bookController and routes in routes):
createBook : to create a new entry..use this api to create 11+ entries in your collection
bookList : gives all the books- their bookName and authorName only 
getBooksInYear: takes year as input in post request and gives list of all books published that year
getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
e.g if body had { name: “hi”} then you would fetch the books with this name
if body had { year: 2020} then you would fetch the books in this year
hence the condition will differ based on what you input in the request body
getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
getRandomBooks - returns books that are available in stock or have more than 500 pages 

Find video explanation of the question here : https://drive.google.com/file/d/1D9UOEl5rbGGDPjVLDGsf1L4hg9BI1ZH7/view?usp=sharing 


{
"bookName": "The Great Gatsby",
"authorName": "F. Scott Fitzgerald",
"tags": ["Fiction", "Classic"],
"totalPages": 218,
"stockAvailable": true,
"prices": {
"indianPrice": "Rs. 399",
"europePrice": "€ 12.99"
},
"year": 2021
}

{
"bookName": "The Alchemist",
"authorName": "Paulo Coelho",
"tags": ["Fiction", "Philosophical"],
"totalPages": 208,
"stockAvailable": true,
"prices": {
"indianPrice": "Rs. 299",
"europePrice": "€ 9.99"
},
"year": 2021
}

{
"bookName": "To Kill a Mockingbird",
"authorName": "Harper Lee",
"tags": ["Fiction", "Classic"],
"totalPages": 281,
"stockAvailable": true,
"prices": {
"indianPrice": "Rs. 499",
"europePrice": "€ 14.99"
},
"year": 2021
}

{
"bookName": "The Catcher in the Rye",
"authorName": "J.D. Salinger",
"tags": ["Fiction", "Coming of Age"],
"totalPages": 234,
"stockAvailable": true,
"prices": {
"indianPrice": "Rs. 349",
"europePrice": "€ 11.99"
},
"year": 2021
}

{
"bookName": "1984",
"authorName": "George Orwell",
"tags": ["Fiction", "Dystopian"],
"totalPages": 328,
"stockAvailable": true,
"prices": {
"indianPrice": "Rs. 109",
"europePrice": "€ 13.99"
},
"year": 2021
}

{
"bookName": "The Lord of the Rings",
"authorName": "J.R.R. Tolkien",
"tags": ["Fiction", "Fantasy"],
"totalPages": 1178,
"stockAvailable": true,
"prices": {
"indianPrice": "Rs. 200",
"europePrice": "€ 29.99"
},
"year": 2021
}

{
"bookName": "Harry Potter and the Philosopher's Stone",
"authorName": "J.K. Rowling",
"tags": ["Fiction", "Fantasy"],
"totalPages": 223,
"stockAvailable": true,
"prices": {
"indianPrice": "Rs. 399",
"europePrice": "€ 12.99"
},
"year": 2021
}

{
"bookName": "Pride and Prejudice",
"authorName": "Jane Austen",
"tags": ["Fiction", "Romance"],
"totalPages": 279,
"stockAvailable": true,
"prices": {
"indianPrice": "Rs. 349",
"europePrice": "€ 11.99"
},
"year": 2021
}