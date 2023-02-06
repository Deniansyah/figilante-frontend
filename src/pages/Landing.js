import React from 'react'
import Star from '../assets/logo/star.svg'
import { User, Heart, MapPin, Check, ArrowLeft, ArrowRight } from "react-feather";
import Footer from '../component/Footer'
import Navbar from '../component/Navbar';
import NavCust from '../component/NavCust';
import NavAdmin from '../component/NavAdmin';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Landing = () => {
  const token = useSelector((state) => state?.auth?.token)
  const admin = useSelector((state) => state?.profile?.user?.isAdmin)
  return (
    <div>
      {/* Navbar Landing */}
      {!token? <Navbar home='true'/> : admin === 'true' ? <NavAdmin home='true'/> : <NavCust home='true'/> }
      {/* Header Landing */}
      <header className="hero h-[80vh] justify-start md:px-20  bg-[url('../images/bg-landing.png')]">
        <div className="hero-content text-left text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Start Your Day with Coffee and Good Meals
            </h1>
            <p className="mb-5">
              We provide high quality beans, good taste, and healthy meals made
              by love just for you. Start your day with us for a bigger smile!
            </p>
            <button className="btn btn-warning px-10 font-bold capitalize">
              Get Started
            </button>
          </div>
        </div>
      </header>
      {/* Info Panel */}
      <div className="flex justify-center mt-[-60px] md:px-20 ">
        <div className="flex  bg-white md:w-4/5 lg:w-4/5 w-[95%] rounded-lg py-8 md:px-10 md:gap-10 lg:px-20 lg:gap-20 px-5 justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="bg-[#FFBA33] rounded-full p-3">
              <User className="text-2xl text-[#6A4029]" />
            </div>
            <div>
              <p className="font-bold text-xl">90+</p>
              <p className="text-sm text-gray-400 font-bold">Staff</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#FFBA33] rounded-full p-3">
              <MapPin className="text-2xl text-[#6A4029]" />
            </div>
            <div>
              <p className="font-bold text-xl">30+</p>
              <p className="text-sm text-gray-400 font-bold">Store</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#FFBA33] rounded-full p-3">
              <Heart className="text-2xl text-[#6A4029]" />
            </div>
            <div>
              <p className="font-bold text-xl">800+</p>
              <p className="text-sm text-gray-400 font-bold">Customers</p>
            </div>
          </div>
        </div>
      </div>
      {/* Superiority */}
      <section className="flex flex-col md:flex-row lg:flex-row mt-20 px-5 md:px-20">
        <div className="basis-0 md:basis-1/2 lg:basis-1/2">
          <img
            src={require("../assets/images/team-work-landing.png")}
            alt="team-work"
          />
        </div>
        <div className="basis-0 md:basis-1/2 lg:basis-1/2 pl-10 flex flex-col gap-5">
          <h1 className="text-4xl font-bold">
            We Provide Good Coffee and Healthy Meals
          </h1>
          <p className="text-md text-[#001219] font-semibold">
            You can explore the menu that we provide with fun and have their own
            taste and make your day better.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-green-700 rounded-full p-1">
                <Check className="text-white p-1" />
              </div>
              <p className="text-sm text-gray-500 font-semibold">High quality beans</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-700 rounded-full p-1">
                <Check className="text-white p-1" />
              </div>
              <p className="text-sm text-gray-500 font-semibold">
                Healthy meals, you can request the ingredients
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-700 rounded-full p-1">
                <Check className="text-white p-1" />
              </div>
              <p className="text-sm text-gray-500 font-semibold">
                Chat with our staff to get better experience for ordering
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-700 rounded-full p-1">
                <Check className="text-white p-1" />
              </div>
              <p className="text-sm text-gray-500 font-semibold">
                Free member card with a minimum purchase of IDR 200.000.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Favorite */}
      <section className="px-5 md:px-20 flex flex-col items-center justify-center mt-20">
        <h1 className="text-4xl font-bold text-center md:text-left lg:text-left mb-5">
          Here is People’s Favorite
        </h1>
        <p className="text-gray-500 text-sm text-center md:text-left lg:text-left">
          Let’s choose and have a bit taste of poeple’s favorite. It might be
          yours too!
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row gap-24 md:gap-3 lg:gap-3 mt-24 md:mt-32 lg:mt-32">
          <div className="flex flex-col justify-center items-center px-10 rounded-md border relative">
            <div className="absolute top-[-64px]">
              <img
                className="rounded-full drop-shadow-2xl"
                src={require("../assets/images/food-landing-1.png")}
                alt="es-krim"
              />
            </div>
            <div className="text-center pt-20">
              <h3 className="font-bold">Hazelnut Latte</h3>
            </div>
            <div className="flex flex-col grow gap-5 my-8">
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600 font-semibold">HazelnutSyrup</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600 font-semibold">Wanilla Whipped Cream</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600 font-semibold">Ice / Hot</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600 font-semibold">Sliced Banana on Top</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-10">
              <h1 className="text-2xl font-bold text-center">IDR 25.000</h1>
              <button className="btn btn-outline btn-warning rounded-full w-36 font-bold capitalize text-[#6A4029]">
                Order Now
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-10 rounded-md border relative">
            <div className="absolute top-[-64px]">
              <img
                className="rounded-full drop-shadow-2xl"
                src={require("../assets/images/food-landing-2.png")}
                alt="cake"
              />
            </div>
            <div className="text-center pt-20">
              <h3 className="font-bold">Pinky Promise</h3>
            </div>
            <div className="flex flex-col grow gap-5 my-8">
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600 font-semibold">1 Shot of Coffee</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600 font-semibold">Vanilla Whipped Cream</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600 font-semibold">Chocolate Biscuits</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600 font-semibold">Strawberry Syrup</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600 font-semibold">
                  Sliced strawberry on Top
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-10">
              <h1 className="text-2xl font-bold text-center">IDR 30.000</h1>
              <button className="btn btn-outline btn-warning rounded-full w-36 font-bold capitalize text-[#6A4029]">
                Select
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-10 border-[#6A4029] rounded-md border relative">
            <div className="absolute top-[-64px]">
              <img
                className="rounded-full drop-shadow-2xl"
                src={require("../assets/images/foof-landing-3.png")}
                alt="chicken"
              />
            </div>
            <div className="text-center pt-20">
              <h3 className="font-bold">Chicken Wings</h3>
            </div>
            <div className="flex flex-col grow gap-5 my-8">
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600 font-semibold">Wings</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600 font-semibold">Drum Sticks</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600 font-semibold">Mayonaise and Lemon</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600 font-semibold">Hot Fried</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600 font-semibold">Secret Recipe</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600 font-semibold">
                  Buy 1 Get 1 only for Dine in
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-10">
              <h1 className="text-2xl font-bold text-center">IDR 40.000</h1>
              <button className="btn btn-warning rounded-full w-36 font-bold capitalize text-[#6A4029]">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Map */}
      <section className="px-5 md:px-20 flex flex-col justify-center items-center mt-20">
        <h1 className="text-3xl font-bold md:w-[350px] text-center">
          Visit Our Store in the Spot on the Map Below
        </h1>
        <p className="mt-10 mb-20 text-gray-500 md:w-[500px] text-center">
          See our store in every city on the spot and spen your good day there.
          See you soon!
        </p>
        <div>
          <img src={require("../assets/images/Global.png")} alt="map" />
        </div>
      </section>
      {/* Our Partner */}
      <section className="px-5 md:px-20 mt-20 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold md:w-[350px] text-center">
          Our Partner
        </h1>
        <div className="flex flex-wrap justify-center mt-10 gap-10">
          <img
            className="w-[170px] h-[40px]"
            src={require("../assets/images/netflix.png")}
            alt="netflix"
          />
          <img
            className="w-[170px] h-[40px]"
            src={require("../assets/images/reddit.png")}
            alt="reddit"
          />
          <img
            className="w-[170px] h-[40px]"
            src={require("../assets/images/amazon.png")}
            alt="amazon"
          />
          <img
            className="w-[170px] h-[40px]"
            src={require("../assets/images/discord.png")}
            alt="discord"
          />
          <img
            className="w-[170px] h-[40px]"
            src={require("../assets/images/spotify.png")}
            alt="spotify"
          />
        </div>
      </section>
      {/* Testimoni */}
      <section className="md:px-20 mt-20">
        <div className="text-center w-full flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold md:w-[350px] lg:w-[350px]">
            Loved by Thousands of Happy Customer
          </h1>
          <p className="mt-5 mb-10 text-gray-500 md:w-[500px] lg:w-[500px] text-center">
            These are the stories of our customers who have visited us with
            great pleasure.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="border border-[#6A4029] rounded-lg p-7 sm:w-full">
            <div className="flex items-center">
              <img
                src={require("../assets/images/user-testi-1.png")}
                alt="user1"
              />
              <div className="grow ml-5">
                <h4 className="font-bold">Viezh Robert</h4>
                <p className="text-gray-500 text-sm">Warsaw, Poland</p>
              </div>
              <div className="flex gap-2">
                <p className="font-bold">4.5</p>
                <img src={Star} alt="star" />
              </div>
            </div>
            <div className="mt-5 text-sm">
              <p className='font-semibold'>
                “Wow... I am very happy to spend my whole day here. the Wi-fi is
                good, and the coffee and meals tho. I like it here!! Very
                recommended!
              </p>
            </div>
          </div>
          <div className="border rounded-lg p-7 sm:w-full">
            <div className="flex items-center">
              <img
                src={require("../assets/images/user-testi-2.png")}
                alt="user1"
              />
              <div className="grow ml-5">
                <h4 className="font-bold">Yessica Christy</h4>
                <p className="text-gray-500 text-sm">Shanxi, China</p>
              </div>
              <div className="flex gap-2">
                <p className="font-bold">4.5</p>
                <img src={Star} alt="star" />
              </div>
            </div>
            <div className="mt-5 text-sm">
              <p className='font-semibold'>
                “I like it because I like to travel far and still can make my
                day better just by drinking their Hazelnut Latte
              </p>
            </div>
          </div>
          <div className="border rounded-lg p-7 sm:w-full">
            <div className="flex items-center">
              <img
                src={require("../assets/images/user-testi-3.png")}
                alt="user1"
              />
              <div className="grow ml-5">
                <h4 className="font-bold">Kim Young Jou</h4>
                <p className="text-gray-500 text-sm">Seoul, South Korea</p>
              </div>
              <div className="flex gap-2">
                <p className="font-bold">4.5</p>
                <img src={Star} alt="star" />
              </div>
            </div>
            <div className="mt-5 text-sm">
              <p className='font-semibold'>
                “This is very unusual for my taste, I haven’t liked coffee
                before but their coffee is the best! and yup, you have to order
                the chicken wings, the best in town!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-5 mt-10 items-center">
          <div className="grow flex gap-2">
            <div className="w-8 h-3 bg-[#6A4029] rounded-full" />
            <div className="w-3 h-3 bg-gray-300 rounded-full" />
            <div className="w-3 h-3 bg-gray-300 rounded-full" />
            <div className="w-3 h-3 bg-gray-300 rounded-full" />
          </div>
          <div className="flex gap-5">
            <div className="p-3 cursor-pointer border-[#6A4029] border-2 text-[#6A4029] rounded-full">
              <ArrowLeft />
            </div>
            <div className="p-3 cursor-pointer bg-[#6A4029] border-[#6A4029] border-2 text-white rounded-full">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>
      {/* Promo */}
      <section className="md:px-20 px-5 my-20">
        <div className="rounded-md shadow-xl px-16 py-14 flex flex-col md:flex-row lg:flex-row items-center gap-5">
          <div className="grow text-center md:text-left lg:text-left">
            <h1 className="text-3xl font-bold w-60 mb-2">
              Check our promo today!
            </h1>
            <p className='font-semibold'>Let's see the deals and pick yours!</p>
          </div>
          <div>
            <Link to='/product-customer'><button className="btn btn-warning capitalize shadow-xl w-44">See Promo</button></Link>
          </div>
        </div>
      </section>
      {/* Footer Landing */}
      <Footer />
    </div>
  );
};
export default Landing;
