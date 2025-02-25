const container = document.querySelector('#container')
const navPane = document.querySelector('#left');
const contentPane = document.querySelector('#right');

function fillContent() {
    class Task {
        constructor(title, description, reminder) {
            this.title = title,
            this.description = description,
            this.reminder = reminder
        };
    ;}

    const formHouse = document.createElement('div');
    formHouse.className = "form-house";

    const titleLabel = document.createElement('label');
    titleLabel.textContent = "Title: ";
    titleLabel.setAttribute("for", "addTitle")

    const addTitle = document.createElement('input');
    addTitle.setAttribute("id", "addTitle");
    addTitle.setAttribute("required", "");

    const descLabel = document.createElement('label');
    descLabel.textContent = "Description: ";
    descLabel.setAttribute("for", "addDesc")

    const addDesc = document.createElement('input');
    addDesc.setAttribute("id", "addDesc");
    addDesc.setAttribute("required", "");

    const reminderLabel = document.createElement('label');
    reminderLabel.textContent = "Reminder: ";
    reminderLabel.setAttribute("for", "addReminder");

    const addReminder = document.createElement('input');
    addReminder.setAttribute("id", "addReminder");
    addReminder.setAttribute("required", "");

    const topTextTwo = document.createElement('p'); //This is the text that will show up at the top
    topTextTwo.className = 'top-text-two';          // of the slide to fill in the todo task details
    topTextTwo.textContent = 'Todo Details';

    const topTextOne = document.createElement('div');
    topTextOne.className = 'top-text-one';   //This is the Todo text that will show on the landing
    topTextOne.textContent = 'Todo';        // It will be at the top of teh left pane.

    const addProject = document.createElement('button'); 
    addProject.className = 'project'                  
    addProject.textContent = '+ Add Project'

    navPane.append(topTextOne, addProject);
}


export { fillContent }