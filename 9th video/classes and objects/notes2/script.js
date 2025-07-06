class codingLang{
    type(){
        console.log("Programming language");
    }
}

class Javascript extends codingLang{
    useCase(){
        console.log("Web developement");
    }
}

let JScoder = new Javascript();
JScoder.type();