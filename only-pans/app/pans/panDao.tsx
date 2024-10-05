import PocketBase from 'pocketbase'

const pb = new PocketBase('https://pocketbase.lukaspottner.com')

export interface Pan {
  id: string
  title: string
  description: string
  image: string
}

export async function getPans (): Promise<Pan[]> {
  try {
    const records = await pb.collection('pan').getFullList<Pan>({
      sort: '-created'
    })
    return records.map(
      (record: { id: any; title: any; description: any; image: any }) => ({
        id: record.id,
        title: record.title,
        description: record.description,
        image:
          'https://pocketbase.lukaspottner.com/api/files/igvsz0mt9gq6keg/' +
          record.id +
          '/' +
          record.image
      })
    )
  } catch (error) {
    console.error('Error fetching pans:', error)
    return []
  }
}

export async function getPanById (id: string): Promise<Pan | null> {
  try {
    const record = await pb.collection('pan').getOne<Pan>(id)
    return {
      id: record.id,
      title: record.title,
      description: record.description,
      image:
        'https://pocketbase.lukaspottner.com/api/files/igvsz0mt9gq6keg/oempvaa11mn6xyq/' +
        record.image
    }
  } catch (error) {
    console.error(`Error fetching pan with id ${id}:`, error)
    return null
  }
}
