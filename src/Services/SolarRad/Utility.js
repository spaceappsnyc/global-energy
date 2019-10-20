const lowRads = 'Poor'
const medRads = 'Good'
const highRads = 'Very Good'

export function convertSolarRads (solarRad) {
  return solarRad.outputs.solrad_monthly.map(rad => {
    return radsToCoverageScore(rad)
  })
}

export function radsToCoverageScore (monthlyRads) {

  if (monthlyRads < 2) {
    return lowRads
  } else if (monthlyRads < 4) {
    return medRads
  } else {
     return highRads
  }
}
