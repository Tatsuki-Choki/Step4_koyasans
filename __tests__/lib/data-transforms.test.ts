import { calculateAverageGrowth, transformToWeeklyData } from '@/lib/data-transforms'
import type { GrowthData } from '@prisma/client'

describe('data-transforms', () => {
  describe('calculateAverageGrowth', () => {
    it('should calculate average growth correctly', () => {
      const growthData: GrowthData = {
        id: '1',
        studentId: '1',
        date: new Date('2024-01-01'),
        challenge: 70,
        persistence: 80,
        completion: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      const average = calculateAverageGrowth(growthData)
      expect(average).toBe(80)
    })

    it('should return 0 for null input', () => {
      const average = calculateAverageGrowth(null)
      expect(average).toBe(0)
    })
  })

  describe('transformToWeeklyData', () => {
    it('should transform growth data to weekly format', () => {
      const growthData: GrowthData[] = [
        {
          id: '1',
          studentId: '1',
          date: new Date('2024-01-01'),
          challenge: 50,
          persistence: 60,
          completion: 70,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2',
          studentId: '1',
          date: new Date('2024-01-02'),
          challenge: 60,
          persistence: 70,
          completion: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]

      const weeklyData = transformToWeeklyData(growthData)
      expect(weeklyData).toHaveLength(1)
      expect(weeklyData[0].challenge).toBe(55)
      expect(weeklyData[0].persistence).toBe(65)
      expect(weeklyData[0].completion).toBe(75)
    })

    it('should return empty array for empty input', () => {
      const weeklyData = transformToWeeklyData([])
      expect(weeklyData).toHaveLength(0)
    })
  })
})

