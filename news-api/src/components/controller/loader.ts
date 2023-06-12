import { LoaderOptions, GetRespObject, callbackFn, LoaderInterface } from '../../types/types';

class Loader implements LoaderInterface {
    baseLink: string;

    options: LoaderOptions;

    constructor(baseLink: string, options: LoaderOptions = {}) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResponse<T>(
        { endpoint, options = {} }: GetRespObject,
        callback: callbackFn<T> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404) {
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            }
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: LoaderOptions, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: callbackFn<T>, options: LoaderOptions = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;