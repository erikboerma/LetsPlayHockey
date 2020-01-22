// Used for mapping arrays of select components
export const mapSelectArray = (arr, state) => {
    let newArr = [];
    arr.map((key, i) => {
        newArr.push({
            state: state,
            label: key,
            value: i
        });
    });
    return newArr;
};