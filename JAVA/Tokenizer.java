import java.util.*;

public class Tokenizer {
    public static void main(String args[]) {

        String input = "Hello,World,Java";
        StringTokenizer tokenizer = new StringTokenizer(input, ",");

        while (tokenizer.hasMoreTokens()) {
            String token = tokenizer.nextToken();
            System.out.println(token);
        }

    }
}