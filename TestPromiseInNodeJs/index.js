const axios = require('axios');

const apiUrl = 'https://api.escuelajs.co/api/v1/products';

// Nếu dùng async và await thì không cần result.then vì result sẽ đợi và trả về ngay dữ liệu thay vì một Promise
function getProductData(url) {
    try {
        const result = axios.get(url);
        console.log(result);

        result.then(function(response) {
            console.log(response.data);
        }, function(error) {
            console.log('Promise rejected.');
        });

    } catch (error) {
        console.error(error);
    }
}
getProductData(apiUrl)