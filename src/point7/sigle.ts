class SigleTon {
  public static instance: SigleTon | null =  null
  private constructor() { }
  public static getInstance() {
    if (!this.instance) {
      this.instance = new SigleTon()
    }
    return this.instance
  }
  fn1() { }
  fn2() { }
}

const s = SigleTon.getInstance()
s.fn1()
s.fn2()