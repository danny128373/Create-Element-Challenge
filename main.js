// const articleEl = document.querySelector("#messages");

// const sectionList = document.createElement("section");

// sectionList.innerHTML += "What day is it today?<br>"
// sectionList.innerHTML += "Friday!<br>"
// sectionList.innerHTML += "What are you doing this weekend?<br>"
// sectionList.innerHTML += "Spending time with the wife and the kids<br>"
// sectionList.innerHTML += "What do you usually do with them?<br>"
// sectionList.innerHTML += "We like to play soccer together, Emily is learning quickly how to dribble<br>"
// sectionList.innerHTML += "Are you planning to have her join a soccer team as soon as she is old enough?<br>"
// sectionList.innerHTML += "Only if she wants to, I won't force it if she doesn't want to<br>"
// sectionList.innerHTML += "Didn't your dad force you to play soccer?<br>"
// sectionList.innerHTML += "Oddly enough yeah, however, I developed a love for soccer on my own eventually. 24 years later, I still play!<br>"

// articleEl.appendChild(sectionList);
// /////////////////////////////////////////////////////////////////////////////////////
// // A new "virtual" document fragment to contain components
// const fragment = document.createDocumentFragment()

// // Create an emperor component element
// const julius = document.createElement('div')
// julius.textContent = "Julius Caesar"
// fragment.appendChild(julius)

// // Create an emperor component element
// const augustus = document.createElement('div')
// augustus.textContent = "Augustus Caesar"
// fragment.appendChild(augustus)

// // Create an emperor component element
// const aurelius = document.createElement('div')
// aurelius.textContent = "Marcus Aurelius"
// fragment.appendChild(aurelius)

// /*
//     Now I can update my HTML document all at once, with all
//     three emperor components rendered. Otherwise, I would
//     have needed to add each one, individually - a much more
//     "expensive" operation.
// */
// document.querySelector("#emperorList").appendChild(fragment)
////////////////////////////////////////////////////////////////////////////////////

const fragment = document.createDocumentFragment();

const day = document.createElement("section");
day.innerHTML = `What day is it today?<br>Friday!`;
fragment.appendChild(day);

const weekend = document.createElement("section");
weekend.innerHTML = `<br>What are you doing this weekend?<br>Spending time with the wife and the kids`;
fragment.appendChild(weekend);

const whatToDo = document.createElement("section");
whatToDo.innerHTML = `<br>What do you usually do with them?<br>We like to play soccer together, Emily is learning quickly how to dribble`;
fragment.appendChild(whatToDo);

const joinTeam = document.createElement("section");
joinTeam.innerHTML = `<br>Are you planning to have her join a soccer team as soon as she is old enough?<br>Only if she wants to, I won't force it if she doesn't want to`;
fragment.appendChild(joinTeam);

const forced = document.createElement("section");
forced.innerHTML = `<br>Didn't your dad force you to play soccer?<br>Oddly enough yeah, however, I developed a love for soccer on my own eventually. 24 years later, I still play!`;
fragment.appendChild(forced);

document.querySelector("#messages").appendChild(fragment);