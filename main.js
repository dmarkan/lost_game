let health = 10;
let attack = 1;
let armor = 0;
let beginning = document.querySelector("#beginning");
let ending = document.querySelector("#ending");
let button = document.querySelector("#button");
let label = document.querySelector("#label");
let map = document.querySelector("#map");
let map2 = document.querySelector("#map2");
let map3 = document.querySelector("#map3");
let map4 = document.querySelector("#map4");
let map5 = document.querySelector("#map5");
let up = document.querySelector("#up");
let img = document.querySelector("#img");
let story = document.querySelector("#story");
let at = document.querySelector("#at");
let hp = document.querySelector("#hp");
let ac = document.querySelector("#ac");
let enemy = document.querySelector("#enemy");
let stick = document.querySelector("#stick");
let key = document.querySelector("#key");
let bandages = document.querySelector("#bandages");
let boots = document.querySelector("#boots");
let hook = document.querySelector("#hook");
let carkeys = document.querySelector("#carkeys");
let wolfHp = 3;
let wolfAt = 1;
let gatorHp = 3;
let gatorAt = 2;
let manHp = 4;
let manAt = 3;
let ratHp = 2;
let ratAt = 2;

button.addEventListener("click", function () {
beginning.style.visibility = "hidden";
text();
});

function text() {

    // 1st lvl

    let labela = document.querySelector("#labela").value.toLowerCase();
    if (labela == "help" && (story.innerHTML == "You woke up in the woods feeling dizzy, what happened?" || story.innerHTML == '')) {
        alert("Try to type: up, down, left, right, look");
    }
    if (labela == "look" && (story.innerHTML == "You woke up in the woods feeling dizzy, what happened?" || story.innerHTML == '')) {
        alert("You see some sticks on the ground, if you want to pick one up, type: pick up stick");
    }
    if (labela == "pick up stick" && (story.innerHTML == "You woke up in the woods feeling dizzy, what happened?" || story.innerHTML == "You defeated the wolf, now find what that key opens")) {
        alert("You took one stick and equipped it as a weapon, your attack increases!");
        at.innerHTML = "Attack: " + (attack + 1);
        stick.style.visibility = "visible";
    }
    if (labela == "up" && story.innerHTML == "You woke up in the woods feeling dizzy, what happened?") {
        enemy.style.visibility = "visible";
        img.src = "images/wolf.jpg";
        story.innerHTML = "You see a large wolf in front of you! What you wanna do?";
        up.style.visibility = "hidden";
    }
    if (labela == "down" && story.innerHTML == "You woke up in the woods feeling dizzy, what happened?") {
        img.src = "images/cabin.jpg";
        story.innerHTML = "You see an old cabin in the distance";
        down.style.visibility = "hidden";
    }
    if (labela == "look" && story.innerHTML == "You see an old cabin in the distance") {
        alert("The door to the cabin seems to be locked!");
    }
    if (labela == "help" && story.innerHTML == "You see an old cabin in the distance") {
        alert("Try to type: up, look");
    }
    if (labela == "up" && story.innerHTML == "You see an old cabin in the distance") {
        story.innerHTML = "You woke up in the woods feeling dizzy, what happened?";
        img.src = "images/start.jpg";
    }
    if (labela == "left" && (story.innerHTML == "You woke up in the woods feeling dizzy, what happened?" || story.innerHTML == "")) {
        img.src = "images/bones.jpg";
        story.innerHTML = "Something happened here...";
        left.style.visibility = "hidden";
    }
    if (labela == "help" && story.innerHTML == "Something happened here...") {
        alert("Try to type: right, look");
    }
    if (labela == "look" && story.innerHTML == "Something happened here...") {
        alert("Who or what did this?");
    }
    if (labela == "right" && story.innerHTML == "Something happened here...") {
        img.src = "images/start.jpg";
        story.innerHTML = "";
    }
    if (labela == "right" && (story.innerHTML == "You woke up in the woods feeling dizzy, what happened?" || story.innerHTML == "")) {
        img.src = "images/trash.jpg";
        story.innerHTML = "What a mess!";
        right.style.visibility = "hidden";
    }
    if (labela == "help" && story.innerHTML == "What a mess!") {
        alert("Try to type: left, look");
    }
    if (labela == "look" && story.innerHTML == "What a mess!") {
        alert("Somebody must've left in a hurry and left a shirt behind, maybe you can use it, try to pick it up (type: pick up shirt)");
    }
    if (labela == "pick up shirt" && (story.innerHTML == "What a mess!" || story.innerHTML == "You defeated the wolf, now find what that key opens")) {
        alert("You took the shirt and equipped it as an armor, your armor increases!");
        ac.innerHTML = "Armor: " + (armor + 1);
        shirt.style.visibility = "visible";
    }
    if (labela == "left" && story.innerHTML == "What a mess!") {
        img.src = "images/start.jpg";
        story.innerHTML = "You woke up in the woods feeling dizzy, what happened?";
    }
    if (labela == "help" && story.innerHTML == "You see a large wolf in front of you! What you wanna do?") {
        alert("Try to type: down, look, attack");
    }
    if (labela == "down" && (story.innerHTML == "You see a large wolf in front of you! What you wanna do?" || story.innerHTML == "The wolf growls at you, it's ready to attack!")) {
        enemy.style.visibility = "hidden";
        img.src = "images/start.jpg";
        story.innerHTML = "You woke up in the woods feeling dizzy, what happened?";
    }
    if (labela == "back" && story.innerHTML == "You defeated the wolf! There is a key in his stomach, you took the key") {
        img.src = "images/start.jpg";
        enemy.style.visibility = "hidden";
        story.innerHTML = "You defeated the wolf, now find what that key opens";
    }
    if (labela == "down" && story.innerHTML === "You defeated the wolf, now find what that key opens") {
        img.src = "images/cabin.jpg";
        story.innerHTML = "Maybe try to unlock the cabin door";
        down.style.visibility = "hidden";
    }
    if (labela == "help" && story.innerHTML === "You defeated the wolf, now find what that key opens") {
        alert("You can only go back from here, and down from the start");
    }
    if (labela == "left" && story.innerHTML === "You defeated the wolf, now find what that key opens") {
        img.src = "images/bones.jpg";
        left.style.visibility = "hidden";
    }
    if (labela == "back" && story.innerHTML === "You defeated the wolf, now find what that key opens") {
        img.src = "images/start.jpg";
    }
    if (labela == "right" && story.innerHTML === "You defeated the wolf, now find what that key opens") {
        img.src = "images/trash.jpg";
        right.style.visibility = "hidden";
    }
    if (labela == "help" && story.innerHTML === "Maybe try to unlock the cabin door") {
        alert("How about you try to unlock the cabin door with a key? (type: unlock door");
    }

    if (labela == "look" && story.innerHTML == "You see a large wolf in front of you! What you wanna do?") {
        story.innerHTML = "The wolf growls at you, it's ready to attack!";
    }
    if (labela == "help" && story.innerHTML == "You defeated the wolf! There is a key in his stomach, you took the key") {
        alert("You defeated the wolf, great! now go back (type: back)");
    }

    // 2nd lvl

    if (labela == "unlock door" && story.innerHTML === "Maybe try to unlock the cabin door") {
        alert("You unlocked the door and enter the cabin...");
        img.src = "images/start2.jpg";
        map2.style.visibility = "visible";
        story.innerHTML = "There is nobody inside, better look around";
        up.style.visibility = "visible";
        down.style.visibility = "visible";
        left.style.visibility = "visible";
        right.style.visibility = "visible";
    }
    if (labela == "help" && (story.innerHTML === "There is nobody inside, better look around" || story.innerHTML == "An old cabin")) {
        alert("Try to type: up, left, right, look");
    }
    if (labela == "look" && (story.innerHTML === "There is nobody inside, better look around" || story.innerHTML == "An old cabin")) {
        alert("There is so much stuff here, maybe you'll find something useful if you move around and look more");
    }
    if (labela == "up" && (story.innerHTML === "There is nobody inside, better look around" || story.innerHTML == "An old cabin")) {
        up.style.visibility = "hidden";
        story.innerHTML = "This sure is an old cabin, but it looks clean, who lives here?";
        img.src = "images/window.jpg";
    }
    if (labela == "left" && (story.innerHTML === "There is nobody inside, better look around" || story.innerHTML == "An old cabin")) {
        left.style.visibility = "hidden";
        story.innerHTML = "This porch is beautiful!";
        img.src = "images/porch.jpg";
    }
    if (labela == "right" && (story.innerHTML === "There is nobody inside, better look around" || story.innerHTML == "An old cabin")) {
        right.style.visibility = "hidden";
        story.innerHTML = "You are in the back of the cabin";
        img.src = "images/stairs.jpg";
    }
    if (labela == "help" && story.innerHTML === "You are in the back of the cabin") {
        alert("Try to type: left, down, look");
    }
    if (labela == "look" && story.innerHTML === "You are in the back of the cabin") {
        alert("There are stairs that lead in the basement");
    }
    if (labela == "left" && story.innerHTML === "You are in the back of the cabin") {
        story.innerHTML = "An old cabin";
        img.src = "images/start2.jpg";
    }
    if (labela == "down" && story.innerHTML === "You are in the back of the cabin") {
        story.innerHTML = "There is a big Gator down here!";
        img.src = "images/gator.jpg";
        down.style.visibility = "hidden";
        enemy.style.visibility = "visible";
        enemy.innerHTML = "Enemy health: " + gatorHp;
    }
    if (labela == "help" && (story.innerHTML === "There is a big Gator down here!" || story.innerHTML ==="That gator sure look dangerous, you wanna make sure that you have enough health to fight him")) {
        alert("Try to type: up, look, attack");
    }
    if (labela == "up" && (story.innerHTML === "There is a big Gator down here!" || story.innerHTML ==="That gator sure look dangerous, you wanna make sure that you have enough health to fight him")) {
        story.innerHTML = "You are in the back of the cabin";
        img.src = "images/stairs.jpg";
        enemy.style.visibility = "hidden";
    }
    if (labela == "look" && story.innerHTML === "There is a big Gator down here!") {
        story.innerHTML = "That gator sure look dangerous, you wanna make sure that you have enough health to fight him";
    }
    if (labela == "help" && story.innerHTML === "This porch is beautiful!") {
        alert("Try to type: right, look");
    }
    if (labela == "look" && story.innerHTML === "This porch is beautiful!") {
        alert("That is a vast forest outside, I hope that someone will come looking for me");
    }
    if (labela == "right" && story.innerHTML === "This porch is beautiful!") {
        story.innerHTML = "An old cabin";
        img.src = "images/start2.jpg";
    }
    if (labela == "help" && story.innerHTML === "This sure is an old cabin, but it looks clean, who lives here?") {
        alert("Try to type: down, look");
    }
    if (labela == "look" && story.innerHTML === "This sure is an old cabin, but it looks clean, who lives here?") {
        alert("There are some bandages in the drawer, you can pick them up by typing: pick up bandages");
    }
    if (labela == "pick up bandages" && story.innerHTML === "This sure is an old cabin, but it looks clean, who lives here?") {
        alert("You put the bandages in your inventory, you can now heal by typing: heal");
        bandages.style.visibility = "visible";
        bandages = true;
    }
    if (labela == "heal" && bandages == true) {
            hp.innerHTML = "Health: " + (health + 3);
    }
    if (labela == "down" && story.innerHTML === "This sure is an old cabin, but it looks clean, who lives here?") {
        story.innerHTML = "An old cabin";
        img.src = "images/start2.jpg";
    }
    if (labela == "help" && story.innerHTML === "You defeated the gator! Now you can enter the basement!") {
        alert("Remember to heal and (type: enter basement) to continue");
    }

    // 3rd lvl

    if (labela == "enter basement" && story.innerHTML === "You defeated the gator! Now you can enter the basement!") {
        story.innerHTML = "There is a basement beneath the cabin! I wonder where it leads to?";
        img.src = "images/start3.jpg";
        enemy.style.visibility = "hidden";
        up.style.visibility = "visible";
        down.style.visibility = "visible";
        left.style.visibility = "visible";
        right.style.visibility = "visible";
        map3.style.visibility = "visible";
}
if (labela == "help" && story.innerHTML === "There is a basement beneath the cabin! I wonder where it leads to?") {
    alert("Try to type: left, look");
}
if (labela == "look" && story.innerHTML === "There is a basement beneath the cabin! I wonder where it leads to?") {
    alert("There are some rubber boots on the left, you can pick them up by typing: pick up boots");
}
if (labela == "pick up boots" && story.innerHTML === "There is a basement beneath the cabin! I wonder where it leads to?") {
    alert("You equipped the boots, your armor increases!");
    ac.innerHTML = "Armor: " + (armor + 2);
    boots.style.visibility = "visible";
}
if (labela == "left" && story.innerHTML === "There is a basement beneath the cabin! I wonder where it leads to?") {
    left.style.visibility = "hidden";
    img.src = "images/tunnel.jpg";
    story.innerHTML = "What is this tunnel? It looks as if some underground complex connects to this basement!";
}
if (labela == "help" && (story.innerHTML === "What is this tunnel? It looks as if some underground complex connects to this basement!" || story.innerHTML == "The tunnel is made out of human bones and skulls!")) {
    alert("Try to type: down, up, back, look");
}
if (labela == "back" && (story.innerHTML === "What is this tunnel? It looks as if some underground complex connects to this basement!" || story.innerHTML == "The tunnel is made out of human bones and skulls!")) {
    story.innerHTML = "There is a basement beneath the cabin! I wonder where it leads to?";
    img.src = "images/start3.jpg";
}
if (labela == "look" && (story.innerHTML === "What is this tunnel? It looks as if some underground complex connects to this basement!" || story.innerHTML == "The tunnel is made out of human bones and skulls!")) {
    story.innerHTML = "The tunnel is made out of human bones and skulls!";
}
if (labela === "down" && (story.innerHTML === "What is this tunnel? It looks as if some underground complex connects to this basement!" || story.innerHTML == "The tunnel is made out of human bones and skulls!")) {
    story.innerHTML = "This is sick!";
    down.style.visibility = "hidden";
    img.src = "images/pillar.jpg";
}
if (labela == "help" && story.innerHTML === "This is sick!") {
    alert("Try to type: back, look");
}
if (labela == "look" && story.innerHTML === "This is sick!") {
    alert("This is scary...");
}
if (labela == "back" && story.innerHTML === "This is sick!") {
    img.src = "images/tunnel.jpg";
    story.innerHTML = "What is this tunnel? It looks as if some underground complex connects to this basement!";
}
if (labela == "up" && (story.innerHTML === "What is this tunnel? It looks as if some underground complex connects to this basement!" || story.innerHTML == "The tunnel is made out of human bones and skulls!")) {
    img.src = "images/man.jpg";
    up.style.visibility = "hidden";
    alert("So you are the one that killed my pet Gator, you'll pay for this!")
    story.innerHTML = "There is a man blocking the stairs to exit!";
    enemy.style.visibility = "visible";
    enemy.innerHTML = "Enemy health: " + manHp;
}
if (labela == "help" && story.innerHTML === "There is a man blocking the stairs to exit!") {
    alert("Try to type: down, look, attack");
}
if (labela == "look" && story.innerHTML === "There is a man blocking the stairs to exit!") {
    alert("DIEEEEEE!");
}
if (labela == "down" && story.innerHTML === "There is a man blocking the stairs to exit!") {
    img.src = "images/tunnel.jpg";
    story.innerHTML = "What is this tunnel? It looks as if some underground complex connects to this basement!";
    enemy.style.visibility = "hidden";
}
if (labela == "help" && story.innerHTML === "You defeated the man! Quickly, to the stairs!") {
    alert("You can only go right from here, type: right");
}
if (labela == "right" && story.innerHTML === "You defeated the man! Quickly, to the stairs!") {
    img.src = "images/exit.jpg";
    story.innerHTML = "You can see the exit, go upstairs!";
    enemy.style.visibility = "hidden";
}
if (labela == "help" && story.innerHTML === "You can see the exit, go upstairs!") {
    alert("Try to type: up, look");
}
if (labela == "look" && story.innerHTML === "You can see the exit, go upstairs!") {
    alert("There is no time for that, you must escape the catacombs!");
}

// 4th lvl

if (labela == "up" && story.innerHTML === "You can see the exit, go upstairs!") {
    img.src = "images/start4.jpg";
    map4.style.visibility = "visible";
    story.innerHTML = "The stairs lead to the streets, it's already dark outside";
    up.style.visibility = "visible";
    down.style.visibility = "visible";
    left.style.visibility = "visible";
    right.style.visibility = "visible";
}
if (labela == "help" && story.innerHTML === "The stairs lead to the streets, it's already dark outside") {
    alert("Try to type: right, left, down, look");
}
if (labela == "look" && story.innerHTML === "The stairs lead to the streets, it's already dark outside") {
    if (hook == true) {
    alert("You used the hook to fish out the object from the drain shaft!");
    alert("It's a car key!"); 
    carkeys.style.visibility = "visible";
    carkeys = true;
    } else {
    alert("There is a drain shaft on the floor, looks like there is something inside");
    }
}
if (labela == "down" && story.innerHTML === "The stairs lead to the streets, it's already dark outside") {
    down.style.visibility = "hidden";
    img.src = "images/back.jpg";
    story.innerHTML = "This must be the back alley";
}
if (labela == "right" && story.innerHTML === "The stairs lead to the streets, it's already dark outside") {
    right.style.visibility = "hidden";
    img.src = "images/rat.jpg";
    story.innerHTML = "A huge rat jumps from the shadows!";
    enemy.style.visibility = "visible";
    enemy.innerHTML = "Enemy health: " + ratHp;
}
if (labela == "help" && story.innerHTML === "A huge rat jumps from the shadows!") {
    alert("Try to type: left, look, attack");
}
if (labela == "look" && story.innerHTML === "A huge rat jumps from the shadows!") {
    alert("That's an ugly rat!");
}
if (labela == "help" && story.innerHTML === "You defeated the rat! Looks like there is some hook inside its stomach!") {
    alert("Try to type: pick up hook, left");
}
if (labela == "pick up hook" && story.innerHTML === "You defeated the rat! Looks like there is some hook inside its stomach!") {
    alert("You put the hook in your inventory");
    hook.style.visibility = "visible";
    hook = true;
}
if (labela == "left" && (story.innerHTML === "A huge rat jumps from the shadows!" || story.innerHTML === "You defeated the rat! Looks like there is some hook inside its stomach!")) {
    enemy.style.visibility = "hidden";
    img.src = "images/start4.jpg";
    story.innerHTML = "The stairs lead to the streets, it's already dark outside";
}
if (labela == "help" && story.innerHTML === "This must be the back alley") {
    alert("Try to type: up, look");
}
if (labela == "look" && story.innerHTML === "This must be the back alley") {
    alert("The streets are empty, there is nobody in sight");
}
if (labela == "up" && story.innerHTML === "This must be the back alley") {
    img.src = "images/start4.jpg";
    story.innerHTML = "The stairs lead to the streets, it's already dark outside";
}
if (labela == "left" && story.innerHTML === "The stairs lead to the streets, it's already dark outside") {
    left.style.visibility = "hidden";
    img.src = "images/street.jpg";
    story.innerHTML = "The intersection is up ahead";
}
if (labela == "help" && story.innerHTML === "The intersection is up ahead") {
    alert("Try to type: up, right, look");
}
if (labela == "look" && story.innerHTML === "The intersection is up ahead") {
    alert("Looks like there is a car parked behind the corner");
}
if (labela == "right" && story.innerHTML === "The intersection is up ahead") {
    img.src = "images/start4.jpg";
    story.innerHTML = "The stairs lead to the streets, it's already dark outside";
}
if (labela == "right" && story.innerHTML === "The stairs lead to the streets, it's already dark outside") {
    img.src = "images/start4.jpg";
    story.innerHTML = "The stairs lead to the streets, it's already dark outside";
}
if (labela == "up" && story.innerHTML === "The intersection is up ahead") {
    img.src = "images/car.jpg";
    up.style.visibility = "hidden";
    story.innerHTML = "There is a car parked!";
}
if (labela == "help" && story.innerHTML === "There is a car parked!") {
    alert("Try to type: down, look");
}
if (labela == "look" && story.innerHTML === "There is a car parked!") {
    if (carkeys == true) {
    alert("The carkeys fit this car! Time to drive out of here!");
    } else {
    alert("There are no keys inside!");
    }
}
if (labela == "help" && story.innerHTML === "There is a car parked!" && carkeys == true) {
    alert("Type: drive");
}
if (labela == "down" && story.innerHTML === "There is a car parked!") {
    img.src = "images/street.jpg";
    story.innerHTML = "The intersection is up ahead";
}

// 5th lvl

if (labela == "drive" && story.innerHTML === "There is a car parked!") {
    img.src = "images/start5.png";
    map5.style.visibility = "visible";
    story.innerHTML = "You are inside a car";
    up.style.visibility = "visible";
    down.style.visibility = "visible";
    left.style.visibility = "visible";
    right.style.visibility = "visible";
}
if (labela == "help" && story.innerHTML === "You are inside a car") {
    alert("Type: left, right, up, look");
    } 
if (labela == "help" && story.innerHTML === "You are inside a car" && girl == true) {
    alert("Type: down");
    } 
if (labela == "look" && story.innerHTML === "You are inside a car") {
    alert("BMW, a nice car!");
}
if (labela == "down" && story.innerHTML === "You are inside a car" && girl == true) {
    img.src = "images/girl.png";
    down.style.visibility = "hidden";
    story.innerHTML = "A ghost of a little girl!";
}
if (labela == "help" && story.innerHTML === "A ghost of a little girl!") {
    alert("Type: escape");
}
if (labela == "escape" && story.innerHTML === "A ghost of a little girl!") {
    ending.style.visibility = "visible";
}
if (labela == "left" && story.innerHTML === "You are inside a car") {
    img.src = "images/leftmirror.jpeg";
    left.style.visibility = "hidden";
    story.innerHTML = "There is no need to for a seatbelt right now!";
}
if (labela == "right" && story.innerHTML === "You are inside a car") {
    img.src = "images/rightmirror.jpg";
    right.style.visibility = "hidden";
    story.innerHTML = "A right rear mirror";
}
if (labela == "help" && story.innerHTML === "A right rear mirror") {
    alert("Type: left, look");
}
if (labela == "look" && story.innerHTML === "A right rear mirror") {
    alert("There is nobody behind you!");
}
if (labela == "left" && story.innerHTML === "A right rear mirror") {
    img.src = "images/start5.png";
    story.innerHTML = "You are inside a car";
}
if (labela == "up" && story.innerHTML === "You are inside a car") {
    img.src = "images/front.jpg";
    story.innerHTML = "You are driving!";
    girl = true;
}
if (labela == "help" && story.innerHTML === "You are driving!") {
    alert("Type: down, look");
}
if (labela == "look" && story.innerHTML === "You are driving!") {
    alert("This car can sure go fast!");
}
if (labela == "down" && story.innerHTML === "You are driving!") {
    img.src = "images/start5.png";
    story.innerHTML = "You are inside a car";
}
if (labela == "help" && story.innerHTML === "There is no need to for a seatbelt right now!") {
    alert("Type: right, look");
}
if (labela == "look" && story.innerHTML === "There is no need to for a seatbelt right now!") {
    alert("The car looks brand new!");
}
if (labela == "right" && story.innerHTML === "There is no need to for a seatbelt right now!") {
    img.src = "images/start5.png";
    story.innerHTML = "You are inside a car";
}

    // Wolf battle

    if (labela == "attack" && (story.innerHTML == "You see a large wolf in front of you! What you wanna do?" || story.innerHTML == "The wolf growls at you, it's ready to attack!")) {
        for (let i = 0; i < 3; i++) {
            wolfHp = attack - i;
            enemy.innerHTML = "Enemy health: " + (wolfHp - 1);
            let random = Math.floor(Math.random() * 2);
            if (random == 0 && wolfAt > armor) {
                alert("The wolf hits you!");
                hp.innerHTML = "Health: " + (health -= 1);
            } else {
                alert("The wolf misses you!");
            }
            if (wolfHp <= 0) {
                story.innerHTML = "You defeated the wolf! There is a key in his stomach, you took the key";
                key.style.visibility = "visible";
            }
        }
    }

    // Gator battle 
    if (labela === "attack" && (story.innerHTML == "There is a big Gator down here!" || story.innerHTML =="That gator sure look dangerous, you wanna make sure that you have enough health to fight him")) {
        for (let i = 0; i < 3; i++) {
            gatorHp = attack - i;
            enemy.innerHTML = "Enemy health: " + (gatorHp - 1);
            let random = Math.floor(Math.random() * 3);
            if (random <= 1 && gatorAt > armor) {
                alert("The gator hits you!");
                hp.innerHTML = "Health: " + (health -= 1);
            } else {
                alert("The gator misses you!");
            }
            if (gatorHp <= 0) {
                story.innerHTML = "You defeated the gator! Now you can enter the basement!"; 
            }
            if (health <= 0) {
                story.innerHTML = "You died! Refresh the browser to play again!";
            bandages = false;
            }
        }
    }

     // Man battle 
     if (labela === "attack" && story.innerHTML == "There is a man blocking the stairs to exit!") {
        for (let i = 0; i < 4; i++) {
            manHp = attack - i;
            enemy.innerHTML = "Enemy health: " + (manHp - 1);
            let random = Math.floor(Math.random() * 5);
            if (random <= 2 && manAt > armor) {
                alert("The man hits you!");
                hp.innerHTML = "Health: " + (health -= 2);
            } else {
                alert("The man misses you!");
            }
            if (manHp <= 0) {
                story.innerHTML = "You defeated the man! Quickly, to the stairs!"; 
            }
            if (health <= 0) {
                story.innerHTML = "You died! Refresh the browser to play again!";
            bandages = false;
            }
        }
    }

    // Rat battle 
    if (labela === "attack" && story.innerHTML == "A huge rat jumps from the shadows!") {
        for (let i = 0; i < 2; i++) {
            ratHp = attack - i;
            enemy.innerHTML = "Enemy health: " + (ratHp - 1);
            let random = Math.floor(Math.random() * 2);
            if (random == 0 && ratAt > armor) {
                alert("The rat hits you!");
                hp.innerHTML = "Health: " + (health -= 1);
            } else {
                alert("The rat misses you!");
            }
            if (ratHp <= 0) {
                story.innerHTML = "You defeated the rat! Looks like there is some hook inside its stomach!"; 
            }
            if (health <= 0) {
                story.innerHTML = "You died! Refresh the browser to play again!";
            bandages = false;
            }
        }
    }
}
