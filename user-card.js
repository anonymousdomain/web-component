class UserCard extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`john `
    }
}

window.customElements.define('user-card',UserCard);
