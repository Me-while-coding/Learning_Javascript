let DATA = "secret information";
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(`data = ${DATA}`);
    }
}

let student = new User("Prachurjo","prachurjoofficial@gmail.com");

class Admin extends User{
constructor(name,email){
    super(name,email);
}

editData(data){
  DATA = data;
}
}

let admin = new Admin("Joly","joliofficial123@gmail.com");