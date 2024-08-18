import java.io.IOException;

class Exception1 {
    void m() throws IOException {
        throw new IOException("device error");// checked exception
    }

    void n() throws IOException {
        m();
    }

    void p() {
        try {
            n();
        } catch (IOException e) {
            System.out.println("exception handled");
        }
    }

    public static void main(String args[]) {
        Exception1 obj = new Exception1();
        obj.p();
        System.out.println("normal flow...");
    }
}