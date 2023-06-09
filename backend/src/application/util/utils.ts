class utils {
  hoje() {
    return new Date();
  }

  addDias(qtdeDias: number) {
    return new Date(Date.now() + qtdeDias * 24 * 60 * 60 * 1000);
  }

  moeda(value: number, currency: string, locale: string) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(value);
  }

  upperCase(texto: string) {
    return texto.toUpperCase();
  }

  lowerCase(text: string) {
    return text.toLowerCase();
  }
}

export default new utils();
