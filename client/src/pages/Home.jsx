import {motion, AnimatePresence} from 'framer-motion';
import { useSnapshot} from 'valtio';

import state from '../store/index'

import {
      headContainerAnimation,
      headContentAnimation,
      headTextAnimation,
      slideAnimation
} from '../config/motion';

const Home = () => {

  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                  <motion.header {...slideAnimation('down')}>
                        <img src='./three.js.png' alt='logo' className='w-8 h-8 object-contain'></img>
                  </motion.header>
                  <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div>
                              <h1 className='head-text'>
                                    LETS <br className='x1:block hidden'/> DO IT.
                              </h1>
                        </motion.div>
                        <motion.div>
                              <p className='max-w-md font-normal text-gray-600 text-base'>
                                    <strong>Unleash your Imagination</strong>{" "} and Define Youself
                              </p>
                        </motion.div>
                  </motion.div>
            </motion.section>
      )
      }
    </AnimatePresence>
  )
}

export default Home