class engineer extends Employee {
    
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.role = role;
    
    }

    getGithub(){

        return this.github;
    }

    getRole(){
        return "Engineer";

    }
}

module.exports = engineer;