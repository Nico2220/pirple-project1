const landingPage = document.getElementById("landing");
// const signupBtn = document.getElementById("signUpBtn");

const SignupPage = document.getElementById("SignupPage");
const LoginPage = document.getElementById("LoginPage");

const dashboard = document.getElementById("dashboard");
const settingPage = document.getElementById("settingPage");

const nav = `
<nav class="navbar bg-dark">
      <h1 class="logo">To-do-App</h1>

      <ul>
       
        <li><a id="logout" class="logout">Logout</a></li>
        <button class="btn btn-setting" id="btn-setting">
          account settings
        </button>
      </ul>
   </nav>
`;

const navbar = document.getElementById("navbar");

navbar.innerHTML = nav;

const homePage = `<div class="landing-inner">
<h1 class="text-primary">To-Do-App</h1>
<p class="description">
  Create your to-do / Have a better plane of your days/ work faster
</p>

<div class="button">
  <a href="#" class="btn" id="signUpBtn">Sign Up</a>
  <a href="#" class="btn btn-light" id="loginBtn">Login</a>
</div>
</div>
`;
landingPage.innerHTML = homePage;

const signupView = `
<div class="signupError" id="signupError"></div>
<h1 class="text-primary">Sign Up</h1>
<p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
<form class="form" id="signupForm">
  <div class="form-group">
    <input
      class="input-item"
      id="firtName"
      name="firtName"
      type="text"
      placeholder="First name"
    />
  </div>

  <div class="form-group">
    <input
      class="input-item"
      id="lastName"
      type="text"
      placeholder="Last name"
    />
  </div>

  <div class="form-group">
    <input
      class="input-item"
      id="signUpEmail"
      type="email"
      placeholder="Email Address"
    />
  </div>
  <div class="form-group">
    <input
      class="input-item"
      id="SignUppassword"
      type="password"
      placeholder="Password"
    />
  </div>

  <div class="form-group">
    <input id="checkbox" type="checkbox" /> I agree to the Terms of Use
  </div>
  <button class="btn" type="submit">Register</button>
</form>
`;

SignupPage.innerHTML = signupView;

const loginView = `
<div class="signupError" id="LoginError"></div>
<h1 class="text-primary">Sign Up</h1>
<p class="lead"><i class="fas fa-user"></i> Singn into Your Account</p>
<form class="form" id="LoginForm">
  <div class="form-group">
    <input
      class="input-item"
      id="email"
      type="email"
      placeholder="Email Address"
    />
  </div>
  <div class="form-group">
    <input
      class="input-item"
      id="password"
      type="password"
      placeholder="Password"
    />
  </div>
  <button class="btn" type="form">Register</button>
</form>`;

LoginPage.innerHTML = loginView;

const dashView = `
<p class="user" id="user" style="display: none;"></p>
<div class="board" id="board">
  <h2 class="board-title">My To-Do</h2>
  <hr />

  <div class="addNew">
    <button class="addNew-btn" id="addNew">Add new</button>
  </div>

  <ul class="todo" id="todo">
    <!-- <li class="todo-item" id="1">Lotto</li>
    <li class="todo-item">Pirple</li>
    <li class="todo-item">Formation</li> -->
  </ul>
</div>

<div class="board todo-list-board" id="todo-list-board">
  <form class="todo-form" id="todo-form">
    <div class="input-and-add">
      <input
        
        class="todo-name"
        id="todo-name"
        placeholder="todo title"
      />
    </div>
    <p class="todo-date">Date : <span id="todo-date"></span></p>

    <div>
      <ul class="todo-list" id="todo-list">
        <!-- <li class="todo-list-item">
          <div>
            <input type="checkbox" class="check" />
            <input value="item1" type="text" class="todo-input" />
          </div>
        </li>

        <li class="todo-list-item">
          <div>
            <input type="checkbox" class="check" />
            <input value="item2" class="todo-input" />
          </div>
        </li> -->
      </ul>
    </div>

    <div class="addNew addNew1">
      <button type="button" class="addNew-btn" id="addNew-to-list">
        Add new
      </button>
    </div>

    <div class="addNew">
      <button type="submit" class="btn">save</button>
    </div>
  </form>
</div>

<div class="board todo-list-board" id="existing-todo">
  <form class="todo-form" id="existing-form">
    <div class="input-and-add">
      <input
       
        class="todo-name"
        id="existingTodoName"
        placeholder="todo title"
      />
    </div>
    <p class="todo-date">Date : <span id="ExistingDate"></span></p>

    <div>
      <ul class="todo-list" id="existing-todo-list">
        <!-- <li class="todo-list-item">
          <div>
            <input type="checkbox" class="check" />
            <input value="item1" type="text" class="todo-input" />
          </div>
        </li>

        <li class="todo-list-item">
          <div>
            <input type="checkbox" class="check" />
            <input value="item2" class="todo-input" />
          </div>
        </li> -->
      </ul>
    </div>

    <div class="addNew addNew1">
      <button type="button" class="addNew-btn" id="addToList">Add new</button>
    </div>

    <div class="addNew">
      <button type="submit" class="btn">save</button>
    </div>
  </form>
</div>`;

