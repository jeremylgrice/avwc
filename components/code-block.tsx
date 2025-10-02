import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type Props = {
  language?: string
  children: string
}

const CodeBlock = ({ language = 'javascript', children }: Props) => {
  // Custom theme that matches your grey-blue design
  const customStyle = {
    ...atomDark,
    'pre[class*="language-"]': {
      ...atomDark['pre[class*="language-"]'],
      background: '#1e293b', // surface-800
      border: '1px solid #475569', // surface-600
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem 0',
      fontSize: '14px',
      lineHeight: '1.5',
    },
    'code[class*="language-"]': {
      ...atomDark['code[class*="language-"]'],
      background: 'transparent',
      color: '#f1f5f9', // surface-100
      fontSize: '14px',
      fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
    }
  }

  return (
    <SyntaxHighlighter
      language={language}
      style={customStyle}
      showLineNumbers={true}
      wrapLines={true}
      customStyle={{
        background: '#1e293b',
        border: '1px solid #475569',
        borderRadius: '8px',
        padding: '1rem',
        margin: '1rem 0',
        fontSize: '14px',
        lineHeight: '1.5',
      }}
    >
      {children}
    </SyntaxHighlighter>
  )
}

export default CodeBlock