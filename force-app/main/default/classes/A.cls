public class A {
    @future
    public static void a1(){
        System.debug('I am from class A');
        System.enqueueJob(new B());
    }

}