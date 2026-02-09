import java.util.Scanner;

public class Main {
    static Scanner input = new Scanner(System.in);

    public static void main(String[] args){
        StudentInformationManager.readFile();
        openMenu();
        input.close();
    }

    // Validation is handled on the user side. Polymorphism is used to handle validation
    // of different data types.

    public static String validate(String str, String field){
        if(str.isEmpty()){
            System.out.printf("Invalid %s '%s': %s must be > 0.\n", field, str, field);
            return "";
        }
        return str;
    }

    public static Double validate(double d, String field){
        if(d <= 0){
            System.out.printf("Invalid %s '%f': %s must be > 0.\n", field, d, field);
            return -1.0;
        }
        return d;
    }

    public static int validate(int n, String field){
        if(n <= 0){
            System.out.printf("Invalid %s '%d': %s must be > 0.\n", field, n, field);
            return -1;
        }
        return n;
    }

    // Similar concept is used to handle prompting, without method overloading.

    public static int promptInt(String prompt, String field){
        int userInput;
        do{
            System.out.print(prompt);
            userInput = validate(input.nextInt(), field);
        } while (userInput == -1);
        input.nextLine();
        return userInput;
    }

    public static String promptStr(String prompt, String field){
        String userInput;
        do{
            System.out.print(prompt);
            userInput = validate(input.nextLine(), field);
        } while (userInput.isEmpty());
        return userInput;
    }

    public static double promptDouble(String prompt, String field){
        double userInput;
        do{
            System.out.print(prompt);
            userInput = validate(input.nextDouble(), field);
        } while (userInput == -1.0);
        input.nextLine();
        return userInput;
    }

    public static int promptID(String prompt, String field){
        int userInput;
        do{
            userInput = promptInt(prompt, field);
        } while (!StudentInformationManager.validateExistingID(userInput));
        return userInput;
    }

    public static int promptMenuChoice(String prompt, int max){
        System.out.print(prompt);
        int choice = input.nextInt();
        while(choice < 1 || choice > max){
            System.out.printf("Invalid Selection: Enter a number from 1 - %d.\n", max);
            System.out.print("Enter your selection to continue: ");
            choice = input.nextInt();
        }
        input.nextLine();
        return choice;
    }

    public static void openMenu(){
        int choice = promptMenuChoice(
            "--- Student Information Management System Console ---\n" +
            "1. Add Student Record\n" +
            "2. View All Student Records\n" +
            "3. Search For A Student Record\n" +
            "4. Update A Student Record\n" +
            "5. Delete A Student Record\n" +
            "6. Exit\n" +
            "Enter your selection to continue: ", 
            6
        );

        switch (choice){
            case 1:
                StudentInformationManager.addStudent(
                    promptStr("Enter Student's Name: ", "Name"),
                    promptInt("Enter Student's Age: ", "Age"),
                    promptDouble("Enter Student's Grade: ", "Grade")
                );
                System.out.print("Press enter to continue...");
                input.nextLine();
                break;

            case 2:
                StudentInformationManager.viewStudents();
                System.out.print("Press enter to continue...");
                input.nextLine();
                break;

            case 3:
                StudentInformationManager.searchStudentByID(
                    promptID("Enter Student's ID: ", "ID")
                );
                System.out.print("Press enter to continue...");
                input.nextLine();
                break;

            case 4:
                int updateID = promptID("Enter Student's ID: ", "ID");
                int updateChoice = promptMenuChoice(
                    "--- Select The Field To Modify ---\n" +
                    "1. Name\n" +
                    "2. Age\n" +
                    "3. Grade\n" +
                    "Enter Your Selection To Continue: ", 
                    3
                );

                switch(updateChoice){
                    case 1:
                        StudentInformationManager.updateStudent(
                            updateID,
                            promptStr("Enter New Name: ", "Name")
                        );
                        break;
                    case 2:
                        StudentInformationManager.updateStudent(
                            updateID,
                            promptInt("Enter New Age: ", "Age")
                        );
                        break;
                    case 3:
                        StudentInformationManager.updateStudent(
                            updateID,
                            promptDouble("Enter New Grade: ", "Grade")
                        );
                        break;
                }

                System.out.print("Press enter to continue...");
                input.nextLine();
                break;

            case 5:
                int deleteID = promptID("Enter Student's ID: ", "ID");
                StudentInformationManager.deleteStudent(deleteID);
                System.out.print("Press enter to continue...");
                input.nextLine();
                break;

            case 6:
                return;
        }

        openMenu();
    }
}
