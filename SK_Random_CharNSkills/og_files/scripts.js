function showRandomChar(){
    randomChar = rando(0, 18);
    document.getElementById("myCharacter").innerHTML = randomChar+1;
}

function showRandomSkill(){
    randomSkill = rando(0, 2)
    document.getElementById("mySkill").innerHTML = randomSkill+1;
}
