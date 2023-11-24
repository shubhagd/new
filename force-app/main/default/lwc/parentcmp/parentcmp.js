import { LightningElement } from 'lwc';
 
export default class Parentcmp extends LightningElement {
    constructor()
    {
        super();
        console.log('Parent Constructor is Called');
    }
    connectedCallback(){
        console.log('Parent connected callback');
    }
    renderedCallback(){
        console.log('Parent renderedCallback is Called');
    }
    disconnectedCallback(){
        console.log('Parent disconnectedCallback is Called');
    }
}