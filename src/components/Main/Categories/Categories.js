import { SectionTitle, SectionWrapper } from '../../../utils/utils'
import CostsContainer from './Costs/CostsContainer'
import Income from './Income/Income'

const Categories = () => {
    return (
        <SectionWrapper direction='column' align='center'>
            <SectionTitle>Категории</SectionTitle>
            <CostsContainer />
            <Income></Income>
        </SectionWrapper>
    )
}

export default Categories