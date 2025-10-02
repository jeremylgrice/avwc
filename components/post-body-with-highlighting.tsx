import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type Props = {
  content: string
}

const PostBodyWithHighlighting = ({ content }: Props) => {
  // Custom theme that matches your grey-blue design
  const customStyle = {
    ...tomorrow,
    'pre[class*="language-"]': {
      background: '#1e293b', // surface-800
      border: '1px solid #475569', // surface-600
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem 0',
      fontSize: '14px',
      lineHeight: '1.5',
    },
    'code[class*="language-"]': {
      background: 'transparent',
      color: '#f1f5f9', // surface-100
      fontSize: '14px',
      fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
    }
  }

  // Process the HTML content to replace code blocks with syntax highlighted versions
  const processContent = (htmlContent: string) => {
    // For now, just return the content as-is
    // We can enhance this later to parse and replace code blocks
    return htmlContent
  }

  return (
    <div 
      className="max-w-2xl mx-auto"
      dangerouslySetInnerHTML={{ __html: processContent(content) }}
    />
  )
}

export default PostBodyWithHighlighting