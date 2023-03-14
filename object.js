// In JavaScript, an object is a collection of properties, where each property is defined as a key-value pair.
//The following example defines an empty object using the object literal syntax:

let emptyObject = {};

//The following example defines the person object with two properties: firstName and lastName.

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

//A property name of an object can be any string. You can use quotes around the property name if it is not a valid identifier.
//For example, if the person object has a property first-name, you must place it in the quotes such as "first-name".
//A property of an object can hold an object. For example:

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}


//The contact object has the firstName, lastName, email, phone, and address properties.
//The address property itself holds an object that has building,  street, city, state, and country properties.
//To access a object’s property, you can use:
//The dot notation (.)
//The array-like notation ([]).
//The following example uses the dot notation (.) to access the firstName and lastName properties of the contact object.

console.log(contact.firstName);
console.log(contact.lastName);

//If you reference a property that does not exist, you’ll get an undefined value. For example:

console.log(contact.age); // undefined

//The following example uses the array-like notation to access the email and phone properties of the contact object.

console.log(contact['phone']); // '(408)-555-9999'
console.log(contact['email']); // 'john.doe@example.com'


//For more information: https://www.javascripttutorial.net :)