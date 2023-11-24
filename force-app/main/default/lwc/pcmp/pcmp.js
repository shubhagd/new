import { LightningElement } from 'lwc';

export default class Pcmp extends LightningElement {
    constructor()
    {
        super();
        console.log("parent constructor is called");
    }
    connectedCallback()
    {
        console.log("Parent connected call back called");
    }
    renderedCallback()
    {
        console.log("Parent rendered call back is called");
    }
    disconnectedCallback()
    {
        console.log("Parent disconnected call back called");
    }
    errorCallback()
    {
        console.log("Parent error call back called");
    }
    handleClick()
    {
        if(this.isVisible==true)
        {
            this.
        }
    }
}