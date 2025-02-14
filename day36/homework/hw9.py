#მომხმარებელს შეეკითხეთ რიცხვი შემდეგ შექმენით ფუნქცია რომელსაც ექნება პარამეტრი რომელსაც არგუმენტად გადაეცემა მომხლარებლის შემოტანილი რიცხვი შემდეგ კი თუ 18 ზე უთხრას რომ სრულწლოვანია თუარადა არარის

def age(user_age):
    if user_age >= 18:
        print(f"srulwlovani xar")
    else:
        print(f"ar xar srulwlovani")
        
user_age = int(input("seiyvanet asaki:"))

age(user_age)