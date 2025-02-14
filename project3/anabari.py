print("mogesalmebist goa-si")
print("gaiaret registracia")
name = input("saxeli:")
password = input("paroli:")

name1 = input("gaimeoret saxeli:")
password1 = input("gaimeoret paroli:")

while name1 != name or password1 != password:
    print("registracia ver gaiaret")
    name = input("tavidan daweret saxeli:")
    password = input("tavidan daweret paroli:")
else:
    print("gamarjoba", name)
    print("gtavazobt anabris gaketebas ")
    an = input("tu gnebavt anabris areba daweret ok:")

if an == "ok":
    print("gtavazobt axali anabris gaxsnas:")

print("gtxovt airciot anabris tipi")

an_type = input("1-vadiani, 2-segrovebadi:")

if an_type == "1":
    print("vadiani")
    vd_an = int(input("airciet anabris sawyisi tanxa:"))
    while vd_an > 10000:
        print("tqven ar segizliat 10000 larze meti anabris areba")
        vd_an = int(input("gtxovt xelaxla seiyvanot sawyisi tanxa:"))
    else:
        print("tqven airciet", vd_an, "lari")

print("gtxovt exla seiyvanot tu ramdeni tvit gsurt anabris ageba:")
tve_an = int(input("3 4 5 6 7 8 9 10-tve:"))

if tve_an < 3  or tve_an > 10:
    print("tqven ar segizliat airciot" , tve_an, "-tve")
    tve_an = int(input("airciet xelaxla:"))
    while tve_an < 3 or tve_an > 10:
        print("scadet xelaxla")
        tve_an = int(input("airciet xelaxla:"))
    else:
        print("tqven airciet", tve_an , "-tve")





 #if tve_an < 3 or tve_an > 10:
    #print("tqven ar segizliat airciot" , tve_an, "-tve")
    #tve_an = input("gtxovt airciot 3 tveze meti:")
    #print("gtxovt airciot 3 tveze meti")
    #tve_an = int(input("airciet tavidan:"))
 #elif tve_an >=3 or tve_an <= 10:
    
     #print("tqven airciet", tve_an, "-tve")

        
 

    
    


    
elif an_type == "2":
    print("segrovebadi")






