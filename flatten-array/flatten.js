/**
* Returns flattened copy of array or undefined.
* array: Array
*/
function flatten(array) {
    // 1.
    var result = [];
    if(!(array instanceof Array))
        return result;

    // 2.
    flat(array);

    // 3.
    function flat(array) {
        array.forEach(val => {
            if (val instanceof Array) {
                // 3.1
                flat(val);
            } else {
                // 3.2
                result.push(val);
            }
        });
    }
    // 4.
    return result;
}
