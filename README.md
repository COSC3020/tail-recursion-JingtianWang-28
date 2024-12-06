# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

///

The recursive Fibonacci function is called once each time recursively, and the time complexity is O(n)

The non-tail recursive Fibonacci function is called twice each time recursively, and the time complexity is O(n^2). Because there is no tco, the amount of calculation increases exponentially with the increase of n, and it takes up a lot of memory.

In my code, the time complexity of fibhepler is O(1) when judging the condition, the time complexity is O(1) when performing addition, the time complexity is O(1) when calling recursively, and the total time complexity is O(n)

###
source: cosc3015 notes

Plagiarism Statement: “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
