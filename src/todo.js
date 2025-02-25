const content = document.querySelector('#content');
const form = document.querySelector('#form');
const leftPanel = document.querySelector('#left-panel');
const rightPanel = document.querySelector('#right-panel');

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

    sendBtn.addEventListener("click", () => {
        const newTask = new Task(addTitle.value, addDesc.value, addReminder.value);
        console.log(newTask);

        const todoTab = document.createElement('div');
        todoTab.className = "todo-tab";
        todoTab.setAttribute("id", "todo-tab");
        todoTab.style.display = "flex";

        const titleArea = document.createElement('p');
        titleArea.textContent = newTask.title;

        const descArea = document.createElement('p');
        descArea.textContent = newTask.description;

        const reminderArea = document.createElement('p');
        reminderArea.textContent = newTask.reminder;

        const addAnother = document.createElement('button');
        addAnother.className = "add-another";
        addAnother.textContent = "Add Another";
        
        todoTab.append(titleArea, descArea, reminderArea);
        content.appendChild(todoTab);

        [addTitle, addDesc, addReminder].forEach((one) => one.value = "");
        
        form.style.display = "none";
        content.style.opacity = 1.0;

        addAnother.addEventListener("click", () => {
            content.style.opacity = 0.1;
            form.style.display = "flex";
        })

        const topArea = document.createElement('div');
        topArea.className = "top-area";
        
        const text = document.createElement('p');
        text.className = 'class-text';
        text.textContent = 'Tasks';

        // topArea.append(text, addAnother);
        // rightPanel.append(topArea);
    });

    formHouse.append(titleLabel, addTitle, descLabel, addDesc, reminderLabel, addReminder, sendBtn);
    form.appendChild(formHouse);

    // topArea.append(text, addAnother);
    // rightPanel.append(topArea);
};

