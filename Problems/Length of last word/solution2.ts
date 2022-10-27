var lengthOfLastWord = function (s) {

    let length = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " ") {
            if (length === 0) {
                continue;
            } else {
                return length;
            }
        } else {
            length++;
        }
    }
    return length;
}