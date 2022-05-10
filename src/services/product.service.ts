import apiService from './core/api.service';
import { Product } from '../models/main/product/product.model';

class ProductService {
  private static _instance: ProductService;

  public static getInstance(): ProductService {
    if (!ProductService._instance) {
      ProductService._instance = new ProductService();
    }
    return ProductService._instance;
  }

  public getProduct = (productId: number): Promise<Product> => {
    return apiService.get(`/product/${productId}/`);
  };

  public updateProduct = (
    productId: number,
    data: Partial<Product>
  ): Promise<Product> => {
    return apiService.put(`/product/${productId}/`, data);
  };
}

const productService: ProductService = ProductService.getInstance();

export default productService;
