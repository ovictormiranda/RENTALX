import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";


let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
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

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("Should be able to list by brand all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      "name": "Car 2",
      "description": "Car description",
      "daily_rate": 142.00,
      "license_plate": "DEF-1443",
      "fine_amount": 112,
      "brand": "Car_brand_test",
      "category_id": "Category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list by name all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      "name": "Car 3",
      "description": "Car description",
      "daily_rate": 142.00,
      "license_plate": "DEF-1444",
      "fine_amount": 112,
      "brand": "Car_brand_test",
      "category_id": "Category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car 3",
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list by name all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      "name": "Car 4",
      "description": "Car description",
      "daily_rate": 142.00,
      "license_plate": "DEF-1445",
      "fine_amount": 112,
      "brand": "Car_brand_test",
      "category_id": "Test_category"
    });

    const cars = await listAvailableCarsUseCase.execute({
     category_id: "Test_category",
    });

    expect(cars).toEqual([car]);
  });
});
