#შექმენით shopping სია სადაც მომხმარებელს შეეძლება რამე ნებისმიერი პროუქტის დამატება და წაშლა, როდესაც
#მორჩებიან შოპინგს დაუპრინტეთ საბოლოოდ რა შეიძინეს

shop_list = ["kompiuteri", "telefoni", "leptopi", "planseti", "yursasmeni", "dinamiki"]

ordered_list = []

for i in range(len(shop_list)):
    shop = input("daweret romlis sezena gsurt:")
    ordered_list.append(shop)
    break

print("tqven airciet-" ,ordered_list )