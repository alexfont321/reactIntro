const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    getAnimal: {
        value: function (id) {
            return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
        }
    },
    getAllAnimals: {
        value: function () {
            return fetch(`${remoteURL}/animals`).then(e => e.json())
        }
    },
    deleteAnimal: {
        value: id => {
            return fetch(`${remoteURL}/animals/${id}`, {
                method: "DELETE"
            }).then(r => r.json())
        }
    },
    getAllEmployees: {
        value: () => {
            return fetch(`${remoteURL}/employees`).then(r => r.json())
        }
    },
    getAllOwners: {
        value: () => {
            return fetch(`${remoteURL}/owners`).then(r => r.json())
        }
    },
    getAllLocations: {
        value: () => {
            return fetch(`${remoteURL}/locations`).then(r => r.json())
        }
    }
})