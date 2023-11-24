public class MyBatch implements Database.Batchable<sObject> {
    public Database.QueryLocator start(Database.BatchableContext bc)
    {
        string query='select id,name from account';
        return Database.getQueryLocator(query); 
    }
    public void execute(Database.BatchableContext bc,list<Account> act){
        for(Account a:act){
            a.name=a.name+'Updated!!!';
            
        }
        update act;
        
    }
    public void finish(Database.BatchableContext bc){
        
    }
}