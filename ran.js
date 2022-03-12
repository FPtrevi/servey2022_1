const list = [
    {
        id: "박민영"   ,
        university :  "동의대학교"   ,
        department : "치위생학과"
    },
    {
        id: "신은수"   ,
        university :  "동의대학교"   ,
        department : "회계학과"
    },
    {
        id: "임하연"   ,
        university :  "동의대학교"   ,
        department : "유통물류학"
    },
    {
        id: "김예림"   ,
        university :  "동의대학교"   ,
        department : "사회복지학과"
    },
    {
        id: "정수빈"   ,
        university :  "동의대학교"   ,
        department : "국어국문학과"
    },
    {
        id: "김태용"   ,
        university :  "동의대학교"   ,
        department : "산업융합시스템공학"
    },
    {
        id: "김지선"   ,
        university :  "동의대학교"   ,
        department : "신문방송학과"
    },
    {
        id: "김온유"   ,
        university :  "부산여대"   ,
        department : "간호학과"
    },
    {
        id: "김태경"   ,
        university :  "동의대학교"   ,
        department : "스마트호스피탈리티학과"
    },
    {
        id: "정채린"   ,
        university :  "동의대학교"   ,
        department : "식품영양학과"
    },
    {
        id: "이지민"   ,
        university :  "동의대학교"   ,
        department : "바이오응용공학부"
    },
    {
        id: "정은지"   ,
        university :  "부산여대"   ,
        department : "간호학과"
    },
    {
        id: "문지혜"   ,
        university :  "동의대학교"   ,
        department : "금융보험학과"
    },
    {
        id: "신재찬"   ,
        university :  "동의대학교"   ,
        department : "화학환경공학부"
    },
    
]


rand = 0
num = 0
names = ""
universitys = ""
departments = ""


function go_random(){
    let a = list.length;
    rand = Math.floor(Math.random()*a);

    names = list[rand].id;
    universitys = list[rand].university;
    departments = list[rand].department;

    console.log(list[rand].id);

    list.splice(rand, 1);
}




const ones = document.querySelector("#one");
const twos = document.querySelector("#two");
const threes = document.querySelector("#three");

stop1=true

// 1등
const fsts1 = document.querySelector("#one_1")
const fsts2 = document.querySelector("#one_2")
const fsts3 = document.querySelector("#one_3")

function one_event(event){
    event.preventDefault();
    go_random();
    if(fsts1.value == undefined){
        clearInterval(past1_1);
        fsts1.innerText = `${names}\n${universitys}\n${departments}`;
        fsts1.value=true
    }else if(fsts2.value == undefined){
        clearInterval(past1_2);
        fsts2.innerText = `${names}\n${universitys}\n${departments}`;
        fsts2.value=true
    }else{
        clearInterval(past1_3);
        fsts3.innerText = `${names}\n${universitys}\n${departments}`;
    }
}

// 2등
const ssts1 = document.querySelector("#two_1")
const ssts2 = document.querySelector("#two_2")
const ssts3 = document.querySelector("#two_3")
const ssts4 = document.querySelector("#two_4")

function two_event(event){
    event.preventDefault();
    go_random();
    if(ssts1.value == undefined){
        clearInterval(past2_1);
        ssts1.innerText = `${names}\n${universitys}\n${departments}`;
        ssts1.value=true
    }else if(ssts2.value == undefined){
        clearInterval(past2_2);
        ssts2.innerText = `${names}\n${universitys}\n${departments}`;
        ssts2.value=true
    }else if(ssts3.value == undefined){
        clearInterval(past2_3);
        ssts3.innerText = `${names}\n${universitys}\n${departments}`;
        ssts3.value=true
    }else{
        clearInterval(past2_4);
        ssts4.innerText = `${names}\n${universitys}\n${departments}`;
    }
}

// 3등
const tsts1 = document.querySelector("#three_1")
const tsts2 = document.querySelector("#three_2")
const tsts3 = document.querySelector("#three_3")
const tsts4 = document.querySelector("#three_4")
const tsts5 = document.querySelector("#three_5")
const tsts6 = document.querySelector("#three_6")

function three_event(event){
    event.preventDefault();
    go_random();
    if(tsts1.value == undefined){
        clearInterval(past3_1);
        tsts1.innerText = `${names}\n${universitys}\n${departments}`;
        tsts1.value=true
    }else if(tsts2.value == undefined){
        clearInterval(past3_2);
        tsts2.innerText = `${names}\n${universitys}\n${departments}`;
        tsts2.value=true
    }else if(tsts3.value == undefined){
        clearInterval(past3_3);
        tsts3.innerText = `${names}\n${universitys}\n${departments}`;
        tsts3.value=true
    }else if(tsts4.value == undefined){
        clearInterval(past3_4);
        tsts4.innerText = `${names}\n${universitys}\n${departments}`;
        tsts4.value=true
    }else if(tsts5.value == undefined){
        clearInterval(past3_5);
        tsts5.innerText = `${names}\n${universitys}\n${departments}`;
        tsts5.value=true
    }else{
        clearInterval(past3_6);
        tsts4.innerText = `${names}\n${universitys}\n${departments}`;
    }
}


randomId=""
randomUniversity=""
randomDepartment=""
getNumber=0


