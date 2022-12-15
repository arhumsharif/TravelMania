import React from "react";
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div>
      {/* Landing Page Div */}
            <section className="bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80')]">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
                >
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            <strong className="font-extrabold text-[#28282b] sm:block">
                                Travelmania
                            </strong>
                        </h1>

                        <p className="mt-4 sm:text-xl sm:leading-relaxed">
                            <span className="text-[#FFFFFF]"> Adventure | Explore | Fun</span>
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link
                                className="block w-full rounded bg-[#28282b] px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring sm:w-auto"
                                to="/signup"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>  
      {/*  */}
    </div>
  );
}
