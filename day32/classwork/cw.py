# შექმენით სია რომელშიც იქნება 10 სხვადასხვა რენდომ რიცხვი, შემდეგ მიწდვით ამ სიის თითოეულ ელემენტს და
#დაბეჭდეთ თითოეული ელემენტი ოღონდ თუ რიცხვი იქნება ხუთის ჯერადი მიუწერეთ გვერძე რომ ხუთის ჯერადია ხოლო
#სამის ჯერადებს მიუწერეთ რომ სამის ჯერადია


nums = [2, 3, 1, 55, 32, 22, 5, 10, 11, 6]

for i in range(len(nums)):
    if nums[i] % 5 == 0:
        print(nums[i] , ("-ხუთის ჯერადი"))
    if nums[i] % 3 ==0:
        print(nums[i], "-სამის ჯერადი")