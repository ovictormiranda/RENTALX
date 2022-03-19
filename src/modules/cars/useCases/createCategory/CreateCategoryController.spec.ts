import request from "supertest";
import { app } from "../../../../shared/infra/http/app";

describe("CreateCategoryController", async () => {

  it("Should be able to create a new category", async () => {
    const response = await request(app).post("/categories").send({
      name: "Category Supertest",
      description: "Category SUpertest",
    });

    expect(response.status).toBe(201);
  });
});
