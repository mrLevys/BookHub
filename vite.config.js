import { resolve } from 'path'
import inject from '@rollup/plugin-inject'

export default {
  root: resolve(__dirname, 'src'),
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}