public class Boiler {
    public void getBoiled(integer speed){
        try{
            if(speed>=100){
                throw new BoilerException();
                
            }else{
                System.debug('Its boiling');
            }
        }catch(BoilerException b){
            speed=0;
            System.debug('Reset boiler');
        }
        
    }

}