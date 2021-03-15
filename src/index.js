module.exports = function check(str, bracketsConfig) {
   bracketsConfig = [];

    let open = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closed = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (open[char]) {
            bracketsConfig.push(char);
        } else if (closed[char]) {
            if (open[bracketsConfig.pop()] !== char) return false;
        }
    }
    return bracketsConfig.length === 0;
}
