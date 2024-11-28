#გიორგიმ შექმნა ზოოპარკი სადაც შესვლა მხოლოდ კონკრეტული აღნაგობის ხალხს შეუძლიათ. გიორგი ზოოპარკში უშვებს ხალხს
#რომელიც 180 სანტიმეტრზე მაღლები არიან და 50-90 კილოს შორის არიან წონით. თქვენი მისიაა რომ მომხმარებელს შემოატანინოთ
#წონა და სიმაღლე და გაარკვიოთ შეუძლია თუ არა მომხმარებელს ზოოპარკის მონახულება.

#1)
height = int(input("seiyvanet tqveni simagle :"))

if height < 180:
    print("tqven ver sexvalt zooparksi")

elif height >= 180:
    print("tqven dagrcat wonis mititeba")


#2)
weight = int(input("exla daweret tqveni wona :"))

if weight > 90 or weight < 50:
    print("tqven ver sexvalt zooparksi")

if weight >= 50 and weight <= 90:
    print("tqven segizliat zooparksi sesvla")

