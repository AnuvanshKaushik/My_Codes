import java.util.*;

public class StringBuffer1 {
    public static void main(String args[]) {
        StringBuffer sb = new StringBuffer("Hello");
        sb.append(" World");
        System.out.println(sb); // "Hello World"
        sb.insert(5, ",");
        System.out.println(sb); // "Hello, World"
        sb.delete(5, 7);
        System.out.println(sb);// "Hello World"
        sb.replace(6, 11, "Java");
        System.out.println(sb); // "Hello Java"
    }
}