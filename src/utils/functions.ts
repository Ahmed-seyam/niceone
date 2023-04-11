export const deleteItemsInObject = (object: any) => {
  for (const key in object)
    delete object[key]

  return object
}
