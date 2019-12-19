task1 ={
    firstOfTask1: function (request, response)
    {
    let a1 = request.query["a"] ||1;
    let b1 = request.query["b"] ||1;
    let c1 = request.query["c"] ||1;
    let a2 = request.query["a"] ||1;
    let b2 = request.query["b"] ||1;
    let c2 = request.query["c"] ||1;
    D1=b1*b1-4*a1*c1;
    D2=b2*b2-4*a2*c2;
    x1=(-b1+Math.sqrt(D1)/2*a1);
    x2=(-b1-Math.sqrt(D1)/2*a1);
    x3=(-b2+Math.sqrt(D2)/2*a2);
    x4=(-b2-Math.sqrt(D2)/2*a2);
    if ((x1==x3 && x2==x4)||(x1==x4 && x2==x3)) {
        response.send("Yes");
    }
    else {
        response.send("No");
    }   
    }
}
module.exports=task1;