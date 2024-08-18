class SuperClass {
    public synchronized void synchronizedMethod() {
    // Superclass synchronized method
    System.out.println("1");
    }
    }
    class SubClass extends SuperClass {
    public synchronized void synchronizedMethod() {
    // Subclass synchronized method
    System.out.println("2");
    }
    }
    
    class H{
        public static void main(String arg[]){
            SubClass s=new SubClass();
            s.synchronizedMethod();
        }
    }