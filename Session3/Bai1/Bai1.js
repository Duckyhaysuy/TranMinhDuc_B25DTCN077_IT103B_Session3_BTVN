let totalBorrow = Number(prompt("Hôm nay có bao nhiêu lượt mượn sách?"));

for (let i = 0; i < totalBorrow; i++) {
    console.log("Lượt mượn thứ " + (i + 1));
    
    let borrowName = prompt("Nhập tên người mượn:");
    let nameBook = prompt("Tên sách:");
    let borrowDay = Number(prompt("Số ngày mượn (từ 1 đến 30 ngày):"));

    console.log(
        `Người mượn: ${borrowName}\n
         Đã mượn sách: ${nameBook}\n
         Với số ngày mượn là: ${borrowDay}`
    );

    if (borrowDay > 14) {
        console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)!");
    } else {
        console.log("Mượn thành công!");
    }
}
console.log("Tổng số lượt mượn trong ngày là: " + totalBorrow);
