import { ref } from 'vue'
import type { Ref } from 'vue'

export function useRemoveSpecialCharacters(s: string) {
  const str: Ref<string> = ref(s)
  str.value = str.value.replace('á', 'a')
  str.value = str.value.replace('é', 'e')
  str.value = str.value.replace('í', 'i')
  str.value = str.value.replace('ó', 'o')
  str.value = str.value.replace('ú', 'u')
  return str.value
}
