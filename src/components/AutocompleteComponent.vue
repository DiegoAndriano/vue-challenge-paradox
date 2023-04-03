<script setup lang='ts'>
import { ref, computed, defineProps } from 'vue'
import type { Ref } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot
} from '@headlessui/vue'
import IconCheck from './icons/IconCheck.vue'
import IconChevronUpDown from './icons/IconChevronUpDown.vue'

const props = defineProps(['list', 'selected'])

const list: Ref = ref(props.list)
const selected: Ref<string> = ref(props.selected)

let query = ref('')

let filteredList = computed(() =>
  query.value === ''
    ? list.value
    : list.value.filter((s: string) =>
      s
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.value.toLowerCase().replace(/\s+/g, ''))
    )
)

const erase = () => {
  selected.value = ''
}

defineExpose({ erase })

</script>


<template>
  <Combobox
    @keydown.enter="$emit('update:modelValue', $event.target.value)"
    @input="$emit('update:modelValue', $event.target.value)"
    v-model='selected'>
    <div class='relative mt-1 w-full'>
      <div
        class='relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-300 sm:text-sm'
      >
        <ComboboxInput
          class='w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0'
          :displayValue='(string) => string'
          @change='query = $event.target.value'
        />
        <ComboboxButton
          class='absolute inset-y-0 right-0 flex items-center pr-2'
        >
          <IconChevronUpDown />
        </ComboboxButton>
      </div>
      <TransitionRoot
        leave='transition ease-in duration-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        @after-leave="query = ''"
      >
        <ComboboxOptions
          class='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50'
        >
          <div
            v-if="filteredList.length === 0 && query !== ''"
            class='relative cursor-default select-none py-2 px-4 text-gray-700'
          >
            Sin resultados.
          </div>

          <ComboboxOption
            v-for='string in filteredList'
            as='template'
            :key='string'
            :value='string'
            @click="$emit('update:modelValue', string)"
            v-slot='{ selected, active }'
          >
            <li
              class='relative cursor-default select-none py-2 pl-10 pr-4'
              :class="{
                  'bg-indigo-600 text-white': active,
                  'text-gray-900': !active,
                }"
            >
                <span
                  class='block truncate'
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ string }}
                </span>
              <span
                v-if='selected'
                class='absolute inset-y-0 left-0 flex items-center pl-3'
                :class="{ 'text-white': active, 'text-indigo-600': !active }"
              >
                  <IconCheck aria-hidden='true' />
                </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </TransitionRoot>
    </div>
  </Combobox>
</template>
