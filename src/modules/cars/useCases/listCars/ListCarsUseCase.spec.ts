import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase"

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("Should be able to list all available cars", async () => {

    const car = await carsRepositoryInMemory.create({
      "name": "Car 1",
      "description": "Car description",
      "daily_rate": 142.00,
      "license_plate": "DEF-1443",
      "fine_amount": 112,
      "brand": "Car_brand",
      "category_id": "Category_id"
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("Should be able to list by name all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      "name": "Car 2",
      "description": "Car description",
      "daily_rate": 142.00,
      "license_plate": "DEF-1443",
      "fine_amount": 112,
      "brand": "Car_brand_test",
      "category_id": "Category_id"
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    console.log(cars);

    expect(cars).toEqual([car]);
  });
});
