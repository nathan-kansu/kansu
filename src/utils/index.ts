import { WindowLocation } from 'reach__router'

const getPageNav = (location: WindowLocation | undefined, urls: string[]) => {
  if (location && location.pathname) {
    const currentIndex = urls.findIndex(
      (url: string) => url === location.pathname
    )
    const lastIndex = urls.length - 1
    const nextPage =
      currentIndex === lastIndex ? undefined : urls[currentIndex + 1]
    const prevPage = currentIndex === 0 ? undefined : urls[currentIndex - 1]

    return { nextPage, prevPage }
  }
}

export default getPageNav
