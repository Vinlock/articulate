import { Db, MongoClient } from 'mongodb'
import { ModelConfig, MongoConnectionConfig, MongoConnectionMap } from './types'
import Model from './Model'

const connections: MongoConnectionMap = new Map<string, Db>()

export const createConnection = async (config: MongoConnectionConfig): Promise<void> => {
  const client = new MongoClient(config.uri, {
    useUnifiedTopology: config.useUnifiedTopology || true,
  })
  await client.connect()
  const db = client.db(config.databaseName)
  connections.set(config.connectionName, db)
}

export function createCollection<ModelType>(config: ModelConfig<ModelType>): Model<ModelType> {
  return Model.create<ModelType>(config)
}

export default {
  createConnection,
  createCollection,
}
