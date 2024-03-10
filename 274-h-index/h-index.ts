function hIndex(citations: number[]): number {
    citations = citations.sort((x, y) => y - x);
    let len = citations.length;

    for (let i = 0; i < len; i++) {
        if (citations[i] < i + 1) {
            return i;
        }
    }
    return len;
};