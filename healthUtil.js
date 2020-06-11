"use strict";

let findBMI = (height, weight) =>{
    return weight/ (height * height);
}

let compareBMIHeight = (person1, person2)=>{
    let human1 = findBMI(person1.height, person1.weight);
    let human2 = findBMI(person2.weight, person2.height);
    if(human1 > human2){
        console.log(person1.name,"has higher BMI cmpare to ",person2.name);
    }else if(human2 > human1){
        console.log(person2.name,"has higher BMI cmpare to ",person1.name);
    }else{
        console.log(person1.name,"has same BMI as ",person2.name);
    }
}

let person1 = {
    name: 'aks',
    height : 1.76,
    weight : 60
}   

let person2 = {
    name: 'bks',
    height : 1.524,
    weight : 40
}

compareBMIHeight(person1, person2);
