// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class Ani extends H{
   void mult(int n){      
          synchronized(this){
         for(int i=1;i<=5;i++){
             System.out.println(i*n);
             try{Thread.sleep(2);}
             catch(InterruptedException e){

             }
         }  
          }
         for(int i=6;i<=10;i++){
             System.out.println(i*n);
             try{Thread.sleep(2);}catch(InterruptedException e){}
         }    
     }
 }
 
 class T1 extends Thread{
     Ani a1;
     T1(Ani a1){
         this.a1=a1;
     }
     public void run(){
         a1.mult(5);
     }
 }
 class T2 extends Thread{
     Ani a2;
     T2(Ani a2){
         this.a2=a2;
     }
     public void run(){
         a2.mult(100);
     }
 }
 
 class H{
     public static void main(String args[]){
         Ani obj = new Ani();//only one object  
         T1 t1=new T1(obj);  
         T2 t2=new T2(obj);  
         t1.start();  
         t2.start();  
     }
 }