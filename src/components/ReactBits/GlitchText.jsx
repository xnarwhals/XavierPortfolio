import './GlitchText.scss'

const GlitchText = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = '',
}) => {
  const inlineStyles = {
    '--after-duration': `${speed * 3}s`,
    '--before-duration': `${speed * 2}s`,
    '--after-shadow': enableShadows ? '-5px 0 red' : 'none',
    '--before-shadow': enableShadows ? '5px 0 cyan' : 'none',
  }

  const modeClass = enableOnHover ? 'glitch-text--hover' : 'glitch-text--always'
  const combinedClasses = `glitch-text ${modeClass} ${className}`.trim()

  return (
    <div style={inlineStyles} data-text={children} className={combinedClasses}>
      {children}
    </div>
  )
}

export default GlitchText
