#დედამ გაგიშვათ აფთიაქში თავის ტკივილის წამლის საყიდლათ, ეს წამალი დღეში უნდა დალიო შენი წონის მიხედვით.
#თუ 10 დან 20 კილომდე ხარ ნახევარი ტაბლეტი უნდა დალიო დღეში, თუ 30-40 კილომდე ხარ 1 ტაბლეთი ორჯერ დღეში
#და თუ 45 კილოზე მეტი ხარ სამი ტაბლეტი უნდა დალიო ორჯერ დღეში. თქვენი მისიაა ამ ინფორმაციით გაარკვიოთ მომხარებელს
#რამდენი წამალი აქვს დასალევი და დღეში რამდენჯერ უნდა დალიოს.


num = int(input("mitxarit momxmareblis wona :"))

if num >= 10 and num <= 20:
    print("am wonis adamianma unda miiros naxevari tableti dresi")

if num >= 30 and num <= 40:
    print("am wonis adamianma unda miiros 1 tableti orjer dresi")

if num >= 45:
    print("am wonis adamianma unda miiros sami tableti orjer dresi")
