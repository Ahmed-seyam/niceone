import NProgress from 'nprogress'
import { type UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    
    router.afterEach(() => {
      NProgress.done()
    })
  }
}
