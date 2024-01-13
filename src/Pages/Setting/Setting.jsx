import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import Swal from 'sweetalert2'

const Setting = () => {
	const { user } = useContext(AuthContext);
	const [data, setData] = useState([]);
	// State variables for input values
	useEffect(() => {
		fetch(`https://colorful-vest-foal.cyclic.app/api/v1/user/users/email/${user.email}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		})
			.then(res => res.json())
			.then(data => {
				setData(data);
				setLastName(data.lastName);
				setFirstName(data.firstName);
				setEmail(data.email);
				setRollNumber(data.rollNumber);
				setDepartment(data.department);
				setIntroduction(data.introduction);

			})
			.catch(error => {
				console.error('Error fetching user data:', error);
			});
	}, [user.email]);




	const [firstName, setFirstName] = useState('Md. Jahangir');
	const [lastName, setLastName] = useState('Alam');
	const [email, setEmail] = useState('vc@ruet.ac.bd');
	const [rollNumber, setRollNumber] = useState('19XXXXX');
	const [department, setDepartment] = useState('CSE');
	const [introduction, setIntroduction] = useState(
		'Leverage agile frameworks to provide a robust synopsis...'
	);

	// Function to handle changes in input fields
	const handleInputChange = (event, setStateFunction) => {
		setStateFunction(event.target.value);
	};

	// Function to log the state values when "Save Changes" button is clicked
	const handleSaveChanges = () => {
		// Assuming you have user data in the state
		const updatedUserData = {
			firstName,
			lastName,
			email,
			rollNumber,
			department,
			introduction,
		};

		// Assuming you have the user's ID (replace 'userId' with the actual user ID)
		const userId = data._id;

		fetch(`https://colorful-vest-foal.cyclic.app/api/v1/user/users/${userId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedUserData),
		})
			.then(res => res.json())
			.then(data => {
				console.log('User updated successfully:', data);
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Your work has been saved",
					showConfirmButton: false,
					timer: 1500
				});
			})
			.catch(error => {
				console.error('Error updating user:', error);
			});
	};


	return (
		<div>
			<div className="dashboard-content-container" data-simplebar>
				<div className="dashboard-content-inner" >


					<div className="dashboard-headline">
						<h3>Settings</h3>


						<nav id="breadcrumbs" className="dark">
							<ul>
								<li><a href="/">Home</a></li>
								<li><a href="#">Dashboard</a></li>
								<li>Settings</li>
							</ul>
						</nav>
					</div>

					<div className="row">


						<div className="col-xl-12">
							<div className="dashboard-box margin-top-0">


								<div className="headline">
									<h3><i className="icon-material-outline-account-circle"></i> My Account</h3>
								</div>

								<div className="content with-padding padding-bottom-0">

									<div className="row">

										<div className="col-auto">
											<div className="avatar-wrapper" data-tippy-placement="bottom" title="Change Avatar">
												<img className="profile-pic" src="images/user-avatar-small-01.jpg" alt="" />
												<div className="upload-button"></div>
												<input className="file-upload" type="file" accept="image/*" />
											</div>
										</div>

										<div className="col">
											<div className="row">

												<div className="col-xl-6">
													<div className="submit-field">
														<h5>First Name</h5>
														<input
															type="text"
															className="with-border"
															value={firstName}
															onChange={(e) => handleInputChange(e, setFirstName)}
														/>
													</div>
												</div>

												<div className="col-xl-6">
													<div className="submit-field">
														<h5>Last Name</h5>
														<input
															type="text"
															className="with-border"
															value={lastName}
															onChange={(e) => handleInputChange(e, setLastName)}
														/>
													</div>
												</div>



												<div className="col-xl-6">
													<div className="submit-field">
														<h5>Email</h5>
														<input
															disabled
															type="text"
															className="with-border"
															value={email}
															onChange={(e) => handleInputChange(e, setEmail)}
														/>
													</div>
												</div>

											</div>
										</div>
									</div>

								</div>
							</div>
						</div>


						<div className="col-xl-12">
							<div className="dashboard-box">


								<div className="headline">
									<h3><i className="icon-material-outline-face"></i> My Profile</h3>
								</div>

								<div className="content">
									<ul className="fields-ul">
										<li>
											<div className="row">
												<div className="col-xl-6">
													<div className="submit-field">
														<h5>Roll Number</h5>
														<input
															type="text"
															className="with-border"
															value={rollNumber}
															onChange={(e) => handleInputChange(e, setRollNumber)}
														/>
													</div>
												</div>

												<div className="col-xl-6">
													<div className="submit-field">
														<h5>Department</h5>
														<select data-size="7" title="Select Your Department" data-live-search="true"
															value={department}
															onChange={(e) => handleInputChange(e, setDepartment)}>
															<option value="CSE">Computer Science and Engineering (CSE)</option>
															<option value="EEE">Electrical and Electronics Engineering (EEE)</option>
															<option value="ECE">Electrical and Computer Engineering (ECE)</option>
															<option value="ETE">Electrical and Telecommunication Engineering (ETE)</option>
															<option value="ME">Mechanical Engineering (ME)</option>
															<option value="CE">Civil Engineering (CE)</option>
															<option value="GCE">Glass and Ceramics Engineering (GCE)</option>
															<option value="MSE">Material Science and Engineering (MSE)</option>
															<option value="MTE">Mechatronics Engineering (MTE)</option>
															<option value="BECM">BECM (BECM)</option>
															<option value="CFPE">CFPE (CFPE)</option>
															<option value="IPE">IPE (IPE)</option>
															<option value="Arch">Architecture (Arch)</option>
														</select>
													</div>
												</div>

												<div className="col-xl-12">
													<div className="submit-field">
														<h5>Introduce Yourself</h5>
														<textarea
															cols="30"
															rows="5"
															className="with-border"
															value={introduction}
															onChange={(e) => handleInputChange(e, setIntroduction)}
														></textarea>
													</div>
												</div>

											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>



						<div className="col-xl-12">
							<a href="#" className="button ripple-effect big margin-top-30" onClick={handleSaveChanges}>
								Save Changes
							</a>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default Setting;