import java.io.BufferedReader;
import java.io.FileReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class StudentInformationManager {
    private static int count = 0;
    private static int autoCountID = 1;
    private static int[] ids = new int[100];
    private static String[] names = new String[100];
    private static int[] ages = new int[100];
    private static double[] grades = new double[100];
    private static final String DATABASE_FILE_PATH = "students.txt";

    public static void addStudent(String name, int age, double grade){
        // Set values
        ids[count] = autoCountID;
        names[count] = name;
        ages[count] = age;
        grades[count] = grade;
        count += 1;
        autoCountID += 1;
        System.out.println("--- Student Record Added ---");
        updateFile();
    }

    public static void deleteStudent(int id){
        int index = findStudentIndex(id);
        // Shift elements
        System.arraycopy(ids, index + 1, ids, index, ids.length - index - 1);
        System.arraycopy(names, index + 1, names, index, names.length - index - 1);
        System.arraycopy(ages, index + 1, ages, index, ages.length - index - 1);
        System.arraycopy(grades, index + 1, grades, index, grades.length - index - 1);
        count -= 1;
        System.out.println("--- Student Record Deleted ---");
        updateFile();
    }

    public static void viewStudents(){
        System.out.println("--- Student Records ---");
        if(count == 0){
            System.out.println("No records available");
            return;
        }
        for(int i = 0; i < count; i++){
            System.out.printf("%d | %s | %d | %.2f\n",
                    ids[i], names[i], ages[i], grades[i]);
        }
    }

    public static int searchStudentByID(int id) {
        int index = findStudentIndex(id);
        if (index == -1){
            return -1;
        }
        System.out.println("--- Student Found ---");
        System.out.printf("%d | %s | %d | %.2f\n",
                ids[index], names[index], ages[index], grades[index]);
        return index;
    }

    // Method overloading is used to differentiate between the fields being updated,
    // because each field is a different data type.

    public static void updateStudent(int id, String value){
        int index = findStudentIndex(id);
        names[index] = value;
        System.out.println("--- Student Name Updated ---");
        System.out.printf("%d | %s | %d | %.2f\n",
                ids[index], names[index], ages[index], grades[index]);
        updateFile();
    }

    public static void updateStudent(int id, int value){
        int index = findStudentIndex(id);
        ages[index] = value;
        System.out.println("--- Student Age Updated ---");
        System.out.printf("%d | %s | %d | %.2f\n",
                ids[index], names[index], ages[index], grades[index]);
        updateFile();
    }

    public static void updateStudent(int id, double value){
        int index = findStudentIndex(id);
        grades[index] = value;
        System.out.println("--- Student Grade Updated ---");
        System.out.printf("%d | %s | %d | %.2f\n",
                ids[index], names[index], ages[index], grades[index]);
        updateFile();
    }

    // Try-catch blocks are used to handle file read/write resource allocation.

    public static void readFile(){
        try (BufferedReader reader = new BufferedReader(new FileReader(DATABASE_FILE_PATH))) {
            String line;
            int index = 0;
            while ((line = reader.readLine()) != null) {
                String[] record = line.split(",");
                int id = Integer.parseInt(record[0]);
                ids[index] = id;
                names[index] = record[1];
                ages[index] = Integer.parseInt(record[2]);
                grades[index] = Double.parseDouble(record[3]);
                index += 1;
                autoCountID = Math.max(autoCountID, id + 1);
            }
            count = index;
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }
    }

    private static void updateFile(){
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(DATABASE_FILE_PATH))) {
            for(int i = 0; i < count; i++){
                bw.write(String.format("%d,%s,%d,%.2f\n",
                        ids[i], names[i], ages[i], grades[i]));
            }
        } catch (IOException e) {
            System.err.format("IOException: %s%n", e);
        }
    }

    public static int findStudentIndex(int id) {
        for (int i = 0; i < count; i++) {
            // Find record
            if (ids[i] == id) {
                return i;
            }
        }
        return -1;
    }

    // Function used to check if a provided ID matches one in the database
    public static boolean validateExistingID(int id){
        for (int i = 0; i < count; i++){
            if(ids[i] == 0){
                break;
            }
            if(ids[i] == id){
                return true;
            }
        }
        System.out.printf("Invalid ID '%d': No matching ID found.\n", id);
        return false;
    }
}
