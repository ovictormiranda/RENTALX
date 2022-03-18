
interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

class CreateRentalUseCase {

  constructor(
    private rentalsRepository: IRentalsRepository
  )

  async execute({
    user_id,
    car_id,
    expected_return_date,
  }: IRequest): Promise<void>; {
    const carAvailable = await this.rentalsRepository.findByCar(car_id);
  }
}

export { CreateRentalUseCase }
