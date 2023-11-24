public with sharing class MyNewAccount {

    public PageReference doSave() {
        return null;
    }


    Account acc;
    public MyNewAccount()
    {
     acc=[select id,name from Account where id='0015h00001W9imyAAB'];
     }

    public Account getMyNewAccount() {
        return acc;
    }

}