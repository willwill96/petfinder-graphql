const breedInformation = async (_, args, { fetchTheDogAPIRoute }) => {
  const results = await fetchTheDogAPIRoute(`breeds/search?q=${args.breed}`)

  if (results.length === 1) {
    return results[0]
  }
  return null
}

export default {
  Query: {
    breedInformation,
  },
}
