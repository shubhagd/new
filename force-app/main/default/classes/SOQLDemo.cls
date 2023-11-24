public class SOQLDemo {
    public void getAmount(){
        List<Account> act=[select id,name from account];
        for(Account a:act){
            System.debug('Account id='+a.id+'Account name='+a.name);
        }
    }

}