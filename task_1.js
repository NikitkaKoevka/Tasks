function openModal(id){
    let idIndex = document.getElementById(id);
    idIndex = idIndex.style.display = "flex";
}

function closeModal(id){

    let idIndex = document.getElementById(id);
    idIndex = idIndex.style.display = "none";
}


dbArray = [
    {
        key:1,
        first_name: 'Александр',
        second_name: 'Зубарев',
        age:'28',
        job_name:'ООО "Технологии"',
        job_age:'5 лет',
        phone:'iPhone 13',
        city:'Москва'
    },
    {
        key:2,
        first_name: 'Антон',
        second_name: 'Лаптенко',
        age:'35',
        job_name:'ЗАО "Интерн"',
        job_age:'15 лет',
        phone:'Samsung Galaxy A7',
        city:'Монино'
    },
    {
        key:3,
        first_name: 'Антон',
        second_name: 'Сухарев',
        age:'19',
        job_name:'НИИ "Капсула"',
        job_age:'1 год',
        phone:'iPhone 6S',
        city:'Фряново'
    },
    {
        key:4,
        first_name: 'Арина',
        second_name: 'Шац',
        age:'67',
        job_name:'ОАО "Светлана"',
        job_age:'35 лет',
        phone:'Honor 8A',
        city:'Щёлково'
    }
]

function searchAtribute(){

    let atributeName = prompt("Введите имя поля");
    let result = "";
    dbArray.forEach(element => {
        if(element[atributeName]!=undefined)
        result +=  `${element[atributeName]}\n`;
    });
    if(atributeName!=null&&(result!=""))
    alert(result);
    }

function searchIndex(){
    let result = "";
    let index = prompt("Введите индекс");
    const obj = dbArray[index];
    for (let key in obj) {
        result += `${key}: ${obj[key]}\n`
    }
    if(index!=null&&(index<dbArray.length))
    alert(result);
    }

function searchName(){

    let userName = prompt("Введите имя пользователя");
    let result = "";
    dbArray.forEach(element => {
        if(element["first_name"]==userName) {
            for(let key in element) {
                if(key!="first_name")
                result +=`${key}: ${element[key]}\n`;
            }
            result +=`\n`;
        }
    });
    if(userName!=null&&(result!=""))
    alert(result);
    }
    
function showLowerAge(){

    let age = prompt("Введите возраст");
    let result = "";
    dbArray.forEach(element =>{
        if(Number(element["age"])<Number(age)) {
            for(let key in element) {
                result +=`${key}: ${element[key]}\n`;
            }
            result +=`\n`;
        }

    });
    if(age!=null&&(result!="")
    ){
    alert(result);
    console.log(result);
    }
    }

