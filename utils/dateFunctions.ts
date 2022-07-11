import { formatDistanceToNow } from 'date-fns'
// import { de } from 'date-fns/locale'

export const getFormatDistanceToNow = (date: number) => {
  const fromNow = formatDistanceToNow(date /*{ locale: de }*/)

  return fromNow
}
