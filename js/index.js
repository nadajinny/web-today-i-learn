// TODO: TIL 폼 등록 기능을 구현하세요
// 1. 폼 요소와 목록 요소를 querySelector로 선택합니다.
// 2. 폼의 submit 이벤트를 감지하여 새 TIL 항목을 목록에 추가합니다.

const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const dateInput = document.querySelector("#til-date");
  const titleInput = document.querySelector("#til-title");
  const contentInput = document.querySelector("#til-content");

  const date = dateInput.value;
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!date || !title || !content) {
    return;
  }

  const item = document.createElement("article");
  item.classList.add("til-item");

  const time = document.createElement("time");
  time.textContent = date;

  const heading = document.createElement("h3");
  heading.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.textContent = content;

  item.append(time, heading, paragraph);
  tilList.prepend(item);
  tilForm.reset();
});
