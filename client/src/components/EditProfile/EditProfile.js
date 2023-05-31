import React, { useState } from 'react';
import { Button, InputField } from '..';
import '../EditProfile/EditProfile.styles.css';
import { useForm } from 'react-hook-form';

const EditProfilePopup = (props) => {
	const { formValues, setFormValues } = props;

	const [avatar, setAvatar] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};
	const formData = () => {
		props.setTrigger(false);
	};
	return props.trigger ? (
		<div className="profile">
			<div className="profile-inner">
				<div className="profile-button-close">
					<div className="">
						<span className="edit-profile-title">Edit Profile</span>
					</div>

					<Button
						className="close-btn"
						variant="transparent"
						name="Close"
						onClick={() => props.setTrigger(false)}
					/>
				</div>
				<div className="avatar-container">
					<label htmlFor="avatar-input">
						<img
							src={avatar || '/Images/shani.jpg'}
							alt="avatar"
						/>
					</label>
					<input
						id="avatar-input"
						type="file"
						accept="image/*"
						onChange={(event) =>
							setAvatar(URL.createObjectURL(event.target.files[0]))
						}
					/>
				</div>
				<div className="profile-input-list">
					<InputField
						label="Name"
						id="name"
						type="text"
						name="name"
						handleChange={handleChange}
					/>
					<InputField
						label="Location"
						id="location"
						type="text"
						name="location"
						handleChange={handleChange}
					/>
					<InputField
						label="Social Media"
						id="socialMedia"
						type="text"
						name="socialMedia"
						handleChange={handleChange}
					/>
					<InputField
						label="Bio"
						id="bio"
						type="text"
						name="bio"
						handleChange={handleChange}
					/>
				</div>
				<div className="profile-save-button">
					<Button
						variant="blue"
						name="Save"
						onClick={(e) => {
							handleSubmit(e);
							formData();
						}}
					/>
				</div>
				{props.children}
			</div>
		</div>
	) : (
		''
	);
};

export default EditProfilePopup;
