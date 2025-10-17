#შეადარეთ თქვენი ასაკი მომხმარებლის შემოტანილ ასაკს, თუ თქვენი ასაკი მეტია მომხმარებლის ასაკზე უთხარით
#რომ თქვენ მასზე დიდი ხართ, თუ მასზე პატარა ხართ დაუპრინტეთ რომ მასზე პატარა ხართ და სხვა შემთხვევაში
#დაუპრინტეთ რომ ტოლები ხართ.

my_age = 17

user_age = int(input("dawere seni asaki :"))

if my_age > user_age and my_age != user_age:
    print("me senze didi var")

elif my_age < user_age and my_age != user_age:
    print("me senze patara var")


else:
    print("tolebi vart")

