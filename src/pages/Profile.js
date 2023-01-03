import React from "react";
import Footer from "../component/Footer";
import NavCust from "../component/NavCust";
import { useSelector } from "react-redux";
import moment from "moment";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { profileAction } from "../redux/action/profile";
import { logout } from "../redux/reducers/auth";
import http from "../helpers/http";
import YupPassword from "yup-password";

YupPassword(Yup);

const EditProfileSchema = Yup.object().shape({
  nickName: Yup.string().required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
});

const EditPasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Required"),
  newPassword: Yup.string().required("Required"),
  confirmNewPassword: Yup.string().oneOf(
    [Yup.ref("newPassword"), null],
    "Password does not match"
  ),
});

const Profile = () => {
	const { user } = useSelector((state) => state.profile);
	return (
		<>
			<NavCust />
			<main className="relative">
				<img
					className="absolute z-[-1] w-[100%] h-[100%]"
					src={require("../assets/images/bg-coffee.jpg")}
					alt=""
				/>
				<div className="px-[10%] py-[5%]">
					<div>
						<h3 className="text-white text-[30px] font-bold font-sans mb-[20px]">
							User Profile
						</h3>
						<div>
							<section className="flex gap-5 mb-[30px]">
								<div className="border-b-[10px] border-[#e9d8a6] w-[30%] bg-white rounded-[8px] p-5 text-center">
									{user?.picture ? (
										<img
											src={process.env.REACT_APP_IMG_URL + user?.picture}
											alt="ProfilePicture"
											className="w-[33%] h-[50%] rounded-full mx-auto mb-2 object-cover"
										/>
									) : (
										<img
											src={require("../assets/images/avatar.png")}
											alt="ProfilePicture"
											className="w-[33%] h-[50%] rounded-full mx-auto mb-2 object-cover"
										/>
									)}
									<h4 className="text-[20px] font-bold">{user?.nickName}</h4>
									<p className="text-[13px] mb-[30px]">{user?.email}</p>
									<span className="text-[18px]">Never Ordered</span>
								</div>
								<div className="border-b-[10px] border-[#e9d8a6] w-[70%] bg-white rounded-[8px] p-5">
									<h3 className="text-[25px] text-[#4F5665] font-bold tracking-[1px]">
										Contacts
									</h3>
									<main className="grid grid-cols-2 mt-[30px]">
										<div className="mb-[30px]">
											<span className="text-[18px] text-[#aeaeae] font-semibold block mb-2">
												Email adress :
											</span>
											<input
												type="email"
												name="email"
												defaultValue={user?.email}
												className="w-[90%] outline-none border-b-[1px] border-black text-[18px] font-semibold"
											/>
										</div>
										<div className="mb-[30px]">
											<span className="text-[18px] text-[#aeaeae] font-semibold block mb-2">
												Mobile Number :
											</span>
											<input
												type="number"
												name="phoneNumber"
												defaultValue={user?.phoneNumber}
												className="w-[90%] outline-none border-b-[1px] border-black text-[18px] font-semibold"
											/>
										</div>
										<div className="mb-[30px]">
											<span className="text-[18px] text-[#aeaeae] font-semibold block mb-2">
												Delivery adress :
											</span>
											<textarea
												type="text"
												name="Address"
												defaultValue={user?.address}
												rows="1"
												cols="5"
												className="w-[90%] outline-none border-b-[1px] border-black text-[18px] font-semibold"
											/>
										</div>
									</main>
								</div>
							</section>
							<section className="flex gap-5">
								<div className="border-b-[10px] border-[#e9d8a6] w-[70%] bg-white rounded-[8px] p-5">
									<h3 className="text-[25px] text-[#4F5665] font-bold tracking-[1px]">
										Details
									</h3>
									<main className="flex mt-[30px]">
										<section className="w-[60%]">
											<div className="mb-[30px]">
												<span className="text-[18px] text-[#aeaeae] font-semibold block mb-2">
													Display Name :
												</span>
												<input
													type="text"
													name="nickName"
													defaultValue={user?.nickName}
													className="w-[90%] outline-none border-b-[1px] border-black text-[18px] font-semibold"
												/>
											</div>
											<div className="mb-[30px]">
												<span className="text-[18px] text-[#aeaeae] font-semibold block mb-2">
													First Name :
												</span>
												<input
													type="text"
													name="firstName"
													defaultValue={user?.firstName}
													className="w-[90%] outline-none border-b-[1px] border-black text-[18px] font-semibold"
												/>
											</div>
											<div className="mb-[30px]">
												<span className="text-[18px] text-[#aeaeae] font-semibold block mb-2">
													Last Name:
												</span>
												<input
													type="text"
													name="lastName"
													defaultValue={user?.lastName}
													className="w-[90%] outline-none border-b-[1px] border-black text-[18px] font-semibold"
												/>
											</div>
										</section>
										<section className="w-[40%]">
											<div className="mb-[30px]">
												<span className="text-[18px] text-[#aeaeae] font-semibold block mb-2">
													Date of Birth:
												</span>
												<input
													type="date"
													name="birthdate"
													defaultValue={moment(user?.birthdate).format(
														"YYYY-MM-DD"
													)}
													className="w-[90%] outline-none border-b-[1px] border-black text-[18px] font-semibold"
												/>
											</div>
											<div className="w-[50%]">
												<div className="flex items-center">
													<label className="label cursor-pointer">
														<input
															type="radio"
															name="gender"
															className="radio checked:bg-[#8b5e34]"
															value="Male"
														/>
														<span className="label-text text-[18px] ml-[20px] text-[#8b5e34] font-semibold">
															Male
														</span>
													</label>
												</div>
												<div className="flex items-center">
													<label className="label cursor-pointer">
														<input
															type="radio"
															name="gender"
															className="radio checked:bg-[#8b5e34]"
															value="Female"
														/>
														<span className="label-text text-[18px] ml-[20px] text-[#8b5e34] font-semibold">
															Female
														</span>
													</label>
												</div>
											</div>
										</section>
									</main>
								</div>
								<div className="flex flex-col items-center justify-start gap-5">
									<h3 className="font-bold text-white text-[20px] text-center">
										Do you want to save the change?
									</h3>
									<button className="btn btn-block btn-accent">
										Save Change
									</button>
									<button className="btn btn-block btn-warning">Cancel</button>
									<div className="flex-1" />
									<button className="btn btn-block flex justify-start">
										Edit Password
									</button>
									<button className="btn btn-block btn-error flex justify-start">
										Log out
									</button>
								</div>
							</section>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Profile;
