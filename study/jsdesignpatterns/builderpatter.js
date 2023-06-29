class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

class User {
    constructor(name, { age, phone = '1234', address } = {}) {
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
}

const user = new User('arka', { age: '7978', address: new Address('799007', 'dhaleswar') });
console.log(user);


//if we use this builder pattern, if we dont pass anything then  also we can define default value & we dont need to pass undefined in argument