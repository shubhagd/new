import { LightningElement } from 'lwc';
 
export default class Childcmp extends LightningElement {
    constructor()
    {
        super();
        console.log('Child Constructor is called');
    }
    connectedCallback(){
        console.log('Child connectedCallback is called');
    }
    renderedCallback(){
        console.log('Child renderedCallback is called');
    }
     disconnectedCallback(){
        console.log('Child disconnectedCallback is called');
     }
     errorCallback(){
        console.log('Child errorCallback is called');
     }
     handleClick(){
        if(this.isVisible==true){
            this.isVisible==false; 
        }else{
            this.isVisible==true;
        }
     }
     }