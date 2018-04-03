import fetch from 'node-fetch';

export {transformSource};

function transformSource(path, callback) {
    fetch(path)
        .then((response) => response.text())
        .then((content) => callback(null, content))
        .catch(callback);
}
