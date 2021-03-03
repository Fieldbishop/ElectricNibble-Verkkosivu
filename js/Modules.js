class Modules {

    constructor() {

        async function get(url) {

            const response = await fetch(url);

            const data = await response.json();
            console.log(data);
            return data;

        }

        this.modules = get("modules.json");

    }

    getJson() {
        return this.modules;
    }

}