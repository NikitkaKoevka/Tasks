
function getRandomElement(Array){
    return Array[Math.floor(Math.random()*Array.length)];
}

function genRandomArray(){
    const N = Math.floor(Math.random()*20)+2;
    const first_name = ['Пётр','Алексей','Стас','Юрий','Николай','Евгений','Никита'];
    const last_name = ['Балык','Шуев','Счастливый','Щеткин','Хоров','Автовазов','Серегеев','Зубарев','Петров','Иванов'];
    const job_name = ['ОАО "Светлана"','НИИ "Капсула"','ЗАО "Интерн"','ООО "Технологии"'];
    const city = ['Москва','Монино','Фряново','Щёлково'];
    const phone = ['iPhone 13','Samsung Galaxy A7','iPhone 6S','Honor 8A'];

    let result = [];
    for(let i=0;i<N;i++){
        result.push({
            id: crypto.randomUUID(),
            first_name:getRandomElement(first_name),
            last_name:getRandomElement(last_name),
            age:Math.floor(Math.random()*55)+18,
            job_name:getRandomElement(job_name),
            job_age:Math.floor(Math.random()*55)+1,
            phone:getRandomElement(phone),
            city:getRandomElement(city)
        })
    }
    console.log(result);
}
function genRandomArrayWithoutNames(){
    const N = Math.floor(Math.random()*20)+2;
    const job_name = ['ОАО "Светлана"','НИИ "Капсула"','ЗАО "Интерн"','ООО "Технологии"'];
    const city = ['Москва','Монино','Фряново','Щёлково'];
    const phone = ['iPhone 13','Samsung Galaxy A7','iPhone 6S','Honor 8A'];

    let result = [];
    for(let i=0;i<N;i++){
        result.push({
            id: crypto.randomUUID(),
            age:Math.floor(Math.random()*55)+18,
            job_name:getRandomElement(job_name),
            job_age:Math.floor(Math.random()*55)+1,
            phone:getRandomElement(phone),
            city:getRandomElement(city)
        })
    }
    console.log(result);
}
function genRandomIDArray(N){

    let result = {};
    for(let i=0;i<N;i++){
        result[`id_${i}`] = `${i}`;
    }
    console.log(result);
}

