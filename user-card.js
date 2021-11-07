const template=document.createElement('template');
template.innerHTML=`
<style>
h3;{
    color:indigo;
}

.user-card img{
width:60px;
}
</style>
<div class="user-card">
<img/>
<div>
<h3></h3>
<div class="info">
<p><slot name="email"></slot></p>
<p><slot name="contact"></slot></p>
</div>
</div>
</div>
`
class UserCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
       this.shadowRoot.querySelector('h3').innerText=this.getAttribute('name')
       this.shadowRoot.querySelector('img').src=this.getAttribute('avatar')
    }
}

window.customElements.define('user-card',UserCard);
