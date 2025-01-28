#დაიწყეთ რიცხვების სიით, გამოიყენეთ while loop რომ წაშალოთ ყველა რიცხვი ამ სიიდან და გამოიყენეთ pop რო
#დაპრინტოთ ეს ყველა ელემენტი სანამ ლისტი არ დაცარიელდება

num = [1, 2, 3, 4, 5]

x = 0

while x < len(num):
    num1 = int(input("dawere is ricxvi romlis wasla ginda:"))
    num.remove(num1)
    num1 = int(input("dawere is ricxvi romlis wasla ginda:"))
    num.remove(num1)
    num1 = int(input("dawere is ricxvi romlis wasla ginda:"))
    num.remove(num1)
    num1 = int(input("dawere is ricxvi romlis wasla ginda:"))
    num.remove(num1)
    num1 = int(input("dawere is ricxvi romlis wasla ginda:"))
    num.remove(num1)
    x += 1
    break

print(num)
    