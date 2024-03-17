import {inject} from 'vue'

export function injectStrict(key, fallback = null){
  const resolved = inject(key, fallback)
  console.log(resolved)
  if(!resolved){
    throw new Error(`Could not resolved ${key.description}`)
  }
  return resolved
}