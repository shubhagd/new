public class ContactDelete {
    public static void deleteContact(Map<Id, Contact> c)
    {
        Set<Id> s = new Set<Id>();
        for(Contact con : [select id,AccountId from Contact where Id in : c.keySet()])
        {
            if(con.AccountId!=null){
                s.add(con.AccountId);
            }
        }
    }
}