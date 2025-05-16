
//part 1 
/*
var keys = ["id", "name", "course", "grade", "semester", "year"];
var values = [101, "Kevin Smith", "JavaScript101", "A", "Spring", "2021"];







function returnObject(keys, values){
    var returnObject = {};
    for(i = 0; i < keys.length; i++){returnObject[keys[i]] = values[i];}
    return returnObject;
}

var student = returnObject(keys,values);
console.log(student.id);
console.log(student.name);
console.log(student.course);


//Part 2

//Jedi
class jedi{

    constructor(name = "unkown", order = "unknown", message = "unkown"){
        this.name = name;
        this.order = order;
        this.message = message;
    }


    getName(){
        return this.name;
    }
    getOrder(){
        return this.order;
    }

    getMessage(){
        return this.message;
    }
};




//Testing the values
var yoda1 = new jedi("Yoda", "Jedi Knight", "Study hard, you will");

console.log(yoda1.getName());
console.log(yoda1.getMessage());
console.log(yoda1.getOrder());

alert(yoda1.getName());
alert(yoda1.getMessage());
alert(yoda1.getOrder());

yoda1.age = 900;
console.log(yoda1.age);

alert(yoda1.age);


//Part 3

class user{

    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    show(){
        return this.username + " " + this.email;
    }
}



user = new user("kingKong", "kingKong@kong.com");
console.log(user.show());

*/

try{

    var total = 20 * n1;
    console.log("Total: ");
} catch(e){
    console.log("something went wrong!");
} finally{
    console.log("gameOver!");
}