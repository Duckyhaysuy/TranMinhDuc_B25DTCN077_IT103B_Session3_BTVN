let totalBorrow = Number(prompt("Hôm nay có bao nhiêu lượt trả sách?"));
let lateCount = 0;

for(let i = 0; i < totalBorrow; i++){
    console.log(`Người mượn thứ: `, (i+1));
    
    let userName = prompt("Nhập tên người mượn: ");
    let nameBook = prompt("Tên sách: ");
    let borrowDay = Number(prompt("Số ngày đã mượn thực tế (người dùng nhập số nguyên từ 1 trở lên): "));
   
    console.log(`Người mượn ${userName} 
                 đã mượn sách ${nameBook}
                 với số ngày ${borrowDay}`);
    
    if(borrowDay <= 14 ){
        console.log("Trả đúng hạn.");
    }else if(borrowDay >= 15 && borrowDay <= 21){
        console.log("Trả muộn nhẹ. Phạt nhắc nhở.");
        lateCount++;
    }else{
        console.log("Quá hạn nghiêm trọng. Cần ghi biên bản phạt");
        lateCount++;
    }
}
console.log("----- THỐNG KÊ -----");
console.log("Tổng số lượt trả sách:", totalBorrow);
console.log("Số lượt trả muộn:", lateCount);