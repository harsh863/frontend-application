import { User } from '../user/user.model';
import { TRL } from '../trl/trl.model';
import { ProductType } from './product-type.model';
import { ProductCategory } from './product-category.model';
import { ProductBusinessModel } from './product-business-model.model';
import { Company } from './product-company.model';

export interface Product {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: ProductType;
  categories: ProductCategory[];
  implementationEffortText?: any;
  investmentEffort: string;
  trl: TRL;
  user: User;
  company: Company;
  businessModels: ProductBusinessModel[];
}
