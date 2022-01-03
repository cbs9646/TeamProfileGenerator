class Employee {
//     `name`
constructor(name, id, email){
this.name = name;
this.id = id;
this.email = email;
this.role = role;

}

getEmail(){
    return this.email;
}
getName(){
    return this.name;
}
getId(){
    return this.id;
}
getRole(){
    return "Employee";
}

}

module.exports = Employee;










