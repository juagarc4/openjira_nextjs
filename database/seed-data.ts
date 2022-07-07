interface SeedData {
  entries: SeedEntry[]
}
interface SeedEntry {
  description: string
  status: string
  createdAt: Number
}
export const seedData: SeedData = {
  entries: [
    {
      description: 'Pendig: Default task',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'In-Progress: Default task2',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description: 'Finished: Default task2',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
}
