import { formatDate, formatDateISO, getDateString } from '@/lib/date-utils'

describe('date-utils', () => {
  describe('formatDate', () => {
    it('should format date string correctly', () => {
      const result = formatDate('2024-01-15')
      expect(result).toBe('2024年1月15日')
    })

    it('should format Date object correctly', () => {
      const date = new Date('2024-01-15')
      const result = formatDate(date)
      expect(result).toBe('2024年1月15日')
    })
  })

  describe('formatDateISO', () => {
    it('should format date to ISO string', () => {
      const date = new Date('2024-01-15')
      const result = formatDateISO(date)
      expect(result).toBe('2024-01-15')
    })
  })

  describe('getDateString', () => {
    it('should return string as-is for string input', () => {
      const result = getDateString('2024-01-15')
      expect(result).toBe('2024-01-15')
    })

    it('should convert Date to ISO string', () => {
      const date = new Date('2024-01-15')
      const result = getDateString(date)
      expect(result).toBe('2024-01-15')
    })
  })
})

