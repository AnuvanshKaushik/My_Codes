// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class A implements Runnable{
    public void run(){
        for(int i=1;i<5;i++){   
  // the thread will sleep for the 500 milli seconds   
    try{Thread.sleep(300);}catch(InterruptedException e){System.out.println(e);}    
    System.out.println(i);    
  }
    }
}


class ThreadJoin{
    public static void main(String[] args) {
        A a1 = new A();
        A a2 = new A();
        Thread t1 = new Thread(a1);
        Thread t2 = new Thread(a2);
        t1.start();
        try{  
            t1.join();  
        }catch( InterruptedException e){  
            System.out.println("The exception has been caught " + e);  
        }  
        t2.start();
        
    }
}
