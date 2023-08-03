import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import { InputFindProductDto, OutputFindProductDto } from "./find.product.dto";


export default class FindProductUseCase {

  private productRepository: ProductRepositoryInterface;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async execute(input: InputFindProductDto): Promise<OutputFindProductDto> {

    const product = await this.productRepository.find(input.id);

    return {
      id: product.id,
      name: product.name,
      price: product.price
    };

  }
}