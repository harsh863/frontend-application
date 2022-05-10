import apiService from './core/api.service';
import { TRL } from '../models/main/trl/trl.model';

class TRLService {
  private static _instance: TRLService;

  public static getInstance(): TRLService {
    if (!TRLService._instance) {
      TRLService._instance = new TRLService();
    }
    return TRLService._instance;
  }

  public getTRLs = (): Promise<TRL> => {
    return apiService.get(`/trl/`);
  };
}

const trlService: TRLService = TRLService.getInstance();

export default trlService;
