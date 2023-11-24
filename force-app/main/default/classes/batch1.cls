public class batch1 implements DataBase.Batchable<sObject> {
    public DataBase.QueryLocator start(DataBase.BatchableContext bc){
        String query='select id,name from Invoice__c';
        return DataBase.getQueryLocator(query);
    }
    public void execute(DataBase.BatchableContext bc,List<Invoice__c>invoice){
        for(Invoice__c i:invoice){
            i.Invoice_closed_datee__c=System.today();
       }
        update invoice;
    }
    public void finish(DataBase.BatchableContext bc){
        
    }
}