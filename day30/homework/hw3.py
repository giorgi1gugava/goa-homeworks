# შექმენით ლისტი სადაც გექნებათ 1-10 ჩათვლით რიცხვები, დაპრინტეთ ყველა რიცხვი მაგრამ მიუწერეთ რომელია კენტი და რომელია ლუწი
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for i in range(len(nums)):
    if nums[i] % 2 == 0:
        print(nums[i] , "-luwia")
    else:
        print(nums[i] , "-kentia") 