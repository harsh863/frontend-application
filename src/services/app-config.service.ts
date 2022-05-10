import { AppConfig } from '../models/main/app/app-config.model';
import apiService from './core/api.service';

class AppConfigService {
  private static _instance: AppConfigService;

  public static getInstance(): AppConfigService {
    if (!AppConfigService._instance) {
      AppConfigService._instance = new AppConfigService();
    }
    return AppConfigService._instance;
  }

  public getAppConfig = (appId: number): Promise<AppConfig> => {
    return apiService.get(`/configuration/${appId}`);
  };
}

const appConfigService: AppConfigService = AppConfigService.getInstance();

export default appConfigService;
