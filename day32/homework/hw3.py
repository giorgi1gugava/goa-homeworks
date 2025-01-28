#გააკეთეთ Filter Even Numbers. მიზანი: გაფილტრეთ ყველრა ლუწი რიცხვი და ჩაამატეთ ახალ სიაში და შემდეგ ეგ სია დაპრინტეთ

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

nums = []

for i in range(len(num)):
    if num[i] % 2 == 0:
       nums.append(num[i])

print(nums)