// 1등
function getRandom1_1(getNumber){
    getNumber = Math.floor(Math.random()*list.length);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    fsts1.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

function getRandom1_2(getNumber){
    getNumber = Math.floor(Math.random()*list.length);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    fsts2.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

function getRandom1_3(getNumber){
    getNumber = Math.floor(Math.random()*list.length);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    fsts3.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}


// 2등
function getRandom2_1(getNumber){
    getNumber = Math.floor(Math.random()*list.length);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    ssts1.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

function getRandom2_2(getNumber){
    getNumber = Math.floor(Math.random()*list.length);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    ssts2.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

function getRandom2_3(getNumber){
    getNumber = Math.floor(Math.random()*list.length);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    ssts3.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

function getRandom2_4(getNumber){
    getNumber = Math.floor(Math.random()*list.length);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    ssts4.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}


// 3등
function getRandom3_1(getNumber){
    getNumber = Math.floor(Math.random()*list.length);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    tsts1.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

function getRandom3_2(getNumber){
    getNumber = Math.floor(Math.random()*list.length);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    tsts2.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

function getRandom3_3(getNumber){
    getNumber = Math.floor(Math.random()*list.length);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    tsts3.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

function getRandom3_4(getNumber){
    getNumber = Math.floor(Math.random()*list.length);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    tsts4.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

function getRandom3_5(getNumber){
    getNumber = Math.floor(Math.random()*list.length);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    tsts5.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

function getRandom3_6(getNumber){
    getNumber = Math.floor(Math.random()*list.length);
    randomId = list[getNumber].id;
    randomUniversity = list[getNumber].university;
    randomDepartment = list[getNumber].department;
    tsts6.innerText = `${randomId}\n${randomUniversity}\n${randomDepartment}`;
}

let past1_1 = setInterval(getRandom1_1,50);
let past1_2 = setInterval(getRandom1_2,50);
let past1_3 = setInterval(getRandom1_3,50);



let past2_1 = setInterval(getRandom2_1,50);
let past2_2 = setInterval(getRandom2_2,50);
let past2_3 = setInterval(getRandom2_3,50);
let past2_4 = setInterval(getRandom2_4,50);



let past3_1 = setInterval(getRandom3_1,50);
let past3_2 = setInterval(getRandom3_2,50);
let past3_3 = setInterval(getRandom3_3,50);
let past3_4 = setInterval(getRandom3_4,50);
let past3_5 = setInterval(getRandom3_5,50);
let past3_6 = setInterval(getRandom3_6,50);


ones.addEventListener("submit", one_event);
twos.addEventListener("submit", two_event);
threes.addEventListener("submit", three_event);


// function myfun1(){
//     let obj1 = document.getElementById("main_one");
//     let obj2 = document.getElementById("main_two");
//     let obj3 = document.getElementById("main_three");

//     if(obj1.className === "onclick"){
//         obj1.classList.remove("onclick");
//         obj1.classList.add("onclick_click");
//     }else if(obj1.className === "onclick_click"){
//         obj1.classList.remove("onclick_click");
//         obj1.classList.add("onclick");
//     }
// }

// 페이지 넘기기
let main2one = document.getElementById("main_one");
let main2two = document.getElementById("main_two");
let main2three = document.getElementById("main_three");

let one2one = document.getElementById("one_one");
let one2two = document.getElementById("one_two");
let one2three = document.getElementById("one_three");

let two2one = document.getElementById("two_one");
let two2two = document.getElementById("two_two");
let two2three = document.getElementById("two_three");

let three2one = document.getElementById("three_one");
let three2two = document.getElementById("three_two");
let three2three = document.getElementById("three_three");

const picupMain = document.getElementById("mainPage")
const picupOne = document.getElementById("firstPage")
const picupTwo = document.getElementById("secPage")
const picupThree = document.getElementById("thredPage")

function mainToOne(){
    if(picupOne.className === "hidden"){
        picupOne.classList.remove("hidden");
        picupMain.classList.add("hidden");
    }
}

function mainToTwo(){
    if(picupTwo.className === "hidden"){
        picupTwo.classList.remove("hidden");
        picupMain.classList.add("hidden");
    }
}

function mainToThree(){
    if(picupThree.className === "hidden"){
        picupThree.classList.remove("hidden");
        picupMain.classList.add("hidden");
    }
}

function oneToMain(){
    if(picupMain.className === "hidden"){
        picupMain.classList.remove("hidden");
        picupOne.classList.add("hidden");
    }
}

function oneToTwo(){
    if(picupTwo.className === "hidden"){
        picupTwo.classList.remove("hidden");
        picupOne.classList.add("hidden");
    }
}

function oneToThree(){
    if(picupThree.className === "hidden"){
        picupThree.classList.remove("hidden");
        picupOne.classList.add("hidden");
    }
}

function twoToOne(){
    if(picupOne.className === "hidden"){
        picupOne.classList.remove("hidden");
        picupTwo.classList.add("hidden");
    }
}

function twoToMain(){
    if(picupMain.className === "hidden"){
        picupMain.classList.remove("hidden");
        picupTwo.classList.add("hidden");
    }
}

function twoToThree(){
    if(picupThree.className === "hidden"){
        picupThree.classList.remove("hidden");
        picupTwo.classList.add("hidden");
    }
}

function threeToOne(){
    if(picupOne.className === "hidden"){
        picupOne.classList.remove("hidden");
        picupThree.classList.add("hidden");
    }
}

function threeToTwo(){
    if(picupTwo.className === "hidden"){
        picupTwo.classList.remove("hidden");
        picupThree.classList.add("hidden");
    }
}

function threeToMain(){
    if(picupMain.className === "hidden"){
        picupMain.classList.remove("hidden");
        picupThree.classList.add("hidden");
    }
}
