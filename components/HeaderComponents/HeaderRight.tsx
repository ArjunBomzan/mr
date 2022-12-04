import MediaQuery from 'react-responsive'

import HeaderTabs from './HeaderTabs'
import HeaderButtonRight from './HeaderButtonRight'
import Hamburger from './Hamburger'

const HeaderRight = () => {

  return (
    <nav className='flex flex-row space-x-8 items-center'>
      {/* <MediaQuery minWidth={1101}> */}
      <HeaderTabs />
      <HeaderButtonRight />
      {/* </MediaQuery>
      <MediaQuery maxWidth={1100}>
        <Hamburger />
        <MediaQuery minWidth={768}>
          <HeaderButtonRight />
        </MediaQuery>
      </MediaQuery> */}
    </nav>
  )
}

export default HeaderRight
