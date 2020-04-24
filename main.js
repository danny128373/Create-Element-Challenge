const articleEl = document.querySelector("#messages");

const sectionList = document.createElement("section");

sectionList.innerHTML += "What day is it today?<br>"
sectionList.innerHTML += "Friday!<br>"
sectionList.innerHTML += "What are you doing this weekend?<br>"
sectionList.innerHTML += "Spending time with the wife and the kids<br>"
sectionList.innerHTML += "What do you usually do with them?<br>"
sectionList.innerHTML += "We like to play soccer together, Emily is learning quickly how to dribble<br>"
sectionList.innerHTML += "Are you planning to have her join a soccer team as soon as she is old enough?<br>"
sectionList.innerHTML += "Only if she wants to, I won't force it if she doesn't want to<br>"
sectionList.innerHTML += "Didn't your dad force you to play soccer?<br>"
sectionList.innerHTML += "Oddly enough yeah, however, I developed a love for soccer on my own eventually. 24 years later, I still play!<br>"

articleEl.appendChild(sectionList);

