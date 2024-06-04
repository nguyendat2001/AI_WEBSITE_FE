import createApiClient from "./api.service";

const user = JSON.parse(localStorage.getItem('user'));

class AiService {
    constructor(baseUrl = "http://127.0.0.1:5000") {
        this.api = createApiClient(baseUrl);
    }

    async covid_19_AI(data) {
        return (await this.api.post('/lung_ai', data
            , {
                headers: {
                    // 'Authorization': `Bearer ${user.accessToken}`,
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                },
            }
        )).data;
    }

    async pricing_house_AI(data) {
        return (await this.api.post('/pricing_house_ai', data
        , {
            headers: {
                // 'Authorization': `Bearer ${user.accessToken}`,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }
        )).data;
    }

}

export default new AiService();