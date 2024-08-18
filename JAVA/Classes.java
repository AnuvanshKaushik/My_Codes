public class Classes { // DECLARATION OF CLASS
    int a;
    String b;

    void execute() {
        System.out.print(a + " " + b);
    }
}

class HelloWorld {
    public static void main(String[] args) {
        Classes r1 = new Classes();
        Classes r2 = new Classes();

        r1.a = 10; // DECLARATION OF OBJECT
        r1.b = "Hello";
        r2.a = 20;
        r2.b = "World";

        r1.execute();
        r2.execute();
    }
}
