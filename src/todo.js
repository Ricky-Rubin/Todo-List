const content = document.querySelector('#content');

function fillDiv() {
    class Task {
        constructor(title, description, reminder) {
            this.title = title,
            this.reminder = reminder,
            this.description = description
        };
    };

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

    const sendBtn = document.createElement('button');
    sendBtn.className = "send-btn";
    sendBtn.textContent = "Add ToDo";

    const todoTab = document.createElement('div');
    todoTab.className = "todo-tab";
    todoTab.setAttribute("id", "todo-tab");

    const titleArea = document.createElement('p');
    const descArea = document.createElement('p');
    const reminderArea = document.createElement('p');

    sendBtn.addEventListener("click", () => {
        const newTask = new Task(addTitle.value, addDesc.value, addReminder.value);
        console.log(newTask);
        [addTitle, addDesc, addReminder].forEach((one) => one.value = "");
        titleArea.textContent = newTask.title;
        descArea.textContent = newTask.description;
        reminderArea.textContent = newTask.reminder;
        todoTab.append(titleArea, descArea, reminderArea);

        content.innerHTML = "";
        content.appendChild(todoTab);
    })

    formHouse.append(titleLabel, addTitle, descLabel, addDesc, reminderLabel, addReminder, sendBtn);
    content.appendChild(formHouse);
};

export { fillDiv };