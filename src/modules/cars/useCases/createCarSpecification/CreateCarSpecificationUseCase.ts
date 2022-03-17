import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

class CreateCarSpecificationUseCase {

  constructor(
    // @inject("CarsRespository")
    private carsRepository: ICarsRepository
  ){}

  async execute({ car_id, specifications_id }: IRequest): Promise<void> {

    const carExists = await this.carsRepository.findById(car_id);

    if(!carExists) {
      throw new AppError("Car doesn't exists!")
    }
  }
}

export { CreateCarSpecificationUseCase }
