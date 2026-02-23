# Get user's age
age = int(input("How old are you?:  "))
# Check if older than 18
if age >= 18:
    print("Congratulations! You are eligible to vote. Go make a difference!")
else:
    # If younger than 18 use f string to print years remaining
    print(f"Oops! You're not eligible yet. But hey, only {18 - age} more years to go!")