dashboard.innerHTML = dashView;
const loadedUser = document.getElementById("user");
const board = document.getElementById("board");
const date = document.getElementById("todo-date");
const todoName = document.getElementById("todo-name");
const todoListBoard = document.getElementById("todo-list-board");
const signupError = document.getElementById("signupError");
const LoginError = document.getElementById("LoginError");

const settingView = ` <h1 class="text-primary">Setting</h1>
<p class="lead"><i class="fas fa-user"></i> Edit Your Account</p>
<form class="form" id="settingForm">
  <div class="form-group">
    <input
      class="input-item"
      id="firtName-s"
      name="firtName"
      type="text"
      placeholder="First name"
    />
  </div>

  <div class="form-group">
    <input
      class="input-item"
      id="lastName-s"
      type="text"
      placeholder="Last name"
    />
  </div>

  <div class="form-group">
    <input
      class="input-item"
      id="newEmail"
      type="email"
      placeholder=" New Email Address"
    />
  </div>
  

  <div class="form-group">
    <input
      class="input-item"
      id="newPassword"
      type="password"
      placeholder="Password"
    />
  </div>

  
  <button class="btn" type="submit">Register</button>
</form>`;

settingPage.innerHTML = settingView;

const signupHandleClick = (e) => {
  e.preventDefault();
  SignupPage.style.display = "flex";
  landingPage.style.display = "none";
};

const LoginhandleClick = (e) => {
  e.preventDefault();
  LoginPage.style.display = "flex";
  landingPage.style.display = "none";
};

const createRandomString = (strLength) => {
  strLength = typeof strLength == "number" && strLength > 0 ? strLength : false;
  if (strLength) {
    var possibleCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let str = "";
    for (i = 1; i <= strLength; i++) {
      let randomCharacter = possibleCharacters.charAt(
        Math.floor(Math.random() * possibleCharacters.length)
      );

      str += randomCharacter;
    }
    return str;
  } else {
    return false;
  }
};

const signupFormHandleClick = (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firtName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("SignUppassword").value;
  const check = document.getElementById("checkbox").checked;

  console.log(check);

  if (firstName && lastName && email && password && check) {
    let user = localStorage.getItem(email);
    console.log("user =", user);

    if (!user) {
      const id = createRandomString(10);
      user = {
        id,
        firstName,
        lastName,
        email,
        password,
        todo: [],
      };

      const userString = JSON.stringify(user);
      localStorage.setItem(email, userString);
      SignupPage.style.display = "none";
      // navSignup.style.display = "none";
      // navLogin.style.display = "none";
      loadedUser.innerText = email;
      dashboard.style.display = "flex";
      logout.style.display = "flex";
      btnSetting.style.display = "block";
    } else {
      signupError.innerText = "A user with that email is already exist";
      signupError.style.display = "flex";
    }
  } else {
    signupError.innerText = "Submitting Error";
    signupError.style.display = "flex";
  }
};

const LoginFormHandleClick = (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    const userData = localStorage.getItem(email);
    const user = JSON.parse(userData);

    if (user && user.email === email && user.password === password) {
      LoginPage.style.display = "none";
      loadedUser.innerText = email;
      dashboard.style.display = "flex";
      logout.style.display = "flex";
      btnSetting.style.display = "block";
      const ul = document.getElementById("todo");

      user.todo.map((item) => {
        const li = document.createElement("li");
        li.innerText = item.title;
        li.classList.add("todo-item");
        li.id = item.id;
        li.addEventListener("click", () => handleClickItem(email, item.id));

        ul.appendChild(li);
        // console.log(ul);
      });
    } else {
      LoginError.innerText = "User not found";
      LoginError.style.display = "flex";
    }
  } else {
    LoginError.innerText = "Submitting Error";
    LoginError.style.display = "flex";
    console.log("error");
  }
};

