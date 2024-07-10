import Navbar from './Navbar'
import Homepage from './Homepage'
import Shop from './Shop'
import ProductList from './ProductList'
import Footer from './Footer'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <Homepage/>
        <Shop/>
        <ProductList/>
        <Footer/>
    </div>
  )
}

export default LandingPage
