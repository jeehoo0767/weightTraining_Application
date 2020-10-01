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
    greeting.innerHTML = `<div class="hangule_box show"><span class="big_font">안녕하세요 ${text}님,</span><br> <span class="small_font">본 웹사이트는 웨이트 트레이닝을 위한
    정보 습득과<br>트레이닝 스케쥴 관리를 위한 사이트 입니다.<br>
    많은 컨텐츠를 이용 해 보세요</span>.</div>
    <div class="eng_box hide"><span class="big_font">Hello, ${text},<br> This website is for weight training.</span><br>
    <span class="small_font">This website contains information for weight training and training schedule management.<br> Use a lot of content.</span><div>`;
    // greeting.classList.add("font-size-big");
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