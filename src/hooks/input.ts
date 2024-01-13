import {ChangeEvent, useState} from 'react';

export interface IReturnInput {
	value: string,
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
export function  useInput(initialValue = ''): IReturnInput {
	const [value, setValue] = useState(initialValue)
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return {
		value,
		onChange
	}
}
