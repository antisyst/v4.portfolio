import styled from 'styled-components';
import { memo } from 'react';

const EllipseInt = styled.div `
    position: fixed;
    z-index: -1;
    background: var(--var-color-component-primary);
    filter: blur(150px);
    top: 0;
    left: 0;
    width: 350px;
    height: 350px;
animation: EllipseAnim 40s ease 0s infinite normal forwards;

@keyframes EllipseAnim {
	0% {
		top: 0;
        left: 0;
        width: 100px;
        height: 100px;
	}

	10% {
		top: 10vh;
        left: 18vh;
        width: 520px;
        height: 520px;
	}

	20% {
		top: 16vh;
        left: 22vh;
        width: 370px;
        height: 370px;
	}

    30% {
        top: 40vh;
        left: 58vh;
        width: 660px;
        height: 660px;
	}

    40% {
        top: 68vh;
        left: 80vh;
        width: 380px;
        height: 380px;
	}

    50% {
        top: 80vh;
        left: 44vh;
        width: 570px;
        height: 570px;
	}

    60% {
        top: 24vh;
        left: 90vh;
        width: 760px;
        height: 760px;
	}

    70% {
        top: 78vh;
        left: 34vh;
        width: 350px;
        height: 350px;
	}

    80% {
        top: 35vh;
        left: 10vh;
        width: 840px;
        height: 840px;
	}

    90% {
        top: 44vh;
        left: 67vh;
        width: 360px;
        height: 360px;
	}

    100% {
        top: 80vh;
        left: 19vh;
        width: 610px;
        height: 610px;
	}
}
`

const Ellipse =  memo(() => {
    return(
    <EllipseInt></EllipseInt>
    )
});

export default Ellipse;