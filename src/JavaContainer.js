import React from 'react'
import Content1 from './Components/Content1'
import Content2 from './Components/Content2'
import Header2 from './Components/Header2'
/*  */
function JavaContainer() {
  return (
    <div>
    <Header2 title={"Java"}/>
      <Content1 head={'Introduction'}
      main={'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA),[17] meaning that compiled Java code can run on all platforms that support Java without the need to recompile.[18] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) '}/>
      <Content2 head={`1.Print "Hello World"`}
        main={`In Java, System.out.println() is one of the most used statements. We use it to print the argument passed to it and display it on the screen, but you might not know a lot more than that about it. In this article, we’ll understand Java System.out.println() in detail, so as a programmer.`}
        source={'/java1.png'} />

      <Content2 head={`2.Datatype in Java`}
        main={`In Java, a data type is a classification of types of data that determines the possible values and operations that can be performed on that data.
        There are two categories of data types in Java: primitive data types and reference data types.`}
        source={'/java2.png'} />
      <Content2 head={`3.Taking user Value`}
        main={`The Scanner class is a part of the java.util package, and it provides methods for reading input from the console, a file, or other sources.

               To use the Scanner class, you need to first import it in your program:`}
        source={'/java3.png'} />

      <Content2 head={`4.String in java`}
        main={`In Java, a String is a reference data type that represents a sequence of characters. Strings are immutable, which means that once a String object is created, you cannot change its value.`}
        source={'/java4.png'} />
      <Content2 head={`5.If-Else`}
        main={`In Java, you can use the if statement to execute a block of code conditionally. Here's an 
               You can also use an if-else statement to execute one block of code if the condition is true and another block of code if the condition is false. Here's an example:`}
        source={'/java5.png'} />

      <Content2 head={`6.Switch-Case`}
        main={`The switch statement in Java allows you to execute a block of code based on the value of a variable.
               It's important to note that each case block must end with a break statement. This will exit the switch statement and prevent the code in the following case blocks from being executed.`}
        source={'/java6.png'} />

      <Content2 head={`7.Loops`}
        main={`In Java, you can use loops to execute a block of code multiple times. There are three types of loops in Java: for, while, and do-while.`}
        source={'/java7.png'} />
      <Content2 head={`8.Array`}
        main={`In Java, an array is a collection of elements of the same data type. You can create an array by using the new operator and specifying the data type and size of the array. Here's an example of creating an array of integers with size 10:`}
        source={'/java8.png'} />
      <Content2 head={`9.Multi-dimension Array`}
        main={`A multidimensional array in Java is an array of arrays. You can create a two-dimensional array by using the following syntax:`}
        source={'/java9.png'} />
       

<Content2 head={`10.Methods in Java`}
               main={`In Java, a method is a block of code that performs a specific task. You can define a method by using the following syntax:`} 
            source={'/java10.png'}/>

<Content2 head={`11.Recursion`}
               main={`In Java, recursion is a technique where a method calls itself to solve a problem. Here's an example of a recursive method that calculates the factorial of a number:`} 
            source={'/java11.png'}/>
            <Content2 head={``}
               main={``} 
            source={'/java12.png'}/>

          
            <Content2 head={``}
               main={``} 
            source={'/java13.png'}/>
            <Content2 head={``}
               main={``} 
            source={'/java14.png'}/>
            <Content2 head={``}
               main={``} 
            source={'/java15.png'}/>
            <Content2 head={``}
               main={``} 
            source={'/java16.png'}/>
            <Content2 head={``}
               main={``} 
            source={'//java17.png'}/>
            <Content2 head={``}
               main={``} 
            source={'/java18.png'}/>
            <Content2 head={``}
               main={``} 
            source={'/java19.png'}/>
            <Content2 head={``}
               main={``} 
            source={'/java20.png'}/>
            <Content2 head={``}
               main={``} 
            source={'/java21.png'}/>
            <Content2 head={``}
               main={``} 
            source={'/java22.png'}/>
            <Content2 head={``}
               main={``} 
            source={'/java23.png'}/>
            <Content2 head={``}
               main={``} 
            source={'/java24.png'}/>
            <Content2 head={``}
               main={``} 
            source={'/java25.png'}/>
            <Content2 head={``}
               main={``} 
            source={'/java26.png'}/>
            <Content2 head={``}
               main={``} 
            source={'/java27.png'}/>






    </div>



  )
}

export default JavaContainer