<template>
  <div
    class="rounded rounded-lg bg-white shadow shadow-lg py-10 px-6 lg:min-w-[225px] lg:w-full relative flex items-center space-x-3"
  >
    <slot name="icon"></slot>
    <div>
      <p class="text-app-textlighter">
        <slot name="title"></slot>
      </p>
      <p class="font-bold text-xl text-app-text">
        <slot name="show"></slot>
      </p>
    </div>
  </div>
</template>
