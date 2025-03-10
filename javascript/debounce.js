export default function debounce(callback, delay) {
    let timeId;

    return (...args) => {
        if(timeId){
            clearTimeout(timeId);
        }
        timeId = setTimeout(() => {
            callback(...args);
        },delay);
    }
}