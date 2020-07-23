import { Db, MongoClient } from 'mongodb'
import { createConnection, killAllConnections } from './connection'

describe('Connection', () => {
  afterEach(() => {
    killAllConnections()
  })

  it('should create a db connection', async () => {
    const db = await createConnection({
      connectionName: 'test',
      databaseName: 'retail',
      uri: 'mongodb://localhost:27010',
    })
    return expect(db).toBeInstanceOf(Db)
  })
})