document.getElementById("button_oneId").onclick = function () {
    let a = document.getElementById("input_oneId").value;
    let b = document.getElementById("input_twoId").value;
    let aNum = new Number(a);
    let bNum = new Number(b);
    let plus = aNum + bNum;
    let c = document.getElementById("results_Number");
    c.innerHTML = plus;
}
document.getElementById("button_twoId").onclick = function () {
    let a2 = document.getElementById("input_oneId").value;
    let b2 = document.getElementById("input_twoId").value;
    let aNum2 = new Number(a2);
    let bNum2 = new Number(b2);
    let plus2 = aNum2 - bNum2;
    let c2 = document.getElementById("results_Number");
    c2.innerHTML = plus2;
}
document.getElementById("button_threeId").onclick = function () {
    let a3 = document.getElementById("input_oneId").value;
    let b3 = document.getElementById("input_twoId").value;
    let aNum3 = new Number(a3);
    let bNum3 = new Number(b3);
    let plus3 = aNum3 * bNum3;
    let c3 = document.getElementById("results_Number");
    c3.innerHTML = plus3;
}
document.getElementById("button_fourId").onclick = function () {
    let a4 = document.getElementById("input_oneId").value;
    let b4 = document.getElementById("input_twoId").value;
    let aNum4 = new Number(a4);
    let bNum4 = new Number(b4);
    let plus4 = aNum4 / bNum4;
    let c4 = document.getElementById("results_Number");
    c4.innerHTML = plus4;
}