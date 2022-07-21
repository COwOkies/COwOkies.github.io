//characters list
let characters = ['Knight', 'Rogue', 'Wizard', 'Assassin', 'Alchemist', 'Engineer', 'Vampire', 'Paladin', 'Elf', 'Werewolf', 'Priest', 'Druid', 'Robot', 'Berseker', 'Necromancer', 'Officer', 'Taoist', 'Air Bender', 'Demonmancer', 'Inter-dimension Traveler', 'Element Envoy', 'The Beheaded', 'Time Traveling Ninja','Special Forces'];
let charprice = ['Free Char','f2p (2000)','f2p (3000)','f2p (4000)','f2p (5000)','Paid ($0.99)','Paid ($0.99)','Paid ($0.99)','f2p (12000)','Paid ($1.99)','f2p (12000)','Paid ($1.99)','f2p (IG Materials)','Paid ($1.99)','Paid ($1.99)','f2p (achievement)','Paid ($1.99)','f2p (achievement)','Paid ($1.99)','Paid (Priest+Necromancer)','f2p (Wizard+Elf)','f2p (IG Materials)','Paid (Assassin+Engineer)','f2p (Officer+Knight)'];
let charmode = [0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0];

//skills list
let skillprice =[['Free Skill','f2p (5000)','f2p (6000)'],['Free Skill','Paid ($1.99)','Paid ($1.99)'],['Free Skill','f2p (6000)','Paid ($1.99)'],['Free Skill','f2p (7000)','f2p (7000)'],['Free Skill','f2p (8000)','Paid ($1.99)'],['Free Skill','Paid ($1.99)','Paid ($1.99)'],['Free Skill','Paid ($1.99)','f2p (10000)'],['Free Skill','Paid ($1.99)','f2p (Design Table)'],['Free Skill','Paid ($1.99)','f2p (10000)'],['Free Skill','f2p (12000)','Paid ($1.99)'],['Free Skill','f2p (Design Table)','Paid ($1.99)'],['Free Skill','f2p (Design Table)','f2p (10000)'],['Free Skill','Paid ($1.99)','f2p (8000)'],['Free Skill','Paid ($1.99)','f2p (Design Table)'],['Free Skill','Paid ($1.99)','Paid ($1.99)'],['Free Skill','f2p (8000)','f2p (Design Table)'],['Free Skill','Paid ($1.99)','f2p (10000)'],['Free Skill'],['Free Skill'],['Free Skill'],['Free Skill'],['Free Skill'],['Free Skill'],['Free Skill']]
let skillmode =[[0,0,0],[0,1,1],[0,0,1],[0,0,0],[0,0,1],[0,1,1],[0,1,0],[0,1,0],[0,1,0],[0,0,1],[0,0,1],[0,0,0],[0,1,0],[0,1,0],[0,1,1],[0,0,0],[0,1,0],[0],[0],[0],[0],[0],[0],[0]]

//setup some important var
var [randomChar,randomSkill,color] = [1,1,1]
var [minvalue,maxvalue] = [0,18]
var path = (".png")
var f2p = false


//Return and display a random Character
function getRandomChar(){
    old_randomChar = randomChar
    while (randomChar == old_randomChar) {randomChar = rando(minvalue, maxvalue);}
    if (randomChar > 16) {
        randomSkill = 0
        button_for_skill = document.getElementById("button_for_skill")
        button_for_skill.src="style/button_skill_x.png"
        button_for_skill.style.cssText = "cursor: not-allowed;";}
    else {button_for_skill.src="style/button_skill.png"
        button_for_skill.style.cssText = "cursor: pointer;";}
        
    if ((f2p == 1) || (f2p == 2)) {
        while (skillmode[randomChar][randomSkill] == 1) {randomSkill = rando(0, 2);}
        while (charmode[randomChar] == 1) {randomChar = rando(minvalue, maxvalue);}}
    
    if (randomChar == 23) {path = (".gif")}
    else {path = (".png")}
    updateAll()
}

//Return and display a random Skill
function getRandomSkill(){
    old_randomSkill = randomSkill
    if (randomChar > 16) {randomSkill = 0}
    else {randomSkill = rando(0, 2);
        while (randomSkill == old_randomSkill) {
            randomSkill = rando(0, 2); }}

    if ((f2p == 1) || (f2p == 3)) {
        while (skillmode[randomChar][randomSkill] == 1) {randomSkill = rando(0, 2); }}
    updateAll();
}

//Display the ".png" of the actual Char/Skill
function getImages() {
    const image_Char_Skin_path = "skins/"+randomChar+path;
    const image_Char_Skill_path2 = ("skills/"+randomChar+"-"+randomSkill+".png");

    const image_Char_Skin = document.getElementById("Char_Skin");
    const image_Char_Skill = document.getElementById("Char_Skill");

    image_Char_Skin.src = image_Char_Skin_path;
    image_Char_Skill.src = image_Char_Skill_path2;}

//cycle between dark-mode/light-mode (not finished yet)
function switchMode() {
    color = color + 1
    if (color > 1) {color = 0;}

    var body = document.body;
    if (color == 1) {
    body.className = "dark-mode";
    document.getElementById("color").innerHTML = "☀️";}

    else {body.className = "light-mode";
    document.getElementById("color").innerHTML = "🌙";}
}

//enable/disable legendary characters
function enable_legend() {
    if (document.querySelector('#c_legendary').checked) {
        document.querySelector('.only_legendaries').style.visibility = "visible";
        maxvalue = 23;}

    else {
        [maxvalue,minvalue] = [18,0];
        document.querySelector('.only_legendaries').style.visibility = "hidden";
        document.querySelector('#c_onlylegendary').checked = false;

        getRandomChar()}
}

//enable/disable the other characters (than legendary)
function onlylegend() {
    if (document.querySelector('#c_onlylegendary').checked) {
        minvalue = 19;
        getRandomChar()}

    else {minvalue = 0;}
}

//show/hide prices
function toggleprices() {
    if (document.querySelector('#c_prices').checked) {
        document.querySelector('#char_price').style.visibility = "visible";
        document.querySelector('#skill_price').style.visibility = "visible";}

    else {
        document.querySelector('#char_price').style.visibility = "hidden";
        document.querySelector('#skill_price').style.visibility = "hidden";}
}

//enable/disable f2p and choose mode 
function enablef2p() {
    var c_f2p_all = document.querySelector('#c_f2p_all')
    var c_f2p_char = document.querySelector('#c_f2p_char')
    var c_f2p_skill = document.querySelector('#c_f2p_skill')

    if (c_f2p_all.checked) {
        f2p = 1;
        c_f2p_char.disabled = true;
        c_f2p_skill.disabled = true;
        getRandomSkill()
        getRandomChar()}

    else if (c_f2p_char.checked) {
        f2p = 2;
        c_f2p_all.disabled = true;
        c_f2p_skill.disabled = true;
        getRandomChar()}

    else if (c_f2p_skill.checked) {
        f2p = 3;
        c_f2p_all.disabled = true;
        c_f2p_char.disabled = true;
        getRandomSkill()}

    else {
        f2p = false
        c_f2p_all.disabled = false;
        c_f2p_char.disabled = false;
        c_f2p_skill.disabled = false;
        getRandomSkill()
        getRandomChar()}

}

//update the look of the page
function updateAll() {
    document.getElementById("myCharacter").innerHTML = characters[randomChar];
    document.getElementById("char_price").innerHTML = charprice[randomChar];
    document.getElementById("skill_price").innerHTML = skillprice[randomChar][randomSkill];
    document.getElementById("mySkill").innerHTML = (randomSkill+1);
    
    getImages()
}