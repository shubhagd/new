import { LightningElement } from 'lwc';
import{NavigationMixin} from 'lightning/navigation';


export default class Navigation extends NavigationMixin (LightningElement) {

    openContactHome(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'home'
            }
        });
    }
}