function add(val){
    document.getElementById("answer").value += val;
}
function Clear(){
    document.getElementById("answer").value = "";
}
function Answer(){
    var question = document.getElementById("answer").value;
    var solution = eval(question);
    document.getElementById("answer").value = solution;
}
