/**
 * Bài 1: 
 * - Đầu vào: Nhập 3 số nguyên a, b, c.
 * - Xử lý:
 *  + Cho a là số nhỏ nhất. => a < b và a < c.
 *  + Nếu c > b => Thứ tự tăng dần là: a < b < b.
 *  + Nếu b > c => Thứ tự tăng dần là: a < c < b.
 *  + Tương tự cho b với c là số nhỏ nhất.
 * 
 * - Đầu ra: xuất kết quả.
 */
function soTangDan(a, b, c) {
    var min;
    if (a < b && a < c) {
        min = a;
    } else if (b < a && b < c) {
        min = b;
    } else if (c < a && c < b) {
        min = c;
    }
    return min;

    // var min = a;
    // if (b<a) {
    //     min = b;
    // } else if (c<a) {
    //     min = c;
    // }
    // return min;
}

document.getElementById("btnTangDan").onclick = function () {
    var a = document.getElementById("a").value * 1;
    var b = document.getElementById("b").value * 1;
    var c = document.getElementById("c").value * 1;
    var result = "";

    var checkMin = soTangDan(a, b, c);
    if (checkMin === a) {
        if (b < c) {
            result = "Thứ tự tăng dần là: " + a + ", " + b + ", " + c;
        } else if (c < b) {
            result = "Thứ tự tăng dần là: " + a + ", " + c + ", " + b;
        }
    } else if (checkMin === b) {
        if (a < c) {
            result = "Thứ tự tăng dần là: " + b + ", " + a + ", " + c;
        } else if (c < a) {
            result = "Thứ tự tăng dần là: " + b + ", " + c + ", " + a;
        }
    } else if (checkMin === c) {
        if (a < b) {
            result = "Thứ tự tăng dần là: " + c + ", " + a + ", " + b;
        } else if (c < a) {
            result = "Thứ tự tăng dần là: " + c + ", " + b + ", " + a;
        }
    }

    document.getElementById("footerTangDan").innerHTML = result;
}

/**
 * Bài 2:
 * - Đầu vào:
 *  + Nhập các thành viên trong gia đình: Bố (B), Mẹ (M), Anh trai (A), Em gái (E)
 * 
 * - Xử lý:
 *  + Giả sử người dùng mặc định là Bố (B) => "Chào bố!"
 *  + Xuất lời chào tương ứng cho các thành viên còn lại.
 * 
 * - Đầu ra:
 *  +Show kết quả.
 */

document.getElementById("btnUser").onclick = function () {
    var userInput = document.getElementById("user").value;
    var result = "";

    switch (userInput) {
        case "B":
            result = "Chào Bố!"
            break;
        case "M":
            result = "Chào Mẹ!"
            break;
        case "A":
            result = "Chào Anh trai!"
            break;
        case "E":
            result = "Chào Em gái!"
            break;
    }

    document.getElementById("footerUser").innerHTML = result;
}

/**
 * Bài 3:
 * - Đầu vào:
 *  + Nhập 3 số nguyên.
 * 
 * - Xử lý:
 *  + Số số chẵn: 0.
 *  + Xét số chia hết cho 2 dư 0 => Số chẵn => Số số chẵn = 1.
 *  + Còn lại => Số lẻ
 * 
 * - Đầu ra: show kết quả bao nhiêu số lẻ, bao nhiêu số chẵn.
 */
document.getElementById("btnChanLe").onclick = function () {
    var a = document.getElementById("so_1").value * 1;
    var b = document.getElementById("so_2").value * 1;
    var c = document.getElementById("so_3").value * 1;
    var count = 0;
    var result = "";

    if (a % 2 === 0) {
        count++;
    }
    if (b % 2 === 0) {
        count++;
    }
    if (c % 2 === 0) {
        count++;
    }
    result = "Có " + count + " số chẵn và " + (3 - count) + " số lẻ"
    document.getElementById("footerChanLe").innerHTML = result;
}

/**
 * Bài 4
 * - Đầu vao: Nhập 3 cạnh a, b, c của tam giác
 * 
 * - Xử lý:
 *  + a = b hoặc a = c hoặc b = c => Tam giác cân.
 *  + a = b = c => Tam giác đều.
 *  + a*a = b*c + c*c hoặc b*b = a*a + c*c hoặc c*c = a*a + b*b => Tam giác vuông.
 * 
 * - Đầu ra: show kết quả.
 */
document.getElementById("btnTamGiac").onclick = function () {
    function kiemTraTamGiacCan(a, b, c) {
        var result;
        if (a === b || b === c || a === c) {
            result = true;
        } else {
            result = false;
        }
        return result;
    }

    function kiemTraTamGiacVuong(a, b, c) {
        var result;
        if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
            result = true;
        } else {
            result = false;
        }
        return result;
    }

    var a = document.getElementById("canh1").value * 1;
    var b = document.getElementById("canh2").value * 1;
    var c = document.getElementById("canh3").value * 1;
    var ketQua = "";

    var isStatus1 = kiemTraTamGiacCan(a, b, c);
    var isStatus2 = kiemTraTamGiacVuong(a, b, c);
    
    if (isStatus1 && isStatus2) {
        ketQua = "Tam giác vuông cân";
    } else if (isStatus1) {
        if (a === b && b === c) {
            ketQua = "Tam giác đều";
        } else {
            ketQua = "Tam giác cân";
        }
    } else {
        if (isStatus2) {
            ketQua = "Tam giác vuông";
        } else {
            ketQua = "Tam giác thường";
        }
    }
    document.getElementById("footerTamGiac").innerHTML = ketQua;
}


    // if (a===b || b===c || a===c) {
    //     result = "Tam giác cân";
    // } else if (a===b && b===c) {
    //     result = "Tam giác đều";
    // } else if (a*a === b*b + c*c || b*b === a*a + c*c || c*c === a*a + b*b) {
    //     result = "Tam giác vuông";
    // }

    // document.getElementById("footerTamGiac").innerHTML = result;

