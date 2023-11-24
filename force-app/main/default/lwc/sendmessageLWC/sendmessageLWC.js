import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import SAMPLE_MESSAGE_CHANNEL from '@salesforce/messageChannel/lms__c';
 
export default class SendMessageLWC extends LightningElement {
    @wire(MessageContext)
    messageContext;
 
    publishMessage(){
        const message = {
            recordId: '12345',
            message: 'Hello from Publisher!'
        };
        publish(this.messageContext,SAMPLE_MESSAGE_CHANNEL, message);
    }
}