// JavaScript
document.addEventListener('DOMContentLoaded', () => {
    
    // Знаходимо кнопку запуску (переконайся, що в HTML є кнопка з id="start")
const startBtn = document.querySelector('#start');

startBtn.addEventListener('click', function() {
    // 1. Знайомство
    let name = prompt("Дарова я твій чат бот!Як тебе називати?");
    
    if (name === null || name.trim() === "") {
        name = "Друже";
    }

    // 2. Вибір дії
    let choice = prompt(
        "Радий бачити тебе, " + name + "!\n" +
        "Го шось поробимо?\n" +
        "1 — Майн\n" +
        "2 — Кс 2\n" +
        "3 — Дс\n" +
        "4 — Бс\n" +
        "5 — Загадка\n" +
        "6 — Зробити новий сайт\n" +
        "7 — Як зайти на 100 моделей в кс\n" +
        "8 — Жоский музон\n" +
        "9 — Мажор 2021\n" +
        "10 — Інше\n" +
        "Введи номер дії:"
    );

    // 3. Обробка вибору через if/else
    if (choice === "1") {
        alert("Ок мій нік:ChatGpt67");
        alert("Погнали");

    } else if (choice === "2") {
        let answer = prompt("Ок який твій нік?");
        
        if (answer !== null && answer.toLowerCase().includes("s1mple")) {
            alert("Ок давай захожу");
        } else {
            alert("Не можу тебе найти");
        }

    } else if (choice === "3") {
        let go = confirm("Тебе на іншу сторінку перенесе ок?");
        if (go) {
            window.location.href = "https://youtu.be/D2N81eIh8lA?si=fsU42XZLWYtlOw6_"; 
        } else {
            alert("Жалко там наша група ии");
        }
        }else if (choice === "4") {
        alert("Ок мій нік:Andrey228");
        alert("Погнали");
        
        }else if (choice === "5") {
        let answer = prompt("Він як маленький комп'ютер:У ньому є ігри, інтернет.Тонкий, легкий і зручний,Називається...?");
        
        if (answer !== null && answer.toLowerCase().includes("планшет")) {
            alert("Правильно");
        } else {
            alert("Трохи не те");
        }
        }else if (choice === "6") {
         let go = confirm("Тебе на іншу сторінку перенесе ок?");
        if (go) {
            window.location.href = "https://html-css-js.com/"; 
        } else {
            alert("Жалко там сайт html css js");
        }

        }else if (choice === "7") {
        let go = confirm("Тебе на іншу сторінку перенесе ок?");
        if (go) {
            window.location.href = "https://www.tiktok.com/@interial_cs2/video/7525481908625476897?is_from_webapp=1&sender_device=pc&web_id=7611174082407859719"; 
        } else {
            alert("Жалко там була така як зайти");
        }

 }else if (choice === "8") {
        let go = confirm("Тебе на іншу сторінку перенесе ок?");
        if (go) {
            window.location.href = "https://www.tiktok.com/@love_seal670/video/7501589149061909768?is_from_webapp=1&sender_device=pc&web_id=7611174082407859719"; 
        } else {
            alert("Жалко там була така ржака");
        }

 }else if (choice === "9") {
        let go = confirm("Тебе на іншу сторінку перенесе ок?");
        if (go) {
            window.location.href = "https://youtu.be/SKKZGvtxgPU?si=bqbAjq7l6n81pgw3"; 
        } else {
            alert("Жалко там був Мажор по кс2 з 2021 року");
        }

 }else if (choice === "10") {
        let name = prompt("Які твої побажання?");
            if (name !== null && name.trim() !== "") {
                alert("Добре в наступній весрії буде: " + name + "!");
                
            } 
    } else {
        alert("Ой, " + name + ", здається, шось тут не те");
    }
});
    
