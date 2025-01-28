#გააკეთეთ Find Maximum და გამოიყენეთ for loop. მიზანი: სიაში უნდა იპოვოთ მაქსიმუმი ინტეჯერი მაგალითად: [1, 546, 456 ,123] => [546]

num = [10, 100, 1000, 10000, 100000]

nums = []

for i in range(len(num)):
        if num[i] == 10000:
         nums.append(num[i])
        
print(nums)
        