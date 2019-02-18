// Redundant Braces
/*
Write a program to validate if the input string has redundant braces?
Input will be always a valid expression
and operators allowed are only + , * , - , /
((a + b)) has redundant braces so answer will be 1
(a + (a + b)) doesn't have have any redundant braces so answer will be 0
*/
function checkRedundant(s){
    var st=[];
    st = s.split('');
    for(let i of st){
        if(i===')'){
            var top = st[st.length-1];
            st.pop();
            var check = true;
            while(top!='('){
                if(top==='+'||top==='-'||top==='*'||top==='/'){
                    check=false;
                }
                top=st[st.length-1];
                st.pop();
            }
            if(check===true){
                return true;
            }
        }else{
            st.push(i);
        }
    }
    return false;
}
function redundantBrackets(str){
    var tmp=checkRedundant(str);
    if(tmp===true){
        return 1;
    }
    return 0;
}
console.log(redundantBrackets('((a + b))'))