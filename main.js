// for start

// 1-masala
// k va n butun son berilgan. K ni n marta chiqaruvchi dastur tuzing


// function res(k,n) {
//     for (let i = 0; i < n; i++) {
//    console.log(k);
//     }
// }
// res(5,7)


// 2 - masala


// a, b sonlar beilgan. A b dan katta a va b orasidagi butun sonlarni chiqaruvchi dastur tuzing. A va B ni ozi ham chiqsin


// function name(a, b) {
//     if (a > b) {
//         for (let i = b; i <= a; i++) {

//             console.log(i);
//         }
//     }


// }
// name(5, 3)


// 3-masala



// a,b sonlar berilgan a b dan katta a va b orasidagi barcha butun sonlarni kamayish tartibida chiqaring a va b kirmasin

// function name(a, b) {
//     if (a > b) {
//         for (let i = a; i >= b; i--)
//             console.log(i);
//     }
// }

// name(5, 0)


// 4-masala

// 1kg konfet 10000so'm berilgan. 1 kgdan 10 kggacha barchasin narxini chiqaruvchi dastur tuzing



// for (let i = 1; i <= 10; i++) {
//     console.log((i + " kg" + "="), (i * 10000));
// }

// 5-masala

// 1kg konfet 10000so'm. 0,1 kg dan 1 kg gacha bo'lgan konfet narxin toping

// for (let i = 1; i <= 10; i++) {
//         console.log((i/10 + " kg" + "="), (i * 10000));
//     }


// 6-masala
// 1kg konfet 10000so'm. 1,2kg, 1,4, 1,6, 1,8, 2kg konfetlarni narxini toping

// for (let i = 10; i <= 20; i++) {
//     if (i % 2 == 0) {

//         console.log((i/10 + " kg" + "="), (i/10 * 10000));
//     }
// }



// 7-masala
// a,b sonlar berilgan. A dan b gacha barcha butun sonlarni yig'indisin topuvchi dastur yozing


// x = 0
// a = 1
// b = 7
// for (let i = a; i <= b; i++) {
//     x = x + i

// }
// console.log(x);




// 8-masala

// S = 1
// for (let i = 1; i <= 5; i++) {

//     S = S * i
// }

// console.log(S);


// 9-masala


// a,b sonlar berilgan a dan b gacha bo'lgan sonlarni kvadratlarini yig'indisin topuvchi dastur toping



// x = 1
// a = 1
// b = 5
// for (let i = a; i <= b; i++) {

//   x = x * Math.pow(i,2)
// }
// console.log(x);


// 10-masala


// n soni berilgan quydagi yig'indini hisoblang. S = 1/1 + 1/2 + …. + 1/n


// S = 0
// n=10
// for (let i = 1; i <= n; i++) {
//     S = S + 1 / i
// }


// 11-masala
// n = 15;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }

// }

// 12-masala

// n soni berilgan shu sonlarni ichidan juftlarini koruvchi dastur yozing
// n = 15;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }

// }

// 13 masala 

// function chackToTublikka(num) {
//     let m = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             m++;
//         }
//     }
//     return m;
// }

// let n = 20;

// for (let i = 1; i <= n; i++) {
//     if (chackToTublikka(i) > 2) {
//         console.log(i)
//     }
// }


// 14-masala

// n soni berilgan shu sonlarni ichidan jufat va toq sonlarni kvadratlarini chiqaring
// n = 10
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log("juft sonni kvadrati " + i * i);
//     } else {
//         console.log("toq sonni kvadrati " + i * i);
//     }

// }


// 15-masala

// n son berilgan n sonidan kamayish tartibida sonlar chiqarilsin


// n = 10
// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }


// 16-masala

// n = 20
// for (let i = 0; i <= n; i++) {
//     if (i % 5 == 1 || i % 5 == 2 || i % 5 == 3 || i % 5 == 4) {
//         console.log(i);
//     }
//     else{
//         console.log(i);
//     }
// }



// 15-masala

// n = 20
// for (i = n; i >= 0; i--) {
//     console.log(i);
// }


// 17-masala


// s = 1
// n = 5
// for (i = 1; i <= n; i++) {
//     s = s * i
// }
// console.log(s);

// faktaryalni hisoblovchi funkiya


function int(num, nul) {
    p = 1
    for (let i = nul; i <= num; i++) {
        p *= i
    }
    return p
}

