export class ApiService {
  private static _instance: ApiService;
  private static readonly _baseURL = `https://api-test.innoloft.com`;
  private static readonly _options: any = {};

  public static getInstance(): ApiService {
    if (!ApiService._instance) {
      ApiService._instance = new ApiService();
    }
    return ApiService._instance;
  }

  public get = async (path: string) => {
    const url = ApiService._baseURL + path;
    return fetch(url, {
      method: 'GET',
      ...ApiService._options,
    }).then((res) => res.json());
  };

  public put = async (path: string, data?: { [key: string]: any }) => {
    const url = ApiService._baseURL + path;
    return fetch(url, {
      method: 'POST',
      body: JSON.parse(JSON.stringify(data)),
      ...ApiService._options,
    }).then((res) => res.json());
  };
}

const apiService: ApiService = ApiService.getInstance();

export default apiService;
