import AppError from '@shared/errors/AppError';
import Order from '../typeorm/entites/Order';
import { getCustomRepository } from 'typeorm';
import OrdersRepository from '../typeorm/repositories/OrdersRepository';

interface IRequest {
  id: string;
}

class ShowOrderService {
  public async execute({ id }: IRequest): Promise<Order> {
    const ordersRepository = getCustomRepository(OrdersRepository);

    const order = await ordersRepository.findById(id);

    if (!order) {
      throw new AppError('Order not found.');
    }
    return order;
  }
}

export default ShowOrderService;
