# მომხმარებელს შეეკითხეთ რიცხვი შემდეგ შექმენით ფუნქცია რომელსაც ექნება პარამეტრი რომელსაც არგუმენტად გადაეცემა მომხლარებლის შემოტანილი რიცხვი შემდეგ კი დაბეჭდავს ეს რიცხვი დადებითია თუ უარყოფითი


def number(num):
    if num > 0:
        print(f"dadebitia: {num}")
    else:
        print(f"uaryofitia: {num}")

num = int(input("daweret ricxvi:"))

number(num)