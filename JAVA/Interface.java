
interface Animal {
    public void sound();

    public void sleep();
}

class Dog extends H implements Animal {

    public void sound() {
        System.out.println("bhao bhao");
    }

    public void sleep() {
        System.out.println("zzz...");
    };
}

class cat extends H implements Animal {

    public void sound() {
        System.out.println("mew");
    }

    public void sleep() {
        System.out.println("zzz...");
    };
}

class Interface{
    public static void main(String[] args) {

        cat Raghav = new cat();

        Raghav.sound();
        Raghav.sleep();

    }
}