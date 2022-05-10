export interface StoreAction<T = any> {
  type: T;
  payload?: any;
}
