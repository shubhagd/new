import { LightningElement } from 'lwc';
import{NavigationMixin} from 'lightning/navigation';


export default class Lightningnavigation extends NavigationMixin (LightningElement) {

    openAccountHome(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'home'
            }
        });
    }
}