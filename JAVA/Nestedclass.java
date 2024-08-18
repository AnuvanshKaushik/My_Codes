//INNER class
class Nestedclass {
    public static void main(String[] args) {
        class Nestedclass1 {
            int a;
            String b;

            void execute() {
                System.out.print(a + " " + b);
            }
        }

        Nestedclass1 r1 = new Nestedclass1();
        Nestedclass1 r2 = new Nestedclass1();

        r1.a = 10;
        r1.b = "Hello";
        r2.a = 20;
        r2.b = "World";

        r1.execute();
        r2.execute();
    }
}
