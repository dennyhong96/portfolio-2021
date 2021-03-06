import styled, { css } from "styled-components";

export const StyledAuthor = styled.div`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
	box-shadow: 0 0 0 2px var(--color-highlight);
	margin-right: 2rem;
	overflow: hidden;

	${({ size }) =>
		size === "sm" &&
		css`
			width: 2.75rem;
			height: 2.75rem;
			margin-right: 1rem;
			box-shadow: 0 0 0 1px var(--color-highlight);
		`}

	${({ size }) =>
		size === "lg" &&
		css`
			width: 5rem;
			height: 5rem;
		`}
`;
