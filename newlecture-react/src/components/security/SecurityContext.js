class SecurityContext{

    #userName;
    #authorities;

    constructor() {

        this.#userName = null;
        this.#authorities = [];
        
    }

    get userName(){
        return this.#userName;
    }

    set userName(value){
        this.#userName = value;
    }

    get authorities(){
        return this.#authorities;
    }

    set authorities(value){
        this.#authorities = value;
    }

}

export default new SecurityContext();
