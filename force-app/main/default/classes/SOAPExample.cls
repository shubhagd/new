global class SOAPExample {
    webservice static Account getAccount(String actId){
        Account act =[select id,name from account where id=:actId];
        return act;
    }

}