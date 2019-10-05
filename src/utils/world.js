const getQuery = (url) => {
    let url1 = url || location.href;
    let arr = url1.split("?")[1];
    let brr = arr.split("&");
    let result = {};
    brr.forEach(item => {
        let temp = item.split("=");
        result[temp[0]] = temp[1];
    });
    return result;
}

export default {
    getQuery: getQuery,
}