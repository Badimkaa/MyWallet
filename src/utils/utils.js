import styled from 'styled-components'
const Flex = styled.div`
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
margin: ${props => props.margin || '0'};
`
export default Flex

export const SectionWrapper = styled(Flex)`
width:50%;
margin: 0 auto;
`

export const SectionTitle = styled.p`
font-size:26px;
font-weight:bold;
`
export const Wrapper = styled(Flex)`
height:500px;
flex-direction:column;
align-items:center;
`
