const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `<div class="flex_box"><div class="hangule_box show">안녕하세요 ${text}님 본 웹사이트는<br> 웨이트 트레이닝을 위한
    정보와 <br>트레이닝 스케쥴 관리를 위한 사이트 입니다.<br>
    아래로 내려 가시면 많은 컨텐츠를<br> 이용 하실 수 있습니다.</div>
    <div class="eng_box hide">Hello, ${text} This website is for weight training.<br>
    This site is for information of weight training<br> and training schedule management.<br> If you go down, you can use a lot of contents.<div>
    </div>`;
    greeting.classList.add("font-size-big");
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS); // 로컬스토리지에 유저 정보를 넣는다
    if (currentUser === null) {
        askForName();
    }
    else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init();