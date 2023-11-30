import { useThemeContext } from '../providers/theme-provider'

const ThemedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useThemeContext()

  return <div className={theme}>{children}</div>
}

export default ThemedPage
