class utils {
  hoje() {
    return new Date();
  }

  addDias(qtdeDias: number) {
    return new Date(Date.now() + qtdeDias * 24 * 60 * 60 * 1000);
  }
}

export default new utils();
