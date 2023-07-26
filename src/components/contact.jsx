import React from "react";
import Title from "./title";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center">
                <form action="https://getform.io/f/b60b0f35-57e5-4f5f-8b2f-9e4c12576ea8"
                method="POST"
                className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contact</Title>
                    <input
                        type="hidden" 
                        name="_gotcha" 
                    /> {/*For protection against spam bots*/}
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        cols={30}
                        rows={10}
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <button type="submit"
                    class="bg-gradient-to-r from-blue-500 to-gray-500 hover:bg-sky-500 drop-shadow-md text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white "
                    >
                        Work With Me
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;