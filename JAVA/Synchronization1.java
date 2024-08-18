    class Synchronization1 extends Thread {
     synchronized static public void mul(int n){
    
        for(int i=1;i<=5;i++){
        System.out.println(n*i);

        try {
          sleep(500);  
        } 
        catch (InterruptedException e){
            System.out.println(e);
        }
    }
  }
}

class Thread1 extends Thread{
   Synchronization1 t;
       Thread1( Synchronization1 t){
           this.t=t;
   }
   public void run(){
    t.mul(10);
   }

}

class Thread2 extends Thread{
  Synchronization1 t;
      Thread2( Synchronization1 t){
          this.t=t;
  }
  public void run(){
   t.mul(100);
  }

}

class HalkiHawa{
  public static void main(  String args[]){
    Synchronization1 obj = new Synchronization1();
    Thread1 t1= new Thread1(obj);
    Thread1 t2= new Thread1(obj);
    t1.start();
    t2.start();

   }
} 
