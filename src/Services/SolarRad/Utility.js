
function hourlyOutput (solRad) {
  
  solRad.outputs.solrad_monthly.map(monthOutput => {
    const sum = 0
    sum += monthOutput

    return sum/12
  })
}
