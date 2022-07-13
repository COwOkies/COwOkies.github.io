let characters = ['Knight', 'Rogue', 'Wizard', 'Assassin', 'Alchemist', 'Engineer', 'Vampire', 'Paladin', 'Elf', 'Werewolf', 'Priest', 'Druid', 'Robot', 'Berseker', 'Necromancer', 'Officer', 'Taoist', 'Air Bender', 'Demonmancer'];
var randomChar = -1
var randomSkill = -1

function showRandomChar(){
    old_randomChar = randomChar
    randomChar = rando(0, 18);
    while (randomChar == old_randomChar) {
        randomChar = rando(0, 18);}
    if (randomChar > 17) {
        randomSkill = 0
        document.getElementById("mySkill").innerHTML = (randomSkill+1);}
    document.getElementById("myCharacter").innerHTML = characters[randomChar];

    setCharimage()
    setSkillimage()
}

function showRandomSkill(){
    old_randomSkill = randomSkill
    if (randomChar > 17) {randomSkill = 0}
    else {randomSkill = rando(0, 2);
        while (randomSkill == old_randomSkill) {
            randomSkill = rando(0, 2); }     
    }
    document.getElementById("mySkill").innerHTML = (randomSkill+1);

    setSkillimage()
}

function setCharimage(){
    const image_path = ("skins/"+randomChar+".png");
    const image = document.getElementById("Char_Skin");
    image.src = image_path;}

function setSkillimage(){

    const image_path2 = ("skills/"+randomChar+"-"+randomSkill+".png");
    const image = document.getElementById("Char_Skill");
    image.src = image_path2;}