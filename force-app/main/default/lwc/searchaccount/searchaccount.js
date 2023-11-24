import { LightningElement } from 'lwc';
import getAccount from '@salesforce/apex/SerachAccountInfo.getAccountDetails'
import {myMethod} from './mycommonfun';
 export default class Searchaccount extends LightningElement {
    accountname;
    accountphone; 
    accountbillingstreet;
    accountbillingstate;
    accountbillingzipcode;
 
    handleOnChangeaccountname(event){
        this.accountname = event.target.value;
        
    }
 
    handleOnChangeaccountphone(event){
        this.accountphone = event.target.value;
        
    }
 
    handleOnChangeaccountbillingstreet(event){
        this.aaccountbillingstreet = event.target.value;
    }
 
    handleOnChangeaccountbillingcity(event){
        this.aaccountbillingcity = event.target.value;
    }
 
    handleOnChangeaccountbillingstate(event){
        this.aaccountbillingstate = event.target.value;
    }
 
    handleOnChangeaccountbillingzipcode(event){
        this.aaccountbillingzipcode = event.target.value;
    }
    initiateSearch(event){
    myMethod();
    alert('Yes,Iam ready to search '  +   this.accountname);
    
    getAccount({actName:this.accountname}).
    then(results=>{this.dispatchEvent(new CustomEvent('getaccountdata',{detail:results}));
    }).catch(error=>{console.log(error)});
    }
}
