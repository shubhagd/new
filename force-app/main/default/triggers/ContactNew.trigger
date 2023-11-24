trigger ContactNew on Contact ( before delete) {
      if(Trigger.isDelete && Trigger.isBefore){
       ContactDelete.deleteContact(Trigger.oldMap);
  }
}