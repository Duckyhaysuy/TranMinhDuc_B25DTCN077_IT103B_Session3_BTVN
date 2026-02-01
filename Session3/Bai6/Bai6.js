let total = 0;

let serious = 0;
let medium = 0;
let light = 0;
let suggest = 0;
let positive = 0;

let hasNew;
let name;
let cardId;
let type;
let level;
let content;

while (true) {
    hasNew = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)");

    if (hasNew === null || hasNew.toLowerCase() === "không") {
        break;
    }

    if (hasNew.toLowerCase() !== "có") {
        console.log("Nhập không hợp lệ");
        continue;
    }

    name = "";
    while (name.trim() === "") {
        name = prompt("Tên bạn đọc (không được để trống):");
    }

    cardId = prompt("Mã thẻ bạn đọc (có thể để trống):");

    type = Number(prompt("Loại phản hồi:\n1 = Complaint\n2 = Suggestion\n3 = Positive feedback"));

    level = 0;
    if (type === 1) {
        level = Number(prompt("Mức độ:\n1 = Light\n2 = Medium\n3 = Serious"));
    }
    content = prompt("Nội dung ngắn gọn:");
    total++;

    if (type === 1 && level === 3) {
        serious++;
        console.log("Send to manager immediately. Serious complaint.");
    }else if (type === 1 && level === 2) {
        medium++;
        console.log("Recorded. Will be handled today.");
    }else if (type === 1 && level === 1) {
        light++;
        console.log("Handled immediately at desk.");
    }else if (type === 2) {
        suggest++;
        console.log("Suggestion recorded.");
    }else if (type === 3) {
        positive++;
        console.log("Thank you for your positive feedback.");
    }else {
        console.log("Invalid data.");
        total--;
    }
}

console.log("===== END OF SHIFT REPORT =====");
console.log("Total:", total);
console.log("Serious complaints:", serious);
console.log("Medium complaints:", medium);
console.log("Light complaints:", light);
console.log("Suggestions:", suggest);
console.log("Positive feedback:", positive);
