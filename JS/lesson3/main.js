// data types 

// malumot turlari bu malumotlarni xotiraga saqlash uchun kerak.

// malumot turlari ikki turga bolinadi ular primitive va non primitive

// primitive malumot turlari callstack hotiraga saqlanadi va ular 7 ta

//  1: String bu matn malumot turi hisoblanib "" , '', ``, shu qo'shtirnoq (quote) lar ichida kelgan har qanday malumot string yani matn malumot turi hisoblanadi.
let soz = "salom"
let soz2 = 'salom'
let soz3 = `salom`


// 2: number : 2ni 53-chi darajasini - 1chi sigacha bolgan har qanday intiger yoki float raqamlarni ozi ichiga oladi

let number = 34
let number2 = 39.9

// intiger 2,48,64 -> butun sonlar bular intigerlar hisoblanadi.
// float 2.95, 3.776 ->  bular qoldiqli sonlar hisoblanadi

//3: bigInt bu raqamlar ohirida n harfi bor harflar yani 2ni 53-chi dan katta bolgan sonlar hisoblanadi

let katta_son = 3932177867821n

// 4: symbol bu hech qachon birinchi qiymat ikkinchisiga mos bomaydigan qiymat hisoblanib

let data = "salom"
let data2 = Symbol("salom") 
// ikkisi tekshirilganida har doim false qiymat qaytadigan malumot turi hisoblanib uni ishlatish odatda tavsiya etilmaydi sababi bu bizga bir hil korinishdagi ikki hil qiymatni ham qaytarib yani double qiymat yaratib qoyishi mumkin.



// 5:  undefined -> bu o'zgaruvchi bor ammo uning qiymati mavjud bolmasa bu malumot yoq degan hatolik chiqarish uchun 
// let salom

// console.log(salom); // qaytadigan qiymat undefined hisoblanadi.

//6 : null buni biz qachonki obj otganimizda korsatib beraman.


// 7: boolean bu bizga umumiy qiymat bor yoki yoqligini yani rost yoki yolgonligini bilidib beradi.

// = -> bu tenglash operatori va chap tarafdagi o'zgaruvchiga o'ng tarafdagi qiymatni har doim tenglab beradi.

// == -> bu esa chap tarafdagi qiymatga o'ng tarafdagi qiymatni solishtirish yoki taqqoslash uchun ishlatiladigan operator hisoblanadi.

// === -> bu ham tekshiruv operator hisoblanib u malumotni ham o'zgaruvchisini ham uning malumot turini ham tekshrib undan rost qiymat qaytsagina true chiqarib beradi.


// !-> not  emasmi (malumot teng emasmi)
let salomlar ="salom"
// console.log(!salomlar); 

// chap taraf< o'ng taraf
// bu yerda chap tarafdan o'ng tarafdagi qiymat kattami degan savol beriladi va true yoki false degan qiymatlar kelib chiqadi.

// > bu esa  o'ng tarafdan chap taraf katta degan manoni bildiradi

// >= katta yoki teng 
// <=  kichik yoki teng


let sonlar = 10
console.log(sonlar++); //
console.log(sonlar--);
console.log(++sonlar)

// muslima : 11 9 11
// kamola : 12 8 12
// isagi: 10 10 12
// muhammadaziz: 12 8 12
// odilbek : 10 9 12
// abror : 11 9 12
// azizbek : 11 8 11
// abdulloh: 10 11 11

console.log(""===""); //

// && -> va 
// || -> yoki
console.log(0 || "");

// &&  bu ikkita qiymat orasidan false qiymatni qidiriadi va bunda ikkita holat bor

//  agar ikkita true duch kelsa ohiridagi qiymatni qaytaradi
// agar ikkita false qiymatga duch kelsa birinchisini qaytaradi



// ||  bu ikkita qiymat orasidan  true qiymatni qidiradi va agar ikkita qiymat orasidan
// ikksi ham false bolsa ohiridagi qiymatni qaytaradi
// agar ikkisi ham true bolsa birinchisini qaytaradi.


console.log(2**53-1);
console.log(11%2 ==0);

