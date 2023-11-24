public class CollectionMaps {
    public void getNames(){
        
        Map<String,String>name=new Map<String,String>();
        name.put('nm1','Amit');
        name.put('nm2','Raj');
        name.put('nm3','Sandy');
        name.put('nm4','Vidya');
        System.debug('Result='+name.get('nm1'));
        name.put('nm1','Harish');
        System.debug('Result='+name.get('nm1'));
        Set<String> n=name.keySet();
        for(String nn:n){
            System.debug(name.get(nn));
            
        }
        
        List<String> val=name.values();
        for(String v:val){
                        System.debug('Values are='+v);
        }
        

}
}