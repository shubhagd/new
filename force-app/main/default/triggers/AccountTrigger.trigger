trigger AccountTrigger on Account (before insert,after insert,before update,after update,before delete, after delete,after undelete) {
     if (Trigger.isBefore && Trigger.isInsert) {
            AccountInsertOwner.InsertAccountOwner(Trigger.new);
}
}