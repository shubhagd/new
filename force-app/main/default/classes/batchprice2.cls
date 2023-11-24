public class batchprice2 implements Database.Batchable<sObject>  {
    public Database.queryLocator start(Database.BatchableContext bc){
        String query = 'select id,Merchandise_Price__c from Merchandise__c';
        return Database.getqueryLocator(query);
    }
    public void execute(Database.BatchableContext bc, List<Merchandise__c> mer){
        for(Merchandise__c c : mer){
            c.Merchandise_Price__c =99;
        }
        update mer;
    }
    public void finish(Database.BatchableContext bc){
    }

}