class GC {
    public String name;
    public int id;
    public int age;
    public static int nextID;

    public GC(String name, int id, int age) {
        this.name = name;
        this.age = age;
        this.id = nextID++;
    }

    public void show() {
        System.out.println("Id=" + id + "\nName=" + name + "\nAge=" + age);
    }

    public void showNextId() {
        System.out.println("Next id will be=" + nextID);
    }
}

class GC2 {
    public static void main(String Args[]) {
        GC g1 = new GC("Raghav", 10000, 8);
        GC g2 = new GC("Prajul", 10000, 45);
        g1.show();
        g2.show();
        g1.showNextId();
        g2.showNextId();
    }
}