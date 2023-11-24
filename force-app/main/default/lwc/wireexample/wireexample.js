import { LightningElement,api,wire } from 'lwc';
import { getRecord, getFieldValue } from'lightning/uiRecordApi';
import NameField from '@salesforce/schema/Account.name'
import PhoneField from '@salesforce/schema/Account.Phone'
export default class Wire1 extends LightningElement {
    @api recordId;
    @wire (getRecord,{recordId:'$recordId', fields:[NameField,PhoneField]}) record;
    get name(){
        return this.record.data? getFieldValue(this.record.data, NameField): '';
    }
    get Phone(){
        return this.record.data? getFieldValue(this.record.data, PhoneField): '';
    }
}