const onChangeMode = e => {
  let selectedCode = "javascript";
  if (e.type !== "DOMContentLoaded") {
    console.log(e);
    selectedCode = e.target.innerText.toLowerCase();
  }

  Array.from(document.querySelectorAll(`.code-switcher`)).forEach(
    e => (e.style.display = "none")
  );
  Array.from(
    document.querySelectorAll(`.code-switcher.${selectedCode}`)
  ).forEach(e => (e.style.display = "block"));
};

document.addEventListener("DOMContentLoaded", onChangeMode, false);

Array.from(document.querySelectorAll(".nav-item a")).forEach(e =>
  e.addEventListener("click", onChangeMode)
);
