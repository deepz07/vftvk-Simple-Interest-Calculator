function compute()
{
    p = document.getElementById("principal").value;
    r= document.getElementById("rate").value;
    n= document.getElementById("years").value;
     interest=p*r*n/100;
     year = new Date().getFullYear()+parseInt(n);

        result= document.getElementById("result");
        result.innerHTML= "if you deposit "+p+"  at an interest rate of "+r+"  you will receive an amount of "+interest+"  in the year "+year;
}
        function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

}