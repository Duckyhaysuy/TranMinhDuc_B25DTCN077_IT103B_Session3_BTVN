let successCount = 0;
let failCount = 0;

while (true) {
    let continueRequest = prompt("Có yêu cầu gia hạn mới không? (có/không)").toLowerCase();
    if (continueRequest === "không") {
        break;
    }
    if (continueRequest !== "có") {
        console.log("Lựa chọn không hợp lệ!");
        continue;
    }

    let readerName = prompt("Tên bạn đọc:");
    let bookName = prompt("Tên sách:");
    let borrowedDays = Number(prompt("Số ngày đã mượn hiện tại (≥ 1):"));
    let extendDays = Number(prompt("Số ngày muốn gia hạn thêm (≥ 1):"));

    let totalDays = borrowedDays + extendDays;

    if (totalDays > 60) {
        console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
        failCount++;
    } 
    else if (borrowedDays > 45) {
        console.log("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
        failCount++;
    } 
    else if (totalDays <= 30) {
        console.log("Gia hạn thành công");
        successCount++;
    } 
    else {
        console.log("Không được gia hạn");
        failCount++;
    }
}

console.log("----- THỐNG KÊ CA LÀM VIỆC -----");
console.log("Số lần gia hạn thành công:", successCount);
console.log("Số lần gia hạn không thành công:", failCount);
