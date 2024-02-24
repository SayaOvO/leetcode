function isValid(s: string): boolean {
    const stack = [];
    const paren = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let ch of s) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch)
        } else {
            const top = stack.pop();
            if (ch !== paren[top]) {
                stack.push(top);
                stack.push(ch)
            } 
        }
    }
    return stack.length === 0;
    
};