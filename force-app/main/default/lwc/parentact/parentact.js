import { LightningElement } from 'lwc';
 
export default class Parentact extends LightningElement {
    searchDetail=[];
    handleAccount(event){
        this.searchDetail=[];
        alert('See the Magic, I am from child');
        alert(event.detail);
        try{
            event.detail.forEach(x => {
                var accData={
                    id:x.Id,
                    name:x.Name
                }
                this.searchDetail.push(accData);
            });
        }catch(e){
            console.log(e);
        }
    }
}