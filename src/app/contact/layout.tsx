import React from 'react'
import type { Metadata } from 'next'

interface LayoutProps {
    children: React.ReactNode;
  }

export const metadata: Metadata = {
    title: 'Batuhan Karaahmetoglu Blog | İletişim'
  }

const layout: React.FunctionComponent<LayoutProps> = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default layout