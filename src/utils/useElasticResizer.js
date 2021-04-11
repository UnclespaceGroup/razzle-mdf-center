import { useEffect } from 'react'

const useElasticResizer = () => {
  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
}

export const onResize = () => {
  var html = document.documentElement;
  var width = html.clientWidth;
  var baseSize = 10;
  var baseWidth, maxWidth;

  if (width > 1024) {
    baseWidth = 1280;
    maxWidth = 1280;
  } else if (width < 768) {
    baseWidth = 320;
    maxWidth = 768;
  } else {
    baseWidth = 768;
    maxWidth = 1025;
  }

  if (width > baseWidth) {
    width = Math.min(width, maxWidth)
  }

  var curFontSize = Math.round((width / baseWidth * baseSize) * 100) / 100;
  html.style.fontSize = curFontSize + 'px';
}

export default useElasticResizer
