trigger con on Contact (before delete, after delete) {
        if(Trigger.isDelete && Trigger.isBefore){
            ConClass.handleDelete(Trigger.old);
        
        }
}