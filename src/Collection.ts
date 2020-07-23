class Collection<T> {
  protected items: T[]

  constructor(items: T[]) {
    this.items = items
  }

  [Symbol.iterator](): T[] {
    return this.items
  }

  public forEach(iteratorFunc: (item: T) => void): void {
    for (const item of this.items) {
      iteratorFunc(item)
    }
  }
}

export default Collection
