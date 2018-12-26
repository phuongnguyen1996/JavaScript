function SpiralOrderMatrix(n) {
    var result= new Array();
    var count =1 ;
        for (var i=0 ;i<n; i++) {
        result[i] = [];
        }// tạo ra mảng 2 chiều

        if(n%2==1){
            result[(n-1)/2][(n-1)/2]= n*n;
        }// tạo lõi
        for(var q=0;q<=(n/2)-1;q++){
            for ( var z=q ;z<n-q ; z++) {
                result[q][z]=count;
                count++;
            }
            for ( var z=1+q ;z<n-q ; z++) {
                result[z][n-1-q]=count;
                count++;
            }
            for ( var z=n-2-q; z-q>=0 ; z--) {
                result[n-1-q][z]=count;
                count++;
            }
            for ( var z=n-2-q; z-q>=1 ; z--) {
                result[z][q]=count;
                count++;
            }
    }
        console.log(result);
}

SpiralOrderMatrix(10);

