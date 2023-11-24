public class ConClass {
    public static void handleDelete(List<Contact> conts){
        List<Contact> localList = new  List<Contact>();
        for(Contact c:conts){
            if(c.AccountId!=null){
                c.addError('Can`t Delete Conatct As Account Is Associated');
            }
        }
 
   }
 

}