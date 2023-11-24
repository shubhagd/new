public class CustomSettingDemo {
    public void customsettingExample(){
        MySettings__c mcs=MySettings__c.getInstance('mydataset');
        System.debug('Value of my Custom Setting ='+mcs);
        if(mcs.isActive__c==true){
            System.debug('Please call my trigger');
            
        }
        else{
            System.debug('Sorry, I cannot');
        }
    }

}