#2) ნასწავლ მეთდოებზე: lower, upper, capitalize, find გააკეთეთ 3-3 მაგალითი. კომენტარებით დაწერეთ რას აკეთებს თითოეული მეთოდი.

word = "word"
word1 = "WORD"
word2 = "WoRd"


print(word.find("r"))
print(word.find("w"))
print(word.find("d"))
#find ს ვიყენებთ ინდექსის საპოვნელად

text = word.upper()
text1 = word1.upper()
text2 = word2.upper()
print(text)
print(text1)
print(text2)
#სტრინგის ყველა ასოს აქცევს დიდად

text = word.lower()
text1 = word1.lower()
text2 = word2.lower()
print(text)
print(text1)
print(text2)
#სტრინგს ყველა ასოს აქცევს პატარად

text = word.capitalize()
text1 = word1.capitalize()
text2 = word2.capitalize()
print(text)
print(text1)
print(text2)
#სტრინგის პირველ ასოს აქცევს დიდად
