public class ExceptionDemo {
    public void getDivide(integer a,integer b){
        try{
            integer res=a/b;
            System.debug('result='+res);
            Demo d;
            System.debug('value of d='+d);
            //d.sayHello();
            List<String> name=new List<String>();
            name.add('Amit');
            System.debug(name.get(6));
            
             }catch(MathException e){
            System.debug('Please donot use zero for dividing');
            
        }
        catch(NullPointerException n){
            
        
            System.debug('Please donot call null method');
        }
        catch(Exception e){
             System.debug('server busy');
        }
    }

}