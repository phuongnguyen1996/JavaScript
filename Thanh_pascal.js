function pascal(a) {
    let result = [];
    for (let index = 1; index <= a; index++) {
        let triangle = new Array(index);
        triangle.fill(0);
        triangle[0] = 1;
        triangle[index - 1] = 1;
        result.push(triangle);
    }
    for (let start = 2; start < result.length; start++) {
        let before = 0;
        let after = 1;
        for (let j = 1; j < result[start].length - 1; j++) {
            result[start][j] = result[start - 1][before] + result[start - 1][after];
            after++;
            before++;
        }
        
    }
    return result;
}
