import reactRefresh from '@vitejs/plugin-react-refresh'

export default {
  plugins: [reactRefresh()],
  server: {
    historyApiFallback: true, // this handles routing
  },
}