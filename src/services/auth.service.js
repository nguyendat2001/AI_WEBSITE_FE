import createApiClient from "./api.service";

class UserService {
    constructor(baseUrl = "http://127.0.0.1:5000") {
        this.api = createApiClient(baseUrl);
    }

    async signin(data) {
        return (await this.api.post('/signin', data)).data;
    }

    async signup(data) {
        return (await this.api.post('/signup', data)).data;
    }
}

export default new UserService();