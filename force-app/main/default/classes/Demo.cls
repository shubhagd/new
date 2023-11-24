public class Demo {
public void getAccount(Account act){
System.debug(act);
}
@testVisible
    private integer add(integer a,integer b){
    integer res=a+b;
    
        System.debug('Result is='+res);
        return res;
    }
    public void sayHello(){
    System.debug('Hello Apex.');
    }

}