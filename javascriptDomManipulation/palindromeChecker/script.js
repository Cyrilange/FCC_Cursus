const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");


const clearString = (str) => {
    let result = "";
    for (let char of str) {
        if ((char >= 'a' && char <= 'z') || 
            (char >= 'A' && char <= 'Z') || 
            (char >= '0' && char <= '9')) { 
            result += char;
        }
    }
    return result.toLowerCase();
};


const isPalindrome = (str) => {
    str = clearString(str);
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false
        }
    }
    return true;
}
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkBtn.click();
    }
});

checkBtn.addEventListener("click", () => {
    const str = input.value.trim();
    if (str.length === 0) {
        alert("Please input a value");
        return;
    }
    if (isPalindrome(str)) {
        result.innerHTML = `${str} is a palindrome`;
        result.style.color = "#4f94d9";
    } else {
        result.innerHTML  = `${str} is not a palindrome`;
        result.style.color = "red";
    }
});
