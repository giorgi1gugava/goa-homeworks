# მომხმარებელს შემოატანინეთ 5 რიცხვი და დაამატეთ ეს რიცხვები სიაში, ბოლოს გამოიტანეთ ტერმინალში ეს სია

number_list = []

while True:
    num = int(input("daweret 1-dan 10-mde yvela luwi ricxvebi.daweret pirveli ricxvi:"))
    number_list.append(num)
    
    num1 = input("daweret 2 ricxvi :")
    number_list.append(num1)

    num2 = input("daweret 3 ricxvi:")
    number_list.append(num2)

    num3 = input("dawere 4 ricxvi:")
    number_list.append(num3)

    num4 = input("daweret bolo 5 ricxvi")
    number_list.append(num4)
    print(number_list)
    break