function voteAge() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote.";
}

function countFunction() {
    function count() {
        var startPoint = 9;
        function plusOne() {startPoint += 1;}
        plusOne();
        return startPoint;
    }
    document.getElementById("counting").innerHTML = count();
}