const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const zodiac = document.querySelector("#zodiac-signup").value.trim();

  if (username && email && password && zodiac) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password, zodiac }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
