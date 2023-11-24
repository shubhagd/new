public class MySchedule implements schedulable {
    public void execute(schedulableContext sc){
        
        MyBatch mb=new MyBatch();
        database.executeBatch(mb);
    }

}