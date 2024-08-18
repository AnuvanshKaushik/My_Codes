try (FileInputStream fis = new FileInputStream("file.txt")) {
    int byteData;
    while ((byteData = fis.read()) != -1) {
    // Process the byte data
    }
    } catch (IOException e) {
    e.printStackTrace();
    }