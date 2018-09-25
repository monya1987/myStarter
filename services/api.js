export const fetchSomeData = (id) => {
    return new Promise((resolve, reject) => {
        fetch(`/static/demo.json?${id}`, {
            credentials: 'include'
        })
        .then(response => {
            if (response.status === 200) {
                return response;
            } else {
                throw new Error(response.statusText);
            }
        })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject({error}));
    });
};