// 18-masala
// s = 0
// n = 3
// for (let i = 1; i <= n; i++) {

//     s = s + int(i, 1)
// }
// console.log(s);



// 19-misol

// 1+x+x2/2!+x3/3!+..+xn/n!

// n = 5
// s = 0
// x = 5
// for (i = 1; i <= n; i++) {
//     s = s + x * i / int(i, 1)
// }
// console.log(s);


// 20-misol


// n = 20
// x = 5
// for (i = 1; i <= n; i++) {
//     if (i % x == 0) {
//         console.log(i);
//     }
// }



// 21-misol
// n va x sonlar berilgan quydagi yigindini topuvchi dastur tuzing. 1(1,2,3…x) + 2(1,2,3..x) + .. + n(1,2,3,..x)

// n = 5
// s = 0
// x = 7
// p = 1

// function eks(x) {

//     for (i = 1; i <= x; i++) {
//         p = i
//     }
//     return p
// }
// for (i = 1; i <= n; i++) {
//     s = s + i * eks(i);
// }

// console.log(s);


// for finish


// Mantiqiy amallar (if, else) continuation
// start


// 28-masala


// function murakkab(num) {
//     S = 0
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0)
//             S++
//     }
//     return S
// }

// n = 20

// for (i = 1; i <= n; i++) {
//     if (murakkab(i) > 2) {
//         console.log(i);
//     }
// }


// 29-masala


// function marta(k, n) {
//     for (i = 1; i <= n; i++) {
//         console.log(k);
//     }

// }
// marta("salom",90)


// 30-masala

// function res(a, b) {
//    for (let i = a; i <=b; i++) {

//     console.log(i);
//    }                    
// }
// res(12,16)



// 31-masala

// function res(a, b) {
//     for (i = a; i >= b; i--) {
//         console.log(i);
//     }
// }
// res(18, 10)


// 32-masala

// 1kg konfet 10000so'm berilgan. 1 kgdan 10 kggacha barchasin narxini chiqaruvchi dastur tuzing

// function res(x) {
//     for (i = 1; i <= x; i++){
//       console.log(i*10000);
//     }
// }
// res(10)


// 33-masala

// 1kg konfet 10000so'm. 0,1 kg dan 1 kg gacha bo'lgan konfet narxin toping

// function res(x) {
//     for (i = 1; i <= x; i++){
//         console.log(i*1000);
//     }

// }
// res(10)

// 34-masala

// 1kg konfet 10000so'm. 1,2kg, 1,4, 1,6, 1,8, 2kg konfetlarni narxini toping



// for (i = 12; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i * 1000);
//     }
// }


// 35-masala

// a,b sonlar berilgan. A dan b gacha barcha butun sonlarni yig'indisin topuvchi dastur yozing


// s = 0
// a = 1
// b = 9
// for (i = a; i <= b; i++) {
//     s = s + i
// }
// console.log(s);


// 36-masala

// a,b sonlar berilgan. A dan b gacha barcha butun sonlarni ko'paytmasin topuvchi dastur yozing



// s = 1
// a=1
// b=5
// for (i = a; i <= b; i++) {
//     s = s * i
// }
// console.log(s);



// 37-masala

// a,b sonlar berilgan a dan b gacha bo'lgan sonlarni kvadratlarini yig'indisin topuvchi dastur toping


// s = 0
// a = 1
// b = 5
// for (i = a; i <= b; i++) {
//     s = s + Math.pow(i, 2)
// }
// console.log(s);


// 38-masala

// n soni berilgan quydagi yig'indini hisoblang. S = 1/1 + 1/2 + …. + 1/n
// s = 0
// n=5
// for (i = 1; i <= n; i++) {
//     s = s + 1 / i
// }
// console.log(s);


// 39-masala

// n soni berilgan shu soni ichidan toqlarin ko'ruvchi dastur yozing

// s = 1
// n = 10
// for (i = 1; 1 <= n; i++) {
//     if (i % 2 == 0) {
//         s = s * i
//     }
// }
// console.log(s);


// 40-masala


// n soni berilgan shu sonlarni ichidan juftlarini koruvchi dastur yozing

// s = 1
// n = 10
// for (i = 1; i <= n; i++) {
//     if (i % 2 == 1) {
//         s = s * i
//     }
// }
// console.log(s);

