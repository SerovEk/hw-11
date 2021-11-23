(() => {
  const formEl = document.getElementById("form");
  const emailEl = document.getElementById("emailInp");
  const passwordEl = document.getElementById("passwordInp");
  const btnEl = document.getElementById("btn");
  const wrap = document.getElementById("wrap");
  const errorEl = document.getElementById("error");
  const errorPassword = document.getElementById("error-password");
  const h2 = document.getElementById("h2");

  function submit() {
    formEl.style.display = "none";
    const alert = document.createElement("div");
    wrap.append(alert);
    alert.className = "alert";
    alert.innerHTML = "Form submitted successfully! Congratulations :)";
  }
  // --------------------------Проверка на пустую строку---------------------------
  function disable() {
    if (emailEl.value === "" || passwordEl.value === "") {
      btnEl.disabled = true;
    } else {
      btnEl.disabled = false;
    }
  }
  // ----------------- Проверка почты-----------------------------------------
  emailEl.addEventListener("blur", () => {
    disable();
    if (!emailEl.value.includes("@")) {
      errorEl.innerHTML = "Enter correct email, please";
      errorEl.style.color = "red";
      emailEl.style.borderColor = "red";
    }
  });
  emailEl.addEventListener("input", () => {
    disable();
  });

  // ----------------------------Проверка пароля-------------------------------------------
  passwordEl.addEventListener("blur", () => {
    disable();
    if (passwordEl.value === "") {
      errorPassword.innerHTML = "Enter correct password, please";
      errorPassword.style.color = "red";
      passwordEl.style.borderColor = "red";
      passwordEl.value = "";
    }
  });
  passwordEl.addEventListener("input", () => {
    disable();
  });
  // ----------------------------Проверка формы--------------------------------------------
  function check() {
    if (!emailEl.value != "admin@mail.com" && passwordEl.value != "12345") {
      const massege = document.createElement("div");
      massege.innerHTML = "Form is not correct";
      massege.style.color = "red";
      h2.after(massege);
    } else {
      submit();
    }
  }
  // -----------------------------Событие клика -------------------------------------------

  btnEl.addEventListener("click", (event) => {
    event.preventDefault();
    emailEl.value = "";
    check();
  });
})();
