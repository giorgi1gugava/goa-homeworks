# მომხმარბელს შემოატანინეთ რიცხვი შემდეგ კი მომხმარებლის შემოტანილ რიცხვამდე დაბეჭდეთ რიცხვები და გვერძე მიუწერეთ ლუწია თუ კენტი

num = int(input("dacere raime ricxvi:"))

for num in range(num):
    if num % 2==0:
        print("luwi-" + str(num))
    else:
        print("kenti-" + str(num))