import { Db } from 'mongodb'

export interface ModelConfig<ModelType> {
  // Model Name
  modelName: string

  // Collection Name - Auto-generated if blank
  collectionName?: string

  // Include the createdAt and updatedAt timestamps
  // Default is false, though if you set it to an object you can rename them.
  timestamps?: boolean | ModelTimestampsConfig

  // By default all models will use the default database connection.
  // If you would like to specify a different connection for the model use this property.
  connection?: string

  attributes?: ModelAttributes<ModelType>
}

export type ModelAttributes<ModelType> = {
  [attribute in keyof ModelType]: ModelAttributeConfig<ModelType[attribute], ModelType>
}

export interface ModelTimestampsConfig {
  createdAt?: boolean | string
  updatedAt?: boolean | string
}

export type ModelAttributeDefaultFunction<AttributeType, ModelType> = (doc: ModelType) => AttributeType

export interface ModelAttributeConfig<AttributeType, ModelType> {
  default?: AttributeType | ModelAttributeDefaultFunction<AttributeType, ModelType>
}

export type Document<ModelType> = ModelType & {}

export type DocumentWithTimestamps<ModelType> = Document<ModelType> & {
  createdAt: Date
  updatedAt: Date
}

export type DocumentWithUpdatedAt<ModelType> = Document<ModelType> & {
  updatedAt: Date
}

export type DocumentWithCreatedAt<ModelType> = Document<ModelType> & {
  createdAt: Date
}

export type MongoConnectionMap = Map<string, Db>

export interface MongoConnectionConfig {
  connectionName?: string
  databaseName: string
  uri: string
  // Use Unified Topology Defaults: true
  useUnifiedTopology?: boolean
}
