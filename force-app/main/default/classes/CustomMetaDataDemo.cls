public class CustomMetaDataDemo {
    public void getCustomDataValue(){
        My_Custom_metadata__mdt cmd=My_Custom_metadata__mdt.getInstance('update_trigger_status');
        System.debug('Value of custom meta data='+cmd);
        if(cmd.isActive__c==True){
            System.debug('True');
        }
        else{
            System.debug('False');
        }
        
    }

}