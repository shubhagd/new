import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import SAMPLE_MESSAGE_CHANNEL from '@salesforce/messageChannel/contactMessageChannel__c';
 
export default class ReceiveMessageLWC extends LightningElement {
    @wire(MessageContext)
    messageContext;
    message = 'Waiting for a message...';
 
    connectedCallback() {
        this.subscribeToMessageChannel();
    }
    disconnectedCallback(){
        uns
    }disconnectedCallback() {
        unsubscribe(this.subscription);
        console.log('Unsubscribed')
    }
 
    subscribeToMessageChannel() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(
            this.messageContext,
            SAMPLE_MESSAGE_CHANNEL,
            (data) => {
                this.handleMessage(data);
            }
        );
    }
 
    handleMessage(message) {
        this.message = `Received Message: ${message.message} (Record ID: ${message.recordId})`;
    }
}