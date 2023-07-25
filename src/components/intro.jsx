import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">August</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Computer Science Student</p>
            <p className="text-sm max-w-xl mb-6 font-bold">Hi! My name is August and starting in September I will be studying Computer Science in Waterloo.
            I started my development journey three years ago developing Lua scripts and moved on to developing .NET applications in C++. For the past year I've been learning Python,
            and right now I'm learning web development. The source code for this website and some of my other projects is on my {""} 
            <a
                href="https://github.com/sjsaug"
                target="_blank"
                className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                rel="noreferrer noopener"
                >
                GitHub
                </a> {""}
            if you'd like to check my work out &#40;although many of my repos are currently private, I'm working on making them public after removing private keys and other sensitive information&#41;.
             </p>
        </div>
    )
}

export default Intro;