const handleClickAddToDoBtn = () => {
  const allInput = document.querySelectorAll(".todo-list input");
  if (allInput.length > 0) {
    [...allInput].map((input) => {
      input.value = "";
      input.style.display = "none";
    });
  }
  board.style.display = "none";
  todoListBoard.style.display = "flex";
  todoName.value = "";
  date.innerText = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

function handleClickaddNewToDoListBtn() {
  const toDoList = document.getElementById("todo-list");
  toDoList.classList.add("todo-list");
  let toDoItem = document.createElement("li");
  toDoItem.classList.add("todo-list-item");
  let toDoDiv = document.createElement("div");
  const inputCheck = document.createElement("input");
  inputCheck.type = "checkbox";
  inputCheck.classList.add("check");
  const input = document.createElement("input");
  input.placeholder = "to-do-name";
  input.classList.add("todo-input");
  toDoDiv.innerHTML += inputCheck.outerHTML + input.outerHTML;
  // toDoDiv.addEventListener("click", handleClickItem(email, toDoItem.id));
  toDoItem.appendChild(toDoDiv);
  toDoList.appendChild(toDoItem);
  console.log(toDoList);
}

const handleClickAddToExistingTodo = () => {
  const toDoList = document.getElementById("existing-todo-list");
  toDoList.classList.add("todo-list");
  let toDoItem = document.createElement("li");
  toDoItem.classList.add("todo-list-item");
  let toDoDiv = document.createElement("div");
  const inputCheck = document.createElement("input");
  inputCheck.type = "checkbox";
  inputCheck.classList.add("check");
  const input = document.createElement("input");
  input.placeholder = "to-do-name";
  input.classList.add("todo-input");
  toDoDiv.innerHTML += inputCheck.outerHTML + input.outerHTML;
  // toDoDiv.addEventListener("click", handleClickItem(email, toDoItem.id));
  toDoItem.appendChild(toDoDiv);
  toDoList.appendChild(toDoItem);
};

function handleSubmit(e, email, todoId) {
  e.preventDefault();
  const inputCheck = document.querySelectorAll(".check");
  const input = document.querySelectorAll(".todo-input");
  const existingTodoName = document.getElementById("existingTodoName");
  const newInput = document.querySelectorAll(".newInput");

  const user = localStorage.getItem(email);
  const userObject = JSON.parse(user);
  const newTasks = [];

  const ul = document.getElementById("todo");
  const li = document.createElement("li");
  li.classList.add("todo-item");

  for (let i = 0; i < input.length; i++) {
    // console.log(input[i].value);
    console.log("input.length", input.length);
    const tasks = {
      task: input[i].value,
      isCheck: inputCheck[i].checked,
    };

    newTasks.unshift(tasks);
  }

  if (todoId !== 0) {
    console.log("on m'a donne ID");
    const userTodo = userObject.todo.find((item) => item.id === todoId);
    console.log(userTodo);
    userTodo.title = existingTodoName.value;
    userTodo.tasks = newTasks;
    li.innerText = userTodo.title;
    li.id = todoId;
    li.addEventListener("click", () =>
      handleClickItem(userObject.email, todoId)
    );
  } else {
    const id = createRandomString(5);

    const todo = {
      id,
      title: todoName.value,
      tasks: newTasks,
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };

    userObject.todo.push(todo);
    li.innerText = todo.title;
    li.id = todo.id;
    ul.appendChild(li);
    li.addEventListener("click", () =>
      handleClickItem(userObject.email, todo.id)
    );
  }

  const stringUser = JSON.stringify(userObject);

  localStorage.setItem(email, stringUser);

  //li.innerText = todo.title;

  // li.id = todo.id;

  console.log(ul);

  const existingTodo = document.getElementById("existing-todo");
  existingTodo.style.display = "none";
  todoListBoard.style.display = "none";
  board.style.display = "";

  //const items = document.querySelectorAll(".todo-item");
}

const handleClickLogout = (e) => {
  e.preventDefault();
  const dashboard = document.getElementById("dashboard");
  const landing = document.getElementById("landing");
  dashboard.style.display = "none";
  landing.style.display = "flex";
  btnSetting.style.display = "none";
  logoutBtn.style = "none";
  settingPage.style.display = "none";
};

function handleClickItem(email, todoId) {
  console.log(todoId);

  (e) => handleClickSubmit(e, todoId);
}

function handleClickItem(email, todoId) {
  console.log("todoId=", todoId);

  const user = localStorage.getItem(email);
  const userObject = JSON.parse(user);
  const userTodo = userObject.todo.find((item) => item.id === todoId);

  const inputTitle = document.getElementById("existingTodoName");

  userTodo.tasks.map((item) => {
    let toDoList = document.getElementById("existing-todo-list");
    toDoList.classList.add("todo-list");
    let toDoItem = document.createElement("li");
    toDoItem.classList.add("todo-list-item");
    let toDoDiv = document.createElement("div");
    let inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";
    inputCheck.classList.add("check");
    item.isCheck === "true" && inputCheck.setAttribute("checked", item.isCheck);
    let input = document.createElement("input");
    input.setAttribute("value", item.task);
    input.classList.add("todo-input");

    toDoDiv.innerHTML += inputCheck.outerHTML + input.outerHTML;

    toDoItem.appendChild(toDoDiv);
    toDoList.appendChild(toDoItem);
  });

  // userTodo.tasks.map((item) => {});

  inputTitle.value = userTodo.title;

  const board = document.getElementById("board");
  const existingTodo = document.getElementById("existing-todo");
  const date = document.getElementById("ExistingDate");
  date.innerText = userTodo.date;

  // todoForm.style.display = "none";
  board.style.display = "none";
  existingTodo.style.display = "flex";
  existingForm.addEventListener("submit", (e) =>
    handleSubmit(e, email, todoId)
  );
}

const handleClickbtnSetting = () => {
  dashboard.style.display = "none";
  settingPage.style.display = "flex";
};

function handleSubmitSettinForm(e) {
  e.preventDefault();
  const firstName = document.getElementById("firtName-s").value;
  const lastName = document.getElementById("lastName-s").value;
  const email = document.getElementById("newEmail").value;
  const password = document.getElementById("newPassword").value;

  let user = localStorage.getItem(loadedUser.innerText);
  let userObject = JSON.parse(user);
  console.log(userObject);

  if (firstName) {
    userObject.firstName = firstName;
  }
  if (lastName) {
    userObject.lastName = lastName;
  }
  if (email) {
    userObject.email = email;
  }

  if (password) {
    userObject.password = password;
  }

  const userString = JSON.stringify(userObject);

  localStorage.removeItem(loadedUser.innerText);
  localStorage.setItem(userObject.email, userString);
}

const signupBtn = document.getElementById("signUpBtn");
const loginBtn = document.getElementById("loginBtn");
const signupForm = document.getElementById("signupForm");
const LoginForm = document.getElementById("LoginForm");
const addToDoBtn = document.getElementById("addNew");
const addNewToDoListBtn = document.getElementById("addNew-to-list");

const existingForm = document.getElementById("existing-form");
const addToList = document.getElementById("addToList");
const btnSetting = document.getElementById("btn-setting");
const logoutBtn = document.getElementById("logout");
const todoForm = document.getElementById("todo-form");
const settingForm = document.getElementById("settingForm");

signupBtn.addEventListener("click", signupHandleClick);
loginBtn.addEventListener("click", LoginhandleClick);
signupForm.addEventListener("submit", signupFormHandleClick);
LoginForm.addEventListener("submit", LoginFormHandleClick);
addToDoBtn.addEventListener("click", handleClickAddToDoBtn);
addNewToDoListBtn.addEventListener("click", handleClickaddNewToDoListBtn);
addToList.addEventListener("click", handleClickAddToExistingTodo);

todoForm.addEventListener("submit", (e) =>
  handleSubmit(e, loadedUser.innerText, 0)
);

btnSetting.addEventListener("click", handleClickbtnSetting);
settingForm.addEventListener("submit", handleSubmitSettinForm);
logoutBtn.addEventListener("click", handleClickLogout);
