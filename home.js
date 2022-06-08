function compare(){
    const p1 = document.getElementById("p1").value.length;
    const p2 = document.getElementById("p2").value.length;
    console.log(p1,p2);

    let qt_1 = document.getElementById("qt_1");
    let qt_2 = document.getElementById("qt_2");

    let result = document.getElementById("result");

    if (p1>p2){
        console.log("ok");
        qt_p1.innerHTML = p1;
        qt_p2.innerHTML = p2;
        result.innerHTML = "string p1 é maior que p2"

    }else if(p2>p1){
        console.log("ok2");
        qt_p1.innerHTML = p1;
        qt_p2.innerHTML = p2;
        result.innerHTML = "string p2 é maior que p1"


    }else {
        console.log("iguais");
        qt_p1.innerHTML = p1;
        qt_p2.innerHTML = p2;
        result.innerHTML = "as duas string contém a mesma quantidade de caracteres"

    }
    
}
