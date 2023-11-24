public class SOSLDemo {
    public void searchText(){
        List<list<sObject>>searchedText=[find 'gene' in all fields returning Contact(id,name),Account(id,name)];
        List<Contact> con=searchedText[0];
        List<Account> act=searchedText[1];
        if(con.size()>0){
            for(Contact c:con){
                System.debug('ID ='+c.id+'Contact Name='+c.name);
            }
        }
        if(act.size()>0){
            for(Account a:act){
                System.debug('ID ='+a.id+'Contact Name='+a.name);
                
            }
        }
    }

}