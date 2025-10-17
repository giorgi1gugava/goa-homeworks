#გააკეთეთ Find Minimum და გამოიყენეთ for loop. მიზანი: სიაში უნდა იპოვოთ მინიმალური ინტეჯერი მაგალითად: [1, 546, 456 ,123] => [1]

num = [45, 450, 4500, 45000, 450000 ]

nums = []

for i in range(len(num)):
        if num[i] < 450:
         nums.append(num[i])
        
print(nums)