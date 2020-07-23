import mongodb from 'mongodb'
import { Document, ModelAttributes, ModelConfig, ModelTimestampsConfig } from './types'

class Model<ModelType> {
  protected modelName: string
  protected attributes: ModelAttributes<ModelType>
  protected collectionName: string
  protected timestamps: boolean | ModelTimestampsConfig
  protected connection: string

  public static create<ModelType>(config: ModelConfig<ModelType>): Model<ModelType> {
    return new Model<ModelType>(config)
  }

  public static all(): void {
    console.log('test')
  }

  protected constructor(config: ModelConfig<ModelType>) {
    this.modelName = config.modelName
    this.attributes = config.attributes
    this.collectionName = config.collectionName
    this.timestamps = config.timestamps
    this.connection = config.connection
  }

  public all(): void {
    Model.all()
  }
}

export default Model

interface Car {
  wheels: boolean
}

const model = Model.create<Car>({
  modelName: 'car',
  attributes: {
    wheels: {
      default: true
    }
  }
})
