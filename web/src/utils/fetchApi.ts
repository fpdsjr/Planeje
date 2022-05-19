import { Api } from '../services/api';

const ApiRequest = {
  post: Api.post,
  get: Api.get,
  delete: Api.delete,
  patch: Api.patch,
  put: Api.put,
};

type methodName = 'post' | 'get' | 'delete' | 'patch' | 'put';

interface IBody {
  [key: string]: string;
}

export default async function fetchApi<T = unknown>(
  method: methodName,
  url: string,
  params?: IBody,
) {
    if (params) {
      const response = await ApiRequest[method](url, params);
      return response
    } else {
      const response = await ApiRequest[method](url);
      return response
    }
  }

  

