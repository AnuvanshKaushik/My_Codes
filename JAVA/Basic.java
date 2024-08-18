public class Basic {
    public static void main(String args[]) {
        System.out.println("Raghav Gandu");

        int a = 10;
        String b = "fattyRaghav";
        var c = 500; // Literal Variables

        System.out.println(a + " " + b + " " + c);

        int d[] = { 10, 120 }; // Declaration Array
        String e = "1020";

        System.out.println(Integer.toString(d[0]) + d[1]); // Wrapper Class
        System.out.println(Integer.parseInt(e)); // Wrapper Class

        int f[]; // INITIALIZATION Array
        f = new int[] { 1, 2, 3, 4, 5 };
        int L = f.length;
        System.out.println(L);
        for (int i = 0; i < L; i++) {
            System.out.print(f[i] + " ");
        }
        System.out.println();
        // for(int i : f) This is also method to print array
        int g[][] = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } }; // Multi Dimensional Array
        for (int[] i : g) // Arrays and Enhanced for Loop
            for (int j : i)
                System.out.print(j + " ");

        System.out.println();

        // OPERATORS
        int sum = 5 + 3;
        int Difference = 5 - 3;
        int Division = 5 / 3;
        int Multiplication = 5 * 3;

        int count = 5; // increament and decreament
        count++;
        count--;

        int remainder = 10 % 3; // Modulus (%)

        int number = 10; // Assignment Operator
        int value = 5; // Compound Assignment Operators (e.g., +=, -=, *=, /=):
        value += 3;

        // Comparison Operator
        boolean isEqual = (10 == 5);
        boolean notEqual = (10 != 5);
        boolean greaterThan = (10 > 5);
        boolean greaterThanequalto = (10 >= 5); // etc

        boolean result = (true && false); // Logical AND Operator
        boolean result2 = (true || false); // Logical OR Operator
        boolean result3 = !true; // Logical NOT Operator

        int result4 = 5 & 3; // Bitwise AND
        int result5 = 5 | 3; // Bitwise OR
        int result6 = 5 ^ 3; // Bitwise XOR
        int result7 = ~5; // Bitwise NOT
        int result8 = 5 << 2; // Left Shift
        int result9 = 5 >> 2; // Right Shift

        int number3 = 10;
        String result10 = (number > 5) ? "Greater than 5" : "Less than or equal to 5"; // Conditional(Ternary Operator)

        // CONDITIONAL STATEMENTS

        int Weight = 50000;
        if (Weight >= 50000) {
            System.out.println("Raghav Fatty");
        }

        else {
            System.out.println("Prajul Halki Hawa");
        }

        int Weight2 = 5000;
        switch (Weight2) {
            case 500:
                System.out.println("Raghav is fatty");
                break;
            case 5000:
                System.out.println("Raghav is very very fatty");
                break;
            default:
                System.out.println("Raghav is not fatty");
        }

        // Looping Statement
        for (int x = 1; x <= 5.; x++) { // For loop
            for (int y = 1; y <= x; y++) {
                System.out.print("*");
            }
            System.out.println();
        }

        int i = 1; // while loop
        while (i <= 10) {
            System.out.print("Prajul Halki Hawa \n");
            i++;
        }

        int z = 1;
        do { // do while loop
            if (z == 5) {
                z++;
                continue;
            }
            System.out.println(z);
            z++;
        } while (z <= 10);

    }
}
