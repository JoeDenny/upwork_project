import axios from 'axios';

class Request {
    token?: string = undefined;
    API_URL: string = 'http://35.176.191.198';

    send(method: string, url: string, data?: any, config?: any) {
        if (this.token) {
            if (config) {
                config = {
                    ...config,
                    headers: {
                        ...config.headers,
                        'Authorization': `Bearer ${this.token}`
                    }
                };
            } else {
                config = {
                    headers: {
                        'Authorization': `Bearer ${this.token}`
                    }
                };
            }
        }
        return this[method](`${this.API_URL}/${url}`, data, config);
    }

    get(url: string, data?: any, config?: any) {
        return axios.get(url, config);
    }

    post(url: string, data?: any, config?: any) {
        return axios.post(url, data, config);
    }

    put(url: string, data?: any, config?: any) {
        return axios.put(url, data, config);
    }

    delete(url: string, data?: any, config?: any) {
        return axios.delete(url, config);
    }

    saveToken(token: string) {
        this.token = token;
    }

    getToken(): string | undefined {
        return this.token;
    }
}

const request = new Request();

export default request;