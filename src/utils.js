export function addTotal(country) {
  return {
    ...country,
    total: country.gold + country.silver + country.bronze,
  }
}

export function sortCountries(sortBy) {
  return function sort(a, b) {
    const secondarySortBy = sortBy === 'gold' ? 'silver' : 'gold'

    if (a[sortBy] === b[sortBy]) {
      return b[secondarySortBy] - a[secondarySortBy]
    }

    return b[sortBy] - a[sortBy]
  }
}
