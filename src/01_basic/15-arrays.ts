const departments: string[] = ['dev', 'design', 'marketing'];

const nums: number[] = [1, 2, 3];

const strs: string[] = ['a', 'b', 'c'];

const nums2: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
];

const report = departments
    .filter((d: string) => d !== 'dev')
    .map((d: string) => console.log(`${d} - done`));
