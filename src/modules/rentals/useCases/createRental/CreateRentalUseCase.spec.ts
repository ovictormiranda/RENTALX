import dayjs from "dayjs";
import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";

import { AppError } from "../../../../shared/errors/AppError";
import { RentalsRepositoryInMemory } from "../../repositories/in-memory/RentalsRepositoryInMemory";
import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let dayjsDateProvider: DayjsDateProvider;

describe("Create Rental", () => {
  const dayAdd24Hours = dayjs().add(1, "day").toDate();

  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    dayjsDateProvider = new DayjsDateProvider();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayjsDateProvider
    );
  });

  it("Should be able to create a new rental", async () => {
  const rental =  await createRentalUseCase.execute({
    user_id: "12345",
    car_id: "121212",
    expected_return_date: dayAdd24Hours,
  });

  console.log(rental);

  expect(rental).toHaveProperty("id");
  expect(rental).toHaveProperty("start_date");
  });

  it("Shouldn't be able to create a new rental if the user already has another rental open.", async () => {
    expect( async () => {
      await createRentalUseCase.execute({
        user_id: "user A",
        car_id: "car A",
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: "user A",
        car_id: "car B",
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Shouldn't be able to create a new rental if a car is in another rental.", async () => {
    expect( async () => {
      await createRentalUseCase.execute({
        user_id: "user A",
        car_id: "car A",
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: "user B",
        car_id: "car A",
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Shouldn't be able to create a new rental with return time less than 24h", async () => {
    expect( async () => {
      await createRentalUseCase.execute({
        user_id: "user A",
        car_id: "car A",
        expected_return_date: dayjs().toDate(),
      });

    }).rejects.toBeInstanceOf(AppError);
  });

});
