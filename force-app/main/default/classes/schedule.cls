public class schedule implements schedulable{
    public void execute(schedulableContext sc){
         batch1 b=new batch1();
    database.executebatch(b);
    }
}