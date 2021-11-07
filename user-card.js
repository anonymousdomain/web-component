const template=document.createElement('template');
template.innerHTML=`

<link rel="stylesheet" href="app.css">

<div class="user-card">
<img/>
<div>
<h3></h3>
<div class="info">
<p><slot name="email"></slot></p>
<p><slot name="contact"></slot></p>
</div>
<button id="btn">Hide Info</button>
</div>
</div>
`
class UserCard extends HTMLElement{
    constructor(){
        const showinfo=true //by defualt
        super();
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
       this.shadowRoot.querySelector('h3').innerText=this.getAttribute('name')
       this.shadowRoot.querySelector('img').src=this.getAttribute('avatar')
    }

    toggleInfo(){
        const info=this.shadowRoot.querySelector('.info')
        const btn=this.shadowRoot.querySelector('#btn')
        this.showinfo=!this.showinfo;
        if(this.showinfo){
            info.style.display='block';
            btn.style.innerText='Hide info';
        }else{
            info.style.display='none';
            btn.style.innerText='Show info';  
        }


    }
    connectedCallback(){
        this.shadowRoot.querySelector('#btn').addEventListener('click'
        ,()=>this.toggleInfo());
    }
    disconnectedCallback(){
        this.shadowRoot.querySelector('#btn').removeEventListener();
    }
}

window.customElements.define('user-card',UserCard);
