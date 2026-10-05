export const isTodo = (value: string): boolean => value.trimStart().startsWith('TODO:') || value.trim() === 'TODO'
