import React from 'react';

import Input from './Input';

function Form({ onSubmit }) {

	return (

		<form  className="signup-form mdc-theme--dark" onSubmit={onSubmit}>


			<Input type="text" name="firstname" placeholder="Имя"/>
			<Input type="text" name="lastname" placeholder="Фамилия"/>
			<Input type="email" name="email" placeholder="Email"/>
			<Input type="password" name="password" placeholder="Пароль"/>
			<button className="mdc-button mdc-button--primary mdc-button--raised" type="submit">Зарегистрироваться </button>
		</form>  
	
	);
}


export default Form;