import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomerRepository from '../typeorm/repository/CustomerRepository';

class ListCustomersService {
  public async execute(): Promise<Customer[]> {
    const customersRepository = getCustomRepository(CustomerRepository);

    const customers = customersRepository.find();

    return customers;
  }
}

export default ListCustomersService;
