#შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიღხვს შემდეგ კი დაბეჭდავს დადებითია თუ უარყოფითი


num = int(input("daweret raime ricxvi:"))

def end():
    if num < 0:
        print("uaryofitia")
    else:
        print("dadebitia")

end()