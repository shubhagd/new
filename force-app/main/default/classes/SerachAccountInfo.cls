public class SerachAccountInfo {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountDetails(String actName){
        actName='%'+actName+'%';
        List<Account> act=[select id,name from Account where name like:actName];
        return act;
    }

}