import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white">August</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Computer Science Student</p>
            <p className="text-sm max-w-xl mb-6 font-bold">Hi! My name is August and starting in September I will be studying Computer Science in Waterloo.
            I started my development journey three years ago developing Lua scripts and moved on to developing .NET applications in C++. For the past year I've been learning Python,
            and right now I'm interested in web development. You can view the source code for this website along with many of my other projects on my {""} 
            <a
                href="https://github.com/sjsaug"
                target="_blank"
                className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                rel="noreferrer noopener"
                >
                GitHub
                </a> {""}
                
             </p>
        </div>
    )
}

export default Intro;