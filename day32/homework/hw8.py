#გააკეთეთ Sum Of Odd Numbers. მიზანი: შეკრიბეთ ყველა კენტი რიცხვი და შეინახეთ სიაში შემდეგ ეგ სია დაპრინტეთ 10 ჯერ

numbers = [1, 10, 23, 25, 30, 55, 37, 2, 6, 8]

odd_sum = 0

for i in numbers:
    if i % 2 != 0:
        odd_sum += i

result2 = [odd_sum]

for i in range(10):
    print(result2)