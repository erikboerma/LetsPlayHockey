// Used for mapping arrays of select components
const mapSelectArray = arr => {
    let newArr = [];
    arr.map((label, i) => {
        newArr.push({
            label: label,
            value: i
        });
    });
    return newArr
};

export default mapSelectArray;