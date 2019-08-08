class UserService {
    apiUrl = "https://rickandmortyapi.com/api/character/";

    constructor() {}

    getAll = async page => {
        var data = await fetch(this.apiUrl)
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data;
            })
            .catch(e => {
                return {
                    results: []
                };
            });

        return data;
    };
}

const userService = new UserService();

export default userService;
