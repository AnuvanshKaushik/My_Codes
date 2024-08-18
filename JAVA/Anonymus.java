

public class Anonymus {
    final int a = 10; // Final Keyword

    void show() {
        System.out.println("Raghavfatty");
    }
}
// class B extends Anonymus{
// void show(){
// System.out.println("Gandu");
// }

// }
class Ani {
    public static void main(String args[]) {
        Anonymus r1 = new Anonymus() {
            void show1() { // Anonymus Class
                System.out.println("Piggy");
            }
        };
        System.out.println(r1.a);
        r1.show();
    }
}
