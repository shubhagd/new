import { LightningElement } from 'lwc';

export default class Ccmp extends LightningElement {
    constructor()
    {
        super();
        console.log("Child constructor is called");
    }
        connectedCallback()
    {
        console.log("child connected call back called");
    }
    renderedCallback()
    {
        console.log("child rendered call back is called");
    }
    disconnectedCallback()
    {
        console.log("child disconnected call back called");
    }
    errorCallback()
    {
        console.log("Child error call back called");
    }
}