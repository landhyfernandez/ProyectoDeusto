const user1 = {
    name: 'Juan',
    surname: 'Perez Lopez',
    address: {
        street: 'Principe de Vergara, 10',
        city: 'Madrid'
    }
}

const user2 = {
    name: 'Laura',
    surname: 'Nadal Novo',
}

let city2;
if (user2.address) {
    city2 = user2.address.city;
}
console.log(city2);