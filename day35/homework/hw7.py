#შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიცხვს შემდეგ კი დაბეჭდავს ეს რიცხვი ლუწია თუ კენტი

num = int(input("seiyvanet ricxvi:"))

def end():
    if num % 2 ==0:
        print("luwia")
    else:
        print("kentia")


end()