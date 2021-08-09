import styled from 'styled-components'

const Flex = (props) => {
    return <StyledFlex {...props} />
}

const StyledFlex = styled.div`
display: flex;
align-items:${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
margin: ${props => props.justify || 0};
padding: ${props => props.justify || 0};
flex-direction: ${props => props.direction || 'row'};
`


export default Flex