#შექმენით ფუნქცია რომელსაც ექნება ორი პარამეტრი ხოლო ამ ფუნქციამ უნდა გადაამრავლოს ეს ორი რიცხვი ერთმანეთზე შემდეგ კი დაიბეჭდოს მიღებული ნარმავლი ლუწია თუ კენტი ნამრავლთან ერთად, გამოიძახეთ ეს ფუნქცია რამდენჯერმე და გადაეცით არგუმენტები(სვადასვა რიცხვები)

def func(num1, num2):
    num1 = int(input("dawere"))
    num2 = int(input("dawere"))
    print(num1 * num2)
    if num1 or num2 % 2 ==0:
        print("luwi")
    else:
        print("kenti")


func("kentia" , "luwia")