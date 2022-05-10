type Identifier = string | number;

export interface StoreState<T = any> {
  entities: { [id: Identifier]: T };
  entitiesLoading?: boolean;
  entityLoading?: {
    [id: Identifier]: boolean;
  };
  error?: string;
}
