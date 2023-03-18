const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {};
learning.topic = "JS";
learning.learningGoals = ["Build JS programs", "Create apps that save the world", "Become a react and Java Script expert", "Learn more"];
learning. category = "Front End Development";
learning.topicImportance = "High";
console.log(learning);

learning.topic = "JavaScrip";
// to remove something from a list, use splice

learning.learningGoals.splice(1,1);
console.log(learning.learningGoals);

topicElement.innerHTML = `I'm learning ${learning.topic}`;
topicElement.classList.remove("hide");
console.log(topicElement.innerHTML);
countElement.innerHTML = `I have ${learning.learningGoals.length} learning goals `;
countElement.classList.remove("hide");