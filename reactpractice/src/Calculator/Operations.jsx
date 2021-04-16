

function Add(a,b){
    return (a+b);
}

function Sub(a,b){
    return (a-b);
}

function Multiply(a,b){
    return (a*b);
}

function Divide(a,b){
    var c = a/b;
    return c.toFixed(2)
}

export {Add, Sub, Multiply, Divide};
