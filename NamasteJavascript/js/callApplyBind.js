let user = {
    firstName: "Subhangi",
    lastName: "Kasture",
    fullName : function (){
        console.log(this.firstName + " "+ this.lastName);
    }
}

let user2 ={
    firstName: "John",
    lastName: "Doe" 
}

user.fullName(user2);// This doesn't work as fullName is a method of user object and it is trying to access the properties of user2 object

//Function borrowing
user.fullName.call(user2);

function printFullName(){
    console.log(this.firstName + " "+ this.lastName );
}

printFullName.call(user);
printFullName.call(user2);

function printFullNameWithHomeTown(hometown){
    console.log(this.firstName + " "+ this.lastName + " from " + hometown);
}

printFullNameWithHomeTown.call(user, "Chadachan");

function printAddress(city, state){
    console.log(this.firstName + " "+ this.lastName + " from " + city + ", " + state);
}

//Appply 
printAddress.apply(user,["Chadachan", "Karnataka"]);

//bind
let fullAdrress = printAddress.bind(user, "Chadachan", "Karnataka");
console.log(fullAdrress);

fullAdrress();