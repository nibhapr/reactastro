
import { motion } from 'framer-motion'
import { fadeIn} from '../Functions/GlobalAnimations';

const BalanceComponets =() => {

    return(
<motion.section className="overflow-visible block p-0 relative" {...fadeIn}>
<div className="right-0 bottom-[-50px] font-semibold tracking-[-10px] leading-[200px] text-[#fff] text-[200px] font-serif absolute lg:text-[160px] lg:leading-[160px] md:hidden">BOND SIGN</div>
</motion.section>
)
}

export default BalanceComponets