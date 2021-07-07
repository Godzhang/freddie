export type Currency = {
  unit: 'EUR'|'GBP'|"JPY"|"USD"
  value: number
}
type CurrencyType = {
  DEFAULT: Currency['unit'],
  from: (value:number, unit: Currency['unit']) => Currency
}
export let Currency:CurrencyType = {
  DEFAULT: 'USD',
  from(value: number, unit = Currency.DEFAULT):Currency {
    return {unit, value}
  }
}
