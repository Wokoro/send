import styled from 'styled-components';

export default function InAppNav() {
    return (
        <Wrapper>
            <HeadingHolder>
                <h4>New Booking</h4>
                <p>Fill in the information below to get a quote or create new booking </p>
            </HeadingHolder>
        </Wrapper>
    );
}

var Wrapper = styled.div`
    display: flex;
    margin: 2em 0;
`;

var HeadingHolder = styled.div`
    p{
        margin: 0;
        padding: 0;
        font-size: 0.9em;
        color: #929292;
    }
    h4{
        margin: 0;
    }
`;
