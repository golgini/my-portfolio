const isTodo = (value) => value.trimStart().startsWith('TODO:') || value.trim() === 'TODO'

if (!isTodo('TODO: hidden field') || !isTodo('TODO') || isTodo('confirmed value')) {
  throw new Error('isTodo check failed')
}
