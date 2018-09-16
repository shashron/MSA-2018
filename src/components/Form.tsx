import * as React from 'react';

const Form = (props: any) => (
	<form onSubmit={props.getSummoner}>
		<input type="text" name="pokemon number" placeholder="pokemon number..."/>
		<button>Enter a pokemon number</button>
	</form>
);

export default Form;