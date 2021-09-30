export const useStats = team => {
  const convertToNanToNumber = number => {
    return isNaN(number) ? 0 : number
  }
  const skills = {
    combat: 0,
    durability: 0,
    speed: 0,
    strength: 0,
    power: 0,
    intelligence: 0
  }
  let height = 0
  let howManyHaveHeight = 0
  let weight = 0
  let howManyHaveWeight = 0

  team?.map(el => {
    height = height + convertToNanToNumber(parseInt(el.appearance.height[1]))
    if (convertToNanToNumber(parseInt(el.appearance.weight[1])) !== 0) {
      howManyHaveHeight++
    }
    weight = weight + convertToNanToNumber(parseInt(el.appearance.weight[1]))
    if (convertToNanToNumber(parseInt(el.appearance.weight[1])) !== 0) {
      howManyHaveWeight++
    }

    skills.combat =
      skills.combat + convertToNanToNumber(parseInt(el.powerstats.combat))
    skills.durability =
      skills.durability +
      convertToNanToNumber(parseInt(el.powerstats.durability))
    skills.speed =
      skills.speed + convertToNanToNumber(parseInt(el.powerstats.speed))
    skills.strength =
      skills.strength + convertToNanToNumber(parseInt(el.powerstats.strength))
    skills.power =
      skills.power + convertToNanToNumber(parseInt(el.powerstats.power))
    skills.intelligence =
      skills.intelligence +
      convertToNanToNumber(parseInt(el.powerstats.intelligence))
    return 0
  })
  height = height / howManyHaveHeight

  const asArray = Object.entries(skills)
  const filtered = asArray.filter(
    ([key, value]) => value === Math.max(...Object.values(skills))
  )

  const getStatMajor = () => {
    return filtered
  }
  return {
    getStatMajor,
    skills,
    height,
    weight
  }
}
