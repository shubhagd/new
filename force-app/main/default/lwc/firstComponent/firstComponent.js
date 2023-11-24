import { LightningElement } from 'lwc';

export default class FirstComponent extends LightningElement {
    name="Shubha";
    isActive=false;
    handleOnChange(event){
        this.name=event.target.value;
    }
    handleOnChange1(event){
        this.isActive=event.target.checked;
    }

}