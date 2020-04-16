<template>
  <div>
    <div class="container mx-auto pt-5 px-10">
      <div class="flex my-6 justify-between">
        <nuxt-link to="/" class="text-gray-500 font-bold hover:text-gray-400"
          >FRANG</nuxt-link
        >
        <div class="justify-end">
          <ul class="flex">
            <li class="mr-6">
              <nuxt-link to="/" class="text-gray-500 hover:text-gray-800"
                >Home</nuxt-link
              >
            </li>
            <li class="mr-6">
              <nuxt-link to="/about" class="text-gray-500 hover:text-gray-800"
                >About</nuxt-link
              >
            </li>
            <li class="mr-6">
              <nuxt-link to="/contact" class="text-gray-500 hover:text-gray-800"
                >Contact</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
      <nuxt class="my-6" />
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
