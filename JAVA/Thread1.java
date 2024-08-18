
// // CREATING A THREAD BY EXTENDING THREAD CLASS
// import java.util.*;

// public class Thread1 extends Thread {
//     public void run() {
//         System.out.println("Halki Hawa Prajul");
//     }

//     public static void main(String args[]) {
//         Thread1 t1 = new Thread1();
//         t1.start();
//     }

// }

//CREATING A THREAD BY IMPLEMENT RUNNABLE INTERFACE 
import java.lang.*;

public class Thread1 implements Runnable {
    public void run() {
        for(int x=1;x<10;x++){
            try{
                Thread.sleep(5000);        //Sleep function
            }
            catch(InterruptedException e){
            }
            System.out.println("Raghav Kitni baar Marwata Hain:" +x);
        }
        System.out.println("Halki Hawa Prajul Se");
    }

    public static void main(String args[]) {
        Thread1 t1 = new Thread1();
        Thread T2 = new Thread(t1, "Raghav Gandu"); // Set the Name

        T2.setPriority(1); // Set The priority
        T2.start();
        long i = T2.getId(); // Give ID
        boolean j = T2.isAlive(); // Check Thread is Destroy Or Not
        // T2.stop(); To Stop the Thread Permanently
        // T2.suspend();
        String str = T2.getName(); // Give The Name
        // T2.resume();
        System.out.println(T2);
        System.out.println(i);
        System.out.println(j);
    }

}
