#გააკეთეთ Sum Of Even Numbers. მიზანი: შეკრიბეთ ყველა ლუწი რიცხვი და შეინახეთ სიაში შემდეგ ეგ სია დაპრინტეთ 10 ჯერ

numbers = [1, 10, 23, 25, 30, 55, 37, 2, 6, 8]

even_sum = 0

for i in numbers:
    if i % 2 == 0:
        even_sum += i

result1 = [even_sum]

for i in range(10):
    print(result1)
