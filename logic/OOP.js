//a Vector type
class Vector{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    plus(p){
        return new Vector(this.x+p.x, this.y+p.y);
    }
    minus(m){
        return new Vector(this.x-m.x, this.y-m.y);
    }
    length(){
        return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
    }
};
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// => Vec{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// => Vec{x: -1, y: -1}
console.log(new Vector(3, 4).length());
// => 5

//