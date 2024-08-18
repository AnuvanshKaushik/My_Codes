import java.util.*;

abstract class Abstract extends H {
    public abstract void sound();

    public void sleep() {
        System.out.println("zzz...");
    };
}

class Dog extends Abstract {

    public void sound() {
        System.out.println("bhao bhao");
    }

}

class H {
    public static void main(String[] args) {

        Dog Raghav = new Dog();

        Raghav.sound();
        Raghav.sleep();

    }
}