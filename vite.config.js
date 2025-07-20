import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {

    // 	Support du routing React (BrowserRouter)
    historyApiFallback: true, 
    watch: {
      // améliore la détection des changements de fichiers, forces Vite à scruter les fichiers à intervalles réguliers, corrige les problèmes de live reload
      usePolling: true,
    },
  },
})
