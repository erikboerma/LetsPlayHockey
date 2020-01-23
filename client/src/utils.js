// Used for mapping arrays of select components
const mapSelectArray = arr => {
    let newArr = [];
    arr.map((key, i) => {
        newArr.push({
            label: key,
            value: i
        });
    });
    return newArr;
};

export default mapSelectArray;