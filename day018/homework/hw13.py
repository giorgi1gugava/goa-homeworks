#მომხმარბელს შემოატანინეთ რიცხვი შემდეგ კი მომხმარებლის შემოტანილ რიცხვამდე დაბეჭდეთ მხოლოდ ხუთის ჯერადი რიცხვები

num = int(input("dacere raime ricxvi:"))

for num in range(num):
    if num % 5==0:
        print(num)