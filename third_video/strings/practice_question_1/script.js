//username generator :)

let name = prompt("Enter a name");
name = name.trim();
let lastIndex = name.length - 1;
let firstName,lastName;
for(let i=0;i<=lastIndex;i++)
{
    if(name.charAt(i) === " ")
    {
        firstName = (name.slice(0,i)).toLowerCase();
        lastName = (name.slice(i+1)).toLowerCase();
        break;
    }
}

let stuff = firstName.concat(lastName);
let username = `@${stuff}${stuff.length}`;
console.log(username);