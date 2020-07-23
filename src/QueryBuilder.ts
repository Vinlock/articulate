import Collection from './Collection'

class QueryBuilder {
  private collectionName: string

  constructor(collectionName: string) {
    this.collectionName = collectionName
  }

  public all(): Promise<Collection> {

  }
}

export default QueryBuilder
