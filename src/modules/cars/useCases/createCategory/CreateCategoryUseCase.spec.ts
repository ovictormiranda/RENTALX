
// O describe recebe primeiro o nome do que ele testara, depois uma função e depois o teste.
/* describe("Criar categoria", () => {
  it("Espero que 2 + 2 seja 4", () => {
    const soma = 2 + 2;
    const resultado = 4;

    expect(soma).toBe(resultado);
  });

  it("Espero que 2 + 2 não seja 5", () => {
    const soma = 2 + 2;
    const resultado = 5;

    expect(soma).not.toBe(resultado);
  });
});
 */

import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

// a variavel createCategory será do tipo CreateCategoryUseCase
let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });


// TESTE <> CRIAÇÃO DE CATEGORIA
  it("Should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test",
    };

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    //utilizamos o id como parametro esperado pq, nós só informamos o nome e
    //a descrição, o id é criado automaticamente quando o usuário é de fato criado
    //então, se retornar uma propriedade id nesse objeto, então é pq deu certo.
    expect(categoryCreated).toHaveProperty("id");
  });


  // TESTE <> NÃO PERMITIR CRIAR CATEGORIA COM MESMO NOME
  it("Shouldn't be able to create a new category with a name already took.", async () => {
    expect (async () => {
      const category = {
        name: "Category Test",
        description: "Category description Test",
      };

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError); //Caso seja rejeitado, tratar o error como no AppError
  });
});
