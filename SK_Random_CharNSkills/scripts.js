let characters = ['Knight', 'Rogue', 'Wizard', 'Assassin', 'Alchemist', 'Engineer', 'Vampire', 'Paladin', 'Elf', 'Werewolf', 'Priest', 'Druid', 'Robot', 'Berseker', 'Necromancer', 'Officer', 'Taoist', 'Air Bender', 'Demonmancer', 'Inter-dimension Traveler', 'Element Envoy', 'The Beheaded', 'Time Traveling Ninja','Special Forces'];
let charprice = ['Free Char','f2p (2000)','f2p (3000)','f2p (4000)','f2p (5000)','Paid ($0.99)','Paid ($0.99)','Paid ($0.99)','f2p (12000)','Paid ($1.99)','f2p (12000)','Paid ($1.99)','f2p (IG Materials)','Paid ($1.99)','Paid ($1.99)','f2p (achievement)','Paid ($1.99)','f2p (achievement)','Paid ($1.99)','Paid (Priest+Necromancer) ','f2p (Wizard+Elf)','f2p (IG Materials)','Paid (Assassin+Engineer)','f2p (Officer+Knight)'];
let skillprice =[['Free Skill','f2p (5000)','f2p (6000)'],['Free Skill','Paid ($1.99)','Paid ($1.99)'],['Free Skill','f2p (6000)','Paid ($1.99)'],['Free Skill','f2p (7000)','f2p (7000)'],['Free Skill','f2p (8000)','Paid ($1.99)'],['Free Skill','Paid ($1.99)','Paid ($1.99)'],['Free Skill','Paid ($1.99)','f2p (10000)'],['Free Skill','Paid ($1.99)','f2p (Design Table)'],['Free Skill','Paid ($1.99)','f2p (10000)'],['Free Skill','f2p (12000)','Paid ($1.99)'],['Free Skill','f2p (Design Table)','Paid ($1.99)'],['Free Skill','f2p (Design Table)','f2p (10000)'],['Free Skill','Paid ($1.99)','f2p (8000)'],['Free Skill','Paid ($1.99)','f2p (Design Table)'],['Free Skill','Paid ($1.99)','Paid ($1.99)'],['Free Skill','f2p (8000)','Paid ($1.99)'],['Free Skill','Paid ($1.99)','f2p (10000)'],['Free Skill'],['Free Skill'],['Free Skill'],['Free Skill'],['Free Skill'],['Free Skill'],['Free Skill']]
var randomChar = -1
var randomSkill = -1
var color = 1
var minvalue = 0
var maxvalue = 18
var path = ("skins/"+randomChar+".png")


function showRandomChar(){
    old_randomChar = randomChar
    while (randomChar == old_randomChar) {
        randomChar = rando(minvalue, maxvalue);}
    if (randomChar > 16) {
        randomSkill = 0
        document.getElementById("mySkill").innerHTML = (randomSkill+1);}
    if (randomChar == 23) {path = ("skins/23.gif")}
    else {path = ("skins/"+randomChar+".png")}
    document.getElementById("myCharacter").innerHTML = characters[randomChar];
    document.getElementById("price").innerHTML = charprice[randomChar];
    document.getElementById("priceskill").innerHTML = skillprice[randomChar][randomSkill];

    setCharimage()
    setSkillimage()
}


function setCharimage() {
    const image_path = path;
    const image = document.getElementById("Char_Skin");
    image.src = image_path;}

function setSkillimage(){
    const image_path2 = ("skills/"+randomChar+"-"+randomSkill+".png");
    const image = document.getElementById("Char_Skill");
    image.src = image_path2;}

function switchMode() {
    color = color + 1
    if (color > 1) {color = 0;}
    changeColor()
}

function changeColor() {
    var element = document.body;
    if (color == 1) {element.className = "dark-mode";
    document.getElementById("color").innerHTML = "☀️";}
    if (color == 0) {element.className = "light-mode";
    document.getElementById("color").innerHTML = "🌙";}
}
function checking() {
    if (document.querySelector('#legendary').checked == true) {
        maxvalue = 23;
        document.querySelector('#legendary3').style.visibility = "visible";
        document.querySelector('#legendary4').style.visibility = "visible";
    }
    if (document.querySelector('#legendary').checked == false) {
        maxvalue = 18;
        minvalue = 0
        document.querySelector('#legendary4').checked = false;
        document.querySelector('#legendary3').style.visibility = "hidden";
        document.querySelector('#legendary4').style.visibility = "hidden";
        showRandomChar()}
}

function onlylegend() {
    if (document.querySelector('#legendary4').checked == true) {
        minvalue = 19;
        showRandomChar()}
    if (document.querySelector('#legendary4').checked == false) {
        minvalue = 0;
    }
    }

    function prices() {
        if (document.querySelector('#price2').checked == true) {
            document.querySelector('#price').style.visibility = "visible";
            document.querySelector('#priceskill').style.visibility = "visible";
        }
        if (document.querySelector('#price2').checked == false) {
            document.querySelector('#price').style.visibility = "hidden";
            document.querySelector('#priceskill').style.visibility = "hidden";
        }}

function showRandomSkill(){
    old_randomSkill = randomSkill
    if (randomChar > 16) {randomSkill = 0}
    else {randomSkill = rando(0, 2);
        while (randomSkill == old_randomSkill) {
            randomSkill = rando(0, 2); }     
    }
    document.getElementById("mySkill").innerHTML = (randomSkill+1);
    setSkillimage()
    document.getElementById("priceskill").innerHTML = skillprice[randomChar][randomSkill];
}