public class CollectionDemo {
    public void getNames(){
        List<String>nm1=new List<String>();
        nm1.add('Dinesh');
        //System.debug(nm1.get(0));
        List<String>name=new List<String>();
        name.add('amit');
        name.add('Raj');
        name.add('Ram');
        name.add('John');
        nm1.addAll(name);
        System.debug(nm1);
        //equals
        System.debug('Is both the list are identical='+name.equals(nm1));
        //Add at particular position
        name.add(0,'Sanjay');
        //replace at particular position
        name.set(0,'Anil');
        //Size();
        System.debug('List size='+name.size());
        //isEmpty
        System.debug('isempty='+name.isEmpty());
        //Contains
        System.debug('Contains='+name.contains('Harish'));
        //clear
        name.clear();
        //size
        System.debug('Size after clear='+name.size());
        //one way to prin tyour list
        System.debug('List value are='+name);
        for(String nm:name){
             System.debug('names='+nm1);
        }
        
           
        }
        
        
    }