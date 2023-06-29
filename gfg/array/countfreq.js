function printfrequency(arr, n)
{
 
    // Subtract 1 from every element so that the elements
    // become in range from 0 to n-1
    for (let j = 0; j < n; j++)
        arr[j] = arr[j] - 1;

    // Use every element arr[i] as index and add 'n' to
    // element present at arr[i]%n to keep track of count of
    // occurrences of arr[i]
    for (let i = 0; i < n; i++)
        arr[arr[i] % n] = arr[arr[i] % n] + n;

    // To print counts, simply print the number of times n
    // was added at index corresponding to every element
    for (let i = 0; i < n; i++)
        document.write((i + 1) + " -> " + parseInt(arr[i] / n, 10) + "</br>");
}