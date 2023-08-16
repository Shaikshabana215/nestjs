import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customer/dtos/createCustomer.dto';

@Injectable()
export class CustomerService {
users  = [
    {
        id: 1,
        email: "Jam@gmail.com",
        name: 'Jam Jam',
    },
    {
        id: 2,
        email: "Danny@gmail.com",
        name: 'Danny Danny',

    },
    {
        id: 3,
        email: "Adam@gmail.com",
        name: 'Adam',

    },
    {
        id: 4,
        email: "Spencer@gmail.com",
        name: 'Spencer',

    },
    {
        id: 5,
        email: "jhonny@gmail.com",
        name: 'jhonny',

    },
]
findCustomerById(id: number){
return this.users.find((user) => user.id === id);
}

createCustomer(customerDto: CreateCustomerDto){
    this.users.push(customerDto);
}

getCustomers(){
    return this.users;
}
}


