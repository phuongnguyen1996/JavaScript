var res=[[]];
function pascalTriangle(n){
    var row=1;
    var i=1;
    res.push([1]);
    res.push([1,1]);
    while(row<=n){
        var a=[];
        a.push(1);
        for(var j=0; j<row; j++){
            var x=res[i+1][j]+res[i+1][j+1];
            a.push(x);
        }
        a.push(1);
        res.push(a);
        document.writeln("[" + res[i] + "]<br/>");
        row++;
        i++; 
    }
    return res;
}
function spiralOrderMatrix(n){
    var d=0, x=1, row=n-1, col=n-1;
    for(let i=0; i<n; i++){
        res[i]=[];
    }
    while(d<=n/2){
        for (var i = d; i <= col; i++) {
            res[d][i]=x++;
        }
        for (var i = d+1; i <= row; i++) {
            res[i][col]=x++;
        }
        for (var i = col-1; i >= d; i--) {
            res[row][i]=x++;
        }
        for (var i = row-1; i > d; i--) {
            res[i][d]=x++;
        }
        d++;
        row--;
        col--;
    }
    return res;
}
