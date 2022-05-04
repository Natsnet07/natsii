function calculate(){
    let x = parseInt(document.getElementById("input1").value);
    let y = parseInt(document.getElementById("input2").value);
    let result = x + x*(y/100) ;
    document.getElementById("total").innerHTML = "$ "+ result;
  
}


