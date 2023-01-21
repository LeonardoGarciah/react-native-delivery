import axios from 'axios';

const api = axios.create();

api.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error),
);

const httpClient: HttpClientTypes = {
    formatUrl(url) {
        // const { hostname, protocol } = window.location;
        return `https://router.project-osrm.org${url}`;
    },

    // @ts-ignore
    buildHeaders() {
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                // Authorization: localStorageServiceImpl.getItem('authorization'),
            },
        };

        return headers;
    },

    get(url, options = {}) {
        console.log(url)
        return api.get(
            this.formatUrl(url),
            this.buildHeaders(),
        );
    },

    post(url, data, options = {}) {
        return api.post(
            this.formatUrl(url),
            data,
            this.buildHeaders(),
        );
    },

    put(url, data, options = {}) {
        return api.put(
            this.formatUrl(url),
            data,
            this.buildHeaders(),
        );
    },

    delete(url, options = {}) {
        return api.delete(
            this.formatUrl(url),
            this.buildHeaders(),
        );
    },
};

export default httpClient;