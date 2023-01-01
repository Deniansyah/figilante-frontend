import React from 'react'
import { Link } from 'react-router-dom'
import NavLogo from '../assets/logo/coffee.svg'
import Facebook from '../assets/logo/facebook.svg'
import Twitter from '../assets/logo/twiter.svg'
import Instagram from '../assets/logo/instagram.svg'
import Star from '../assets/logo/star.svg'
import { User, Heart, MapPin, Check, ArrowLeft, ArrowRight } from "react-feather"; 

const Landing = () => {
  return (
    <div>
      {/* Navbar Landing */}
      <nav className="navbar bg-base-100 py-5 px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="flex-none lg:hidden">
              <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/" className="text-[#6A4029] font-bold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/">Product</Link>
              </li>
              <li>
                <Link to="/">Your Cart</Link>
              </li>
              <li>
                <Link to="/">History</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl gap-2">
            <img src={NavLogo} alt="logo" />
            <p className="font-bold">Coffe Shop</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="text-[#6A4029] font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/">Product</Link>
            </li>
            <li>
              <Link to="/">Your Cart</Link>
            </li>
            <li>
              <Link to="/">History</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Link to="/" className="btn btn-ghost rounded-full font-bold capitalize">
            Login
          </Link>
          <Link to="/" className="btn btn-warning rounded-full w-32 capitalize">
            Sign Up
          </Link>
        </div>
      </nav>
      {/* Header Landing */}
      <header className="hero h-[80vh] justify-start px-20  bg-[url('../images/bg-landing.png')]">
        <div className="hero-content text-left text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Start Your Day with Coffee and Good Meals</h1>
            <p className="mb-5">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
            <button className="btn btn-warning px-10 font-bold capitalize">Get Started</button>
          </div>
        </div>
      </header>
      {/* Info Panel */}
      <div className="flex justify-center mt-[-60px]">
        <div className="flex bg-white w-4/5 rounded-lg py-8 px-20 gap-20 justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="bg-[#FFBA33] rounded-full p-3">
              <User className="text-2xl text-[#6A4029]" />
            </div>
            <div>
              <p className="font-bold text-xl">90+</p>
              <p className="text-sm text-gray-400">Staff</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#FFBA33] rounded-full p-3">
              <MapPin className="text-2xl text-[#6A4029]" />
            </div>
            <div>
              <p className="font-bold text-xl">30+</p>
              <p className="text-sm text-gray-400">Store</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#FFBA33] rounded-full p-3">
              <Heart className="text-2xl text-[#6A4029]" />
            </div>
            <div>
              <p className="font-bold text-xl">800+</p>
              <p className="text-sm text-gray-400">Customers</p>
            </div>
          </div>
        </div>
      </div>
      {/* Superiority */}
      <section className="flex mt-20 px-20">
        <div className="basis-1/2">
          <img src={require("../assets/images/team-work-landing.png")} alt="team-work" />
        </div>
        <div className="basis-1/2 pl-10 flex flex-col gap-5">
          <h1 className="text-4xl font-bold">We Provide Good Coffee and Healthy Meals</h1>
          <p className="text-sm text-gray-500">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-green-700 rounded-full p-1">
                <Check className="text-white p-1" />
              </div>
              <p className="text-sm text-gray-500">High quality beans</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-700 rounded-full p-1">
                <Check className="text-white p-1" />
              </div>
              <p className="text-sm text-gray-500">Healthy meals, you can request the ingredients</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-700 rounded-full p-1">
                <Check className="text-white p-1" />
              </div>
              <p className="text-sm text-gray-500">Chat with our staff to get better experience for ordering</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-700 rounded-full p-1">
                <Check className="text-white p-1" />
              </div>
              <p className="text-sm text-gray-500">Free member card with a minimum purchase of IDR 200.000.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Favorite */}
      <section className="px-20 flex flex-col items-center justify-center mt-20">
        <h1 className="text-4xl font-bold">Here is People’s Favorite</h1>
        <p className="text-gray-500 text-sm">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
        <div className="flex gap-3 mt-40">
          <div className="flex flex-col justify-center items-center px-10 rounded-md border relative">
            <div className="absolute top-[-64px]">
              <img className="rounded-full drop-shadow-2xl" src={require("../assets/images/food-landing-1.png")} alt="es-krim" />
            </div>
            <div className="text-center pt-20">
              <h3 className="font-bold">Hazelnut Latte</h3>
            </div>
            <div className="flex flex-col grow gap-5 my-8">
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600">HazelnutSyrup</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600">Wanilla Whipped Cream</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600">Ice / Hot</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600">Sliced Banana on Top</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-10">
              <h1 className="text-2xl font-bold text-center">IDR 25.000</h1>
              <button className="btn btn-outline btn-warning rounded-full w-36 font-bold capitalize text-[#6A4029]">Order Now</button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-10 rounded-md border relative">
            <div className="absolute top-[-64px]">
              <img className="rounded-full drop-shadow-2xl" src={require("../assets/images/food-landing-2.png")} alt="cake" />
            </div>
            <div className="text-center pt-20">
              <h3 className="font-bold">Pinky Promise</h3>
            </div>
            <div className="flex flex-col grow gap-5 my-8">
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600">1 Shot of Coffee</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600">Vanilla Whipped Cream</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600">Chocolate Biscuits</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600">Strawberry Syrup</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600">Sliced strawberry on Top</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-10">
              <h1 className="text-2xl font-bold text-center">IDR 30.000</h1>
              <button className="btn btn-outline btn-warning rounded-full w-36 font-bold capitalize text-[#6A4029]">Select</button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-10 border-[#6A4029] rounded-md border relative">
            <div className="absolute top-[-64px]">
              <img className="rounded-full drop-shadow-2xl" src={require("../assets/images/foof-landing-3.png")} alt="chicken" />
            </div>
            <div className="text-center pt-20">
              <h3 className="font-bold">Chicken Wings</h3>
            </div>
            <div className="flex flex-col grow gap-5 my-8">
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600">Wings</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600">Drum Sticks</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600">Mayonaise and Lemon</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600">Hot Fried</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600">Secret Recipe</p>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="text-green-600" />
                <p className="text-sm text-gray-600">Buy 1 Get 1 only for Dine in</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-10">
              <h1 className="text-2xl font-bold text-center">IDR 40.000</h1>
              <button className="btn btn-warning rounded-full w-36 font-bold capitalize text-[#6A4029]">Order Now</button>
            </div>
          </div>
        </div>
      </section>
      {/* Map */}
      <section>
        <h1>Visit Our Store in the Spot on the Map Below</h1>
        <p>See our store in every city on the spot and spen your good day there. See you soon!</p>
        <div>
          <img src={require("../assets/images/Global.png")} alt="map" />
        </div>
      </section>
      {/* Our Partner */}
      <section>
        <img src={require("../assets/images/netflix.png")} alt="netflix" />
        <img src={require("../assets/images/reddit.png")} alt="reddit" />
        <img src={require("../assets/images/amazon.png")} alt="amazon" />
        <img src={require("../assets/images/discord.png")} alt="discord" />
        <img src={require("../assets/images/spotify.png")} alt="spotify" />
      </section>
      {/* Testimoni */}
      <section>
        <h1>Loved by Thousands of Happy Customer</h1>
        <p>These are the stories of our customers who have visited us with great pleasure.</p>
        <div>
          <div>
            <div>
              <img src={require("../assets/images/user-testi-1.png")} alt="user1" />
              <div>
                <h4>Viezh Robert</h4>
                <p>Warsaw, Poland</p>
              </div>
              <div>
                <p>4.5</p>
                <img src={Star} alt="star" />
              </div>
            </div>
            <div>
              <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
            </div>
          </div>
          <div>
            <div>
              <img src={require("../assets/images/user-testi-2.png")} alt="user2" />
              <div>
                <h4>Viezh Robert</h4>
                <p>Warsaw, Poland</p>
              </div>
              <div>
                <p>4.5</p>
                <img src={Star} alt="star" />
              </div>
            </div>
            <div>
              <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
            </div>
          </div>
          <div>
            <div>
              <img src={require("../assets/images/user-testi-3.png")} alt="user3" />
              <div>
                <h4>Viezh Robert</h4>
                <p>Warsaw, Poland</p>
              </div>
              <div>
                <p>4.5</p>
                <img src={Star} alt="star" />
              </div>
            </div>
            <div>
              <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div />
            <div />
            <div />
            <div />
          </div>
          <div>
            <div>
              <ArrowLeft />
            </div>
            <div>
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>
      {/* Promo */}
      <section>
        <div>
          <div>
            <h1>Check our promo today!</h1>
            <p>Let's see the deals and pick yours!</p>
          </div>
          <div>
            <button>See Promo</button>
          </div>
        </div>
      </section>
      {/* Footer Landing */}
      <footer>
        <div>
          <div>
            <img src={NavLogo} alt="logo" />
            <h1>Coffee Shop</h1>
          </div>
          <p>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
          <div>
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="twitter" />
            <img src={Instagram} alt="instagram" />
          </div>
          <p>©2020CoffeeStore</p>
        </div>
        <div>
          <div>
            <h4>Product</h4>
            <p>Download</p>
            <p>Pricing</p>
            <p>Locations</p>
            <p>Countries</p>
            <p>Blog</p>
          </div>
          <div>
            <h4>Engage</h4>
            <p>Coffe Shop ?</p>
            <p>FAQ</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Landing