function forLeftPanel() {
    const logoArea = document.createElement('div');
    logoArea.className = "logo-area"

    const menuButtons = document.createElement('div');
    menuButtons.className = "menu-buttons";

    const svgTodo = `<svg width="50" height="50" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><path style="fill:#e4eaf8" d="M102.079 136.284H16.568a8.552 8.552 0 0 1-8.551-8.551V42.221a8.552 8.552 0 0 1 8.551-8.551h85.511a8.552 8.552 0 0 1 8.551 8.551v85.511a8.551 8.551 0 0 1-8.551 8.552zM102.079 307.307H16.568a8.552 8.552 0 0 1-8.551-8.551v-85.511a8.552 8.552 0 0 1 8.551-8.551h85.511a8.552 8.552 0 0 1 8.551 8.551v85.511a8.551 8.551 0 0 1-8.551 8.551zM102.079 478.33H16.568a8.552 8.552 0 0 1-8.551-8.551v-85.511a8.552 8.552 0 0 1 8.551-8.551h85.511a8.552 8.552 0 0 1 8.551 8.551v85.511a8.551 8.551 0 0 1-8.551 8.551z"/><path d="M161.937 221.261h256.534c4.428 0 8.017-3.588 8.017-8.017s-3.588-8.017-8.017-8.017H161.937c-4.428 0-8.017 3.588-8.017 8.017s3.589 8.017 8.017 8.017zM161.937 306.772h153.921c4.428 0 8.017-3.588 8.017-8.017s-3.588-8.017-8.017-8.017H161.937c-4.428 0-8.017 3.588-8.017 8.017s3.589 8.017 8.017 8.017zM503.983 247.983H161.937A8.016 8.016 0 0 0 153.92 256a8.016 8.016 0 0 0 8.017 8.017h342.046A8.016 8.016 0 0 0 512 256a8.016 8.016 0 0 0-8.017-8.017zM161.937 50.238h256.534c4.428 0 8.017-3.588 8.017-8.017s-3.588-8.017-8.017-8.017H161.937c-4.428 0-8.017 3.588-8.017 8.017s3.589 8.017 8.017 8.017zM161.937 135.749h153.921a8.016 8.016 0 0 0 8.017-8.017 8.016 8.016 0 0 0-8.017-8.017H161.937a8.016 8.016 0 0 0-8.017 8.017 8.017 8.017 0 0 0 8.017 8.017zM161.937 92.994h342.046A8.016 8.016 0 0 0 512 84.977a8.016 8.016 0 0 0-8.017-8.017H161.937a8.017 8.017 0 0 0 0 16.034zM102.079 367.699H16.568C7.432 367.699 0 375.131 0 384.267v85.511c0 9.136 7.432 16.568 16.568 16.568h85.511c9.136 0 16.568-7.432 16.568-16.568v-85.511c0-9.136-7.432-16.568-16.568-16.568zm.535 102.08a.536.536 0 0 1-.534.534H16.568a.536.536 0 0 1-.534-.534v-85.511c0-.294.241-.534.534-.534h85.511c.294 0 .534.241.534.534v85.511zM161.937 392.284h256.534c4.428 0 8.017-3.588 8.017-8.017s-3.588-8.017-8.017-8.017H161.937c-4.428 0-8.017 3.588-8.017 8.017s3.589 8.017 8.017 8.017zM315.858 461.762H161.937c-4.428 0-8.017 3.588-8.017 8.017s3.588 8.017 8.017 8.017h153.921c4.428 0 8.017-3.588 8.017-8.017s-3.589-8.017-8.017-8.017zM503.983 419.006H161.937c-4.428 0-8.017 3.588-8.017 8.017s3.588 8.017 8.017 8.017h342.046c4.428 0 8.017-3.588 8.017-8.017s-3.588-8.017-8.017-8.017zM113.698 43.366a8.015 8.015 0 0 0-8.737 1.737l-45.637 45.64L39.34 70.756a8.017 8.017 0 1 0-11.338 11.338l25.653 25.653a8.019 8.019 0 0 0 11.338 0l37.621-37.622v57.607a.536.536 0 0 1-.534.534H16.568a.535.535 0 0 1-.534-.534V42.221c0-.294.241-.534.534-.534h59.858c4.428 0 8.017-3.588 8.017-8.017s-3.588-8.017-8.017-8.017H16.568C7.432 25.653 0 33.085 0 42.221v85.511c0 9.136 7.432 16.568 16.568 16.568h85.511c9.136 0 16.568-7.432 16.568-16.568v-76.96a8.015 8.015 0 0 0-4.949-7.406zM113.698 214.389a8.015 8.015 0 0 0-8.737 1.737l-45.637 45.64-19.984-19.985a8.017 8.017 0 1 0-11.338 11.338l25.653 25.653a8.019 8.019 0 0 0 11.338 0l37.621-37.623v57.607a.536.536 0 0 1-.534.534H16.568a.536.536 0 0 1-.534-.534v-85.511c0-.294.241-.534.534-.534h59.858c4.428 0 8.017-3.588 8.017-8.017s-3.588-8.017-8.017-8.017H16.568C7.432 196.676 0 204.108 0 213.244v85.511c0 9.136 7.432 16.568 16.568 16.568h85.511c9.136 0 16.568-7.432 16.568-16.568v-76.96a8.015 8.015 0 0 0-4.949-7.406z"/></svg>`
    logoArea.innerHTML = svgTodo;
    logoArea.innerHTML += `<p class="para">ToDo Help</p>`
    
    leftPanel.append(logoArea, menuButtons)
}

function forRightPanel() {
    // const topArea = document.createElement('div');
    // topArea.className = "top-area";
    
    // const text = document.createElement('p');
    // text.className = 'class-text';
    // text.textContent = 'Tasks';

    // topArea.append(text, addAnother);
    // rightPanel.append(topArea);
}

export { fillDiv, forLeftPanel, forRightPanel };