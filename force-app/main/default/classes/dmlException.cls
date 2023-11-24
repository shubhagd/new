public class dmlException extends Exception {
    public void getDml(){
        
    

    try{
    Account a = [Select id, name from account limit 1];
    a.name = '';
    update a;    
}
Catch(Exception e){
    system.debug('Exception ' + e);
}
}
}