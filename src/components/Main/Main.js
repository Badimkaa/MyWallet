import Categories from './Categories/Categories'
import Finance from './Finance/Finance'
import { MainWrapper, VerticalLine } from './Style'

const Main = () => {
    return (
        <MainWrapper as='main' justify='space-between'>
            <Categories />
            <VerticalLine />
            <Finance />
        </MainWrapper>
    )
}

export default Main