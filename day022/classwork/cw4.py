#n = 0
#i = 0
#while i < 20:
  #  n = n + i
  #  i = i +1

 #   print(n)

num = int(input("dawere:"))
i = 0
n = 0
while i < num:
    if i % 5==0:
        i = i + i
    elif i % 3==0:
        num = num +1
    i = i + 1

    print(num)